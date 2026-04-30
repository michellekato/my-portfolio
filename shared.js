const prog = document.getElementById("prog");
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  const pct =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  prog.style.width = pct + "%";
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

// Reveal
const els = document.querySelectorAll(".r");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("on");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.06, rootMargin: "0px 0px -30px 0px" },
);
els.forEach((el) => obs.observe(el));
requestAnimationFrame(() => {
  els.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight + 50)
      el.classList.add("on");
  });
});

// YouTube thumbnails click-to-play
document.querySelectorAll(".yt-thumb").forEach((thumb) => {
  thumb.addEventListener("click", function () {
    const id = this.dataset.id;
    this.outerHTML =
      '<iframe src="https://www.youtube.com/embed/' +
      id +
      '?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen style="width:420px;height:230px;border:none;display:block;border-radius:.75rem;"></iframe>';
  });
});

// Cases carousel — duplicate cards for seamless loop
// Cases carousel — only clone on desktop
const casesTrack = document.getElementById("casesTrack");
if (casesTrack && window.innerWidth > 767) {
  Array.from(casesTrack.children).forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    casesTrack.appendChild(clone);
  });
}

// Arrows click → scroll next section to top
document.querySelectorAll(".arrows").forEach((arrows) => {
  arrows.style.cursor = "pointer";
  arrows.addEventListener("click", () => {
    let next = arrows.nextElementSibling;
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Footer
document.body.insertAdjacentHTML(
  "beforeend",
  '<footer><div class="flinks">' +
    '<a href="https://linkedin.com/in/michellekato" target="_blank">LinkedIn</a>' +
    '<span class="fsep">✦</span>' +
    '<a href="https://medium.com/@michelle-kato" target="_blank">Medium</a>' +
    '<span class="fsep">✦</span>' +
    '<a href="https://www.youtube.com/@michelle-kato" target="_blank">YouTube</a>' +
    '<span class="fsep">✦</span>' +
    '<a href="mailto:michellemakato@gmail.com">Email</a>' +
    "</div></footer>",
);

// Back to top
document.body.insertAdjacentHTML(
  "beforeend",
  '<button id="btt" onclick="window.scrollTo({top:0,behavior:\'smooth\'})" aria-label="Back to top">' +
    '<svg viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>' +
    "</button>",
);

// BTT scroll visibility
window.addEventListener("scroll", function () {
  var btt = document.getElementById("btt");
  if (btt) btt.classList.toggle("show", window.scrollY > 400);
});
