let btns = document.querySelectorAll(".btn-container .btn-b");

btns.forEach(function (ele) {
  ele.onclick = function () {
    btns.forEach(function (element) {
      element.classList.remove("active");
    });
    if (!ele.classList.contains("active")) {
      ele.classList.add("active");
    }
  };
});

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let myTitle = document.getElementById("title");
let myImg = document.getElementById("img");

btn1.addEventListener("click", () => {
  myTitle.innerText = "Next gen VPS hosting";
  myImg.src = "images/img1.svg";
  myTitle.parentElement.parentElement.style.flexDirection = "row";
});

btn2.addEventListener("click", () => {
  myTitle.innerText = "Performance VPS hosting";
  myImg.src = "images/img2.svg";
  myTitle.parentElement.parentElement.style.flexDirection = "row-reverse";
});

btn3.addEventListener("click", () => {
  myTitle.innerText = "Effective VPS hosting";
  myImg.src = "images/img3.svg";
  myTitle.parentElement.parentElement.style.flexDirection = "row";
});
