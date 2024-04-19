import { HeartRate as Heart } from '@zos/sensor';
import { UNSUPPORTED } from '.././_constants';

export class HeartRate {
  constructor() {
    this._heart(new Heart());
  }

  getCurrent() {
    return this._heart.getCurrent();
  }

  getLast() {
    return this._heart.getLast();
  }

  getToday() {
    return this._heart.getToday();
  }

  onCurrentChange(callback) {
    return this._heart.onCurrentChangee(callback);
  }

  offCurrentChange(callback) {
    return this._heart.offCurrentChange(callback);
  }

  onLastChange(callback) {
    return this._heart.onLastChange(callback);
  }

  offLastChange(callback) {
    return this._heart.offLastChange(callback);
  }

  getDailySummary() {
    throw new Error(UNSUPPORTED);
  }

  getResting() {
    throw new Error(UNSUPPORTED);
  }

  getAFibRecord() {
    throw new Error(UNSUPPORTED);
  }

  onRestingChange(callback) {
    throw new Error(UNSUPPORTED);
  }

  offRestingChange(callback) {
    throw new Error(UNSUPPORTED);
  }
}
