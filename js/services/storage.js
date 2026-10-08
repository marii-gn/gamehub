export class StorageService {
  static USER_NAME_KEY = "cyber_terminal_user_name";
  static STATS_KEY = "cyber_terminal_stats";

  static getUserName() {
    return localStorage.getItem(this.USER_NAME_KEY) || "Гість";
  }

  static setUserName(name) {
    if (!name || !name.trim()) return;
    localStorage.setItem(this.USER_NAME_KEY, name.trim());
  }

  static getStats() {
    const raw = localStorage.getItem(this.STATS_KEY);
    if (!raw) {
      return {
        categories: { played: 0, wins: 0, bestRatio: 0 },
        chain: { played: 0, highScore: 0 },
        connections: { played: 0, wins: 0 },
        recentSessions: []
      };
    }
    try {
      const stats = JSON.parse(raw);
      if (!stats.connections) stats.connections = { played: 0, wins: 0 };
      return stats;
    } catch (e) {
      return {
        categories: { played: 0, wins: 0, bestRatio: 0 },
        chain: { played: 0, highScore: 0 },
        connections: { played: 0, wins: 0 },
        recentSessions: []
      };
    }
  }

  static saveStats(stats) {
    localStorage.setItem(this.STATS_KEY, JSON.stringify(stats));
  }

  static recordCategoriesResult(isWin) {
    const stats = this.getStats();
    stats.categories.played += 1;
    if (isWin) stats.categories.wins += 1;
    stats.categories.bestRatio = Math.round((stats.categories.wins / stats.categories.played) * 100);

    stats.recentSessions.unshift({
      title: "Таємні Категорії",
      scoreText: isWin ? "Перемога" : "Поразка",
      date: new Date().toLocaleDateString("uk-UA", { hour: "2-digit", minute: "2-digit" })
    });
    stats.recentSessions = stats.recentSessions.slice(0, 5);
    this.saveStats(stats);
  }

  static recordChainResult(score) {
    const stats = this.getStats();
    stats.chain.played += 1;
    if (score > stats.chain.highScore) {
      stats.chain.highScore = score;
    }

    stats.recentSessions.unshift({
      title: "Ланцюг Слів",
      scoreText: `${score} / 100 б.`,
      date: new Date().toLocaleDateString("uk-UA", { hour: "2-digit", minute: "2-digit" })
    });
    stats.recentSessions = stats.recentSessions.slice(0, 5);
    this.saveStats(stats);
  }

  static recordConnectionsResult(isWin, solvedCount) {
    const stats = this.getStats();
    stats.connections.played += 1;
    if (isWin) stats.connections.wins += 1;

    stats.recentSessions.unshift({
      title: "Код Чотирьох",
      scoreText: isWin ? "4/4 (Зламано)" : `${solvedCount}/4 груп`,
      date: new Date().toLocaleDateString("uk-UA", { hour: "2-digit", minute: "2-digit" })
    });
    stats.recentSessions = stats.recentSessions.slice(0, 5);
    this.saveStats(stats);
  }
}