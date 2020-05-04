const defaultData = JSON.parse(
  document.getElementById("json-default").textContent
);
const overwriteData = JSON.parse(
  document.getElementById("json-overwrite").textContent
);
const dbData = JSON.parse(document.getElementById("json-db").textContent);

const edit = document.createElement("div");
edit.id = "edit";
edit.classList.add("edit");
edit.innerHTML = `
  <div class="edit-body">
    <span class="edit-close">×</span>
    <h3 class="edit-title"></h3>
    <div class="edit-content"></div>
  </div>
`;

document.body.appendChild(edit);

document.body.addEventListener("open-editor", (e) => {
  const title = e.detail.editable
    .split(".")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const data = Object.byString(defaultData, e.detail.editable);
  const form = getHTMLForEditor(e.detail.editable, data);

  document.querySelector(".edit-title").textContent = title;
  document.querySelector(".edit-title").title = e.detail.editable;
  document.querySelector(".edit-content").appendChild(form);
  document.querySelector(".edit").classList.add("visible");
});

document.querySelector(".edit-close").addEventListener("click", () => {
  document.querySelector("#edit").classList.remove("visible");

  const editable = document.body.dataset.focused;
  if (editable.includes("title")) {
    if (editable.includes("intro")) {
      const datad = document.querySelector(".editor-textad").value;
      let elms = [
        document.querySelector("#intro__title-over"),
        document.querySelector("#intro__title-under"),
      ];
      elms.forEach((elm) => {
        elm.innerHTML = "";
        datad.split("\n").forEach((line) => {
          const span = document.createElement("span");
          span.classList.add("line");
          span.textContent = line;

          elm.appendChild(span);
        });
      });

      const datam = document.querySelector(".editor-textam").value;
      elms = [
        document.querySelector("#intro__title-over-mobile"),
        document.querySelector("#intro__title-under-mobile"),
      ];
      elms.forEach((elm) => {
        elm.innerHTML = "";
        datam.split("\n").forEach((line) => {
          const span = document.createElement("span");
          span.classList.add("line");
          span.textContent = line;

          elm.appendChild(span);
        });
      });
    } else if (editable.includes("cards") && !editable.includes("[")) {
      const data = document.querySelector(".editor-texta").value;
      const elm = document.querySelector(`[data-editable="${editable}"]`);

      elm.textContent = data;
    } else {
      const data = document.querySelector(".editor-texta").value;
      const elms = document.querySelectorAll(`[data-editable="${editable}"]`);
      elms.forEach((elm) => {
        elm.innerHTML = "";
        data.split("\n").forEach((line) => {
          const span = document.createElement("span");
          span.classList.add("line");
          span.textContent = line;

          elm.appendChild(span);
        });
      });
    }
  }

  document.querySelector(".edit-content").innerHTML = "";
  elms.forEach((elm) => {
    elm.classList.remove("edited");
  });
});
