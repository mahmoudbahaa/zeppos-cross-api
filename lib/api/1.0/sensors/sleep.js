/* global hmSensor */

import { UNSUPPORTED } from '.././_constants';
import { Time } from './time';

/**
   * @zh 睡眠传感器
   * @en Sleep Sensor
   * @permissionCode data:user.hd.sleep
   * @example
   * ```js
   * import { Sleep } from '@zos/sensor'
   *
   * const sleep = new Sleep()
   * const { score } = sleep.getInfo()
   * const sleepStageConstants = sleep.getStageConstantObj()
   * const stage = sleep.getStage()
   *
   * stage.forEach((i) => {
   *   const { model } = i
   *
   *   if (model === sleepStageConstants.WAKE_STAGE) {
   *     console.log('This stage is awake stage')
   *   }
   * })
   * ```
   */
export class Sleep {
	#sleep;
	constructor() {
		this.#sleep = hmSensor.createSensor(hmSensor.id.SLEEP);
	}

	/**
   * @zh 系统默认每 `30` 分钟更新一次睡眠数据,`updateInfo` 方法用来主动触发更新睡眠数据
   * @en By default, the system updates the sleep data every `30` minutes, the `updateInfo` method is used to actively trigger the update of the sleep data
   */
	updateInfo() {
		this.#sleep.updateInfo();
	}

	/**
   * @zh 获取睡眠信息
   * @en Get sleep information
   */
	getInfo() {
		const basicInfo = this.#sleep.getBasicInfo();
		return {
			score: basicInfo.score,
			deepTime: basicInfo.deepMin,
			startTime: basicInfo.startTime,
			endTime: basicInfo.endTime,
			totalTime: this.#sleep.getTotalTime(),
		};
	}

	/**
   * @zh 获取睡眠阶段的常量值，用于在 `getSleepStageData` 返回值中判断睡眠阶段
   * @en Get the constant value of the sleep stage, used to determine the sleep stage in the `getSleepStageData` return value
   */
	getStageConstantObj() {
		return this.#sleep.getSleepStageModel();
	}

	/**
   * @zh 获取睡眠分阶段数据
   * @en Get Sleep Staging Data
   */
	getStage() {
		return this.#sleep.getSleepStageData();
	}

	/**
   * @zh 获取当前睡眠状态，`0` 醒着，`1` 正在睡眠
   * @en Get the current sleep state, 0 'awake, 1' sleeping
   * @version 3.0
   */
	getSleepingStatus() {
		const mins = Math.floor(new Time().getTime() / (60 * 1000)) % (24 * 60);
		const basicInfo = this.#sleep.getBasicInfo();
		return (mins > basicInfo.startTime && mins < basicInfo.endTime) ? 1 : 0;
	}

	/**
   * @zh 获取零星小睡数据
   * @en Get nap data
   * @version 3.0
   */
	getNap() {
		throw new Error(UNSUPPORTED);
	}
}
