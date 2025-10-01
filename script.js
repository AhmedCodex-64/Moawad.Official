document.addEventListener("DOMContentLoaded", () => {
  // كل سكشن سكرول (صور + فيديوهات)
  document.querySelectorAll(".scroll-container").forEach(container => {
    container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector(".background-circles");

  for (let i = 0; i < 20; i++) {
    let span = document.createElement("span");
    let size = Math.random() * 20 + 10; // حجم الكورة
    span.style.width = size + "px";
    span.style.height = size + "px";
    span.style.left = Math.random() * 100 + "%";
    span.style.bottom = "-50px";
    span.style.animationDuration = Math.random() * 15 + 10 + "s";
    span.style.animationDelay = Math.random() * 5 + "s";
    bg.appendChild(span);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");

  // ضبط المقاسات
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // كرات متحركة
  class Circle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 100; // يبدأ من تحت
      this.size = Math.random() * 4 + 2; // حجم الكورة
      this.speed = Math.random() * 1 + 0.5; // سرعة الطلوع
      this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.y -= this.speed;
      if (this.y < -10) this.reset(); // يعيد الكورة تحت
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`; // دهبي شفاف
      ctx.fill();
    }
  }

  // انشاء كور
  const circles = [];
  for (let i = 0; i < 50; i++) {
    circles.push(new Circle());
  }

  // حلقة الرسم
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach(circle => {
      circle.update();
      circle.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
});

class Circle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = Math.random() * 4 + 2;
    this.baseSpeed = Math.random() * 1 + 0.5; // السرعة الأصلية
    this.speed = this.baseSpeed * 3; // تبدأ سريعة ×3
    this.opacity = Math.random() * 0.5 + 0.3;
    this.createdAt = Date.now(); // وقت الإنشاء
  }

  update() {
    const elapsed = (Date.now() - this.createdAt) / 1000; // بالثواني

    // بعد 3 ثواني تبطأ للسرعة العادية
    if (elapsed > 3) {
      this.speed = this.baseSpeed;
    }

    this.y -= this.speed;
    if (this.y < -10) this.reset();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
    ctx.fill();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // كل سكشن سكرول (صور + فيديوهات)
  document.querySelectorAll(".scroll-container, .videos-scroll").forEach(container => {
    container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
  });
});

