'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currScore0El = document.getElementById('current--0');
const currScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('img');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

//Initializing

let scores, activePlayer, currScore, playing;

const initialize = function () {
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currScore0El.textContent = 0;
  currScore1El.textContent = 0;
  diceEl.classList.add('hidden');
  scores = [0, 0];
  activePlayer = 0;
  currScore = 0;
  playing = true;
};
initialize();

// Randomize and roll the dice

// Don't use separate function if only using the function once, just do it in the addEventListener
const rollDice = function () {
  diceEl.classList.remove('hidden');
  const dice = Math.floor(Math.random() * 6 + 1);
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);
  if (dice !== 1) {
    currScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currScore = 0;
  console.log(activePlayer);
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    const dice = Math.floor(Math.random() * 6 + 1);
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener('click', () => {
  initialize();
});
