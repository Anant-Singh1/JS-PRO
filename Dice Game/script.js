"use strict";
//They are going to select the whole element
const score1 = document.querySelector("#score-1");
const score2 = document.getElementById("score-2");
const dice = document.querySelector(".dice");
const btnnew = document.querySelector(".btn-new");
const btnroll = document.querySelector(".btn-roll");
const btnhold = document.querySelector(".btn-hold");
const current1 = document.getElementById("current-1");
const current2 = document.getElementById("current-2");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

score1.textContent = 0;
score2.textContent = 0;
// now
//   <img src="images/dice-1.png" alt="Playing dice" class="dice hidden" />
dice.classList.add("hidden");

let score = [0, 0];
let currentScore = 0;
let activeplayer = 1;
let playing = true;

// Rolling Dice
btnroll.addEventListener("click", () => {
  if (playing) {
    // 1.Start generating a random dice roll...
    const random = Math.floor(Math.random() * 6) + 1;
    // 2.Display Dice...
    dice.classList.remove("hidden");
    dice.src = `images/dice-${random}.png`;
    // 3.check for 1...
    if (random !== 1) {
      // Add dice to current score...
      currentScore += random;
      document.getElementById(`current-${activeplayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player....
      switchPlayer();
    }
  }
});

btnhold.addEventListener("click", () => {
  // 1.Add currentscore of the active player
  if (playing) {
    score[activeplayer - 1] += currentScore;

    document.getElementById(`score-${activeplayer}`).textContent =
      score[activeplayer - 1];

    //2. Check score>=100
    if (score[activeplayer - 1] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player-${activeplayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activeplayer}`)
        .classList.remove("player-active");
      document.querySelector(
        `#name-${activeplayer}`
      ).textContent = `WINNER..🎉🎉`;
    } else {
      switchPlayer();
    }
  }
});

btnnew.addEventListener("click", () => {
  document.querySelector("#name-1").textContent = "PLAYER 1";
  document.querySelector("#name-2").textContent = "PLAYER 2";
  dice.classList.remove("hidden");
  playing = true;
  document
    .querySelector(`.player-${activeplayer}`)
    .classList.remove("player-winner");
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  document
    .querySelector(`.player-${activeplayer}`)
    .classList.add("player-active");
  score[0] = 0;
  score[1] = 0;
});

const switchPlayer = function () {
  // Switch to next player....
  document.getElementById(`current-${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 1 ? 2 : 1;
  currentScore = 0;
  // toogle will remove the class if present else vice-versa
  player1.classList.toggle("player-active");
  player2.classList.toggle("player-active");
};
