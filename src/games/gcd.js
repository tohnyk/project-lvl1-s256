import { cons } from 'hexlet-pairs';
import { randomInt, gameSession } from '..';

const instruction = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => {
  const iter = (counter, acc) => {
    if ((counter > num1) || (counter > num2)) return acc;
    if ((num1 % counter === 0) && (num2 % counter === 0)) {
      return iter(counter + 1, counter);
    }
    return iter(counter + 1, acc);
  };
  return iter(1, 1);
};

const gcdGame = () => {
  const num1 = randomInt();
  const num2 = randomInt();
  const gameQuestion = `${num1} ${num2}`;
  const correctAnswer = String(calculateGcd(num1, num2));
  const gamePair = cons(gameQuestion, correctAnswer);
  return gamePair;
};

const startGcd = () => gameSession(instruction, gcdGame);

export default startGcd;
