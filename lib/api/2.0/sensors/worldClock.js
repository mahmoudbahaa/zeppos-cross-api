import { UNSUPPORTED } from '.././_constants';

export class WorldClock {
  getCount() {
    throw new Error(UNSUPPORTED);
  }

  getInfo(index) {
    throw new Error(UNSUPPORTED);
  }
}
