export default function startAnimation() {
  let watchedElements = [
    "heading",

    "about",

    "intro",

    "items__title",
    "items__row-1",
    "items__row-2",
  ];
  for (let i = 1; i <= 6; i++) {
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

  let lotus = 0;
  function startingAnimationWindowHandler() {
    if (document.getElementById("loading") === null) {
      watchedElements.forEach((elm, i) => {
        if (elm.classList.contains("start")) {
          watchedElements.splice(i, 1);
        }

        if (isInViewport(elm)) {
          elm.classList.add("start");
          if (elm.classList.contains("items__row")) lotus = lotus + 1;
          if (lotus == 2)
            document.getElementById("items__lotus").classList.add("start");
          document.getElementById("items__title").classList.add("start");
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
