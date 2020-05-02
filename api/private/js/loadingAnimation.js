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
