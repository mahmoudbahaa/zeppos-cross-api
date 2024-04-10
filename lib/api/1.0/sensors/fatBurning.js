// #if API==1.0
/* global hmSensor */
import { BaseSensor } from './baseSenor'

export class FatBurning extends BaseSensor {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.FAT_BURRING))
  }
}
// #endif
