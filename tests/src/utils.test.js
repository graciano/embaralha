import {
  random,
  randomRange,
  sleep,
  randomElem,
  range,
} from '../../src/utils.js';

describe('range(n)', () => {
  test('first element is 0', () => expect(range(1000)[0]).toBe(0));
  test('length is n', () => expect(range(1000).length).toBe(1000));
  test('range(3) is [0, 1, 2]', () => expect(range(3)).toStrictEqual([0, 1, 2]));
  test('range(6) is [0, 1, 2, 3, 4, 5]', () => expect(range(6)).toStrictEqual([0, 1, 2, 3, 4, 5]));
});

describe('random(n)', () => {
  it('is less than n', () => {
    expect(random(5)).toBeLessThan(5);
    expect(random(1000)).toBeLessThan(1000);
  });
  it('is <= 0', () => expect(random(1000)).toBeGreaterThanOrEqual(0));
});
