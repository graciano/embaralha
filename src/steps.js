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

const walkSteps = async (steps, iteration) => steps
  .reduce(async (walked, step) => {
    await walked;
    iteration();
    return sleep(step);
  }, Promise.resolve());

export {
  timePassed,
  walkSteps,
  steps,
};