import throttle from 'lodash.throttle';
import {
  randomFromRange,
  sleep,
} from './src/utils.js';

import {
  changeCharFromPos,
  changeChar,
  changeRandomNumberOfChars,
} from './src/change-chars.js';

const MIN_DURATION = 30;
const MAX_DURATION = 70;

const embaralha = async (elem, time) => {
  let timer = 0;
  const originalText = elem.textContent;
  while (true) {
    const tick = randomFromRange(MIN_DURATION, MAX_DURATION);
    timer += tick;
    if (timer > time) break;
    await sleep(tick);
    elem.textContent = changeRandomNumberOfChars(elem.textContent);
  }
  elem.textContent = originalText;
};

const throttledEmbaralha = (elem, time) => {
  const throttleTime = time + MAX_DURATION;
  return throttle(() => embaralha(elem, time), throttleTime);
};

export {
  embaralha,
  throttledEmbaralha,
};
