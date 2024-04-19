import { isHmTimerDefined } from './utils';
import { getGlobal } from './global';

const globalNS = getGlobal();

if (typeof setTimeout === 'undefined' && isHmTimerDefined()) {
  globalNS.clearTimeout = function (timerRef) {
    timerRef && timer.stopTimer(timerRef);
  };

  globalNS.setTimeout = function (func, ns) {
    const timer1 = timer.createTimer(
      ns || 1,
      Number.MAX_SAFE_INTEGER,
      () => {
        globalNS.clearTimeout(timer1);
        func && func();
      },
      {},
    );

    return timer1;
  };

  globalNS.clearImmediate = function (timerRef) {
    timerRef && timer.stopTimer(timerRef);
  };

  globalNS.setImmediate = function (func) {
    const timer1 = timer.createTimer(
      1,
      Number.MAX_SAFE_INTEGER,
      () => {
        globalNS.clearImmediate(timer1);
        func && func();
      },
      {},
    );

    return timer1;
  };

  globalNS.clearInterval = function (timerRef) {
    timerRef && timer.stopTimer(timerRef);
  };

  globalNS.setInterval = function (func, ms) {
    const timer1 = timer.createTimer(
      1,
      ms,
      () => {
        func && func();
      },
      {},
    );

    return timer1;
  };
}
