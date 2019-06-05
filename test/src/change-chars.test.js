import {
  CHARS,
  changeCharFromPos,
  changeChar,
  changeRandomNumberOfChars,
} from '../../src/change-chars.js';

describe('CHARS', () => {
  it('is an array', () => expect(CHARS.constructor).toBe(Array));
  it('has strings', () => CHARS.forEach(c => expect(typeof c).toBe('string')));
});

const str1 = 'banana';
const paragraph = 'this is a text with\n some \t kinds\r of white spaces';

describe('changeCharFromPos(text, char, pos)', () => {
  it('returns a string of the same size', () => {
    expect(typeof changeCharFromPos(str1, '-', 2)).toBe('string');
    expect(changeCharFromPos(str1, '-', 2).length).toBe(str1.length);
  });

  it('changes the char to the expected char', () => {
    expect(changeCharFromPos(str1, '-', 2).charAt(2)).toBe('-');
  });

  it('makes the correct result', () => {
    expect(changeCharFromPos(str1, '-', 2)).toBe('ba-ana');
  });

  it('does\'nt change chars on white spaces', () => {
    const spaceIndexes = [...paragraph]
      .map((char, i) => char.match(/\s/) && i).filter(_ => _);
    for (let i of spaceIndexes) {
      expect(changeCharFromPos(paragraph, '-', i)).toBe(paragraph);
    }
  });
});

describe('changeChar', () => {
  it('returns a string of the same size', () => {
    expect(typeof changeChar(str1)).toBe('string');
    expect(changeChar(str1).length).toBe(str1.length);
  });

  it('returned string is different', () => {
    expect(changeChar(str1)).not.toBe(str1);
  });

  it('contains a char from CHARS', () => {
    expect(CHARS.includes(changeChar(str1))).toBeTrue;
  });

  it('contains a char from arg', () => {
    expect(str1.includes(changeChar(str1))).toBeTrue;
  });
});

describe('changeRandomNumberOfChars', () => {
  it('returns a string of the same size', () => {
    expect(typeof changeRandomNumberOfChars(str1)).toBe('string');
    expect(changeRandomNumberOfChars(str1).length).toBe(str1.length);
  });

  it('returned string is different', () => {
    expect(changeRandomNumberOfChars(str1)).not.toBe(str1);
  });

  it('contains a char from CHARS', () => {
    expect(CHARS.includes(changeRandomNumberOfChars(str1))).toBeTrue;
  });

  it('contains a char from arg', () => {
    expect(str1.includes(changeRandomNumberOfChars(str1))).toBeTrue;
  });
});
