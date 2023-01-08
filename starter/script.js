'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When no input is passed
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️  No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  }
  //When the guessed number is greater than the secret number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈 Too High';
      document.querySelector('.score').textContent = score;
      score--;
    } else if (score === 1) {
      document.querySelector('.message').textContent = ' Last Chance ';
      document.querySelector('.score').textContent = score;
      score--;
    } else {
      document.querySelector('.message').textContent = ' 💣 Game Over 💣';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When the guessed number is lesser than the secret number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📉 Too Low';
      document.querySelector('.score').textContent = score;
      score--;
    } else if (score === 1) {
      document.querySelector('.message').textContent = ' Last Chance ';
      document.querySelector('.score').textContent = score;
      score--;
    } else {
      document.querySelector('.message').textContent = ' 💣 Game Over 💣';
      document.querySelector('.score').textContent = 0;
    }
  }
});
