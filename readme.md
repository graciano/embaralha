embaralha
=========

![](https://img.shields.io/npm/v/embaralha.svg)
![](https://img.shields.io/bundlephobia/min/embaralha.svg)
![](https://img.shields.io/npm/l/embaralha.svg)
![](https://img.shields.io/circleci/project/github/graciano/embaralha/master.svg)

Shuffles characters in given html element, then restores it's original text. *Embaralha* means "to shuffle" in portuguese.

![](embaralha.gif)

*As you can observe in this GIF, I strongly recomend that you use a monospace font ;)*

## Instalation

`npm i embaralha` or just grab the [index.js](index.js) file.

## Usage

If you want to shuffle the text in the `mouseover` event, you could do it like this:

``` javascript
import { embaralha } from 'embaralha';
const elem = document.querySelector('.your-embaralha-class');
elem.addEventListener('mouseover', async () => embaralha(elem, 1000));
```

## Contributing

Any contribution is welcome, just make sure the tests (`npm test`) are passing, but don't worry about the webdriver tests (the ones in the `test/specs` dir). And if you'd be so kind, write your tests for your additions.

Also, you can run it locally with `npm start` and then going to http://localhost:8080

### To Do
 - ~don't change char when white space ("respect the words")~
 - bug fix when mouseover multiple times causing loss of orinal text
 - use webdriver properly
 - use eslint
 - ~lower the dist file size~
 - add to [microjs](http://microjs.com/)
 
## License

MIT License found in [LICENSE](LICENSE) file.
