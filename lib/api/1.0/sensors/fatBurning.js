/* global hmSensor */
import { BaseSensor } from './baseSenor'

export class FatBurning extends BaseSensor {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.FAT_BURRING))
  }
}
