import { MASTER_CHAINS } from "../data/chains.js";

export class ChainEngine {
  constructor(chains = MASTER_CHAINS) {
    this.allChains = chains;
    this.deck = [];
    this.currentChain = null;
    this.targetIndex = 1; // 1..5 відгадуються, 0 і 6 відомі
    this.revealedLetters = {};
    this.solvedWords = [];
    this.totalScore = 100;
    this.wordScores = {};
    this.isFinished = false;
  }

  // Нормалізація: регістр, пробіли, різні види апострофа, ё/ґ не чіпаємо
  static normalize(str) {
    return String(str || "")
      .trim()
      .toLowerCase()
      .replace(/[’ʼ`´‘]/g, "'");
  }

  static shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  startNewGame() {
    // Колода: усі ланцюжки по одному разу, потім перемішується знову
    if (this.deck.length === 0) {
      this.deck = ChainEngine.shuffle(this.allChains);
    }
    this.currentChain = this.deck.pop();
    this.targetIndex = 1;
    this.solvedWords = [0]; // Перше слово відкрито за замовчуванням
    this.revealedLetters = { 1: 1 }; // Перша літера першого слова відкрита
    this.totalScore = 100;
    this.wordScores = {};
    this.isFinished = false;
  }

  get items() {
    return this.currentChain ? this.currentChain.items : [];
  }

  // Слово, яке гравець має ввести зараз (у базовій/відповідній формі)
  getCurrentTargetWord() {
    return this.items[this.targetIndex]?.target || "";
  }

  // Трансформована форма попереднього слова для поєднання з поточним
  getPreviousTransitionWord() {
    const prev = this.items[this.targetIndex - 1];
    return prev ? prev.transition : "";
  }

  // Що показується на екрані для вже відгаданої ланки
  getDisplayWordForIndex(index) {
    const item = this.items[index];
    if (!item) return "";
    
    // Якщо ця ланка вже відгадана, і ми перейшли далі (або завершили) —
    // вона показує свою трансформовану форму, щоб фраза була ідеальною
    if (index < this.targetIndex || this.isFinished) {
      return item.transition;
    }
    return item.target;
  }

  calculateCurrentWordPotential() {
    const word = this.getCurrentTargetWord();
    if (!word) return 0;
    const len = word.length;
    if (len <= 1) return 20;

    const revealed = this.revealedLetters[this.targetIndex] || 1;
    const penaltyLetters = revealed - 1;
    const maxPenaltyLetters = len - 1;

    const costPerLetter = 20 / maxPenaltyLetters;
    return Math.max(0, Math.round(20 - penaltyLetters * costPerLetter));
  }

  guessWord(input) {
    if (this.isFinished) return { status: "already_finished" };

    const item = this.items[this.targetIndex];
    const targetWord = ChainEngine.normalize(item.target);
    const cleanGuess = ChainEngine.normalize(input);

    // Слово міняє лише форму, тому приймаємо і форму з попередньої фрази (target),
    // і форму з наступної фрази (transition), напр. «екрану» та «екран»
    const acceptedForms = [targetWord, ChainEngine.normalize(item.transition)];

    if (acceptedForms.includes(cleanGuess)) {
      const earned = this.calculateCurrentWordPotential();
      this.wordScores[this.targetIndex] = earned;
      this.solvedWords.push(this.targetIndex);

      return this.advanceToNextWord(true, earned);
    } else {
      const len = targetWord.length;
      let currentRevealed = this.revealedLetters[this.targetIndex] || 1;

      if (currentRevealed < len) {
        currentRevealed += 1;
        this.revealedLetters[this.targetIndex] = currentRevealed;
      }

      if (currentRevealed >= len) {
        this.wordScores[this.targetIndex] = 0;
        this.solvedWords.push(this.targetIndex);
        return this.advanceToNextWord(false, 0, true);
      }

      this.recalculateTotalScore();
      return {
        status: "wrong",
        revealedCount: currentRevealed,
        potential: this.calculateCurrentWordPotential()
      };
    }
  }

  advanceToNextWord(isGuessed, earnedPoints, autoOpened = false) {
    this.recalculateTotalScore();

    if (this.targetIndex >= 5) {
      this.solvedWords.push(6); // Фінішне 7-ме слово
      this.isFinished = true;
      return {
        status: "game_complete",
        totalScore: this.totalScore,
        earned: earnedPoints,
        autoOpened
      };
    }

    this.targetIndex += 1;
    this.revealedLetters[this.targetIndex] = 1;

    return {
      status: isGuessed ? "correct" : "auto_opened",
      earned: earnedPoints,
      nextIndex: this.targetIndex,
      autoOpened
    };
  }

  recalculateTotalScore() {
    let score = 0;
    for (let i = 1; i <= 5; i++) {
      if (this.wordScores[i] !== undefined) {
        score += this.wordScores[i];
      } else if (i === this.targetIndex) {
        score += this.calculateCurrentWordPotential();
      } else {
        score += 20;
      }
    }
    this.totalScore = score;
    return this.totalScore;
  }
}