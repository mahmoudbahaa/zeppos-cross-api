/* global hmSensor */
import { BaseSensor } from './baseSenor'

export class Calorie extends BaseSensor {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.CALORIE))
  }
}
