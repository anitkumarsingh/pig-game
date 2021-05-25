var scores, activePlayer, roundScores;
scores = [0, 0];
activePlayer = 0;
roundScores = 1;

// document.querySelector('#current--' + activePlayer).textContent = dices;
var x = document.querySelector('#score--' + activePlayer).textContent;

// hide dices at the begining
document.querySelector('.dice').style.display = 'none';
console.log(x);

document.querySelector('.btn--roll').addEventListener('click', function () {
  // 1 Generate random number
  var dices = Math.floor(Math.random() * 6) + 1;

  // 2 change image
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = '/img/dice-' + dices + '.png';
});
