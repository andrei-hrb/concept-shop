document.querySelectorAll(".add").forEach((elm) => {
  elm.addEventListener("click", (e) => {
    const lelm = e.target.id.split("-")[0];
    if (lelm === "final") defaultData[lelm]["title"].push(["Dea bos"]);
    else defaultData[lelm]["cards"].push(["Dea bosulik"]);

    location.reload();
  });
});
