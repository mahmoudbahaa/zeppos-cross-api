/* global hmSensor */
import { BaseSensorNoTarget } from './baseSenorNoTarget'

export class Battery extends BaseSensorNoTarget {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.BATTERY))
  }
}
