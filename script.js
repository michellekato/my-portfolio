// PROGRESS BAR
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;

  const bar = document.getElementById("prog");
  if (bar) bar.style.width = progress + "%";
});

// NAV SCROLL
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (!nav) return;

  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// REVEAL ANIMATION
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("on");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".r").forEach((el) => observer.observe(el));
