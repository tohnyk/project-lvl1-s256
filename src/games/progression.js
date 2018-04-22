import { cons } from 'hexlet-pairs';
import { randomInt, gameSession } from '..';

const instruction = 'What number is missing in this progression?';

const progressionMember = (startNum, step, memberNum) => startNum + (step * (memberNum - 1));

const makeProgression = (startNum, step, length, hiddenStep) => {
  const iter = (counter, acc, hiddenNum) => {
    const progressionNum = progressionMember(startNum, step, counter);

    if (counter > length) return cons(acc, hiddenNum);
    // makes basic pair: acc = gameQuestion, hiddenNum = correctAnswer

    if (counter === hiddenStep) {
      return iter(counter + 1, `${acc} ..`, `${progressionNum}`);
    }

    return iter(counter + 1, `${acc} ${progressionNum}`, hiddenNum);
  };
  return iter(1, '', 0);
};

const progressionGame = () => {
  const startNum = randomInt(1, 20);
  const progressionStep = randomInt(-20, 20);
  const length = 10;
  const hiddenStep = randomInt(1, 10);
  const assembleProg = makeProgression(startNum, progressionStep, length, hiddenStep);
  return assembleProg;
};

const startProgression = () => gameSession(instruction, progressionGame);

export default startProgression;
