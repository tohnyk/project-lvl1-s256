import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
const userName = readlineSync.question('May I have your name? ');

export const randomInt = (min = 1, max = 100) =>
  Math.floor(min + (Math.random() * ((max - min) + 1)));
// random integer generator from 1 to 100

const questionCount = 3; // number of questions

export const evenGame = (counter = questionCount, n = randomInt()) => {
  if (counter === 0) return console.log(`Congratulations, ${userName}!`);

  console.log(`Question: ${n}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const isEven = (n % 2 === 0);
  const correctAnswer = (isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no');

  if (correctAnswer) {
    console.log('Correct!');
    return evenGame(counter - 1, randomInt());
  }

  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.
Let's try again, ${userName}!`);
};

export default userName;
