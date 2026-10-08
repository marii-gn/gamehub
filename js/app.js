import { CLOUD_WORDS, MASTER_CATEGORIES } from "./data/categories.js";
import { GameEngine } from "./services/game-engine.js";
import { ChainEngine } from "./services/chain-engine.js";
import { StorageService } from "./services/storage.js";
import { GameView } from "./ui/view.js";
import { BackgroundAnimation } from "./ui/background.js";

class App {
  constructor() {
    this.catEngine = new GameEngine(MASTER_CATEGORIES);
    this.chainEngine = new ChainEngine();
    this.view = new GameView();

    this.bg = new BackgroundAnimation("wordCloud", CLOUD_WORDS, (word) => {
      const inputEl = document.getElementById("wordInput");
      if (inputEl) {
        inputEl.value = word;
        inputEl.focus();
      }
    });
  }

  init() {
    this.bg.init();
    this.initUserSession();
    this.initDragAndDrop();
    this.bindNavigationEvents();
    this.bindCategoriesEvents();
    this.bindChainEvents();

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

  openHub() {
    this.view.showScreen("hub");
    const stats = StorageService.getStats();
    this.view.renderHubStats(stats);
  }

  openCategories() {
    this.view.showScreen("categories");
    this.catEngine.startNewGame();
    this.syncCategoriesUI();
    this.view.hideVaultCategory();
    this.view.resetIntelScreen();
  }

  openChain() {
    this.view.showScreen("chain");
    this.chainEngine.startNewGame();
    this.view.renderChainBoard(this.chainEngine);
    this.view.clearChainInput();
  }

  syncCategoriesUI() {
    const targetPlayer = this.catEngine.getTargetPlayerNumber();
    this.view.renderCategoriesMode(
      this.catEngine.mode,
      this.catEngine.currentPlayer,
      targetPlayer,
      this.catEngine.isSoloRevealed
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
      });
    });

    document.getElementById("btnPlayCategories")?.addEventListener("click", () => this.openCategories());
    document.getElementById("btnPlayChain")?.addEventListener("click", () => this.openChain());
  }

  initDragAndDrop() {
    const input = document.getElementById("wordInput");
    if (!input) return;

    input.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
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
      if (e.type === "touchstart") e.preventDefault();
      const current = this.catEngine.getCurrentPlayerCategory();
      if (current) {
        this.view.showVaultCategory(`Секретна умова: Гравець ${this.catEngine.currentPlayer}`, current.text);
      }
    };

    const handlePeekEnd = () => {
      if (this.catEngine.mode !== "solo") {
        this.view.hideVaultCategory();
      }
    };

    const peekBtn = document.getElementById("peekBtn");
    peekBtn?.addEventListener("mousedown", handlePeekStart);
    window.addEventListener("mouseup", handlePeekEnd);
    peekBtn?.addEventListener("touchstart", handlePeekStart);
    window.addEventListener("touchend", handlePeekEnd);

    document.getElementById("nextBtn")?.addEventListener("click", () => {
      if (this.catEngine.mode === "solo") {
        this.catEngine.isSoloRevealed = !this.catEngine.isSoloRevealed;
        if (this.catEngine.isSoloRevealed) {
          this.view.showVaultCategory("Загадана категорія Бота:", this.catEngine.p2Category.text);
          const nextBtn = document.getElementById("nextBtn");
          if (nextBtn) nextBtn.textContent = "Заховати";
        } else {
          this.view.hideVaultCategory();
          const nextBtn = document.getElementById("nextBtn");
          if (nextBtn) nextBtn.textContent = "Розкрити";
        }
      } else {
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
      if (!text) {
        inputEl?.focus();
        return;
      }

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
        this.catEngine.p2Category.text,
        () => {
          if (isWin) this.openCategories();
        },
        isWin ? "Перемога!" : "Спробуй ще!",
        isWin ? `Гравець ${StorageService.getUserName()} розгадав категорію!` : "Умова не розгадана. Продовжуйте пошук!"
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
    const handleChainSubmit = () => {
      const inputEl = document.getElementById("chainWordInput");
      const text = inputEl ? inputEl.value.trim() : "";
      if (!text) return;

      const result = this.chainEngine.guessWord(text);

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
          "Ланцюг Завершено!",
          `Вітаємо, ${StorageService.getUserName()}! Ви успішно закрили весь ланцюг.`
        );
      }

      this.view.renderChainBoard(this.chainEngine);
      this.view.clearChainInput();
    };

    document.getElementById("chainBtnSubmit")?.addEventListener("click", (e) => {
      e.preventDefault();
      handleChainSubmit();
    });

    document.getElementById("chainWordInput")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleChainSubmit();
      }
    });

    document.getElementById("btnNextChain")?.addEventListener("click", () => {
      this.openChain();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});