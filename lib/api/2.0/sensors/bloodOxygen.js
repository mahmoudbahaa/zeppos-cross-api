import { BloodOxygen as BO } from '@zos/sensor';
import { UNSUPPORTED } from '.././_constants';

export class BloodOxygen {
  constructor() {
    this._spo2 = new BO();
  }

  getCurrent() {
    return this._spo2.getCurrent();
  }

  getLastDay() {
    return this._spo2.getLastDay();
  }

  start() {
    this._spo2.start();
  }

  stop() {
    this._spo2.stop();
  }

  onChange(callback) {
    this._spo2.onChange(callback);
  }

  offChange(callback) {
    this._spo2.offChange(callback);
  }

  getLastFewHour(hour) {
    throw new Error(UNSUPPORTED);
  }
}
