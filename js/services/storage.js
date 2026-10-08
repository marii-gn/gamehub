export class StorageService {
  static USER_KEY = "cyber_terminal_user_name";
  static STATS_KEY = "cyber_terminal_stats_v1";

  static getUserName() {
    return localStorage.getItem(StorageService.USER_KEY) || "Гравець";
  }

  static setUserName(name) {
    const cleanName = name.trim() || "Гравець";
    localStorage.setItem(StorageService.USER_KEY, cleanName);
    return cleanName;
  }

  static getStats() {
    const defaultData = {
      categories: {
        played: 0,
        wins: 0,
        bestRatio: 0
      },
      chain: {
        played: 0,
        highScore: null
      },
      recentSessions: []
    };

    try {
      const raw = localStorage.getItem(StorageService.STATS_KEY);
      return raw ? { ...defaultData, ...JSON.parse(raw) } : defaultData;
    } catch {
      return defaultData;
    }
  }

  static recordCategoriesResult(isWin) {
    const data = StorageService.getStats();
    data.categories.played += 1;
    if (isWin) data.categories.wins += 1;

    data.categories.bestRatio = Math.round((data.categories.wins / data.categories.played) * 100);

    StorageService.addSession(data, {
      gameId: "categories",
      title: "Таємні Категорії",
      scoreText: isWin ? "Перемога" : "Поразка",
      date: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    });

    localStorage.setItem(StorageService.STATS_KEY, JSON.stringify(data));
    return data;
  }

  static recordChainResult(score) {
    const data = StorageService.getStats();
    data.chain.played += 1;

    if (data.chain.highScore === null || score > data.chain.highScore) {
      data.chain.highScore = score;
    }

    StorageService.addSession(data, {
      gameId: "chain",
      title: "Ланцюг Слів",
      scoreText: `${score} / 100 б.`,
      date: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    });

    localStorage.setItem(StorageService.STATS_KEY, JSON.stringify(data));
    return data;
  }

  static addSession(data, session) {
    if (!Array.isArray(data.recentSessions)) data.recentSessions = [];
    data.recentSessions.unshift(session);
    if (data.recentSessions.length > 5) {
      data.recentSessions = data.recentSessions.slice(0, 5);
    }
  }
}