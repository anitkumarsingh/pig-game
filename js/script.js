var scores, dices, activePlayer, roundScores;
scores = [0, 0];
dices = Math.floor(Math.random() * 6) + 1;
activePlayer = 0;
roundScores = 1;

document.querySelector('#current--' + activePlayer).textContent = dices;
var x = document.querySelector('#score--' + activePlayer).textContent;

// hide dices at the begining
document.querySelector('.dice').style.display = 'none';
console.log(x);
