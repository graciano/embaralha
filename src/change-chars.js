import {
  random,
  randomFromRange,
  randomElem,
  range,
} from './utils.js';

const CHARS = [...`10!@#$%*()£¢¬{[]}^<>.;:?/|\\-_=+§`];

const changeCharFromPos = (text, char, pos) => text.substring(0, pos) + char
  + text.substring(pos+1, text.length);

const changeChar = text => changeCharFromPos(
  text,
  randomElem(CHARS),
  random(text.length)
);

const changeRandomNumberOfChars = text => range(randomFromRange(1, 5))
  .reduce(acc => changeChar(acc), text);

export {
  CHARS,
  changeCharFromPos,
  changeChar,
  changeRandomNumberOfChars,
};
