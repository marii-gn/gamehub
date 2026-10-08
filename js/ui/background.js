export class BackgroundAnimation {
  constructor(containerId, words, onWordSelected) {
    this.container = document.getElementById(containerId);
    this.words = words;
    this.onWordSelected = onWordSelected;
    this.pillCount = 36;
  }

  init() {
    if (!this.container) return;
    this.container.innerHTML = "";
    for (let i = 0; i < this.pillCount; i++) {
      const word = this.words[Math.floor(Math.random() * this.words.length)];
      const pill = this.createPill(word);
      this.container.appendChild(pill);
    }
  }

  createPill(word) {
    const el = document.createElement("span");
    el.className = "cloud-pill";
    el.textContent = word;
    el.setAttribute("draggable", "true");

    const left = Math.random() * 92;
    const duration = 24 + Math.random() * 26;
    const delay = -(Math.random() * duration);

    el.style.left = `${left}%`;
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;

    el.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", word);
      e.dataTransfer.effectAllowed = "copy";
    });

    el.addEventListener("pointerdown", () => {
      if (this.onWordSelected) this.onWordSelected(word);
    });

    return el;
  }
}