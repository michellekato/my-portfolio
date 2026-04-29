// Footer
document.body.insertAdjacentHTML('beforeend',
  '<footer><div class="flinks">' +
  '<a href="https://linkedin.com/in/michellekato" target="_blank">LinkedIn</a>' +
  '<span class="fsep">✦</span>' +
  '<a href="https://medium.com/@michelle-kato" target="_blank">Medium</a>' +
  '<span class="fsep">✦</span>' +
  '<a href="https://www.youtube.com/@michelle-kato" target="_blank">YouTube</a>' +
  '<span class="fsep">✦</span>' +
  '<a href="mailto:michellemakato@gmail.com">Email</a>' +
  '</div></footer>');

// Back to top
document.body.insertAdjacentHTML('beforeend',
  '<button id="btt" onclick="window.scrollTo({top:0,behavior:\'smooth\'})" aria-label="Back to top">' +
  '<svg viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>' +
  '</button>');

// BTT scroll visibility
window.addEventListener('scroll', function() {
  var btt = document.getElementById('btt');
  if (btt) btt.classList.toggle('show', window.scrollY > 400);
});
