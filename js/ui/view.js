export class GameView {
  constructor() {
    this.elements = {
      // Навігація та Екрани
      topNavBar: document.getElementById("topNavBar"),
      btnNavHub: document.getElementById("btnNavHub"),
      navGameTabs: document.querySelectorAll(".nav-game-tab"),
      userNameInput: document.getElementById("userNameInput"),
      hubScreen: document.getElementById("hubScreen"),
      categoriesScreen: document.getElementById("categoriesScreen"),
      chainScreen: document.getElementById("chainScreen"),

      // Хаб: Статистика
      statsCategoriesCard: document.getElementById("statsCategoriesCard"),
      statsChainCard: document.getElementById("statsChainCard"),
      recentSessionsList: document.getElementById("recentSessionsList"),

      // Таємні Категорії
      colP1: document.getElementById("colP1"),
      colP2: document.getElementById("colP2"),
      colP2Title: document.getElementById("colP2Title"),
      listP1: document.getElementById("listP1"),
      listP2: document.getElementById("listP2"),
      countP1: document.getElementById("countP1"),
      countP2: document.getElementById("countP2"),
      playerLabel: document.getElementById("playerLabel"),
      vaultBox: document.getElementById("vaultBox"),
      vaultStatus: document.getElementById("vaultStatus"),
      vaultContent: document.getElementById("vaultContent"),
      peekBtn: document.getElementById("peekBtn"),
      nextBtn: document.getElementById("nextBtn"),
      intelHeader: document.getElementById("intelHeader"),
      intelScreen: document.getElementById("intelScreen"),
      wordInput: document.getElementById("wordInput"),
      duelButtons: document.getElementById("duelButtons"),
      btnAskBot: document.getElementById("btnAskBot"),
      guessBox: document.getElementById("guessBox"),
      guessInput: document.getElementById("guessInput"),
      modeFriendBtn: document.getElementById("modeFriendBtn"),
      modeSoloBtn: document.getElementById("modeSoloBtn"),

      // Ланцюг Слів
      chainTrack: document.getElementById("chainTrack"),
      chainTotalScore: document.getElementById("chainTotalScore"),
      chainActivePrompt: document.getElementById("chainActivePrompt"),
      chainWordPotential: document.getElementById("chainWordPotential"),
      chainWordInput: document.getElementById("chainWordInput"),
      chainBtnSubmit: document.getElementById("chainBtnSubmit"),
      chainLetterSlots: document.getElementById("chainLetterSlots"),
      chainFeedbackMsg: document.getElementById("chainFeedbackMsg"),
      chainInputBlock: document.getElementById("chainInputBlock"),
      chainFinishControls: document.getElementById("chainFinishControls"),
      btnNextChain: document.getElementById("btnNextChain"),

      // Модальне вікно
      modal: document.getElementById("resultModal"),
      modalCard: document.getElementById("modalCard"),
      modalTitle: document.getElementById("modalTitle"),
      modalDesc: document.getElementById("modalDesc"),
      modalTarget: document.getElementById("modalTarget"),
      modalBtn: document.getElementById("modalBtn")
    };
  }

  static padCount(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  static sortTapeEntries(list) {
    if (!Array.isArray(list)) return [];
    const matches = list.filter((w) => w.isMatch).sort((a, b) => b.time - a.time);
    const noMatches = list.filter((w) => !w.isMatch).sort((a, b) => b.time - a.time);
    return [...matches, ...noMatches];
  }

  showScreen(screenName) {
    this.elements.hubScreen.classList.add("hidden");
    this.elements.categoriesScreen.classList.add("hidden");
    this.elements.chainScreen.classList.add("hidden");

    this.elements.navGameTabs.forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.game === screenName);
    });

    const cloudBg = document.getElementById("wordCloud");

    if (screenName === "hub") {
      this.elements.hubScreen.classList.remove("hidden");
      if (cloudBg) cloudBg.style.display = "none";
    } else if (screenName === "categories") {
      this.elements.categoriesScreen.classList.remove("hidden");
      if (cloudBg) cloudBg.style.display = "block";
    } else if (screenName === "chain") {
      this.elements.chainScreen.classList.remove("hidden");
      if (cloudBg) cloudBg.style.display = "none";
    }
  }

  renderHubStats(stats) {
    if (this.elements.statsCategoriesCard) {
      if (!stats.categories || stats.categories.played === 0) {
        this.elements.statsCategoriesCard.innerHTML = `
          <div class="stats-unplayed">⚡ Спробуй зіграти! (Ще не зіграно жодної гри)</div>
        `;
      } else {
        this.elements.statsCategoriesCard.innerHTML = `
          <div class="stats-played-row">
            <span>Зіграно раундів:</span>
            <span class="stats-played-val">${stats.categories.played}</span>
          </div>
          <div class="stats-played-row">
            <span>Успішних розгадок:</span>
            <span class="stats-played-val" style="color: var(--cyan);">${stats.categories.bestRatio}%</span>
          </div>
        `;
      }
    }

    if (this.elements.statsChainCard) {
      if (!stats.chain || stats.chain.played === 0) {
        this.elements.statsChainCard.innerHTML = `
          <div class="stats-unplayed">⚡ Спробуй зіграти! (Чекає на твій перший рекорд)</div>
        `;
      } else {
        this.elements.statsChainCard.innerHTML = `
          <div class="stats-played-row">
            <span>Зіграно ланцюжків:</span>
            <span class="stats-played-val">${stats.chain.played}</span>
          </div>
          <div class="stats-played-row">
            <span>Найкращий результат:</span>
            <span class="stats-played-val" style="color: var(--green);">${stats.chain.highScore} / 100 б.</span>
          </div>
        `;
      }
    }

    if (this.elements.recentSessionsList) {
      if (!stats.recentSessions || stats.recentSessions.length === 0) {
        this.elements.recentSessionsList.innerHTML = `
          <div style="font-family: var(--mono); font-size: 0.8rem; color: var(--text-dim); text-align: center; padding: 6px;">
            Історія ігор порожня. Зіграйте першу гру!
          </div>
        `;
      } else {
        this.elements.recentSessionsList.innerHTML = stats.recentSessions.map((s) => `
          <div class="session-entry">
            <span class="session-game-tag">${s.title}</span>
            <span class="session-score">${s.scoreText}</span>
            <span class="session-date">${s.date}</span>
          </div>
        `).join("");
      }
    }
  }

  // Таємні Категорії
  renderCategoriesMode(mode, currentPlayer, targetPlayer, isSoloRevealed) {
    const isSolo = mode === "solo";
    this.elements.categoriesScreen?.classList.toggle("solo-mode", isSolo);
    this.elements.modeSoloBtn?.classList.toggle("active", isSolo);
    this.elements.modeFriendBtn?.classList.toggle("active", !isSolo);

    if (isSolo) {
      if (this.elements.colP2Title) this.elements.colP2Title.textContent = "Категорія Бота";
      if (this.elements.playerLabel) {
        this.elements.playerLabel.textContent = "Режим: Бот перевіряє слова";
        this.elements.playerLabel.style.color = "var(--purple)";
      }
      if (this.elements.intelHeader) this.elements.intelHeader.textContent = "Розвідка умови Бота";
      
      this.elements.duelButtons?.classList.add("hidden");
      this.elements.btnAskBot?.classList.remove("hidden");
      this.elements.guessBox?.classList.remove("hidden");
      this.elements.peekBtn?.classList.add("hidden");
      if (this.elements.nextBtn) {
        this.elements.nextBtn.textContent = isSoloRevealed ? "Заховати" : "Розкрити";
      }

      if (this.elements.colP2) this.elements.colP2.className = "module-plate col-p2 active-target";
    } else {
      if (this.elements.colP2Title) this.elements.colP2Title.textContent = "Гравець 2";
      if (this.elements.playerLabel) {
        this.elements.playerLabel.textContent = `Черга: Гравець ${currentPlayer}`;
        this.elements.playerLabel.style.color = currentPlayer === 1 ? "var(--cyan)" : "var(--purple)";
      }
      
      if (this.elements.intelHeader) {
        this.elements.intelHeader.textContent = `Розвідка умови Гравця ${targetPlayer}`;
      }

      this.elements.duelButtons?.classList.remove("hidden");
      this.elements.btnAskBot?.classList.add("hidden");
      this.elements.guessBox?.classList.add("hidden");
      this.elements.peekBtn?.classList.remove("hidden");
      if (this.elements.nextBtn) this.elements.nextBtn.textContent = "Передати хід";

      if (this.elements.colP1) {
        this.elements.colP1.className = `module-plate col-p1 ${targetPlayer === 1 ? "active-target" : ""}`;
      }
      if (this.elements.colP2) {
        this.elements.colP2.className = `module-plate col-p2 ${targetPlayer === 2 ? "active-target" : ""}`;
      }
    }
  }

  renderHistory(wordsP1 = [], wordsP2 = []) {
    const renderList = (container, words) => {
      if (!container) return;
      container.innerHTML = GameView.sortTapeEntries(words)
        .map((w) => `
          <div class="tape-item ${w.isMatch ? "match" : "no-match"}">
            <span>${w.text}</span>
            <span style="font-size: 0.7rem; font-weight: 700;">${w.isMatch ? "ТАК" : "НІ"}</span>
          </div>
        `).join("");
    };

    renderList(this.elements.listP1, wordsP1);
    renderList(this.elements.listP2, wordsP2);

    if (this.elements.countP1) this.elements.countP1.textContent = GameView.padCount(wordsP1.length);
    if (this.elements.countP2) this.elements.countP2.textContent = GameView.padCount(wordsP2.length);
  }

  showVaultCategory(title, text) {
    this.elements.vaultBox?.classList.remove("locked");
    if (this.elements.vaultStatus) this.elements.vaultStatus.textContent = title;
    if (this.elements.vaultContent) this.elements.vaultContent.textContent = text;
  }

  hideVaultCategory() {
    this.elements.vaultBox?.classList.add("locked");
    if (this.elements.vaultStatus) this.elements.vaultStatus.textContent = "Секретна умова захищена";
    if (this.elements.vaultContent) this.elements.vaultContent.textContent = "[ ТРИМАЙТЕ ДЛЯ ПЕРЕГЛЯДУ ]";
  }

  setIntelScreen(text) {
    if (this.elements.intelScreen) {
      this.elements.intelScreen.textContent = text || "Немає даних";
    }
  }

  resetIntelScreen() {
    if (this.elements.intelScreen) {
      this.elements.intelScreen.textContent = "Підказки відключені";
    }
  }

  // Ланцюг Слів (З автоматичною трансформацією)
  renderChainBoard(engine) {
    const { items, targetIndex, solvedWords, revealedLetters, isFinished } = engine;
    this.elements.chainTotalScore.textContent = engine.totalScore;

    this.elements.chainTrack.innerHTML = items.map((item, idx) => {
      let stateClass = "locked-hidden";
      let badge = "Ланка " + (idx + 1);
      let displayText = "• • • • •";

      if (idx === 0) {
        stateClass = "revealed-start";
        badge = "Старт";
        displayText = engine.getDisplayWordForIndex(0);
      } else if (idx === 6) {
        stateClass = "revealed-end";
        badge = "Фініш";
        displayText = item.target; // Останнє слово відоме за правилами
      } else if (solvedWords.includes(idx)) {
        stateClass = "solved";
        badge = "Відгадано";
        displayText = engine.getDisplayWordForIndex(idx);
      } else if (idx === targetIndex) {
        stateClass = "active-target";
        badge = "Поточне";
        const targetWord = item.target;
        const revCount = revealedLetters[idx] || 1;
        const visibleLetters = targetWord.slice(0, revCount);
        const dots = " •".repeat(targetWord.length - revCount);
        displayText = visibleLetters + dots;
      }

      return `
        <div class="chain-node ${stateClass}">
          <span class="chain-node-text">${displayText}</span>
          <span class="chain-node-badge">${badge}</span>
        </div>
      `;
    }).join("");

    if (isFinished) {
      this.elements.chainInputBlock.classList.add("hidden");
      this.elements.chainFinishControls.classList.remove("hidden");
    } else {
      this.elements.chainInputBlock.classList.remove("hidden");
      this.elements.chainFinishControls.classList.add("hidden");

      // Трансформована форма попереднього слова для точного словосполучення
      const prevWord = engine.getPreviousTransitionWord();
      this.elements.chainActivePrompt.textContent = `«${prevWord}» + [?]`;
      this.elements.chainWordPotential.textContent = `(+${engine.calculateCurrentWordPotential()} б.)`;

      const currentWord = engine.getCurrentTargetWord();
      const revCount = revealedLetters[targetIndex] || 1;
      this.elements.chainLetterSlots.innerHTML = currentWord.split("").map((ch, i) => {
        const isOpen = i < revCount;
        return `<div class="chain-slot ${isOpen ? "open" : ""}">${isOpen ? ch : "?"}</div>`;
      }).join("");
    }
  }

  setChainFeedback(msg, isError = false) {
    if (!this.elements.chainFeedbackMsg) return;
    this.elements.chainFeedbackMsg.textContent = msg;
    this.elements.chainFeedbackMsg.className = `chain-feedback ${isError ? "error" : "success"}`;
    setTimeout(() => {
      if (this.elements.chainFeedbackMsg) this.elements.chainFeedbackMsg.textContent = "";
    }, 2400);
  }

  showModal(isWin, categoryText, onConfirm, customTitle, customDesc) {
    if (!this.elements.modal) return;
    this.elements.modal.classList.add("active");
    if (this.elements.modalCard) {
      this.elements.modalCard.className = `modal-card ${isWin ? "win" : "try-again"}`;
    }
    if (this.elements.modalTitle) {
      this.elements.modalTitle.textContent = customTitle || (isWin ? "Перемога!" : "Пробуй ще!");
    }
    if (this.elements.modalDesc) {
      this.elements.modalDesc.textContent = customDesc || (isWin 
        ? "Категорію розгадано влучно!" 
        : "Не зовсім те. Продовжуй перевіряти слова!");
    }
    if (this.elements.modalTarget) {
      this.elements.modalTarget.textContent = categoryText ? `Результат: ${categoryText}` : "";
    }
    if (this.elements.modalBtn) {
      this.elements.modalBtn.textContent = "Продовжити";
      this.elements.modalBtn.onclick = () => {
        this.elements.modal.classList.remove("active");
        if (onConfirm) onConfirm();
      };
    }
  }

  clearCategoriesInputs() {
    if (this.elements.wordInput) {
      this.elements.wordInput.value = "";
      this.elements.wordInput.focus();
    }
    if (this.elements.guessInput) {
      this.elements.guessInput.value = "";
    }
  }

  clearChainInput() {
    if (this.elements.chainWordInput) {
      this.elements.chainWordInput.value = "";
      this.elements.chainWordInput.focus();
    }
  }
}