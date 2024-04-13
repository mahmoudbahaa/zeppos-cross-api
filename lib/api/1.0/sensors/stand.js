/* global hmSensor */
import { BaseSensor } from './baseSenor'

export class Stand extends BaseSensor {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.STAND))
  }
}
