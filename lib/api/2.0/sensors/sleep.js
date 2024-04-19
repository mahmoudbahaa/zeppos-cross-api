import { SLEEP as SLP, Time } from '@zos/sensor';
import { UNSUPPORTED } from '.././_constants';

export class Sleep {
  constructor() {
    this._sleep = new SLP();
  }

  updateInfo() {
    return this._sleep.updateInfo();
  }

  getInfo() {
    return this._sleep.getInfo();
  }

  getStageConstantObj() {
    return this._sleep.getStageConstantObj();
  }

  getStage() {
    return this._sleep.getStage();
  }

  getSleepingStatus() {
    const mins = Math.floor(new Time().getTime() / (60 * 1000)) % (24 * 60);
    const info = this.getInfo();
    return (mins > info.startTime && mins < info.endTime) ? 1 : 0;
  }

  getNap() {
    throw new Error(UNSUPPORTED);
  }
}
