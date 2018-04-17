#!/usr/bin/env node
import userName, { isEven, randomInt, questionCount } from '..';

console.log(`Hello, ${userName}!\n`); // eslint-disable-line no-console

isEven(questionCount, randomInt(1, 100));

