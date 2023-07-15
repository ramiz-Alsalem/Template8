let menu = document.getElementById("icon");
let myLinks = document.querySelector(".main-links");

let bool = true;
menu.onclick = function () {
  if (bool) {
    myLinks.style.display = "flex";
    bool = false;
  } else {
    myLinks.style.display = "none";
    bool = true;
  }
};
