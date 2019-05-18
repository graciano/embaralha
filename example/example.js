import { throttledEmbaralha } from '../index.js';

const main = () => {
  const body = document.querySelector('body');
  for (const elem of body.childNodes) {
    elem.addEventListener('mouseover', throttledEmbaralha(elem, 1000));
  }
}

main();
