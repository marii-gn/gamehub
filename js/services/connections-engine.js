import { CONNECTIONS_PUZZLES } from "../data/connections.js";

export class ConnectionsEngine {
  constructor(puzzles = CONNECTIONS_PUZZLES) {
    this.puzzles = puzzles;
    this.currentPuzzle = null;
    this.puzzleIndex = 0;
    this.maxMistakes = 5;
    this.lives = this.maxMistakes;
    this.solvedGroups = [];
    this.tiles = [];
    this.selectedIds = [];
    this.previousGuesses = new Set();
    this.isGameOver = false;
    this.isWin = false;
    this.hintClicksCount = 0;
  }

  startNewGame(puzzleIdx = null) {
    if (!this.puzzles || this.puzzles.length === 0) return;

    if (puzzleIdx !== null && puzzleIdx < this.puzzles.length) {
      this.puzzleIndex = puzzleIdx;
    } else {
      this.puzzleIndex = Math.floor(Math.random() * this.puzzles.length);
    }

    this.currentPuzzle = this.puzzles[this.puzzleIndex];
    this.lives = this.maxMistakes;
    this.solvedGroups = [];
    this.selectedIds = [];
    this.previousGuesses.clear();
    this.isGameOver = false;
    this.isWin = false;
    this.hintClicksCount = 0;

    const flatTiles = [];
    this.currentPuzzle.groups.forEach((group, gIdx) => {
      // Підтримка обох назв масивів: items або words
      const wordsList = group.items || group.words || [];
      wordsList.forEach((text, iIdx) => {
        flatTiles.push({
          id: `t_${gIdx}_${iIdx}`,
          text: text,
          groupIndex: gIdx
        });
      });
    });

    this.tiles = this.shuffle(flatTiles);
  }

  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  isTileSolved(tileId) {
    return this.solvedGroups.some((g) =>
      g.items.some((it) => it.id === tileId)
    );
  }

  shuffleRemaining() {
    const remaining = this.tiles.filter((t) => !this.isTileSolved(t.id));
    const shuffled = this.shuffle(remaining);
    this.tiles = this.tiles.map((t) => {
      if (this.isTileSolved(t.id)) return t;
      return shuffled.pop();
    });
  }

  toggleSelect(tileId) {
    if (this.isGameOver || this.isTileSolved(tileId)) return false;

    const idx = this.selectedIds.indexOf(tileId);
    if (idx !== -1) {
      this.selectedIds.splice(idx, 1);
      return true;
    } else {
      if (this.selectedIds.length < 4) {
        this.selectedIds.push(tileId);
        return true;
      }
    }
    return false;
  }

  clearSelection() {
    this.selectedIds = [];
  }

  getGuessSignature(tiles) {
    return tiles
      .map((t) => t.text.trim().toLowerCase())
      .sort()
      .join("|");
  }

  submitSelection() {
    if (this.selectedIds.length !== 4 || this.isGameOver) {
      return { status: "incomplete" };
    }

    const selectedTiles = this.tiles.filter((t) =>
      this.selectedIds.includes(t.id)
    );
    const signature = this.getGuessSignature(selectedTiles);

    if (this.previousGuesses.has(signature)) {
      return { status: "already_guessed" };
    }

    const firstGroupIdx = selectedTiles[0].groupIndex;
    const isSameGroup = selectedTiles.every(
      (t) => t.groupIndex === firstGroupIdx
    );

    if (isSameGroup) {
      const groupData = this.currentPuzzle.groups[firstGroupIdx];
      this.solvedGroups.push({
        ...groupData,
        items: selectedTiles
      });
      this.selectedIds = [];
      this.hintClicksCount = 0;

      if (this.solvedGroups.length === this.currentPuzzle.groups.length) {
        this.isGameOver = true;
        this.isWin = true;
        return { status: "win", group: groupData };
      }

      return { status: "correct", group: groupData };
    } else {
      this.previousGuesses.add(signature);
      this.lives -= 1;

      const groupCounts = {};
      selectedTiles.forEach((t) => {
        groupCounts[t.groupIndex] = (groupCounts[t.groupIndex] || 0) + 1;
      });
      const oneAway = Object.values(groupCounts).includes(3);

      if (this.lives <= 0) {
        this.isGameOver = true;
        this.isWin = false;
        return { status: "lose", oneAway: false };
      }

      return { status: "wrong", oneAway, livesLeft: this.lives };
    }
  }

  getGentleHint() {
    if (!this.currentPuzzle || this.isGameOver) return null;

    const solvedTitles = this.solvedGroups.map((g) => g.title);
    const unsolved = this.currentPuzzle.groups.filter(
      (g) => !solvedTitles.includes(g.title)
    );

    if (unsolved.length === 0) return null;

    this.hintClicksCount += 1;
    const targetGroup = unsolved[0];
    const words = targetGroup.items || targetGroup.words || [];

    if (this.hintClicksCount < 5) {
      return {
        level: 1,
        clicks: this.hintClicksCount,
        text: `Тема однієї з груп: «${targetGroup.title}»`
      };
    }

    if (this.hintClicksCount < 10) {
      return {
        level: 2,
        clicks: this.hintClicksCount,
        text: `До теми «${targetGroup.title}» належить слово: [ ${words[0]} ]`
      };
    }

    if (this.hintClicksCount < 15) {
      return {
        level: 3,
        clicks: this.hintClicksCount,
        text: `Пара слів із теми «${targetGroup.title}»: [ ${words[0]} ] та [ ${words[1]} ]`
      };
    }

    return {
      level: 4,
      clicks: this.hintClicksCount,
      text: `Тема «${targetGroup.title}» складається зі слів: ${words.join(", ")}`
    };
  }

  getAllSolvedGroups() {
    if (!this.currentPuzzle) return [];
    return this.currentPuzzle.groups.map((g, gIdx) => {
      const wordsList = g.items || g.words || [];
      const groupTiles = this.tiles.filter((t) => t.groupIndex === gIdx);
      return {
        ...g,
        items: groupTiles.length ? groupTiles : wordsList.map((txt) => ({ text: txt }))
      };
    });
  }
}