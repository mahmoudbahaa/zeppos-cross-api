/* global hmSensor */

import { UNSUPPORTED } from '.././_constants';

/**
   * @zh 压力传感器
   * @en Stress Sensor
   * @permissionCode data:user.hd.stress
   * @example
   * ```js
   * import { Stress } from '@zos/sensor'
   *
   * const stress = new Stress()
   * const { value } = stress.getCurrent()
   *
   * const callback = () => {
   *   console.log(stress.getCurrent())
   * }
   *
   * stress.onChange(callback)
   *
   * // When not needed for use
   * stress.offChange(callback)
   * ```
   */
export class Stress {
	#stress;
	constructor() {
		this.#stress = hmSensor.createSensor(hmSensor.id.STRESS);
	}

	/**
   * @zh 获取当前压力测量值
   * @en Get the current pressure measurement
   */
	getCurrent() {
		return {value: this.#stress.current, time: this.#stress.time};
	}

	/**
   * @zh 注册压力测量值变化事件监听回调函数
   * @en Register a callback function to listen for stress measurement change events
   */
	onChange(callback) {
		this.#stress.addEventListener(hmSensor.event.CHANGE, callback);
	}

	/**
   * @zh 取消压力测量值变化事件监听回调函数
   * @en Cancel a callback function to listen for stress measurement change events
   */
	offChange(callback) {
		this.#stress.removeEventListener(hmSensor.event.CHANGE, callback);
	}

	/**
   * @zh 获取全天的压力测量值，每分钟记录一次，返回值为不定长数组，数组长度最大 24 * 60
   * @en Get the pressure measurements for the whole day, recorded every minute, the return value is an array of variable length, the maximum length of the array is 24 * 60
   * @version 3.0
   */
	getToday() {
		throw new Error(UNSUPPORTED);
	}

	/**
   * @zh 获取全天的压力均值，返回值为定长数组，为每小时的平均压力，数组长度为 24
   * @en Get the average pressure value for the whole day, the return value is a fixed-length array, the average pressure for each hour, the length of the array is 24
   * @version 3.0
   */
	getTodayByHour() {
		throw new Error(UNSUPPORTED);
	}

	/**
   * @zh 获取过去一周每天的压力均值，返回值为定长数组，为每天平均压力，数组长度为 7，索引 0 的位置代表六天前，索引 6 的位置代表今天
   * @en Get the average pressure value for each day of the past week, the return value is a fixed-length array, the average pressure per day, the length of the array is 7, the position of index 0 represents six days ago, the position of index 6 represents today
   * @version 3.0
   */
	getLastWeek() {
		throw new Error(UNSUPPORTED);
	}

	/**
   * @zh 获取过去一周每小时的压力平均值，返回值为定长数组，数组长度为 7 * 24
   * @en Get the hourly pressure average for the past week, the return value is a fixed-length array, the length of the array is 7 * 24
   * @version 3.0
   */
	getLastWeekByHour() {
		throw new Error(UNSUPPORTED);
	}
}
