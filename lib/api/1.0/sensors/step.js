/* global hmSensor */
import { BaseSensor } from './baseSenor';

export class Step extends BaseSensor {
  constructor() {
    super(hmSensor.createSensor(hmSensor.id.STEP));
  }
}
