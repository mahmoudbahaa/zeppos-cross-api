// #if API==1.0
/* global hmSensor */
import { BaseSensor } from './baseSenor'

export class Step extends BaseSensor {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.STEP))
  }
}
// #endif
