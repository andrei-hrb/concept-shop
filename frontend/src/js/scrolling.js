const watchedElements = ["heading", "about", "intro", "cards"];
for (var i = 1; i <= 6; i++) {
  watchedElements.push('card-' + i);
}
watchedElements
  .map(section => document.getElementById(section))
  .forEach(section => {
    section.style.setProperty("--height", section.offsetTop);
  });

window.addEventListener("scroll", scrollWindowHandler, { passive: true });

function scrollWindowHandler() {
  document.body.style.setProperty("--scrolled", window.scrollY);
}
scrollWindowHandler();
