import { CONNECTIONS_PUZZLES } from "../data/connections.js";

export class ConnectionsEngine {
  constructor(puzzles = CONNECTIONS_PUZZLES) {
    this.puzzles = puzzles;
    this.currentPuzzle = null;
    this.tiles = [];
    this.selectedIds = [];
    this.solvedGroups = [];
    this.lives = 5;
    this.isGameOver = false;
    this.isWin = false;
  }

  startNewGame() {
    const randomIdx = Math.floor(Math.random() * this.puzzles.length);
    this.currentPuzzle = this.puzzles[randomIdx];
    this.lives = 5;
    this.solvedGroups = [];
    this.selectedIds = [];
    this.isGameOver = false;
    this.isWin = false;

    const items = [];
    this.currentPuzzle.groups.forEach((group, gIdx) => {
      group.items.forEach((text, iIdx) => {
        items.push({
          id: `t_${gIdx}_${iIdx}`,
          text,
          groupIndex: gIdx
        });
      });
    });

    this.tiles = this.shuffle(items);
  }

  shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  shuffleRemaining() {
    const remaining = this.tiles.filter(t => !this.isTileSolved(t.id));
    const shuffled = this.shuffle(remaining);
    this.tiles = this.tiles.map(t => {
      if (this.isTileSolved(t.id)) return t;
      return shuffled.pop();
    });
  }

  isTileSolved(tileId) {
    return this.solvedGroups.some(g => g.items.some(it => it.id === tileId));
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

  submitSelection() {
    if (this.selectedIds.length !== 4 || this.isGameOver) {
      return { status: "incomplete" };
    }

    const selectedTiles = this.tiles.filter(t => this.selectedIds.includes(t.id));
    const firstGroupIdx = selectedTiles[0].groupIndex;
    const isSameGroup = selectedTiles.every(t => t.groupIndex === firstGroupIdx);

    if (isSameGroup) {
      const groupData = this.currentPuzzle.groups[firstGroupIdx];
      this.solvedGroups.push({
        ...groupData,
        items: selectedTiles
      });
      this.selectedIds = [];

      if (this.solvedGroups.length === 4) {
        this.isGameOver = true;
        this.isWin = true;
        return { status: "win", group: groupData };
      }

      return { status: "correct", group: groupData };
    } else {
      const groupCounts = {};
      selectedTiles.forEach(t => {
        groupCounts[t.groupIndex] = (groupCounts[t.groupIndex] || 0) + 1;
      });
      const oneAway = Object.values(groupCounts).includes(3);

      this.lives -= 1;
      if (this.lives <= 0) {
        this.isGameOver = true;
        this.isWin = false;
        return { status: "lose", oneAway };
      }

      return { status: "wrong", oneAway, livesLeft: this.lives };
    }
  }

  clearSelection() {
    this.selectedIds = [];
  }
}