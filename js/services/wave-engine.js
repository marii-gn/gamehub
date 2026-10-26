import { WAVE_CARDS } from "../data/wave.js";

export class WaveEngine {
  constructor() {
    this.peer = null;
    this.conn = null;
    this.isHost = false;
    this.roomId = null;
    
    this.position = 0;
    this.maxPosition = 10;
    this.currentCard = null;
    this.myAnswer = null;
    this.partnerAnswer = null;
    
    this.onStateChange = null;
  }

  generate4DigitCode() {
    return String(Math.floor(1000 + Math.random() * 9000));
  }

  initPeer(customId = null, onReady = null, onError = null) {
    if (this.peer) {
      try { this.peer.destroy(); } catch (e) {}
    }

    const peerId = customId || this.generate4DigitCode();

    // Використовуємо публічні Google STUN сервери для з'єднання між Wi-Fi та LTE/Mobile Data
    this.peer = new Peer(peerId, {
      config: {
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:stun1.l.google.com:19302" },
          { urls: "stun:stun2.l.google.com:19302" }
        ]
      },
      debug: 1
    });

    this.peer.on("open", (openId) => {
      this.roomId = openId;
      if (onReady) onReady(openId);
    });

    this.peer.on("connection", (connection) => {
      this.conn = connection;
      this.setupConnection();
    });

    this.peer.on("error", (err) => {
      console.warn("PeerJS connection error:", err.type, err);
      if (err.type === "unavailable-id" && !customId) {
        // Якщо 4-значний код був зайнятий — пробуємо ще раз з іншим кодом
        setTimeout(() => this.initPeer(null, onReady, onError), 300);
      } else {
        if (onError) onError(err);
      }
    });
  }

  createRoom(onCreated, onError) {
    this.isHost = true;
    this.initPeer(null, (id) => {
      if (onCreated) onCreated(id);
    }, onError);
  }

  joinRoom(roomId, onJoined, onError) {
    this.isHost = false;
    // Клієнт створює свій випадковий peer ID
    this.initPeer(null, () => {
      try {
        this.conn = this.peer.connect(roomId, { reliable: true });
        this.setupConnection();
        if (onJoined) onJoined();
      } catch (e) {
        if (onError) onError(e);
      }
    }, onError);
  }

  setupConnection() {
    if (!this.conn) return;

    this.conn.on("open", () => {
      this.notifyUI("connected");
      
      if (this.isHost) {
        // Невелика затримка для завершення рукостискання PeerJS
        setTimeout(() => {
          this.nextRound();
        }, 400);
      }
    });

    this.conn.on("data", (data) => {
      this.handleIncomingData(data);
    });

    this.conn.on("close", () => {
      this.notifyUI("disconnected");
    });

    this.conn.on("error", (err) => {
      console.error("Connection error:", err);
    });
  }

  send(data) {
    if (this.conn && this.conn.open) {
      this.conn.send(data);
    }
  }

  handleIncomingData(data) {
    if (data.type === "SYNC_STATE") {
      this.position = data.position;
      this.currentCard = data.currentCard;
      this.myAnswer = null;
      this.partnerAnswer = null;
      this.notifyUI("round_start");
    } else if (data.type === "SUBMIT_ANSWER") {
      this.partnerAnswer = data.answer;
      this.checkRoundResult();
    }
  }

  submitMyAnswer(answer) {
    this.myAnswer = answer.trim().toLowerCase();
    this.send({ type: "SUBMIT_ANSWER", answer: this.myAnswer });
    this.checkRoundResult();
  }

  checkRoundResult() {
    if (this.myAnswer !== null && this.partnerAnswer !== null) {
      const isMatch = this.myAnswer === this.partnerAnswer;

      if (isMatch) {
        this.position = Math.min(this.maxPosition, this.position + 1);
      } else {
        this.position = Math.max(0, this.position - 1);
      }

      this.notifyUI("round_finished", {
        isMatch,
        myAns: this.myAnswer,
        partnerAns: this.partnerAnswer,
        newPos: this.position
      });

      if (this.isHost) {
        setTimeout(() => {
          this.nextRound();
        }, 3200);
      }
    } else {
      this.notifyUI("waiting_partner");
    }
  }

  nextRound() {
    if (!WAVE_CARDS || WAVE_CARDS.length === 0) return;
    const randomCard = WAVE_CARDS[Math.floor(Math.random() * WAVE_CARDS.length)];
    this.currentCard = randomCard;
    this.myAnswer = null;
    this.partnerAnswer = null;

    const state = {
      type: "SYNC_STATE",
      position: this.position,
      currentCard: this.currentCard
    };

    this.send(state);
    this.notifyUI("round_start");
  }

  notifyUI(event, extra = null) {
    if (this.onStateChange) {
      this.onStateChange(event, extra);
    }
  }
}