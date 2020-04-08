let watchedElements = ["heading", "about", "intro"];
for (var i = 1; i <= 6; i++) {
 watchedElements.push('card-' + i);
}
watchedElements.forEach((elm, i) => {
  watchedElements[i] = document.getElementById(elm);
});
console.log(watchedElements);

window.addEventListener("scroll", startingAnimationWindowHandler, {
  passive: true
});

function startingAnimationWindowHandler() {
  if (document.getElementById("loading") === null) {
    watchedElements.forEach((elm, i) => {
      if (elm.classList.contains("start")) {
        watchedElements.splice(i, 1);
      }

      const distance = elm.getBoundingClientRect();

      if (distance.top <= 400 || distance.bottom <= window.innerHeight + 400) {
        elm.classList.add("start");
        watchedElements.splice(i, 1);
      }
    });

    if (watchedElements.length === 0) {
      window.removeEventListener("scroll", startingAnimationWindowHandler, {
        passive: true
      });
    }
  }
}
