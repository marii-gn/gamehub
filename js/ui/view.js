export class GameView {
  constructor() {
    this.elements = {
      hubScreen: document.getElementById("hubScreen"),
      categoriesScreen: document.getElementById("categoriesScreen"),
      chainScreen: document.getElementById("chainScreen"),
      connScreen: document.getElementById("connScreen"),
      semantleScreen: document.getElementById("semantleScreen"),
      waveScreen: document.getElementById("waveScreen"),
      userNameInput: document.getElementById("userNameInput"),
      topNavBar: document.getElementById("topNavBar"),
      
      // Категорії
      vaultBox: document.getElementById("vaultBox"),
      vaultStatus: document.getElementById("vaultStatus"),
      vaultContent: document.getElementById("vaultContent"),
      intelScreen: document.getElementById("intelScreen"),
      listP1: document.getElementById("listP1"),
      listP2: document.getElementById("listP2"),
      countP1: document.getElementById("countP1"),
      countP2: document.getElementById("countP2"),
      colP1: document.getElementById("colP1"),
      colP2: document.getElementById("colP2"),
      playerLabel: document.getElementById("playerLabel"),
      colP2Title: document.getElementById("colP2Title"),
      duelButtons: document.getElementById("duelButtons"),
      btnAskBot: document.getElementById("btnAskBot"),
      guessBox: document.getElementById("guessBox"),
      
      // Ланцюг
      chainTotalScore: document.getElementById("chainTotalScore"),
      chainTrack: document.getElementById("chainTrack"),
      chainActivePrompt: document.getElementById("chainActivePrompt"),
      chainWordPotential: document.getElementById("chainWordPotential"),
      chainFeedbackMsg: document.getElementById("chainFeedbackMsg"),
      chainFinishControls: document.getElementById("chainFinishControls"),

      // Код Чотирьох
      connLivesDots: document.getElementById("connLivesDots"),
      connGrid: document.getElementById("connGrid"),
      connSolvedContainer: document.getElementById("connSolvedContainer"),
      connHintBanner: document.getElementById("connHintBanner"),
      connHintText: document.getElementById("connHintText"),
      connFeedbackMsg: document.getElementById("connFeedbackMsg"),
      connFinishControls: document.getElementById("connFinishControls"),
      btnConnShuffle: document.getElementById("btnConnShuffle"),
      btnConnHint: document.getElementById("btnConnHint"),
      btnConnClear: document.getElementById("btnConnClear"),
      btnConnSubmit: document.getElementById("btnConnSubmit"),

      // Тепліше-Холодніше
      semantleGuessCount: document.getElementById("semantleGuessCount"),
      semantleWordInput: document.getElementById("semantleWordInput"),
      btnSemantleGuess: document.getElementById("btnSemantleGuess"),
      btnSemantleHint: document.getElementById("btnSemantleHint"),
      btnSemantleSurrender: document.getElementById("btnSemantleSurrender"),
      semantleFeedback: document.getElementById("semantleFeedback"),
      semantleTableBody: document.getElementById("semantleTableBody"),
      semantleFinishBox: document.getElementById("semantleFinishBox"),

      // Модальне вікно
      resultModal: document.getElementById("resultModal"),
      modalCard: document.getElementById("modalCard"),
      modalTitle: document.getElementById("modalTitle"),
      modalDesc: document.getElementById("modalDesc"),
      modalTarget: document.getElementById("modalTarget"),
      modalBtn: document.getElementById("modalBtn")
    };
  }

  showScreen(screenName) {
    const screens = [
      this.elements.hubScreen,
      this.elements.categoriesScreen,
      this.elements.chainScreen,
      this.elements.connScreen,
      this.elements.semantleScreen,
      this.elements.waveScreen
    ];

    screens.forEach((s) => {
      if (s) s.classList.add("hidden");
    });

    document.querySelectorAll(".nav-game-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.game === screenName);
    });

    if (screenName === "hub" && this.elements.hubScreen) {
      this.elements.hubScreen.classList.remove("hidden");
    } else if (screenName === "categories" && this.elements.categoriesScreen) {
      this.elements.categoriesScreen.classList.remove("hidden");
    } else if (screenName === "chain" && this.elements.chainScreen) {
      this.elements.chainScreen.classList.remove("hidden");
    } else if (screenName === "connections" && this.elements.connScreen) {
      this.elements.connScreen.classList.remove("hidden");
    } else if (screenName === "semantle" && this.elements.semantleScreen) {
      this.elements.semantleScreen.classList.remove("hidden");
    } else if (screenName === "wave" && this.elements.waveScreen) {
      this.elements.waveScreen.classList.remove("hidden");
    }
  }

  showModal(isWin, targetText, onContinue, customTitle = null, customDesc = null) {
    if (!this.elements.resultModal) return;

    this.elements.modalCard.className = "modal-card " + (isWin ? "win" : "try-again");
    this.elements.modalTitle.textContent = customTitle || (isWin ? "Перемога!" : "Спробуйте ще!");
    this.elements.modalDesc.textContent = customDesc || (isWin ? "Завдання успішно виконано!" : "Нажаль, відповідь невірна.");
    
    if (targetText) {
      this.elements.modalTarget.style.display = "block";
      this.elements.modalTarget.textContent = targetText;
    } else {
      this.elements.modalTarget.style.display = "none";
    }

    this.elements.resultModal.classList.add("active");

    const newBtn = this.elements.modalBtn.cloneNode(true);
    this.elements.modalBtn.parentNode.replaceChild(newBtn, this.elements.modalBtn);
    this.elements.modalBtn = newBtn;

    this.elements.modalBtn.addEventListener("click", () => {
      this.elements.resultModal.classList.remove("active");
      if (onContinue) onContinue();
    });
  }

  // --- Категорії ---
  renderCategoriesMode(mode, currentPlayer, targetPlayer) {
    const wrapper = this.elements.categoriesScreen;
    if (!wrapper) return;

    if (mode === "solo") {
      wrapper.classList.add("solo-mode");
      if (this.elements.playerLabel) this.elements.playerLabel.textContent = "Режим: Бот";
      if (this.elements.colP2Title) this.elements.colP2Title.textContent = "Штучний Інтелект";
      if (this.elements.duelButtons) this.elements.duelButtons.classList.add("hidden");
      if (this.elements.btnAskBot) this.elements.btnAskBot.classList.remove("hidden");
      if (this.elements.guessBox) this.elements.guessBox.classList.remove("hidden");
    } else {
      wrapper.classList.remove("solo-mode");
      if (this.elements.playerLabel) this.elements.playerLabel.textContent = `Черга: Гравець ${currentPlayer}`;
      if (this.elements.colP2Title) this.elements.colP2Title.textContent = "Гравець 2";
      if (this.elements.duelButtons) this.elements.duelButtons.classList.remove("hidden");
      if (this.elements.btnAskBot) this.elements.btnAskBot.classList.add("hidden");
      if (this.elements.guessBox) this.elements.guessBox.classList.add("hidden");
    }

    if (this.elements.colP1) this.elements.colP1.classList.toggle("active-target", targetPlayer === 1);
    if (this.elements.colP2) this.elements.colP2.classList.toggle("active-target", targetPlayer === 2);
  }

  showVaultCategory(statusText, categoryText) {
    if (this.elements.vaultBox) this.elements.vaultBox.classList.remove("locked");
    if (this.elements.vaultStatus) this.elements.vaultStatus.textContent = statusText;
    if (this.elements.vaultContent) this.elements.vaultContent.textContent = categoryText;
  }

  hideVaultCategory() {
    if (this.elements.vaultBox) this.elements.vaultBox.classList.add("locked");
    if (this.elements.vaultStatus) this.elements.vaultStatus.textContent = "Секретна умова захищена";
    if (this.elements.vaultContent) this.elements.vaultContent.textContent = "[ ТРИМАЙТЕ ДЛЯ ПЕРЕГЛЯДУ ]";
  }

  setIntelScreen(text) {
    if (this.elements.intelScreen) this.elements.intelScreen.textContent = text;
  }

  resetIntelScreen() {
    if (this.elements.intelScreen) this.elements.intelScreen.textContent = "Підказки відключені";
  }

  clearCategoriesInputs() {
    const input = document.getElementById("wordInput");
    if (input) input.value = "";
  }

  renderHistory(wordsP1, wordsP2) {
    const renderList = (container, list, countEl) => {
      if (!container) return;
      container.innerHTML = "";
      let matches = 0;

      list.forEach((entry, idx) => {
        if (entry.isMatch) matches++;
        const item = document.createElement("div");
        item.className = "tape-item " + (entry.isMatch ? "match" : "no-match");
        item.innerHTML = `
          <span>#${idx + 1} ${entry.text}</span>
          <span>${entry.isMatch ? "✓" : "✗"}</span>
        `;
        container.appendChild(item);
      });

      if (countEl) countEl.textContent = String(matches).padStart(2, "0");
      container.scrollTop = container.scrollHeight;
    };

    renderList(this.elements.listP1, wordsP1, this.elements.countP1);
    renderList(this.elements.listP2, wordsP2, this.elements.countP2);
  }

  // --- Ланцюг Слів ---
  renderChainBoard(engine) {
    if (!this.elements.chainTrack) return;
    this.elements.chainTrack.innerHTML = "";

    if (this.elements.chainTotalScore) {
      this.elements.chainTotalScore.textContent = engine.totalScore;
    }

    const items = engine.items;
    if (!items || items.length === 0) return;

    items.forEach((item, idx) => {
      const node = document.createElement("div");
      node.className = "chain-node";

      if (idx === 0) {
        node.classList.add("revealed-start");
        node.innerHTML = `
          <span class="chain-node-text">${item.transition}</span>
          <span class="chain-tag">СТАРТ</span>
        `;
      } else if (idx === 6) {
        node.classList.add("revealed-end");
        node.innerHTML = `
          <span class="chain-node-text">${item.target}</span>
          <span class="chain-tag">ФІНІШ</span>
        `;
      } else if (idx < engine.targetIndex || engine.isFinished) {
        node.classList.add("solved");
        node.innerHTML = `
          <span class="chain-node-text">${engine.getDisplayWordForIndex(idx)}</span>
          <span class="chain-pts">+${engine.wordScores[idx] !== undefined ? engine.wordScores[idx] : 20} б.</span>
        `;
      } else if (idx === engine.targetIndex) {
        node.classList.add("active-target");
        const targetWord = item.target;
        const revealedCount = engine.revealedLetters[idx] || 1;

        const cellsRow = document.createElement("div");
        cellsRow.className = "chain-cells-row";
        cellsRow.id = "activeCellsRow";

        for (let l = 0; l < targetWord.length; l++) {
          if (l < revealedCount) {
            const openCell = document.createElement("div");
            openCell.className = "chain-cell open-letter";
            openCell.textContent = targetWord[l];
            cellsRow.appendChild(openCell);
          } else {
            const inputCell = document.createElement("input");
            inputCell.type = "text";
            inputCell.maxLength = 1;
            inputCell.className = "chain-cell-input";
            cellsRow.appendChild(inputCell);
          }
        }

        node.appendChild(cellsRow);

        setTimeout(() => {
          const firstInput = cellsRow.querySelector(".chain-cell-input");
          if (firstInput) firstInput.focus();
        }, 50);
      } else {
        node.classList.add("locked-node");
        const cellsRow = document.createElement("div");
        cellsRow.className = "chain-cells-row";

        for (let l = 0; l < item.target.length; l++) {
          const lockedCell = document.createElement("div");
          lockedCell.className = "chain-cell locked-cell";
          lockedCell.textContent = "?";
          cellsRow.appendChild(lockedCell);
        }

        node.appendChild(cellsRow);
      }

      this.elements.chainTrack.appendChild(node);
    });

    if (this.elements.chainActivePrompt && this.elements.chainWordPotential) {
      if (!engine.isFinished) {
        const prevWord = engine.getPreviousTransitionWord();
        this.elements.chainActivePrompt.textContent = `${prevWord.toUpperCase()} + [?]`;
        this.elements.chainWordPotential.textContent = `(+${engine.calculateCurrentWordPotential()} балів)`;
      } else {
        this.elements.chainActivePrompt.textContent = "ЛАНЦЮЖОК ЗАВЕРШЕНО!";
        this.elements.chainWordPotential.textContent = "";
      }
    }

    if (this.elements.chainFinishControls) {
      this.elements.chainFinishControls.classList.toggle("hidden", !engine.isFinished);
    }
  }

  setChainFeedback(msg, isError = false) {
    if (!this.elements.chainFeedbackMsg) return;
    this.elements.chainFeedbackMsg.textContent = msg;
    this.elements.chainFeedbackMsg.className = "chain-feedback " + (isError ? "error" : "success");
  }

  // --- Код Чотирьох ---
  renderConnectionsBoard(engine) {
    if (!this.elements.connLivesDots) return;

    this.elements.connLivesDots.innerHTML = "";
    for (let i = 0; i < engine.maxMistakes; i++) {
      const dot = document.createElement("div");
      dot.className = "conn-dot" + (i >= engine.lives ? " lost" : "");
      this.elements.connLivesDots.appendChild(dot);
    }

    if (this.elements.connSolvedContainer) {
      this.elements.connSolvedContainer.innerHTML = "";
      engine.solvedGroups.forEach((group) => {
        const banner = document.createElement("div");
        banner.className = "conn-solved-banner";
        banner.style.borderColor = group.color;
        banner.style.background = group.color + "1a";

        const words = group.items.map((it) => it.text).join(" • ");
        banner.innerHTML = `
          <div class="conn-solved-title" style="color: ${group.color}">${group.title}</div>
          <div class="conn-solved-words">${words}</div>
        `;
        this.elements.connSolvedContainer.appendChild(banner);
      });
    }

    if (this.elements.connGrid) {
      this.elements.connGrid.innerHTML = "";
      const remainingTiles = engine.tiles.filter((t) => !engine.isTileSolved(t.id));

      remainingTiles.forEach((tile) => {
        const card = document.createElement("div");
        card.className = "conn-card" + (engine.selectedIds.includes(tile.id) ? " selected" : "");
        card.dataset.tileId = tile.id;
        card.textContent = tile.text;
        this.elements.connGrid.appendChild(card);
      });
    }

    if (this.elements.connFinishControls) {
      this.elements.connFinishControls.classList.toggle("hidden", !engine.isGameOver);
    }
  }

  showConnHint(text) {
    if (this.elements.connHintBanner && this.elements.connHintText) {
      this.elements.connHintBanner.classList.remove("hidden");
      this.elements.connHintText.textContent = text;
    }
  }

  hideConnHint() {
    if (this.elements.connHintBanner) {
      this.elements.connHintBanner.classList.add("hidden");
    }
  }

  setConnFeedback(msg, type = "normal") {
    if (!this.elements.connFeedbackMsg) return;
    this.elements.connFeedbackMsg.textContent = msg;
    this.elements.connFeedbackMsg.className = "conn-feedback " + type;
  }

  renderFullConnectionsSolution(allGroups) {
    if (!this.elements.connGrid) return;
    this.elements.connGrid.innerHTML = "";

    allGroups.forEach((group) => {
      const banner = document.createElement("div");
      banner.className = "conn-solved-banner";
      banner.style.borderColor = group.color;
      banner.style.background = group.color + "1a";

      const words = group.items.map((it) => it.text || it).join(" • ");
      banner.innerHTML = `
        <div class="conn-solved-title" style="color: ${group.color}">${group.title}</div>
        <div class="conn-solved-words">${words}</div>
      `;
      this.elements.connGrid.appendChild(banner);
    });
  }

  // --- Тепліше-Холодніше ---
  renderSemantleBoard(engine) {
    if (this.elements.semantleGuessCount) {
      this.elements.semantleGuessCount.textContent = engine.guesses.length;
    }

    if (this.elements.semantleTableBody) {
      this.elements.semantleTableBody.innerHTML = "";

      const sortedGuesses = [...engine.guesses].sort((a, b) => b.similarity - a.similarity);

      sortedGuesses.forEach((g) => {
        const row = document.createElement("div");
        row.className = "semantle-row";

        row.innerHTML = `
          <span>#${g.order}</span>
          <span class="semantle-cell-word">${g.word}</span>
          <span class="semantle-cell-score">${g.similarity.toFixed(2)}%</span>
          <span class="semantle-status-${g.proximity.css}">${g.proximity.label}</span>
        `;

        this.elements.semantleTableBody.appendChild(row);
      });
    }

    if (this.elements.semantleFinishBox) {
      this.elements.semantleFinishBox.classList.toggle("hidden", !engine.isWin && !engine.isGaveUp);
    }
  }

  setSemantleFeedback(msg) {
    if (this.elements.semantleFeedback) {
      this.elements.semantleFeedback.textContent = msg;
    }
  }

  renderHubStats(stats) {
    const renderCardStats = (containerId, gameStats) => {
      const box = document.getElementById(containerId);
      if (!box) return;

      if (!gameStats || gameStats.played === 0) {
        box.innerHTML = `<div class="stats-unplayed">⚡ Ще не грали. Будьте першим!</div>`;
      } else {
        box.innerHTML = `
          <div class="stats-played-row">
            <span>Зіграно:</span>
            <span class="stats-played-val">${gameStats.played}</span>
          </div>
          <div class="stats-played-row">
            <span>Перемог:</span>
            <span class="stats-played-val">${gameStats.wins || gameStats.bestScore || 0}</span>
          </div>
        `;
      }
    };

    renderCardStats("statsCategoriesCard", stats.categories);
    renderCardStats("statsChainCard", stats.chain);
    renderCardStats("statsConnectionsCard", stats.connections);
    renderCardStats("statsSemantleCard", stats.semantle);

    const recentList = document.getElementById("recentSessionsList");
    if (recentList && stats.recentSessions) {
      recentList.innerHTML = "";
      if (stats.recentSessions.length === 0) {
        recentList.innerHTML = `<div class="session-entry"><span class="session-date">Історія порожня</span></div>`;
      } else {
        stats.recentSessions.forEach((s) => {
          const entry = document.createElement("div");
          entry.className = "session-entry";
          entry.innerHTML = `
            <span class="session-game-tag">${s.game}</span>
            <span class="session-score">${s.result}</span>
            <span class="session-date">${s.date}</span>
          `;
          recentList.appendChild(entry);
        });
      }
    }
  }
}