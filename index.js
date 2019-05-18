const MIN_DURATION = 30;
const MAX_DURATION = 70;
import {
  randomRange,
  sleep,
} from './src/utils.js';

import {
  changeCharFromPos,
  changeChar,
  changeRandomNumberOfChars,
} from './src/change-chars.js';

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
