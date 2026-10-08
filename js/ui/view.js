export class GameView {
  constructor() {
    this.elements = {
      topNavBar: document.getElementById("topNavBar"),
      btnNavHub: document.getElementById("btnNavHub"),
      navGameTabs: document.querySelectorAll(".nav-game-tab"),
      userNameInput: document.getElementById("userNameInput"),
      hubScreen: document.getElementById("hubScreen"),
      categoriesScreen: document.getElementById("categoriesScreen"),
      chainScreen: document.getElementById("chainScreen"),
      connScreen: document.getElementById("connScreen"),

      statsCategoriesCard: document.getElementById("statsCategoriesCard"),
      statsChainCard: document.getElementById("statsChainCard"),
      statsConnectionsCard: document.getElementById("statsConnectionsCard"),
      recentSessionsList: document.getElementById("recentSessionsList"),

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

      chainTrack: document.getElementById("chainTrack"),
      chainTotalScore: document.getElementById("chainTotalScore"),
      chainActivePrompt: document.getElementById("chainActivePrompt"),
      chainWordPotential: document.getElementById("chainWordPotential"),
      chainFeedbackMsg: document.getElementById("chainFeedbackMsg"),
      chainHintBar: document.getElementById("chainHintBar"),
      chainFinishControls: document.getElementById("chainFinishControls"),
      btnNextChain: document.getElementById("btnNextChain"),

      connLivesDots: document.getElementById("connLivesDots"),
      connSolvedContainer: document.getElementById("connSolvedContainer"),
      connGrid: document.getElementById("connGrid"),
      connFeedbackMsg: document.getElementById("connFeedbackMsg"),
      btnConnShuffle: document.getElementById("btnConnShuffle"),
      btnConnClear: document.getElementById("btnConnClear"),
      btnConnSubmit: document.getElementById("btnConnSubmit"),

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

  showScreen(screenName) {
    this.elements.hubScreen.classList.add("hidden");
    this.elements.categoriesScreen.classList.add("hidden");
    this.elements.chainScreen.classList.add("hidden");
    this.elements.connScreen.classList.add("hidden");

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
    } else if (screenName === "connections") {
      this.elements.connScreen.classList.remove("hidden");
      if (cloudBg) cloudBg.style.display = "none";
    }
  }

  renderHubStats(stats) {
    if (this.elements.statsCategoriesCard) {
      if (!stats.categories || stats.categories.played === 0) {
        this.elements.statsCategoriesCard.innerHTML = `<div class="stats-unplayed">⚡ Спробуй зіграти! (Ще не зіграно)</div>`;
      } else {
        this.elements.statsCategoriesCard.innerHTML = `
          <div class="stats-played-row"><span>Зіграно:</span><span class="stats-played-val">${stats.categories.played}</span></div>
          <div class="stats-played-row"><span>Успіх:</span><span class="stats-played-val" style="color: var(--cyan);">${stats.categories.bestRatio}%</span></div>
        `;
      }
    }

    if (this.elements.statsChainCard) {
      if (!stats.chain || stats.chain.played === 0) {
        this.elements.statsChainCard.innerHTML = `<div class="stats-unplayed">⚡ Спробуй зіграти! (Чекає на рекорд)</div>`;
      } else {
        this.elements.statsChainCard.innerHTML = `
          <div class="stats-played-row"><span>Зіграно:</span><span class="stats-played-val">${stats.chain.played}</span></div>
          <div class="stats-played-row"><span>Найкращий:</span><span class="stats-played-val" style="color: var(--green);">${stats.chain.highScore} / 100 б.</span></div>
        `;
      }
    }

    if (this.elements.statsConnectionsCard) {
      if (!stats.connections || stats.connections.played === 0) {
        this.elements.statsConnectionsCard.innerHTML = `<div class="stats-unplayed">⚡ Спробуй зіграти! (Новий виклик)</div>`;
      } else {
        this.elements.statsConnectionsCard.innerHTML = `
          <div class="stats-played-row"><span>Зіграно партій:</span><span class="stats-played-val">${stats.connections.played}</span></div>
          <div class="stats-played-row"><span>Розгадано 4/4:</span><span class="stats-played-val" style="color: var(--purple);">${stats.connections.wins}</span></div>
        `;
      }
    }

    if (this.elements.recentSessionsList) {
      if (!stats.recentSessions || stats.recentSessions.length === 0) {
        this.elements.recentSessionsList.innerHTML = `<div style="font-family: var(--mono); font-size: 0.8rem; color: var(--text-dim); text-align: center; padding: 6px;">Історія ігор порожня. Зіграйте першу гру!</div>`;
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

  // --- РЕНДЕР КАТЕГОРІЙ ---
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
      this.elements.duelButtons?.classList.add("hidden");
      this.elements.btnAskBot?.classList.remove("hidden");
      this.elements.guessBox?.classList.remove("hidden");
      this.elements.peekBtn?.classList.add("hidden");
      if (this.elements.nextBtn) this.elements.nextBtn.textContent = isSoloRevealed ? "Заховати" : "Розкрити";
      if (this.elements.colP2) this.elements.colP2.className = "module-plate col-p2 active-target";
    } else {
      if (this.elements.colP2Title) this.elements.colP2Title.textContent = "Гравець 2";
      if (this.elements.playerLabel) {
        this.elements.playerLabel.textContent = `Черга: Гравець ${currentPlayer}`;
        this.elements.playerLabel.style.color = currentPlayer === 1 ? "var(--cyan)" : "var(--purple)";
      }
      this.elements.duelButtons?.classList.remove("hidden");
      this.elements.btnAskBot?.classList.add("hidden");
      this.elements.guessBox?.classList.add("hidden");
      this.elements.peekBtn?.classList.remove("hidden");
      if (this.elements.nextBtn) this.elements.nextBtn.textContent = "Передати хід";
      if (this.elements.colP1) this.elements.colP1.className = `module-plate col-p1 ${targetPlayer === 1 ? "active-target" : ""}`;
      if (this.elements.colP2) this.elements.colP2.className = `module-plate col-p2 ${targetPlayer === 2 ? "active-target" : ""}`;
    }
  }

  renderHistory(wordsP1 = [], wordsP2 = []) {
    const renderList = (container, words) => {
      if (!container) return;
      container.innerHTML = [...words].sort((a,b) => b.time - a.time).map(w => `
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

  // --- РЕНДЕР ЛАНЦЮГА СЛІВ ---
  renderChainBoard(engine) {
    const { items, targetIndex, solvedWords, revealedLetters, isFinished } = engine;
    this.elements.chainTotalScore.textContent = engine.totalScore;

    this.elements.chainTrack.innerHTML = items.map((item, idx) => {
      let stateClass = "locked-hidden";
      let badge = "Ланка " + (idx + 1);

      if (idx === 0) {
        stateClass = "revealed-start";
        badge = "Старт";
        return `
          <div class="chain-node ${stateClass}">
            <span class="chain-node-text">${engine.getDisplayWordForIndex(0)}</span>
            <span class="chain-node-badge">${badge}</span>
          </div>
        `;
      } else if (idx === 6) {
        stateClass = "revealed-end";
        badge = "Фініш";
        return `
          <div class="chain-node ${stateClass}">
            <span class="chain-node-text">${item.target}</span>
            <span class="chain-node-badge">${badge}</span>
          </div>
        `;
      } else if (solvedWords.includes(idx)) {
        stateClass = "solved";
        badge = "Відгадано";
        return `
          <div class="chain-node ${stateClass}">
            <span class="chain-node-text">${engine.getDisplayWordForIndex(idx)}</span>
            <span class="chain-node-badge">${badge}</span>
          </div>
        `;
      } else if (idx === targetIndex) {
        stateClass = "active-target";
        badge = "Поточне";
        const targetWord = item.target;
        const revCount = revealedLetters[idx] || 1;
        const totalLen = targetWord.length;

        let cellsHtml = "";
        for (let i = 0; i < totalLen; i++) {
          if (i < revCount) {
            cellsHtml += `<span class="chain-cell open-letter">${targetWord[i]}</span>`;
          } else {
            cellsHtml += `<input type="text" maxlength="1" class="chain-cell-input" autocomplete="off">`;
          }
        }

        return `
          <div class="chain-node ${stateClass}">
            <div class="chain-cells-row" id="activeCellsRow">${cellsHtml}</div>
            <span class="chain-node-badge">${badge}</span>
          </div>
        `;
      }

      const wordLen = item.target.length;
      let emptyCells = "";
      for (let i = 0; i < wordLen; i++) emptyCells += `<span class="chain-cell locked-cell"></span>`;

      return `
        <div class="chain-node ${stateClass}">
          <div class="chain-cells-row">${emptyCells}</div>
          <span class="chain-node-badge">${badge}</span>
        </div>
      `;
    }).join("");

    if (isFinished) {
      this.elements.chainHintBar.classList.add("hidden");
      this.elements.chainFinishControls.classList.remove("hidden");
    } else {
      this.elements.chainHintBar.classList.remove("hidden");
      this.elements.chainFinishControls.classList.add("hidden");

      const prevWord = engine.getPreviousTransitionWord();
      this.elements.chainActivePrompt.textContent = `«${prevWord}» + [?]`;
      this.elements.chainWordPotential.textContent = `(+${engine.calculateCurrentWordPotential()} б.)`;

      const firstInput = document.querySelector(".chain-cell-input");
      if (firstInput) firstInput.focus();
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

  // --- РЕНДЕР КОДУ ЧОТИРЬОХ ---
  renderConnectionsBoard(engine) {
    if (this.elements.connLivesDots) {
      let dotsHtml = "";
      for (let i = 0; i < 5; i++) {
        dotsHtml += `<div class="conn-dot ${i >= engine.lives ? "lost" : ""}"></div>`;
      }
      this.elements.connLivesDots.innerHTML = dotsHtml;
    }

    if (this.elements.connSolvedContainer) {
      this.elements.connSolvedContainer.innerHTML = engine.solvedGroups.map(g => `
        <div class="conn-solved-banner" style="background: ${g.color}18; border-color: ${g.color};">
          <div class="conn-solved-title" style="color: ${g.color};">${g.title}</div>
          <div class="conn-solved-words">${g.items.map(it => it.text).join(", ")}</div>
        </div>
      `).join("");
    }

    if (this.elements.connGrid) {
      const activeTiles = engine.tiles.filter(t => !engine.isTileSolved(t.id));
      this.elements.connGrid.innerHTML = activeTiles.map(t => {
        const isSelected = engine.selectedIds.includes(t.id);
        return `
          <div class="conn-card ${isSelected ? "selected" : ""}" data-tile-id="${t.id}">
            ${t.text}
          </div>
        `;
      }).join("");
    }
  }

  setConnFeedback(msg, type = "error") {
    if (!this.elements.connFeedbackMsg) return;
    this.elements.connFeedbackMsg.textContent = msg;
    this.elements.connFeedbackMsg.className = `conn-feedback ${type}`;
    setTimeout(() => {
      if (this.elements.connFeedbackMsg) this.elements.connFeedbackMsg.textContent = "";
    }, 2600);
  }

  showModal(isWin, categoryText, onConfirm, customTitle, customDesc) {
    if (!this.elements.modal) return;
    this.elements.modal.classList.add("active");
    if (this.elements.modalCard) {
      this.elements.modalCard.className = `modal-card ${isWin ? "win" : "try-again"}`;
    }
    if (this.elements.modalTitle) {
      this.elements.modalTitle.textContent = customTitle || (isWin ? "Перемога!" : "Спробуй ще!");
    }
    if (this.elements.modalDesc) {
      this.elements.modalDesc.textContent = customDesc || "Результат зафіксовано!";
    }
    if (this.elements.modalTarget) {
      if (categoryText) {
        this.elements.modalTarget.textContent = categoryText;
        this.elements.modalTarget.classList.remove("hidden");
      } else {
        this.elements.modalTarget.classList.add("hidden");
      }
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
}