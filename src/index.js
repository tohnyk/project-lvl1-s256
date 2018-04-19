import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const randomInt = (min = 1, max = 100) =>
  Math.floor(min + (Math.random() * ((max - min) + 1)));
// random integer generator from 1 to 100

const questionsQuantity = 3; // number of questions

const gameEngine = (counter, gameContent) => { // input & output comparison
  if (counter === 0) return true; // call line 41 if a game successfully ends

  const gamePair = gameContent(); // game pair abstraction = question + answer
  const gameQuestion = car(gamePair);
  const correctAnswer = cdr(gamePair);


  console.log(`Question: ${gameQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');


  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return gameEngine(counter - 1, gameContent);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};


export const gameSession = (instruction, gameContent) => { // starts game session
  console.log('Welcome to the Brain Games!');
  console.log(instruction);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const playGame = gameEngine(questionsQuantity, gameContent); // starts the game engine

  if (playGame) { // asserts 3 correct answers or not
    console.log(`Congratulations, ${userName}!`);
  } else console.log(`Let's try again, ${userName}!`);
};

