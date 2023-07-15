let question = document.getElementsByClassName("question");
let icon = document.querySelectorAll(".question div i");
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    if (question[i].classList.contains("show")) {
      question[i].classList.toggle("show");
			icon[i].style.rotate = "360deg"
    } else {
      question[i].classList.toggle("show");
      icon[i].style.rotate = "180deg";
    }
  });
}
