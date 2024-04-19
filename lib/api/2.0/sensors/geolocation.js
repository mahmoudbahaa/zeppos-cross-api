import { Geolocation as Geo } from '@zos/sensor';
import { UNSUPPORTED } from '.././_constants';

export class Geolocation {
  constructor() {
    this._geo = new Geo();
  }

  start() {
    this._geo.start();
  }

  stop() {
    this._geo.stop();
  }

  getStatus() {
    return this._geo.getStatus();
  }

  getLatitude(option) {
    return this._geo.getLatitude(option);
  }

  getLongitude(option) {
    return this._geo.getLongitude(option);
  }

  onChange(callback) {
    this._geo.onChange(callback);
  }

  offChange(callback) {
    this._geo.offChange(callback);
  }

  getSetting() {
    throw new Error(UNSUPPORTED);
  }

  onGnssChange(callback) {
    throw new Error(UNSUPPORTED);
  }

  offGnssChange(callback) {
    throw new Error(UNSUPPORTED);
  }
}
