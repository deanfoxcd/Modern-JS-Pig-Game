'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currScore0El = document.getElementById('current--0');
const currScore1El = document.getElementById('current--1');
const diceImgEl = document.querySelector('img');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('btn--hold');
const newGameBtn = document.querySelector('btn--new');

// Randomizing the dice
const randomNum = Math.floor(Math.random() * 6 + 1);
console.log(randomNum);

// Roll the dice
const rollDice = function () {
  diceImgEl.src = `dice-${randomNum}.png`;
};
