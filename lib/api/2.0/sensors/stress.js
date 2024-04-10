// #if API==2.0
import SENSOR from '@zos/sensor'
import { UNSUPPORTED } from '../../utils/constants'

export class Stress extends SENSOR.Stress {
  // @ts-ignore
  getToday () {
    throw new Error(UNSUPPORTED)
  }

  // @ts-ignore
  getTodayByHour () {
    throw new Error(UNSUPPORTED)
  }

  // @ts-ignore
  getLastWeek () {
    throw new Error(UNSUPPORTED)
  }

  // @ts-ignore
  getLastWeekByHour () {
    throw new Error(UNSUPPORTED)
  }
}
// #endif
