import { UNSUPPORTED } from '.././_constants';

export class Gyroscope {
  start() {
    throw new Error(UNSUPPORTED);
  }

  stop() {
    throw new Error(UNSUPPORTED);
  }

  getCurrent() {
    throw new Error(UNSUPPORTED);
  }

  onChange(callback) {
    throw new Error(UNSUPPORTED);
  }

  offChange(callback) {
    throw new Error(UNSUPPORTED);
  }

  setFreqMode(mode) {
    throw new Error(UNSUPPORTED);
  }

  getFreqMode() {
    throw new Error(UNSUPPORTED);
  }
}
