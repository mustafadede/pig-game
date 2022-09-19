'use strict';
// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const crnt0El = document.querySelector('#current--0');
const crnt1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerName0El = document.querySelector('#name--0');
const playerName1El = document.querySelector('#name--1');
const btnBack = document.querySelector('.btn--back');
// username changes
playerName0El.textContent = localStorage.getItem('player1');
playerName1El.textContent = localStorage.getItem('player2');
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores, currentScore, playing, currentPlayer;

const init = function () {
  currentScore = 0;
  scores = [0, 0];
  currentPlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  crnt0El.textContent = 0;
  crnt0El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
};

init();

const switchPlayer = function () {
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  /* Generating a random dice roll
  Display dice
  Check for rolled 1: if true, switch to next player
  */
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player
    scores[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    if (scores[currentPlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // Check if player'score is >= 100
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

btnBack.addEventListener('click', function () {
  localStorage.clear();
});
