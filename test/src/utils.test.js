import {
  random,
  randomFromRange,
  sleep,
  randomElem,
  range,
  MIN_DURATION,
  MAX_DURATION,
} from '../../src/utils.js';

const pureSleep = ms => new Promise(resolve => setTimeout(resolve, ms));

describe('constants', () => {
  expect(MIN_DURATION).toBeLessThan(MAX_DURATION);
});

describe('range(n)', () => {
  it('returns an array', () => expect(range(2).constructor).toBe(Array));
  it('returns an array that is not empty', () => expect(range(1).length).toBeGreaterThan(0));
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

describe('randomFromRange(a, b)', () => {
  it('returns a number', () => expect(typeof randomFromRange(1, 2)).toBe('number'));
  it('returns a number >= a', () => {
    expect(randomFromRange(1, 6)).toBeGreaterThanOrEqual(1);
  });
  it('returns a number <= a', () => {
    expect(randomFromRange(1, 6)).toBeLessThanOrEqual(6);
  });
});

// jest doesn't work with promises (yet)
// https://stackoverflow.com/questions/51126786/jest-fake-timers-with-promises
describe('sleep(time)', () => {
  const time = MAX_DURATION - MIN_DURATION;
  it('awaits `time` milisseconds', async () => {
    const callback = jest.fn();
    sleep(time).then(callback);
    expect(callback).not.toBeCalled();
    await sleep(time);
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('never fails', async () => {
    jest.clearAllTimers()
    const callbackError = jest.fn();
    sleep(time).then(jest.fn()).catch(callbackError);
    await sleep(time);
    expect(callbackError).not.toBeCalled();
  });

  it('runs immediately if time is less than MIN_DURATION', async () => {
    const cb = jest.fn();
    const time = MIN_DURATION - 1;
    pureSleep(time).then(cb);
    await sleep(time);
    expect(cb).not.toBeCalled();
  });
});

describe('randomElem', () => {
  const arr1 = [0, 1, 2, 3];
  const arr2 = ['Michelangelo', 'Donatello', 'Leonardo', 'Rafael'];
  it('returns a member of the array', () => {
    expect(arr1.includes(randomElem(arr1))).toBeTrue;
    expect(arr2.includes(randomElem(arr2))).toBeTrue;
  })
  it('doesn\'t return falsey elements (unless there is such an element in the array)',
    () => expect(randomElem(arr2)).not.toBeFalsey);
});
