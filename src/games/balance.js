import { cons } from 'hexlet-pairs';
import { randomInt, gameSession } from '..';

const instruction = 'Balance the given number.';

const isBalanced = (n) => {
  let difference = 0;
  for (let i = 0; i < String(n).length; i += 1) {
    if (difference > 1) return false;
    if (Number(String(n)[i] - String(n)[i + 1]) > 1
    || Number(String(n)[i] - String(n)[i + 1]) < 0) {
      return false;
    }
    if (Number(String(n)[i] - String(n)[i + 1]) === 1) {
      difference += 1;
    }
  }
  return true;
};

const balance = (n) => {
  let result = '';
  let digitsSum = 0;

  for (let i = 0; i < String(n).length; i += 1) {
    digitsSum += Number(String(n)[i]);
  }

  const minDigit = Math.floor(digitsSum / String(n).length);
  const maxDigit = minDigit + 1;
  const maxDigitsQuantity = digitsSum % String(n).length;
  const minDigitsQuantity = String(n).length - maxDigitsQuantity;

  for (let i = 0; i < minDigitsQuantity; i += 1) {
    result += String(minDigit);
  }

  for (let i = 0; i < maxDigitsQuantity; i += 1) {
    result += String(maxDigit);
  }

  return result;
};


const balanceGame = () => {
  const gameQuestion = randomInt(1, 1000);
  const correctAnswer = isBalanced(gameQuestion) ? gameQuestion : balance(gameQuestion);
  const gamePair = cons(gameQuestion, correctAnswer);
  return gamePair;
};

const startBalance = () => gameSession(instruction, balanceGame);

export default startBalance;
