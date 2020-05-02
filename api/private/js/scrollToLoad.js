let pos = 0;
function dscrollHandler() {
  pos += window.innerHeight / 2;
  window.scrollTo(0, pos);

  if (pos > document.body.scrollHeight) {
    clearInterval(dscroll);
    window.scrollTo(0, 0);
    toggleLoading();
  }
}
const dscroll = setInterval(dscrollHandler, 50);
