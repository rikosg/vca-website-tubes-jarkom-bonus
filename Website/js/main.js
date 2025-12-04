// ===============================
// 1. Update copyright year
// ===============================
(function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();


// ===============================
// 2. Smooth Scroll for internal anchor links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ===============================
// 3. Header shrink on scroll
// ===============================
(function headerShrink() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const current = window.pageYOffset;

    if (current > lastScroll && current > 60) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
    lastScroll = current;
  });
})();


// ===============================
// 4. Reveal animation on scroll
// ===============================
const revealElements = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("revealed");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// 5. Mobile Navigation Toggle (if used)
// ===============================
(function mobileNav() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    btn.classList.toggle("open");
  });
})();