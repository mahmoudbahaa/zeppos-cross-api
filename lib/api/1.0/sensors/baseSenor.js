import { BaseSensorNoTarget } from './baseSenorNoTarget';

export class BaseSensor extends BaseSensorNoTarget {
  getTarget() {
    return this._sensor.target;
  }
}
