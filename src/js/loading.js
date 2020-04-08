/**
 * Fancy Loading effect
 */
const loadingElm = document.getElementById("loading");
const startingElm = document.getElementById("heading");

setTimeout(() => {
  loadingElm.remove();
  window.scrollBy(0, 5);
}, 6200);
