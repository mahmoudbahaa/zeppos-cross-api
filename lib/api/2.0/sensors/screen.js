import { UNSUPPORTED } from '.././_constants';

export class Screen {
  getStatus() {
    throw new Error(UNSUPPORTED);
  }

  getAodMode() {
    throw new Error(UNSUPPORTED);
  }

  onChange(callback) {
    throw new Error(UNSUPPORTED);
  }

  offChange(callback) {
    throw new Error(UNSUPPORTED);
  }
}
