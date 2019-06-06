import throttle from 'lodash.throttle';
import { embaralha } from '../index.js';

const throttledEmbaralha = (elem, time) => {
  const throttleTime = time + 70;
  return throttle(() => embaralha(elem, time), throttleTime);
};

const main = () => {
  const body = document.querySelector('body');
  for (const elem of body.childNodes) {
    elem.addEventListener('mouseover', throttledEmbaralha(elem, 1000));
  }
}

main();
