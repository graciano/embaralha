import {
  timePassed,
  walkSteps,
  steps,
} from '../../src/steps';

import {
  MIN_DURATION,
  MAX_DURATION,
} from '../../src/utils.js';

const time = 800;
const pureSleep = ms => new Promise(resolve => setTimeout(resolve, ms));
describe('time passed', () => {
  it('returns a number', () => {
    expect(typeof timePassed([12, 34])).toBe('number');
  })
  it('returns 0 for an empty array', () => {
    expect(timePassed([])).toBe(0);
  })
  it('returns the sum of it\'s elements', () => {
    expect(timePassed([10, 20, 20])).toBe(50);
  })
})

describe('steps', () => {
  it('returns an array of numbers', () => {
    expect(Array.isArray(steps(time))).toBe(true);
    expect(typeof steps(time).pop()).toBe('number');
  })
  it('has a minimum length in function of MAX_DURATION', () => {
    const min = Math.ceil(time / MAX_DURATION);
    expect(steps(time).length).toBeGreaterThanOrEqual(min);
  })
  it('has a maximum length in function of MIN_DURATION', () => {
    const max = Math.floor(time / MIN_DURATION);
    expect(steps(time).length).toBeLessThanOrEqual(max);
  })
  it('time passed is correct', () => {
    expect(timePassed(steps(time))).toBe(time);
  })
})

describe('walkSteps', () => {
  it('awaits time passed for steps', async () => {
    const cb = jest.fn();
    walkSteps(steps(time), jest.fn()).then(cb);
    await pureSleep(time / 2);
    expect(cb).not.toBeCalled();
    await pureSleep(time / 2);
    expect(cb).toBeCalled();
  })

  it('calls the iteration function for each step', async () => {
    const iteration = jest.fn();
    const arraySteps = steps(time);
    await walkSteps(arraySteps, iteration);
    expect(iteration).toHaveBeenCalledTimes(arraySteps.length);
  })
})