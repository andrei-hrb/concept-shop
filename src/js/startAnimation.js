export default function startAnimation() {
  let watchedElements = ["heading", "about", "intro"];
  for (var i = 1; i <= 6; i++) {
    watchedElements.push("card-" + i);
  }
  watchedElements.forEach((elm, i) => {
    watchedElements[i] = document.getElementById(elm);
  });

  window.addEventListener("scroll", startingAnimationWindowHandler, {
    passive: true,
  });

  function isInViewport(elm) {
    const rect = elm.getBoundingClientRect();

    return rect.top < window.innerHeight - 250 && rect.bottom >= 250;
  }

  function startingAnimationWindowHandler() {
    if (document.getElementById("loading") === null) {
      watchedElements.forEach((elm, i) => {
        if (elm.classList.contains("start")) {
          watchedElements.splice(i, 1);
        }

        if (isInViewport(elm)) {
          elm.classList.add("start");
          watchedElements.splice(i, 1);
        }
      });

      if (watchedElements.length === 0) {
        window.removeEventListener("scroll", startingAnimationWindowHandler, {
          passive: true,
        });
      }
    }
  }
  startingAnimationWindowHandler();
}
