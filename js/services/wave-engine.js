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

  initPeer(customId = null, onReady = null) {
    // 4-значний числовий ідентифікатор
    const code = customId || String(Math.floor(1000 + Math.random() * 9000));
    this.peer = new Peer(code);

    this.peer.on("open", (openId) => {
      this.roomId = openId;
      if (onReady) onReady(openId);
    });

    this.peer.on("connection", (connection) => {
      this.conn = connection;
      this.setupConnection();
    });

    this.peer.on("error", (err) => {
      console.error("PeerJS error:", err);
      if (err.type === "unavailable-id") {
        // Якщо код зайнятий, пробуємо згенерувати інший
        this.initPeer(null, onReady);
      }
    });
  }

  createRoom(onCreated) {
    this.isHost = true;
    this.initPeer(null, (id) => {
      onCreated(id);
    });
  }

  joinRoom(roomId, onJoined) {
    this.isHost = false;
    this.initPeer(null, () => {
      this.conn = this.peer.connect(roomId);
      this.setupConnection();
      onJoined();
    });
  }

  setupConnection() {
    this.conn.on("open", () => {
      if (this.isHost) {
        this.nextRound();
      }
      this.notifyUI("connected");
    });

    this.conn.on("data", (data) => {
      this.handleIncomingData(data);
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