// #if API==1.0
/* global hmSensor */
export class BaseSensorNoTarget {
  _sensor
  constructor (sensor) {
    this._sensor = sensor
  }

  getCurrent () {
    return this._sensor.current
  }

  onChange (callback) {
    this._sensor.addEventListener(hmSensor.event.CHANGE, callback)
  }

  offChange (callback) {
    this._sensor.removeEventListener(hmSensor.event.CHANGE, callback)
  }
}
// #endif
