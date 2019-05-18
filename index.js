const MIN_DURATION = 30;
const MAX_DURATION = 70;
const CHARS = [...`10!@#$%*()£¢¬{[]}^<>.;:?/|\\-_=+§`];
const random = max => parseInt(Math.random() * max);
const randomRange = (a, b) => a + random(b - a);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomElem = arr => arr[random((arr.length - 1))];
const range = size => [...Array(size).keys()];

const changeCharFromPos = (text, char, pos) => text.substring(0, pos) + char
  + text.substring(pos+1, text.length);

const changeChar = text => changeCharFromPos(
  text,
  randomElem(CHARS),
  random(text.length)
);

const changeRandomNumberOfChars = text => range(random(5))
  .reduce(acc => changeChar(acc), text);

const embaralha = async (elem, time) => {
  let timer = 0;
  const originalText = elem.textContent;
  while (true) {
    const tick = randomRange(MIN_DURATION, MAX_DURATION);
    timer += tick;
    if (timer > time) break;
    await sleep(tick);
    elem.textContent = changeRandomNumberOfChars(elem.textContent);
  }
  elem.textContent = originalText;
};

export { embaralha };
