embaralha
=========

![](https://img.shields.io/npm/v/embaralha.svg)
![](https://img.shields.io/bundlephobia/min/embaralha.svg)
![](https://img.shields.io/npm/l/embaralha.svg)
![](https://img.shields.io/circleci/project/github/graciano/embaralha/master.svg)

Shuffles characters in given html element, then restores it's original text. *Embaralha* means "to shuffle" in portuguese.

![](embaralha.gif)

## Instalation

`npm i embaralha` or just grab the [index.js](index.js) file.

## Usage

If you want to shuffle the text in the `mouseover` event, you could do it like this:

``` javascript
import { embaralha } from 'embaralha';
const elem = document.querySelector('.your-embaralha-class');
elem.addEventListener('mouseover', async () => embaralha(elem, 1000));
```

## License

MIT License found in [LICENSE](LICENSE) file.
