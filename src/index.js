import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
const userName = readlineSync.question('May I have your name? ');

export const randomInt = (min, max) => Math.floor(min + (Math.random() * ((max - min) + 1)));
// random integer generator

export const questionCount = 3; // number of questions

export const isEven = (counter, n) => {
  if (counter === 0) return console.log(`Congratulations, ${userName}!`);

  console.log(`Question: ${n}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const even = (n % 2 === 0);
  const correctAnswer = (even && userAnswer === 'yes') || (!even && userAnswer === 'no');

  if (correctAnswer) {
    console.log('Correct!');
    return isEven(counter - 1, randomInt(1, 100));
  }

  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${even ? 'yes' : 'no'}'.
Let's try again, ${userName}!`);
};

export default userName;
