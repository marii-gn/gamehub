export class ConstellationAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.starCount = 55;
    this.connectionDistance = 145;
    this.mouse = { x: null, y: null, radius: 170 };
    this.animId = null;
    this.isRunning = false;

    this.handleResize = this.resize.bind(this);
    this.handleMouseMove = (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    };
    this.handleMouseLeave = () => {
      this.mouse.x = null;
      this.mouse.y = null;
    };
  }

  init() {
    if (!this.canvas) return;
    this.resize();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseleave", this.handleMouseLeave);
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.createStars();
  }

  createStars() {
    this.stars = [];
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: 1.6 + Math.random() * 1.8,
        alpha: 0.35 + Math.random() * 0.55
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
    const { ctx, canvas, stars, mouse, connectionDistance } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Рух та малювання зірок
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.x += s.vx;
      s.y += s.vy;

      if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
      if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(45, 212, 191, ${s.alpha})`;
      ctx.shadowBlur = 9;
      ctx.shadowColor = "rgba(45, 212, 191, 0.85)";
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // 2. З'єднання зірок у сузір'я (ланцюжки)
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < connectionDistance) {
          const lineAlpha = (1 - dist / connectionDistance) * 0.28;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // 3. З'єднання лініями з мишкою
      if (mouse.x !== null && mouse.y !== null) {
        const mdx = stars[i].x - mouse.x;
        const mdy = stars[i].y - mouse.y;
        const mDist = Math.hypot(mdx, mdy);

        if (mDist < mouse.radius) {
          const mouseAlpha = (1 - mDist / mouse.radius) * 0.45;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(45, 212, 191, ${mouseAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }
  }
}