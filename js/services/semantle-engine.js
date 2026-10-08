import { SEMANTLE_PUZZLES } from "../data/semantle.js";

export const SEMANTIC_FEATURES = {
  // Кластер: Мова / Текст / Інформація
  "мова": [0.96, 0.05, 0.05, 0.35, 0.92, 0.10, 0.05, 0.60],
  "слово": [0.98, 0.02, 0.05, 0.30, 0.90, 0.15, 0.05, 0.50],
  "розмова": [0.92, 0.02, 0.05, 0.70, 0.85, 0.10, 0.05, 0.65],
  "голос": [0.75, 0.05, 0.05, 0.88, 0.70, 0.15, 0.05, 0.60],
  "думка": [0.85, 0.05, 0.02, 0.80, 0.85, 0.10, 0.02, 0.90],
  "текст": [0.95, 0.02, 0.30, 0.20, 0.88, 0.25, 0.02, 0.40],
  "книга": [0.94, 0.02, 0.65, 0.25, 0.86, 0.10, 0.02, 0.45],
  "папір": [0.80, 0.05, 0.92, 0.10, 0.55, 0.10, 0.02, 0.15],
  "читати": [0.92, 0.02, 0.25, 0.60, 0.85, 0.10, 0.02, 0.50],
  "письменник": [0.90, 0.02, 0.20, 0.90, 0.95, 0.10, 0.02, 0.70],

  // Кластер: Побут / Меблі / Кімната
  "ліжко": [0.05, 0.02, 0.88, 0.65, 0.10, 0.10, 0.02, 0.40],
  "подушка": [0.05, 0.02, 0.92, 0.60, 0.10, 0.05, 0.02, 0.45],
  "ковдра": [0.05, 0.02, 0.95, 0.60, 0.10, 0.05, 0.02, 0.45],
  "меблі": [0.02, 0.02, 0.92, 0.40, 0.15, 0.10, 0.02, 0.10],
  "стіл": [0.15, 0.02, 0.90, 0.35, 0.15, 0.10, 0.02, 0.10],
  "кімната": [0.10, 0.05, 0.85, 0.50, 0.20, 0.15, 0.02, 0.20],
  "дім": [0.10, 0.10, 0.80, 0.70, 0.30, 0.15, 0.05, 0.60],

  // Кластер: Технології / Ігри
  "екран": [0.25, 0.05, 0.70, 0.20, 0.40, 0.92, 0.02, 0.15],
  "телефон": [0.45, 0.02, 0.65, 0.40, 0.30, 0.95, 0.02, 0.25],
  "комп'ютер": [0.50, 0.02, 0.65, 0.30, 0.40, 0.98, 0.02, 0.25],
  "гра": [0.30, 0.05, 0.20, 0.70, 0.80, 0.65, 0.02, 0.85]
};

export const DEFAULT_SEMANTLE_PUZZLES = [
  {
    secret: "мова",
    category: "Суспільство / Культура",
    weights: {
      "мова": 100.00,
      "слово": 89.20,
      "розмова": 84.60,
      "голос": 78.40,
      "текст": 74.10,
      "думка": 68.30,
      "книга": 65.50,
      "читати": 62.10,
      "папір": 48.70,
      "телефон": 31.20,
      "гра": 26.40,
      "екран": 19.80,
      "стіл": 14.50,
      "кімната": 11.20,
      "ліжко": 6.80,
      "подушка": 5.40,
      "ковдра": 4.90,
      "меблі": 4.20
    }
  },
  {
    secret: "книга",
    category: "Культура / Знання",
    weights: {
      "книга": 100.00,
      "біблія": 92.00,
      "роман": 89.50,
      "сторінка": 89.10,
      "текст": 85.30,
      "папір": 84.70,
      "читати": 82.00,
      "слово": 78.40,
      "письменник": 75.90,
      "мова": 66.80,
      "стіл": 34.20,
      "кімната": 21.50,
      "екран": 18.40,
      "ліжко": 14.20,
      "подушка": 11.50,
      "ковдра": 9.80,
      "меблі": 8.40,
      "шоколад": 3.50,
      "калюжа": 2.00
    }
  },
  {
    secret: "сонце",
    category: "Астрономія / Природа",
    weights: {
      "сонце": 100.00,
      "промінь": 89.50,
      "зірка": 86.40,
      "світло": 84.20,
      "тепло": 81.30,
      "літо": 72.50,
      "небо": 68.10,
      "вогонь": 59.40,
      "день": 54.20,
      "кімната": 15.30,
      "екран": 12.10,
      "книга": 5.20,
      "ліжко": 4.80,
      "подушка": 3.90
    }
  }
];

const SEMANTIC_RELATIONS = {
  "книга": ["біблія", "роман", "повість", "підручник", "том", "видання", "література", "друк", "письменник", "сторінка", "обкладинка", "поезія", "казка", "енциклопедія"],
  "мова": ["слово", "розмова", "голос", "думка", "буква", "алфавіт", "літера", "письмо", "діалог", "словник", "граматика"],
  "сонце": ["промінь", "зірка", "світло", "тепло", "літо", "небо", "день", "світанок", "жара", "космос", "планета"],
  "собака": ["песик", "цуценя", "хвіст", "гавкіт", "поводок", "порода", "тварина", "друг", "шерсть"],
  "кіт": ["кошеня", "вуса", "кігті", "муркотіння", "шерсть", "тварина", "миша"],
  "холодно": ["гаряче", "тепло", "прохолодно", "мороз", "лід", "температура", "градус", "окріп", "холод"],
  "гаряче": ["холодно", "тепло", "окріп", "жара", "температура", "градус", "полум'я", "вогонь"],
  
  "_clusters": {
    "температура_терміка": ["холодно", "гаряче", "тепло", "прохолодно", "мороз", "жара", "окріп", "лід", "температура", "градус"],
    "література": ["книга", "біблія", "папір", "сторінка", "текст", "читати", "письменник", "газета", "журнал", "зошит", "автор", "друк", "видання", "бібліотека", "роман"],
    "солодощі": ["шоколад", "цукерка", "торт", "печиво", "цукор", "десерт", "їжа", "смаколик", "какао"],
    "водойми": ["калюжа", "вода", "дощ", "річка", "море", "озеро", "бруд", "хмара", "потік"]
  }
};

export class SemantleEngine {
  constructor(puzzles = SEMANTLE_PUZZLES) {
    this.puzzles = Array.isArray(puzzles) && puzzles.length > 0 ? puzzles : DEFAULT_SEMANTLE_PUZZLES;
    this.currentPuzzle = null;
    this.guesses = [];
    this.isWin = false;
    this.isGaveUp = false;
  }

  startNewGame() {
    if (!this.puzzles || this.puzzles.length === 0) return;
    const idx = Math.floor(Math.random() * this.puzzles.length);
    this.currentPuzzle = this.puzzles[idx];
    this.guesses = [];
    this.isWin = false;
    this.isGaveUp = false;
  }

  // Функція нормалізації слів (видалення відмінкових/числових закінчень)
  getStem(word) {
    if (!word || word.length <= 3) return word;
    return word.replace(/(ами|ах|ям|ях|ові|ем|ом|єю|ей|ів|ев|їв|ам|ям|и|і|а|я|е|є|о|у|ю)$/i, "");
  }

  calculateSimilarity(word) {
    const normalized = word.trim().toLowerCase();
    const secret = (this.currentPuzzle?.secret || "").toLowerCase();
    const weights = this.currentPuzzle?.weights || {};

    // 1. Точний збіг
    if (normalized === secret) return 100.0;

    // 2. Точна відповідність у ваговій таблиці
    if (weights[normalized] !== undefined) {
      return weights[normalized];
    }

    // 3. Збіг основи слова (однина/множина/відмінки: наприклад, "слова" та "слово")
    const wordStem = this.getStem(normalized);
    const secretStem = this.getStem(secret);

    if (wordStem.length >= 3 && wordStem === secretStem) {
      return 95.00;
    }

    // Пошук збігу основи серед слів вагового словника
    for (const [keyWord, weight] of Object.entries(weights)) {
      const keyStem = this.getStem(keyWord);
      if (wordStem.length >= 3 && wordStem === keyStem) {
        return weight * 0.95;
      }
    }

    // 4. Перевірка за графом семантичних зв'язків
    const directRelations = SEMANTIC_RELATIONS[secret] || [];
    if (directRelations.some(r => this.getStem(r) === wordStem || r === normalized)) {
      return 75.00;
    }

    for (const cluster of Object.values(SEMANTIC_RELATIONS._clusters)) {
      if (cluster.includes(secret) && cluster.some(item => this.getStem(item) === wordStem)) {
        return 58.00;
      }
    }

    // 5. Низький фалбек для непов'язаних слів
    let sum = 0;
    for (let i = 0; i < Math.min(normalized.length, secret.length); i++) {
      if (normalized[i] === secret[i]) sum += 2;
    }
    
    return Math.max(1.0, Math.min(12.0, sum + (normalized.length % 3)));
  }

  getProximityLabel(similarity) {
    if (similarity >= 100) return { label: "ЗНАЙДЕНО!", css: "found" };
    if (similarity >= 80) return { label: "ПАЛАЄ", css: "burning" };
    if (similarity >= 65) return { label: "ГАРЯЧО", css: "hot" };
    if (similarity >= 50) return { label: "ТЕПЛО", css: "warm" };
    if (similarity >= 25) return { label: "ПРОХОЛОДНО", css: "cool" };
    return { label: "ХОЛОДНО", css: "ice" };
  }

  submitGuess(word) {
    if (!word || this.isWin || this.isGaveUp) return { status: "empty" };

    const normalized = word.trim().toLowerCase();
    if (this.guesses.some((g) => g.word === normalized)) {
      return { status: "already_guessed", word: normalized };
    }

    const similarity = this.calculateSimilarity(normalized);
    const proximity = this.getProximityLabel(similarity);

    const entry = {
      order: this.guesses.length + 1,
      word: normalized,
      similarity: similarity,
      proximity: proximity
    };

    this.guesses.push(entry);

    if (similarity >= 100) {
      this.isWin = true;
      return { status: "win", entry };
    }

    return { status: "guess_added", entry };
  }

  getHint() {
    if (!this.currentPuzzle || this.isWin || this.isGaveUp) return null;
    const weights = this.currentPuzzle.weights || {};
    const unguessWords = Object.keys(weights).filter(
      (w) => w !== this.currentPuzzle.secret && !this.guesses.some((g) => g.word === w)
    );

    if (unguessWords.length === 0) return null;

    const randomWord = unguessWords[Math.floor(Math.random() * unguessWords.length)];
    const similarity = weights[randomWord];

    return { word: randomWord, similarity };
  }

  giveUp() {
    this.isGaveUp = true;
    return this.currentPuzzle ? this.currentPuzzle.secret : "";
  }
}