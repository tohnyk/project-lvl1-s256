import { cons } from 'hexlet-pairs';
import { randomInt, gameSession } from '..';

const instruction = 'What is the result of the expression?';

const calcPair = (num1, num2) => {
  if (randomInt(1, 3) === 1) {
    return cons(`${num1} + ${num2}`, `${num1 + num2}`); // returns pairs: question + answer
  } else if (randomInt(1, 3) === 2) {
    return cons(`${num1} - ${num2}`, `${num1 - num2}`);
  } return cons(`${num1} * ${num2}`, `${num1 * num2}`);
};

const calcGame = () => {
  const num1 = randomInt();
  const num2 = randomInt();
  const gamePair = calcPair(num1, num2);
  return gamePair;
};

const startCalc = () => gameSession(instruction, calcGame);

export default startCalc;
