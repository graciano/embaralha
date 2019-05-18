import { embaralha } from '../index.js';

const main = () => {
  const body = document.querySelector('body');
  for (const elem of body.childNodes) {
    elem.addEventListener('mouseover', async () => embaralha(elem, 1000));
  }
}

main();
