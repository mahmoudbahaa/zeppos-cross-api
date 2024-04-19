/* global hmSensor */
/**
   * @zh 振动马达
   * @en Vibrator
   * @example
   * ```js
   * import { Vibrator, VIBRATOR_SCENE_DURATION } from '@zos/sensor'
   *
   * const vibrator = new Vibrator()
   * vibrator.start()
   *
   * // set scene
   * vibrator.setMode(VIBRATOR_SCENE_DURATION)
   * vibrator.start()
   * ```
   */
export class Vibrator {
  constructor() {
    this._vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);
  }

  /**
   * @zh 开始振动，传入的 `option` 参数，只对此次振动生效
   * @en Start vibration, if the `option` parameter is passed, it will only work for this vibration
   * @constants vibrator_scene
   */
  start(option) {
    if (option) {
      this._savedOption = this.getConfig();
      this.setMode(option);
    }

    this._vibrate.start();
  }

  /**
   * @zh 停止振动
   * @en Stop vibration
   */
  stop() {
    this._vibrate.stop();

    if (this._savedOption) {
      this.setMode(this._savedOption);
      this._savedOption = undefined;
    }
  }

  /**
   * @zh 设置振动模式，设置成功后调用 `start()`，会依照设置的模式进行振动
   * @en Set the vibration mode, call `start()` after successful setting, it will vibrate according to the set mode
   */
  setMode(option) {
    if (option.mode) {
      this._vibrate.scene = option.mode;
    }
  }

  /**
   * @zh 获取振动马达配置
   * @en Get Vibration Motor Configuration
   */
  getConfig() {
    return { mode: this._vibrate.scene };
  }
}
