"use strict";

let random = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number");
// state variable;
let s = 20;
let highscore = 0;
const btn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const reset = document.querySelector(".again");
reset.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  random = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  s = 20;
  score.textContent = s;
  number.style.width = "15`rem";
});
btn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(random);

  if (guess == random) {
    number.textContent = random;
    message.textContent = "Congratulation.You found it..🏆🏆🎉🎉";
    // Inline styles
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (s > highscore) highscore = s;
    document.querySelector(".highscore").textContent = s;
  } else if (guess > random) {
    if (s > 1) {
      message.textContent = "Too High..📈";
      s--;
      score.textContent = s;
    } else {
      message.textContent = "You have lost...😔😔";
      btn.disabled = true;
    }
  } else {
    message.textContent = "Too Low..📉";
    s--;
    score.textContent = s;
  }
});
