var scores, activePlayer, roundScores;
scores = [0, 0];
activePlayer = 0;
roundScores = 0;

var x = document.querySelector('#score--' + activePlayer).textContent;
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
// hide dices at the begining
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', function () {
  // 1 Generate random number
  var dices = Math.floor(Math.random() * 6) + 1;

  // 2 change image
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = '/img/dice-' + dices + '.png';
  if (dices !== 1) {
    roundScores += dices;
    document.querySelector('#current--' + activePlayer).textContent =
      roundScores;
  } else {
    // do somthing else
    nextPlayer();
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  scores[activePlayer] += roundScores;
  // update UI
  document.querySelector('#score--' + activePlayer).textContent =
    scores[activePlayer];
  nextPlayer();

  // decide who is winner
  if (scores[activePlayer] >= 10) {
    document.getElementById('name--' + activePlayer).textContent = 'Winner';
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScores = 0;
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.dice').style.display = 'none';
}
