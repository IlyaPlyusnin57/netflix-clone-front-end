// for (let i = 0; i < document.body.childNodes.length; i++) {
//   console.log(document.body.childNodes[i]);
// }
/*
console.log(document.body.children); // HTML Collection

console.log(document.body.childNodes); // Node list

let link = document.querySelector("a");

console.log(link.getAttribute("href"));
*/

let accWrapper = document.querySelector(".acc-wrapper");

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
