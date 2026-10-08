export class GameEngine {
  constructor(categories = []) {
    this.allCategories = categories;
    this.deck = [];
    this.mode = "friend"; // 'friend' або 'solo'
    this.currentPlayer = 1;
    this.p1Category = null;
    this.p2Category = null;
    this.wordsP1 = [];
    this.wordsP2 = [];
    this.isSoloRevealed = false;
  }

  static shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  drawCategory() {
    if (this.deck.length === 0) {
      this.deck = GameEngine.shuffle(this.allCategories);
    }
    return this.deck.pop();
  }

  startNewGame() {
    this.p1Category = this.drawCategory();
    this.p2Category = this.drawCategory();
    this.currentPlayer = 1;
    this.wordsP1 = [];
    this.wordsP2 = [];
    this.isSoloRevealed = false;
  }

  setMode(mode) {
    this.mode = mode;
    this.startNewGame();
  }

  switchTurn() {
    if (this.mode === "solo") return;
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

  // Якщо черга Гравця 1 -> ціль Гравець 2 (p2Category)
  // Якщо черга Гравця 2 -> ціль Гравець 1 (p1Category)
  // Якщо соло -> ціль Бот (p2Category)
  getTargetCategory() {
    if (this.mode === "solo") return this.p2Category;
    return this.currentPlayer === 1 ? this.p2Category : this.p1Category;
  }

  // Номер гравця-суперника, чию категорію зараз відгадують
  getTargetPlayerNumber() {
    if (this.mode === "solo") return 2;
    return this.currentPlayer === 1 ? 2 : 1;
  }

  // Секретна умова гравця, чия зараз черга (для кнопки "Підглянути")
  getCurrentPlayerCategory() {
    return this.currentPlayer === 1 ? this.p1Category : this.p2Category;
  }

  // Гравець відгадує слово під умову супротивника, тому слово записується в історію супротивника
  addWord(text, isMatch) {
    const entry = { text, isMatch, time: Date.now() };
    const target = this.getTargetPlayerNumber();

    if (target === 1) {
      this.wordsP1.push(entry);
    } else {
      this.wordsP2.push(entry);
    }
  }

  submitWordToBot(text) {
    const isMatch = this.p2Category.check ? this.p2Category.check(text) : false;
    this.wordsP2.push({ text, isMatch, time: Date.now() });
    return isMatch;
  }

  verifyBotGuess(userGuess) {
    const normalizedGuess = userGuess.trim().toLowerCase();
    const target = this.p2Category;
    const fullText = target.text.toLowerCase();
    const keywords = target.keywords || [];

    const matchedByKeyword = keywords.some((kw) => normalizedGuess.includes(kw));
    const matchedByText = fullText
      .split(" ")
      .filter((w) => w.length > 4)
      .some((w) => normalizedGuess.includes(w));

    return matchedByKeyword || matchedByText;
  }
}