import { WORD_CARDS } from "./wave/wordCards.js";
import { BLANK_CARDS } from "./wave/blankCards.js";
import { NUMBER_CARDS } from "./wave/numberCards.js";
import { CHALLENGE_CARDS } from "./wave/challengeCards.js";

export const CATEGORY_NAMES = {
  word: "Збіг слів 🗣️",
  blank: "Заповни пропуски ✏️",
  number: "Вгадай число 🔢",
  challenge: "Випробування ⏱️",
};

export const CATEGORY_INSTRUCTIONS = {
  word: "З партнером одночасно запишіть першу ж однакову асоціацію!",
  blank: "Не змовляючись, однаково доповніть пропущене слово у фразі!",
  number: "Психологічно відчуйте партнера та вкажіть ТОЧНО таке ж число!",
  challenge: "Синхронний квест: виконайте вказівку абсолютно однаково!",
};

const build = (type, list) =>
  list.map(([prompt, hint], i) => ({
    id: `${type}-${String(i + 1).padStart(3, "0")}`,
    type,
    catName: CATEGORY_NAMES[type],
    typeInstruction: CATEGORY_INSTRUCTIONS[type],
    prompt,
    hint,
  }));

export const WAVE_CARDS = [
  ...build("word", WORD_CARDS),
  ...build("blank", BLANK_CARDS),
  ...build("number", NUMBER_CARDS),
  ...build("challenge", CHALLENGE_CARDS),
];