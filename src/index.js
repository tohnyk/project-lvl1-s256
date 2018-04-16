import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!'); //eslint-disable-line no-console

const userName = readlineSync.question('May I have your name? ');

export default userName;
