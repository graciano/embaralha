import {
  sleep,
  tick,
} from './utils.js';

const timePassed = steps => steps.reduce((acc, step) => acc + step, 0);
const stepsRecursive = (time, steps) => {
  const passed = timePassed(steps);
  const newStep = tick(passed, time);
  return time === passed ? steps : stepsRecursive(time, [...steps, newStep]);
};

const steps = time => stepsRecursive(time, []);

const walkSteps = (steps, iteration) => {
  const firstStep = {
    walked: Promise.resolve(),
    debt: 0,
  };
  return steps.reduce(async (walked, step) => {
    const debt = await walked;
    const start = performance.now();
    iteration();
    const nextDebt = performance.now() - start;
    await sleep(step - debt);
    return Promise.resolve(nextDebt);
  }, firstStep);
};

export {
  timePassed,
  walkSteps,
  steps,
};