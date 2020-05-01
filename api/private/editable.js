let loading = false;

function toggleLoading() {
  if (loading) {
    document.getElementById("editable-loading").remove();
    loading = false;
  } else {
    const loadingNodeDIV = document.createElement("div");
    loadingNodeDIV.id = "editable-loading";

    const loadingNodeSPAN = document.createElement("span");
    loadingNodeSPAN.id = "editable-loading-gif";

    loadingNodeDIV.appendChild(loadingNodeSPAN);
    document.body.appendChild(loadingNodeDIV);
    loading = true;
  }
}

toggleLoading();

document.querySelectorAll("a").forEach((a) => {
  a.removeAttribute("href");
});

const elms = document.querySelectorAll("[data-editable]");
elms.forEach((elm) => {
  elm.classList.add("editable");
  elm.addEventListener("click", clickHandler);
});

let focused = "";
let edited = "";
function clickHandler(e) {
  const lelm = e.target.closest(".editable");

  if (lelm.dataset.editable === focused) {
    lelm.classList.add("edited");
    elms.forEach((elm) => {
      if (elm.dataset.editable === focused) {
        elm.classList.add("edited");
      }
    });
  } else {
    elms.forEach((elm) => {
      if (elm.dataset.editable === focused) {
        elm.classList.remove("focused");
        elm.classList.remove("edited");
      }
    });

    lelm.classList.add("focused");
    focused = lelm.dataset.editable;
    elms.forEach((elm) => {
      if (elm.dataset.editable === focused) {
        elm.classList.add("focused");
      }
    });
  }
}

let pos = 0;
function dscrollHandler() {
  pos += window.innerHeight;
  window.scrollTo(0, pos);

  if (pos > document.body.scrollHeight) {
    clearInterval(dscroll);
    window.scrollTo(0, 0);
    toggleLoading();
  }
}
const dscroll = setInterval(dscrollHandler, 25);
