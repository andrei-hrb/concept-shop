let timer = true;
function observerCallback(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.attributeName === "data-focused" && timer) {
      timer = false;
      setTimeout(() => {
        timer = true;
      }, 50);

      mutation.newValue = document.body.dataset.focused;

      if (mutation.oldValue !== mutation.newValue) {
        elms.forEach((elm) => {
          if (elm.dataset.editable === mutation.oldValue) {
            elm.classList.remove("focused");
            elm.classList.remove("edited");
          }

          if (elm.dataset.editable == mutation.newValue) {
            elm.classList.add("focused");
          }
        });
      } else {
        elms.forEach((elm) => {
          if (elm.dataset.editable === mutation.oldValue) {
            elm.classList.add("edited");
          }
        });
      }
    }
  }
}
const observer = new MutationObserver(observerCallback);
const config = { attributes: true, attributeOldValue: true };
observer.observe(document.body, config);

const elms = document.querySelectorAll("[data-editable]");
elms.forEach((elm) => {
  elm.classList.add("editable");
  elm.addEventListener("click", focusedHandler);
});

function focusedHandler(e) {
  document.body.dataset.focused = e.target.closest(
    ".editable"
  ).dataset.editable;
}

const data = JSON.parse(document.getElementById("json").textContent);
function openDialog(e) {
  const lelm = e.target.closest(".editable");
  console.log(lelm);
}
