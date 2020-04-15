const watchedElements = [
  "heading__title-over",
  "heading__title-under",

  "about__title",
  "about__title-under",

  "intro__title-over",
  "intro__title-over-mobile",
  "intro__title-under",
  "intro__title-under-mobile",

  "items__title",

  /* Content */

  "heading__content",

  "about__content",
  "about__content-under",

  "intro__content",
];
for (let i = 1; i <= 6; i++) {
  watchedElements.push("card__title-" + i);
  watchedElements.push("card__content-" + i);
}
for (let i = 1; i <= 4; i++) {
  watchedElements.push("item__title-" + i + "__product");
}

function handler(e) {
  let parent = e.target.parentElement;
  if (parent.classList.contains("content"))
    parent.textContent = parent.textContent;
  else {
    parent = parent.parentElement;
    parent.childNodes.forEach((span) => (span.textContent = span.textContent));
  }
}

const callback = (mutationsList, observer) => {
  for (let mutation of mutationsList) {
    const arr = mutation.addedNodes;
    if (arr.length) {
      arr[arr.length - 1].addEventListener("animationend", handler);
    }
  }

  observer.disconnect();
};

const observer = new MutationObserver(callback);
const config = { childList: true };
watchedElements
  .map((elm) => document.getElementById(elm))
  .forEach((elm) => {
    observer.observe(elm, config);
  });
