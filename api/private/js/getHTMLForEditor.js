function getHTMLForEditor(editable, data) {
  function i(phrase) {
    return editable.includes(phrase);
  }

  const div = document.createElement("div");
  div.classList.add("editor");

  if (i("title")) {
    if (i("intro")) {
      const textAreaD = document.createElement("textarea");
      textAreaD.name = "texta-desktop";
      textAreaD.classList.add("editor-texta");
      textAreaD.classList.add("editor-textad");

      data.desktop.forEach((line) => {
        textAreaD.value += line + "\n";
      });

      div.appendChild(textAreaD);

      const textAreaM = document.createElement("textarea");
      textAreaM.name = "texta-desktop";
      textAreaM.classList.add("editor-texta");
      textAreaM.classList.add("editor-textam");

      data.mobile.forEach((line) => {
        textAreaM.value += line + "\n";
      });

      div.appendChild(textAreaM);

      const pre = document.createElement("pre");
      pre.textContent = "Fiercare linie se va considera un nou new line";
      div.appendChild(pre);

      return div;
    }

    if (i("cards") && !i("[")) {
      const textArea = document.createElement("textarea");
      textArea.name = "texta";
      textArea.classList.add("editor-texta");
      textArea.value = data;

      div.appendChild(textArea);

      const pre = document.createElement("pre");
      pre.textContent = "Aici new line-ul nu se ia in considerare";
      div.appendChild(pre);

      return div;
    }
    const textArea = document.createElement("textarea");
    textArea.name = "texta";
    textArea.classList.add("editor-texta");

    data.forEach((line) => {
      textArea.value += line + "\n";
    });

    div.appendChild(textArea);

    const pre = document.createElement("pre");
    pre.textContent = "Fiercare linie se va considera un nou new line";
    if (i("cards") && i("["))
      pre.textContent += "\nrecomand ca numarul de la inceput  sa ramana acolo";
    div.appendChild(pre);

    return div;
  }

  const ops = document.createElement("pre");
  ops.textContent = "Ops! As nu trebuia sa se intample";

  return ops;
}
