const MIN_DURATION = 30;
const MAX_DURATION = 70;

const random = max => parseInt(Math.random() * max);
const randomFromRange = (a, b) => a + random(b - a);
const sleep = ms => new Promise(resolve => ms < MIN_DURATION
  ? resolve() : setTimeout(resolve, ms));
const randomElem = arr => arr[random((arr.length - 1))];
const range = size => [...Array(size).keys()];
const tick = (passed, limit) => {
  const remainingTime = limit - passed;
  const randomTime = randomFromRange(MIN_DURATION, MAX_DURATION);
  return Math.min(remainingTime, randomTime);
};

export {
  random,
  randomFromRange,
  sleep,
  randomElem,
  range,
  tick,
  MIN_DURATION,
  MAX_DURATION,
};
