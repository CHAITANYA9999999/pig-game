'use strict';
let score1 = 0;
let score2 = 0;

let dice;
let turn = 0;

function rollDice() {
  dice = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(
    '.dice'
  ).src = `http://127.0.0.1:5500/dice-${dice}.png`;

  if (dice !== 1) {
    if (!turn) {
      score1 += dice;
      document.querySelectorAll('.current-score')[0].textContent = score1;
    } else if (turn) {
      score2 += dice;
      document.querySelectorAll('.current-score')[1].textContent = score2;
    }
  } else {
    if (!turn) {
      score1 = 0;
      document.querySelectorAll('.current-score')[0].textContent = score1;
    } else {
      score2 = 0;
      document.querySelectorAll('.current-score')[1].textContent = score2;
    }
    turn = !turn;
  }
}

function hold() {
  if (turn) {
    document.querySelectorAll('.score')[1].textContent =
      Number(document.querySelectorAll('.score')[1].textContent) + score2;
    score2 = 0;
    document.querySelectorAll('.current-score')[1].textContent = score2;
  } else {
    document.querySelectorAll('.score')[0].textContent =
      Number(document.querySelectorAll('.score')[0].textContent) + score1;
    score1 = 0;
    document.querySelectorAll('.current-score')[0].textContent = score1;
  }
  turn = !turn;

  document.querySelectorAll('.score');
}

document.querySelector('.btn.btn--roll').addEventListener('click', rollDice);

document.querySelector('.btn.btn--hold').addEventListener('click', hold);

console.log(document.querySelectorAll('.score'));

// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
