import {
  changeRandomNumberOfChars,
} from './src/change-chars.js';

import {
  walkSteps,
  steps,
} from './src/steps.js';

const embaralha = async (elem, time) => {
  const originalText = elem.textContent;
  await walkSteps(steps(time),
    () => elem.textContent = changeRandomNumberOfChars(elem.textContent));
  elem.textContent = originalText
  return originalText;
};

export {
  embaralha,
};
