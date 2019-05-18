const random = max => parseInt(Math.random() * max);
const randomRange = (a, b) => a + random(b - a);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomElem = arr => arr[random((arr.length - 1))];
const range = size => [...Array(size).keys()];

export {
  random,
  randomRange,
  sleep,
  randomElem,
  range,
};
