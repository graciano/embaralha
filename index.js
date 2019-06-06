import {
  sleep,
  tick,
} from './src/utils.js';

import {
  changeRandomNumberOfChars,
} from './src/change-chars.js';

const embaralha = async (elem, time) => {
  const originalText = elem.textContent;
  for (let passed = 0; passed < time; passed += tick(passed, time)) {
    elem.textContent = changeRandomNumberOfChars(elem.textContent);
    await sleep(tick(passed, time));
  }
  elem.textContent = originalText;
  return originalText;
};

export {
  embaralha,
};
