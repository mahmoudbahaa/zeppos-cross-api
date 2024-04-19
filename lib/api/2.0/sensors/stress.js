import { Stress as Strss } from '@zos/sensor';
import { UNSUPPORTED } from '.././_constants';

export class Stress {
  constructor() {
    this._stress = new Strss();
  }

  getCurrent() {
    return this._stress.getCurrent();
  }

  onChange(callback) {
    this._stress.onChange(callback);
  }

  offChange(callback) {
    this._stress.offChange(callback);
  }

  getToday() {
    throw new Error(UNSUPPORTED);
  }

  getTodayByHour() {
    throw new Error(UNSUPPORTED);
  }

  getLastWeek() {
    throw new Error(UNSUPPORTED);
  }

  getLastWeekByHour() {
    throw new Error(UNSUPPORTED);
  }
}
