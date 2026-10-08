export class ClusterBgAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.clusters = [];
    this.animId = null;
    this.isRunning = false;
    this.gridSpacing = 50;

    this.handleResize = this.resize.bind(this);
  }

  init() {
    if (!this.canvas) return;
    this.resize();
    window.addEventListener("resize", this.handleResize);
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.createClusters();
  }

  createClusters() {
    this.clusters = [];
    const count = 18;
    for (let i = 0; i < count; i++) {
      this.clusters.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: 14 + Math.random() * 22,
        speed: 0.2 + Math.random() * 0.4,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        alpha: 0.15 + Math.random() * 0.25
      });
    }
  }

  start() {
    if (this.isRunning || !this.canvas) return;
    this.isRunning = true;
    this.canvas.classList.remove("hidden");
    this.resize();
    this.loop();
  }

  stop() {
    this.isRunning = false;
    if (this.animId) cancelAnimationFrame(this.animId);
    if (this.canvas) this.canvas.classList.add("hidden");
  }

  loop() {
    if (!this.isRunning) return;
    this.draw();
    this.animId = requestAnimationFrame(this.loop.bind(this));
  }

  draw() {
    const { ctx, canvas, clusters } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Цифрова матрична сітка
    ctx.strokeStyle = "rgba(192, 132, 252, 0.04)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += this.gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += this.gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // 2. Плаваючі модульні кластери
    clusters.forEach(c => {
      c.y -= c.speed;
      c.angle += c.rotSpeed;
      if (c.y < -50) c.y = canvas.height + 50;

      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.angle);

      ctx.strokeStyle = `rgba(192, 132, 252, ${c.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-c.size / 2, -c.size / 2, c.size, c.size);

      ctx.fillStyle = `rgba(56, 189, 248, ${c.alpha * 1.5})`;
      ctx.fillRect(-2, -2, 4, 4);

      ctx.restore();
    });
  }
}