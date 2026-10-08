export class ThermalBgAnimation {
  constructor(canvasId) {
    this.canvasId = canvasId;
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.particles = [];
    this.animId = null;
    this.isRunning = false;
    this.gridSpacing = 50;

    this.handleResize = () => {
      if (this.canvas) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      }
    };
  }

  init() {
    this.canvas = document.getElementById(this.canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  createParticles() {
    this.particles = [];
    const w = this.canvas?.width || window.innerWidth;
    const h = this.canvas?.height || window.innerHeight;
    const count = 28;

    for (let i = 0; i < count; i++) {
      const isFire = i % 2 === 0;
      this.particles.push({
        type: isFire ? "fire" : "snow",
        x: Math.random() * (w - 120) + 60,
        y: Math.random() * (h - 120) + 60,
        vx: (Math.random() * 0.12 + 0.05) * (Math.random() < 0.5 ? 1 : -1),
        vy: (Math.random() * 0.12 + 0.05) * (Math.random() < 0.5 ? 1 : -1),
        radius: isFire ? 7 + Math.random() * 3 : 5 + Math.random() * 2.5,
        alpha: 0.35 + Math.random() * 0.35,
        angle: (Math.random() - 0.5) * 0.2,
        rotSpeed: (Math.random() - 0.5) * 0.003,
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.01 + Math.random() * 0.01
      });
    }
  }

  start() {
    this.canvas = document.getElementById(this.canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.classList.remove("hidden");
    this.canvas.style.display = "block";
    this.canvas.style.pointerEvents = "none";
    
    this.handleResize();

    if (this.particles.length === 0) {
      this.createParticles();
    }

    if (this.isRunning) return;
    this.isRunning = true;
    this.loop();
  }

  stop() {
    this.isRunning = false;
    if (this.animId) cancelAnimationFrame(this.animId);
    if (this.canvas) {
      this.canvas.style.display = "none";
      if (this.ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  loop() {
    if (!this.isRunning) return;
    this.update();
    this.draw();
    this.animId = requestAnimationFrame(this.loop.bind(this));
  }

  update() {
    if (!this.canvas) return;
    const w = this.canvas.width;
    const h = this.canvas.height;

    this.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.rotSpeed;
      p.pulse += p.pulseSpeed;

      const r = p.radius * 2;

      if (p.x - r <= 0) {
        p.x = r;
        p.vx = Math.abs(p.vx);
      } else if (p.x + r >= w) {
        p.x = w - r;
        p.vx = -Math.abs(p.vx);
      }

      if (p.y - r <= 0) {
        p.y = r;
        p.vy = Math.abs(p.vy);
      } else if (p.y + r >= h) {
        p.y = h - r;
        p.vy = -Math.abs(p.vy);
      }
    });
  }

  draw() {
    if (!this.ctx || !this.canvas) return;
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(249, 115, 22, 0.03)";
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

    this.particles.forEach((p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      if (p.type === "fire") {
        this.drawFire(ctx, p);
      } else {
        this.drawSnow(ctx, p);
      }

      ctx.restore();
    });
  }

  // Потрійний язик полум'я (корона вогню)
  drawFire(ctx, p) {
    const pulseGlow = (Math.sin(p.pulse) + 1) * 0.5;
    const currentAlpha = p.alpha * (0.65 + pulseGlow * 0.35);
    const r = p.radius;

    ctx.shadowBlur = 10 + pulseGlow * 6;
    ctx.shadowColor = "rgba(249, 115, 22, 0.65)";

    // Знеособлений контур потрійного вогнику
    ctx.beginPath();
    ctx.moveTo(0, -r * 2.2); // Центральний вершок
    ctx.quadraticCurveTo(r * 0.4, -r * 1.2, r * 0.6, -r * 0.8); // До западини
    ctx.quadraticCurveTo(r * 1.3, -r * 1.2, r * 1.2, -r * 0.1); // Правий боковий вершок
    ctx.quadraticCurveTo(r * 1.1, r * 1.1, 0, r * 1.1); // Нижня основа
    ctx.quadraticCurveTo(-r * 1.1, r * 1.1, -r * 1.2, -r * 0.1); // Ліва основа
    ctx.quadraticCurveTo(-r * 1.3, -r * 1.2, -r * 0.6, -r * 0.8); // Лівий боковий вершок
    ctx.quadraticCurveTo(-r * 0.4, -r * 1.2, 0, -r * 2.2); // Повернення до центрального
    ctx.closePath();

    ctx.fillStyle = `rgba(249, 115, 22, ${currentAlpha})`;
    ctx.fill();

    // Гаряче серцевинне світіння
    ctx.beginPath();
    ctx.moveTo(0, -r * 1.4);
    ctx.quadraticCurveTo(r * 0.3, -r * 0.7, r * 0.4, -r * 0.4);
    ctx.quadraticCurveTo(r * 0.8, -r * 0.7, r * 0.7, 0);
    ctx.quadraticCurveTo(r * 0.6, r * 0.6, 0, r * 0.6);
    ctx.quadraticCurveTo(-r * 0.6, r * 0.6, -r * 0.7, 0);
    ctx.quadraticCurveTo(-r * 0.8, -r * 0.7, -r * 0.4, -r * 0.4);
    ctx.quadraticCurveTo(-r * 0.3, -r * 0.7, 0, -r * 1.4);
    ctx.closePath();

    ctx.fillStyle = `rgba(254, 215, 170, ${currentAlpha * 0.85})`;
    ctx.fill();

    ctx.shadowBlur = 0;
  }

  drawSnow(ctx, p) {
    const pulseGlow = (Math.sin(p.pulse) + 1) * 0.5;
    const currentAlpha = p.alpha * (0.65 + pulseGlow * 0.35);
    const r = p.radius * 1.4;

    ctx.shadowBlur = 6;
    ctx.shadowColor = "rgba(56, 189, 248, 0.6)";
    ctx.strokeStyle = `rgba(186, 230, 253, ${currentAlpha})`;
    ctx.lineWidth = 1.1;
    ctx.lineCap = "round";

    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(-r, 0);
      ctx.lineTo(r, 0);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-r * 0.55, -r * 0.22);
      ctx.lineTo(-r * 0.35, 0);
      ctx.lineTo(-r * 0.55, r * 0.22);

      ctx.moveTo(r * 0.55, -r * 0.22);
      ctx.lineTo(r * 0.35, 0);
      ctx.lineTo(r * 0.55, r * 0.22);
      ctx.stroke();

      ctx.rotate(Math.PI / 3);
    }

    ctx.beginPath();
    ctx.arc(0, 0, 1.1, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
    ctx.fill();

    ctx.shadowBlur = 0;
  }
}