import {
  embaralha,
  throttledEmbaralha,
} from '../index.js';

import { sleep } from '../src/utils.js';

describe('embaralha', () => {
  const time = 500;
  const originalText = 'example';
  const elem = {
    textContent: originalText,
  };
  it('awaits `time` milisseconds', async () => {
    const callback = jest.fn();
    embaralha(elem, time).then(callback);
    expect(callback).not.toBeCalled();
    await sleep(time);
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('recovers original text in the end of the process', async() => {
    await embaralha(elem, time);
    expect(elem.textContent).toBe(originalText);
  });

  it('changes text in the middle of the process', async() => {
    embaralha(elem, time);
    await sleep(time / 2);
    expect(elem.textContent).not.toBe(originalText);
  });

  it('never fails', async () => {
    jest.clearAllTimers()
    const callbackError = jest.fn();
    embaralha(elem, time).catch(callbackError);
    await sleep(time);
    expect(callbackError).not.toBeCalled();
  });
});
