import { cons } from 'hexlet-pairs';
import { randomInt, gameSession } from '..';

const instruction = 'Is this number prime?';

const isPrime = (n) => {
  const iter = (counter) => {
    if (counter > n / 2) return true;
    if (n % counter === 0) return false;
    if (n % counter > 0) {
      return iter(counter + 1);
    }
    return true;
  };
  return iter(2);
};

const primeGame = () => {
  const n = randomInt();
  const gameQuestion = `${n}`;
  const correctAnswer = isPrime(n) ? 'yes' : 'no';
  const gamePair = cons(gameQuestion, correctAnswer);
  return gamePair;
};

const startPrime = () => gameSession(instruction, primeGame);

export default startPrime;
