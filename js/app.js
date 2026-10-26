import { CLOUD_WORDS, MASTER_CATEGORIES } from "./data/categories.js";
import { CONNECTIONS_PUZZLES } from "./data/connections.js";
import { GameEngine } from "./services/game-engine.js";
import { ChainEngine } from "./services/chain-engine.js";
import { ConnectionsEngine } from "./services/connections-engine.js";
import { SemantleEngine } from "./services/semantle-engine.js";
import { WaveEngine } from "./services/wave-engine.js";
import { StorageService } from "./services/storage.js";
import { GameView } from "./ui/view.js";
import { BackgroundAnimation } from "./ui/background.js";
import { ConstellationAnimation } from "./ui/constellation.js";
import { ClusterBgAnimation } from "./ui/cluster-bg.js";
import { ThermalBgAnimation } from "./ui/thermal-bg.js";

class App {
  constructor() {
    this.catEngine = new GameEngine(MASTER_CATEGORIES);
    this.chainEngine = new ChainEngine();
    this.connEngine = new ConnectionsEngine(CONNECTIONS_PUZZLES);
    this.semantleEngine = new SemantleEngine();
    this.waveEngine = new WaveEngine();
    this.view = new GameView();

    try {
      this.bgCloud = new BackgroundAnimation("wordCloud", CLOUD_WORDS, (word) => {
        const catInput = document.getElementById("wordInput");
        if (catInput && !this.view.elements.categoriesScreen?.classList.contains("hidden")) {
          catInput.value = word;
          catInput.focus();
        }
      });
    } catch (e) {}

    try {
      this.bgConstellation = new ConstellationAnimation("constellationBg");
    } catch (e) {}

    try {
      this.bgCluster = new ClusterBgAnimation("clusterBg");
    } catch (e) {}

    try {
      this.bgThermal = new ThermalBgAnimation("thermalBg");
    } catch (e) {}
  }

  init() {
    this.bindNavigationEvents();
    this.bindCategoriesEvents();
    this.bindChainEvents();
    this.bindConnectionsEvents();
    this.bindSemantleEvents();
    this.bindWaveEvents();
    this.initUserSession();
    this.initDragAndDrop();

    try { this.bgCloud?.init(); } catch (e) {}
    try { this.bgConstellation?.init(); } catch (e) {}
    try { this.bgCluster?.init(); } catch (e) {}
    try { this.bgThermal?.init(); } catch (e) {}

    this.openHub();
  }

  initUserSession() {
    try {
      const savedName = StorageService.getUserName();
      if (this.view.elements.userNameInput) {
        this.view.elements.userNameInput.value = savedName;
        this.view.elements.userNameInput.addEventListener("change", (e) => {
          StorageService.setUserName(e.target.value);
        });
      }
    } catch (e) {}
  }

  stopAllBackgrounds() {
    try { this.bgConstellation?.stop(); } catch (e) {}
    try { this.bgThermal?.stop(); } catch (e) {}
    try { this.bgCluster?.setCubesMode(false); } catch (e) {}

    // Ключове виправлення: слова, що літають, активні ЛИШЕ в Таємних Категоріях
    const cloudEl = document.getElementById("wordCloud");
    if (cloudEl) {
      cloudEl.style.display = "none";
    }
  }

  openHub() {
    this.stopAllBackgrounds();
    this.view.showScreen("hub");
    try {
      const stats = StorageService.getStats();
      this.view.renderHubStats(stats);
    } catch (e) {}
  }

  openCategories() {
    this.stopAllBackgrounds();
    // Вмикаємо слова на тлі виключно для Таємних Категорій
    const cloudEl = document.getElementById("wordCloud");
    if (cloudEl) {
      cloudEl.style.display = "block";
    }

    this.view.showScreen("categories");
    this.catEngine.startNewGame();
    this.syncCategoriesUI();
    this.view.hideVaultCategory();
    this.view.resetIntelScreen();
  }

  openChain() {
    this.stopAllBackgrounds();
    this.view.showScreen("chain");
    try { this.bgConstellation?.start(); } catch (e) {}
    this.chainEngine.startNewGame();
    this.view.renderChainBoard(this.chainEngine);
  }

  openConnections() {
    this.stopAllBackgrounds();
    try { this.bgCluster?.setCubesMode(true); } catch (e) {}
    this.view.showScreen("connections");
    this.connEngine.startNewGame();
    this.view.hideConnHint();
    this.view.renderConnectionsBoard(this.connEngine);
  }

  openSemantle() {
    this.stopAllBackgrounds();
    this.view.showScreen("semantle");
    try { this.bgThermal?.start(); } catch (e) {}
    this.semantleEngine.startNewGame();
    this.view.renderSemantleBoard(this.semantleEngine);
    if (this.view.elements.semantleWordInput) {
      this.view.elements.semantleWordInput.value = "";
      this.view.elements.semantleWordInput.focus();
    }
  }

  openWave() {
    this.stopAllBackgrounds();
    this.view.showScreen("wave");
  }

  syncCategoriesUI() {
    const targetPlayer = this.catEngine.getTargetPlayerNumber();
    this.view.renderCategoriesMode(
      this.catEngine.mode,
      this.catEngine.currentPlayer,
      targetPlayer
    );
    this.view.renderHistory(this.catEngine.wordsP1, this.catEngine.wordsP2);
  }

  bindNavigationEvents() {
    document.getElementById("btnNavHub")?.addEventListener("click", () => this.openHub());

    document.querySelectorAll(".nav-game-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const game = tab.dataset.game;
        if (game === "categories") this.openCategories();
        else if (game === "chain") this.openChain();
        else if (game === "connections") this.openConnections();
        else if (game === "semantle") this.openSemantle();
        else if (game === "wave") this.openWave();
      });
    });

    document.getElementById("btnPlayCategories")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.openCategories();
    });
    document.getElementById("btnPlayChain")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.openChain();
    });
    document.getElementById("btnPlayConnections")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.openConnections();
    });
    document.getElementById("btnPlaySemantle")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.openSemantle();
    });
    document.getElementById("btnPlayWave")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.openWave();
    });
  }

  initDragAndDrop() {
    const input = document.getElementById("wordInput");
    if (!input) return;
    input.addEventListener("dragover", (e) => {
      e.preventDefault();
      input.classList.add("drag-over");
    });
    input.addEventListener("dragleave", () => input.classList.remove("drag-over"));
    input.addEventListener("drop", (e) => {
      e.preventDefault();
      input.classList.remove("drag-over");
      const word = e.dataTransfer.getData("text/plain");
      if (word) {
        input.value = word;
        input.focus();
      }
    });
  }

  bindCategoriesEvents() {
    document.getElementById("modeFriendBtn")?.addEventListener("click", () => {
      if (this.catEngine.mode === "friend") return;
      this.catEngine.setMode("friend");
      this.openCategories();
    });

    document.getElementById("modeSoloBtn")?.addEventListener("click", () => {
      if (this.catEngine.mode === "solo") return;
      this.catEngine.setMode("solo");
      this.openCategories();
    });

    const handlePeekStart = (e) => {
      if (this.catEngine.mode === "solo") return;
      if (e.type === "touchstart") e.preventDefault();
      const current = this.catEngine.getCurrentPlayerCategory();
      if (current) this.view.showVaultCategory(`Секретна умова: Гравець ${this.catEngine.currentPlayer}`, current.text);
    };

    const handlePeekEnd = () => {
      this.view.hideVaultCategory();
    };

    const peekBtn = document.getElementById("peekBtn");
    peekBtn?.addEventListener("mousedown", handlePeekStart);
    window.addEventListener("mouseup", handlePeekEnd);
    peekBtn?.addEventListener("touchstart", handlePeekStart);
    window.addEventListener("touchend", handlePeekEnd);

    document.getElementById("nextBtn")?.addEventListener("click", () => {
      if (this.catEngine.mode === "friend") {
        this.catEngine.switchTurn();
        this.view.hideVaultCategory();
        this.view.resetIntelScreen();
        this.syncCategoriesUI();
      }
    });

    document.getElementById("btnHint1")?.addEventListener("click", (e) => {
      e.preventDefault();
      const target = this.catEngine.getTargetCategory();
      if (target?.h1) this.view.setIntelScreen(target.h1);
    });

    document.getElementById("btnHint2")?.addEventListener("click", (e) => {
      e.preventDefault();
      const target = this.catEngine.getTargetCategory();
      if (target?.h2) this.view.setIntelScreen(target.h2);
    });

    const handleManualWord = (isMatch) => {
      const inputEl = document.getElementById("wordInput");
      const text = inputEl ? inputEl.value.trim() : "";
      if (!text) return;
      this.catEngine.addWord(text, isMatch);
      this.catEngine.switchTurn();
      this.view.clearCategoriesInputs();
      this.view.resetIntelScreen();
      this.syncCategoriesUI();
    };

    document.getElementById("btnYes")?.addEventListener("click", (e) => {
      e.preventDefault();
      handleManualWord(true);
    });

    document.getElementById("btnNo")?.addEventListener("click", (e) => {
      e.preventDefault();
      handleManualWord(false);
    });

    const handleBotWord = () => {
      const inputEl = document.getElementById("wordInput");
      const text = inputEl ? inputEl.value.trim().toLowerCase() : "";
      if (!text) return;

      if (this.catEngine.hasWordBeenAsked(text)) {
        this.view.showModal(
          false,
          null,
          () => inputEl.focus(),
          "Слово вже було!",
          `Ви вже перевіряли слово «${text}». Спробуйте інше!`
        );
        return;
      }

      this.catEngine.submitWordToBot(text);
      this.view.clearCategoriesInputs();
      this.syncCategoriesUI();
    };

    document.getElementById("btnAskBot")?.addEventListener("click", (e) => {
      e.preventDefault();
      handleBotWord();
    });

    const handleGuess = () => {
      const guessInput = document.getElementById("guessInput");
      const text = guessInput ? guessInput.value.trim() : "";
      if (!text) return;
      const isWin = this.catEngine.verifyBotGuess(text);

      StorageService.recordCategoriesResult(isWin);

      this.view.showModal(
        isWin,
        isWin ? this.catEngine.p2Category.text : null,
        () => {
          if (isWin) this.openCategories();
        },
        isWin ? "ти молодець, а бот тупий" : "Спробуй ще!",
        isWin
          ? `Гравець ${StorageService.getUserName()} розгадав категорію!`
          : "Умова не розгадана. Продовжуйте пошук слів!"
      );
      if (guessInput) guessInput.value = "";
    };

    document.getElementById("btnSubmitGuess")?.addEventListener("click", (e) => {
      e.preventDefault();
      handleGuess();
    });

    document.getElementById("wordInput")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (this.catEngine.mode === "solo") handleBotWord();
        else handleManualWord(true);
      }
    });

    document.getElementById("guessInput")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleGuess();
      }
    });

    document.getElementById("resetBtn")?.addEventListener("click", () => {
      if (confirm("Скинути поточну сесію та отримати нові категорії?")) {
        this.openCategories();
      }
    });
  }

  bindChainEvents() {
    const track = this.view.elements.chainTrack;
    if (!track) return;

    track.addEventListener("input", (e) => {
      if (e.target && e.target.classList.contains("chain-cell-input")) {
        const input = e.target;
        if (input.value.length === 1) {
          const next = input.nextElementSibling;
          if (next && next.classList.contains("chain-cell-input")) {
            next.focus();
            next.select();
          }
        }
      }
    });

    track.addEventListener("keydown", (e) => {
      if (e.target && e.target.classList.contains("chain-cell-input")) {
        const input = e.target;
        if (e.key === "Backspace") {
          if (input.value === "") {
            const prev = input.previousElementSibling;
            if (prev && prev.classList.contains("chain-cell-input")) {
              prev.focus();
              prev.value = "";
              e.preventDefault();
            }
          }
        } else if (e.key === "Enter") {
          e.preventDefault();
          this.submitChainWordFromCells();
        }
      }
    });

    document.getElementById("btnNextChain")?.addEventListener("click", () => {
      this.openChain();
    });
  }

  submitChainWordFromCells() {
    const row = document.getElementById("activeCellsRow");
    if (!row) return;

    let fullWord = "";
    Array.from(row.children).forEach((child) => {
      if (child.classList.contains("open-letter")) {
        fullWord += child.textContent.trim();
      } else if (child.classList.contains("chain-cell-input")) {
        fullWord += (child.value || "").trim();
      }
    });

    fullWord = fullWord.toLowerCase();
    if (!fullWord) return;

    const result = this.chainEngine.guessWord(fullWord);

    if (result.status === "correct") {
      this.view.setChainFeedback(`Чудово! Слово відгадано (+${result.earned} б.)`, false);
    } else if (result.status === "wrong") {
      this.view.setChainFeedback("Не те слово! Відкрито наступну літеру.", true);
    } else if (result.status === "auto_opened") {
      this.view.setChainFeedback("Літери закінчилися! Слово зараховано як 0 б.", true);
    } else if (result.status === "game_complete") {
      const finalScore = result.totalScore;
      StorageService.recordChainResult(finalScore);

      this.view.showModal(
        true,
        `Рахунок: ${finalScore} / 100 б.`,
        () => {},
        "ти розумничок",
        `Вітаємо, ${StorageService.getUserName()}! Всі ланки ланцюга складено успішно.`
      );
    }

    this.view.renderChainBoard(this.chainEngine);
  }

  bindConnectionsEvents() {
    this.view.elements.connGrid?.addEventListener("click", (e) => {
      const card = e.target.closest(".conn-card");
      if (!card) return;
      const tileId = card.dataset.tileId;
      this.connEngine.toggleSelect(tileId);
      this.view.renderConnectionsBoard(this.connEngine);
    });

    this.view.elements.btnConnShuffle?.addEventListener("click", () => {
      this.connEngine.shuffleRemaining();
      this.view.renderConnectionsBoard(this.connEngine);
    });

    this.view.elements.btnConnHint?.addEventListener("click", () => {
      const hintData = this.connEngine.getGentleHint();
      if (hintData) {
        this.view.showConnHint(hintData.text);
        let hintNotice = `Підказка (${hintData.clicks})`;
        if (hintData.level === 2) hintNotice = "Рівень 2: Відкрито одне ключове слово!";
        else if (hintData.level === 3) hintNotice = "Рівень 3: Відкрито пару ключових слів!";
        else if (hintData.level === 4) hintNotice = "Максимальна підказка: майже повний розв'язок!";

        this.view.setConnFeedback(hintNotice, "warning");
      }
    });

    this.view.elements.btnConnClear?.addEventListener("click", () => {
      this.connEngine.clearSelection();
      this.view.renderConnectionsBoard(this.connEngine);
    });

    this.view.elements.btnConnSubmit?.addEventListener("click", () => {
      const res = this.connEngine.submitSelection();

      if (res.status === "incomplete") {
        this.view.setConnFeedback("Оберіть рівно 4 картки!", "warning");
      } else if (res.status === "already_guessed") {
        this.view.showModal(
          false,
          null,
          () => {},
          "Нєнє, вже обирав!",
          "Цю четвірку ти вже відправляв, вона хибна. Спробу збережено, зміни картки!"
        );
        this.view.setConnFeedback("Цю комбінацію вже тестували!", "warning");
      } else if (res.status === "correct") {
        this.view.setConnFeedback(`Кластер розкрито: ${res.group.title}!`, "success");
        this.view.hideConnHint();
        this.view.renderConnectionsBoard(this.connEngine);
      } else if (res.status === "win") {
        StorageService.recordConnectionsResult(true, 4);

        this.view.showModal(
          true,
          "Код 4x4 зламано безпомилково!",
          () => {
            const allSolved = this.connEngine.getAllSolvedGroups();
            this.view.renderFullConnectionsSolution(allSolved);
          },
          "ти супер, я в тебе не вірила",
          `Вітаємо, ${StorageService.getUserName()}! Усі 4 групи розгадано.`
        );
      } else if (res.status === "wrong") {
        if (res.oneAway) {
          this.view.setConnFeedback("Майже! Одне слово зайве (3 з 4)", "warning");
        } else {
          this.view.setConnFeedback("Помилка зв'язку! -1 спроба", "error");
        }
        this.view.renderConnectionsBoard(this.connEngine);
      } else if (res.status === "lose") {
        StorageService.recordConnectionsResult(false, this.connEngine.solvedGroups.length);

        this.view.showModal(
          false,
          `Зламано груп: ${this.connEngine.solvedGroups.length} з 4`,
          () => {
            const allSolved = this.connEngine.getAllSolvedGroups();
            this.view.renderFullConnectionsSolution(allSolved);
          },
          "Спроби вичерпано!",
          "Пастки спрацювали. Ось повний розв'язок цього коду:"
        );
      }
    });

    this.view.elements.btnNextCode?.addEventListener("click", () => {
      this.openConnections();
    });
  }

  bindSemantleEvents() {
    const handleSemantleGuess = () => {
      const input = this.view.elements.semantleWordInput;
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;

      const res = this.semantleEngine.submitGuess(text);

      if (res.status === "empty") return;

      if (res.status === "already_guessed") {
        this.view.setSemantleFeedback(`Слово «${res.word}» уже було у спробах!`);
        input.value = "";
        return;
      }

      input.value = "";
      input.focus();
      this.view.renderSemantleBoard(this.semantleEngine);

      if (res.status === "win") {
        StorageService.recordSemantleResult(true, this.semantleEngine.guesses.length);
        this.view.showModal(
          true,
          `Секретне слово: ${res.entry.word.toUpperCase()}`,
          () => {},
          "ти супер, я в тебе не вірила",
          `Ви точно визначили семантичний центр за ${this.semantleEngine.guesses.length} спроб!`
        );
      }
    };

    this.view.elements.btnSemantleGuess?.addEventListener("click", handleSemantleGuess);

    this.view.elements.semantleWordInput?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSemantleGuess();
      }
    });

    this.view.elements.btnSemantleHint?.addEventListener("click", () => {
      const hint = this.semantleEngine.getHint();
      if (hint) {
        this.view.setSemantleFeedback(`Орієнтир: слово «${hint.word}» має схожість ${hint.similarity.toFixed(2)}%`);
      }
    });

    this.view.elements.btnSemantleSurrender?.addEventListener("click", () => {
      if (confirm("Здатися та подивитися загадане слово?")) {
        const secret = this.semantleEngine.giveUp();
        StorageService.recordSemantleResult(false, this.semantleEngine.guesses.length);
        this.view.renderSemantleBoard(this.semantleEngine);
        this.view.showModal(
          false,
          `Загадане слово: ${secret.toUpperCase()}`,
          () => {},
          "Слово розкрито!",
          "Спробуйте свої сили в новому раунді!"
        );
      }
    });

    this.view.elements.btnNextSemantleWord?.addEventListener("click", () => {
      this.openSemantle();
    });
  }

  bindWaveEvents() {
    const createBtn = document.getElementById("btnWaveCreateRoom");
    const joinBtn = document.getElementById("btnWaveJoinRoom");
    const submitBtn = document.getElementById("btnWaveSubmitAnswer");

    createBtn?.addEventListener("click", () => {
      this.waveEngine.createRoom((code) => {
        document.getElementById("waveRoomCodeText").textContent = code;
        document.getElementById("waveRoomStatus").textContent = "Очікування другого гравця...";
      });
    });

    joinBtn?.addEventListener("click", () => {
      const code = document.getElementById("waveJoinCodeInput").value.trim();
      if (!code) return;
      this.waveEngine.joinRoom(code, () => {
        document.getElementById("waveRoomCodeText").textContent = code;
        document.getElementById("waveRoomStatus").textContent = "Підключено до кімнати!";
      });
    });

    submitBtn?.addEventListener("click", () => {
      const input = document.getElementById("waveAnswerInput");
      const val = input.value.trim();
      if (!val) return;
      this.waveEngine.submitMyAnswer(val);
      input.value = "";
      submitBtn.disabled = true;
    });

    document.getElementById("waveAnswerInput")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitBtn?.click();
      }
    });

    this.waveEngine.onStateChange = (event, extra) => {
      const lobby = document.getElementById("waveLobbyBox");
      const area = document.getElementById("waveGameplayArea");
      const partnerStatus = document.getElementById("wavePartnerStatus");

      if (event === "connected") {
        lobby.classList.add("hidden");
        area.classList.remove("hidden");
        document.getElementById("waveRoomStatus").textContent = "У РЕЗОНАНСІ ⚡";
        this.renderWaveTrack(this.waveEngine.position);
      }

      if (event === "round_start") {
        document.getElementById("btnWaveSubmitAnswer").disabled = false;
        
        const card = this.waveEngine.currentCard;
        document.getElementById("waveCardCatTag").textContent = card.catName;
        document.getElementById("waveTypeInstruction").textContent = card.typeInstruction || "Синхронізуйте відповідь із партнером!";
        document.getElementById("waveCardPrompt").textContent = card.prompt;
        document.getElementById("waveCardSubtext").textContent = card.hint ? `Підказка: ${card.hint}` : "";
        
        partnerStatus.textContent = "Партнер обмірковує відповідь... 💭";
        this.renderWaveTrack(this.waveEngine.position);
      }

      if (event === "waiting_partner") {
        partnerStatus.textContent = "Ви відповіли! Очікуємо партнера... ⏳";
      }

      if (event === "round_finished") {
        this.renderWaveTrack(extra.newPos);
        if (extra.isMatch) {
          partnerStatus.textContent = `ЗБІГ! 🔥 Обоє відповіли: «${extra.myAns}». Крок уперед!`;
        } else {
          partnerStatus.textContent = `НЕЗБІГ! ❄️ Ви: «${extra.myAns}», Партнер: «${extra.partnerAns}». Відкат назад!`;
        }
      }
    };
  }

  renderWaveTrack(pos) {
    const track = document.getElementById("waveBoardTrack");
    if (!track) return;
    track.innerHTML = "";

    for (let i = 0; i <= 10; i++) {
      const cell = document.createElement("div");
      cell.className = "wave-cell" + (i === 10 ? " finish-cell" : "");

      // Розміщуємо номер або іконку фінішу
      const label = document.createElement("span");
      label.className = "wave-cell-num";
      label.textContent = i === 10 ? "🏁" : i;
      cell.appendChild(label);

      // Якщо це активна позиція команди — малюємо сяючу фішку 
      if (i === pos) {
        cell.classList.add("occupied-cell");
        const pin = document.createElement("div");
        pin.className = "wave-team-pin";
        pin.innerHTML = `<span>👥</span>`;
        cell.appendChild(pin);
      }

      track.appendChild(cell);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});