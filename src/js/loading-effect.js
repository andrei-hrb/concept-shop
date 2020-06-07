/**
 * Fancy Loading effect
 */
const loadingElm = document.getElementById("loading");
import startAnimation from "./start-animation";

if (loadingElm.classList.contains("noloading")) {
  loadingElm.remove();
  startAnimation();
} else {
  setTimeout(() => {
    loadingElm.remove();
    startAnimation();
  }, 6400);
}
