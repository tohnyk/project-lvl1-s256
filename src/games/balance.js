import { cons } from 'hexlet-pairs';
import { randomInt, gameSession } from '..';

const instruction = 'Balance the given number.';

const isBalanced = (n) => {
  const iter = (counter, acc) => {
    if (acc > 1) return false;
    if (Number(String(n)[counter] - String(n)[counter + 1]) > 1
    || Number(String(n)[counter] - String(n)[counter + 1]) < 0) return false;

    if (Number(String(n)[counter] - String(n)[counter + 1]) === 1) {
      return iter(counter + 1, acc + 1);
    }
    return true;
  };
  return iter(0, 0);
};

const digitsSum = (n) => {
  const iter = (counter, acc) => {
    if (counter < String(n).length) {
      return iter(counter + 1, acc + Number(String(n)[counter]));
    }
    return acc;
  };
  return iter(0, 0);
};

const balance = (n) => {
  const sum = digitsSum(n);

  const iter = (counter, acc) => {
    const minDigit = Math.floor(sum / String(n).length);
    const maxDigit = minDigit + 1;
    const maxDigitsQuantity = sum % String(n).length;
    const minDigitsQuantity = String(n).length - maxDigitsQuantity;

    if (counter < minDigitsQuantity) {
      return iter(counter + 1, acc + String(minDigit));
    }
    if (counter < String(n).length) {
      return iter(counter + 1, acc + String(maxDigit));
    }
    return acc;
  };
  return iter(0, '');
};


const balanceGame = () => {
  const gameQuestion = randomInt(1, 10000);
  const correctAnswer = isBalanced(gameQuestion) ? gameQuestion : balance(gameQuestion);
  const gamePair = cons(gameQuestion, correctAnswer);
  return gamePair;
};

const startBalance = () => gameSession(instruction, balanceGame);

export default startBalance;
