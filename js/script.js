const accWrapper = document.querySelector(".acc-wrapper");

accWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("accordion")) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
});
