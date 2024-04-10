// #if API==1.0
/* global hmSensor */
import { BaseSensorNoTarget } from './baseSenorNoTarget'

export class Distance extends BaseSensorNoTarget {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.DISTANCE))
  }
}
// #endif
