import { cons } from 'hexlet-pairs';
import { randomInt, gameSession } from '..';

export const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = n => n % 2 === 0;

const evenGame = () => {
  const n = randomInt();
  const gameQuestion = `${n}`;
  const correctAnswer = isEven(n) ? 'yes' : 'no';
  const gamePair = cons(gameQuestion, correctAnswer);
  return gamePair;
};

const startEven = () => gameSession(instruction, evenGame);

export default startEven;
