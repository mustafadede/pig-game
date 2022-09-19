'use strict';
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const form = document.getElementsByTagName('form');
const sumbit = document.querySelector('.submit');

sumbit.addEventListener('click', function () {
  localStorage.setItem('player1', player1.value);
  localStorage.setItem('player2', player2.value);
});
