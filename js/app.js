import { CLOUD_WORDS, MASTER_CATEGORIES } from "./data/categories.js";
import { CONNECTIONS_PUZZLES } from "./data/connections.js";
import { GameEngine } from "./services/game-engine.js";
import { ChainEngine } from "./services/chain-engine.js";
import { ConnectionsEngine } from "./services/connections-engine.js";
import { StorageService } from "./services/storage.js";
import { GameView } from "./ui/view.js";
import { BackgroundAnimation } from "./ui/background.js";
import { ConstellationAnimation } from "./ui/constellation.js";
import { ClusterBgAnimation } from "./ui/cluster-bg.js";

class App {
  constructor() {
    this.catEngine = new GameEngine(MASTER_CATEGORIES);
    this.chainEngine = new ChainEngine();
    this.connEngine = new ConnectionsEngine(CONNECTIONS_PUZZLES);
    this.view = new GameView();

    this.bgCloud = new BackgroundAnimation("wordCloud", CLOUD_WORDS, (word) => {
      const catInput = document.getElementById("wordInput");
      if (catInput && !this.view.elements.categoriesScreen.classList.contains("hidden")) {
        catInput.value = word;
        catInput.focus();
      }
    });

    this.bgConstellation = new ConstellationAnimation("constellationBg");
    this.bgCluster = new ClusterBgAnimation("clusterBg");
  }

  init() {
    this.bgCloud.init();
    this.bgConstellation.init();
    this.bgCluster.init();

    this.initUserSession();
    this.initDragAndDrop();
    this.bindNavigationEvents();
    this.bindCategoriesEvents();
    this.bindChainEvents();
    this.bindConnectionsEvents();

    this.openHub();
  }

  initUserSession() {
    const savedName = StorageService.getUserName();
    if (this.view.elements.userNameInput) {
      this.view.elements.userNameInput.value = savedName;
      this.view.elements.userNameInput.addEventListener("change", (e) => {
        StorageService.setUserName(e.target.value);
      });
    }
  }

  stopAllBackgrounds() {
    this.bgConstellation.stop();
    this.bgCluster.stop();
  }

  openHub() {
    this.stopAllBackgrounds();
    this.view.showScreen("hub");
    const stats = StorageService.getStats();
    this.view.renderHubStats(stats);
  }

  openCategories() {
    this.stopAllBackgrounds();
    this.view.showScreen("categories");
    this.catEngine.startNewGame();
    this.syncCategoriesUI();
    this.view.hideVaultCategory();
    this.view.resetIntelScreen();
  }

  openChain() {
    this.stopAllBackgrounds();
    this.view.showScreen("chain");
    this.bgConstellation.start();
    this.chainEngine.startNewGame();
    this.view.renderChainBoard(this.chainEngine);
  }

  openConnections() {
    this.stopAllBackgrounds();
    this.view.showScreen("connections");
    this.bgCluster.start();
    this.connEngine.startNewGame();
    this.view.hideConnHint();
    this.view.renderConnectionsBoard(this.connEngine);
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
      });
    });

    document.getElementById("btnPlayCategories")?.addEventListener("click", () => this.openCategories());
    document.getElementById("btnPlayChain")?.addEventListener("click", () => this.openChain());
    document.getElementById("btnPlayConnections")?.addEventListener("click", () => this.openConnections());
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

  // --- ТАЄМНІ КАТЕГОРІЇ ---
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
      if (this.catEngine.mode === "solo") return; // Блокуємо будь-яке підглядання в соло
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
        isWin ? "Перемога!" : "Спробуй ще!",
        isWin ? `Гравець ${StorageService.getUserName()} розгадав категорію!` : "Умова не розгадана. Продовжуйте пошук слів!"
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

  // --- ЛАНЦЮГ СЛІВ ---
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
        "ти супер, я в тебе не вірила",
        `Вітаємо, ${StorageService.getUserName()}! Всі словосполучення складено ідеально.`
      );
    }

    this.view.renderChainBoard(this.chainEngine);
  }

  // --- КОД ЧОТИРЬОХ (4x4) ---
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
      const hint = this.connEngine.getGentleHint();
      if (hint) {
        this.view.showConnHint(hint);
        this.view.setConnFeedback("Система проаналізувала один із кластерів", "warning");
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
          `Вітаємо, ${StorageService.getUserName()}! Усі 4 приховані групи знайдено.`
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
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});