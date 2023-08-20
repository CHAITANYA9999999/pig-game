// 'use strict';
// let score1 = 0;
// let score2 = 0;

// let dice;
// let turn = 0;

// function rollDice() {
//   dice = Math.trunc(Math.random() * 6) + 1;
//   document.querySelector(
//     '.dice'
//   ).src = `http://127.0.0.1:5500/dice-${dice}.png`;

//   if (dice !== 1) {
//     if (!turn) {
//       score1 += dice;
//       document.querySelectorAll('.current-score')[0].textContent = score1;
//     } else if (turn) {
//       score2 += dice;
//       document.querySelectorAll('.current-score')[1].textContent = score2;
//     }
//   } else {
//     if (!turn) {
//       score1 = 0;
//       document.querySelectorAll('.current-score')[0].textContent = score1;
//     } else {
//       score2 = 0;
//       document.querySelectorAll('.current-score')[1].textContent = score2;
//     }
//     turn = !turn;
//   }
// }

// function hold() {
//   if (turn) {
//     document.querySelectorAll('.score')[1].textContent =
//       Number(document.querySelectorAll('.score')[1].textContent) + score2;
//     score2 = 0;
//     document.querySelectorAll('.current-score')[1].textContent = score2;
//   } else {
//     document.querySelectorAll('.score')[0].textContent =
//       Number(document.querySelectorAll('.score')[0].textContent) + score1;
//     score1 = 0;
//     document.querySelectorAll('.current-score')[0].textContent = score1;
//   }
//   turn = !turn;

//   document.querySelectorAll('.score');
// }

// document.querySelector('.btn.btn--roll').addEventListener('click', rollDice);

// document.querySelector('.btn.btn--hold').addEventListener('click', hold);

// console.log(document.querySelectorAll('.score'));

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

function init() {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 50) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// btnNew.addEventListener('click', function () {
//   activePlayer = 0;
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');

//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');

//   playing = true;

//   currentScore = 0;
//   scores[0] = 0;
//   scores[1] = 0;
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
// });

btnNew.addEventListener('click', init);
