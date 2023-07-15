let btns = document.querySelectorAll(".btn-container1 .btn-b");

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

btn1.addEventListener("click", () => {
  myTitle.innerText = "Offering Reliable Hosting";
});

btn2.addEventListener("click", () => {
  myTitle.innerText = "Exceptional Web Solutions";
});

btn3.addEventListener("click", () => {
  myTitle.innerText = "Help Our Customer";
});

let btns2 = document.querySelectorAll(".btn-container .btn-b");

btns2.forEach(function (ele) {
  ele.onclick = function () {
    btns2.forEach(function (element) {
      element.classList.remove("active");
    });
    if (!ele.classList.contains("active")) {
      ele.classList.add("active");
    }
  };
});


let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let myTitle2 = document.getElementById("title2");
let myImg = document.getElementById("img");

btn4.addEventListener("click", () => {
  myTitle2.innerText = "Next gen VPS hosting";
  myImg.src = "../images/img1.svg";
  myTitle2.parentElement.parentElement.style.flexDirection = "row";
});

btn5.addEventListener("click", () => {
  myTitle2.innerText = "Performance VPS hosting";
  myImg.src = "../images/img2.svg";
  myTitle2.parentElement.parentElement.style.flexDirection = "row-reverse";
});

btn6.addEventListener("click", () => {
  myTitle2.innerText = "Effective VPS hosting";
  myImg.src = "../images/img3.svg";
  myTitle2.parentElement.parentElement.style.flexDirection = "row";
});
