import { cons } from 'hexlet-pairs';
import { randomInt, gameSession } from '..';

const instruction = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => { // euklidus algorithm
  if (num2 % num1 === 0) return num1;
  if (num1 % num2 === 0) return num2;

  const iter = (counter, acc) => {
    if (counter === 0) return acc;
    return iter(acc % counter, counter);
  };
  return num1 > num2 ? iter(num1 % num2, num2) : iter(num2 % num1, num1);
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
