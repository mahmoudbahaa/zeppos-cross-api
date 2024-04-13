/* global hmSensor */

import { UNSUPPORTED } from '.././_constants';

/**
   * @zh 心率传感器
   * @en HeartRate Sensor
   * @permissionCode data:user.hd.heart_rate
   * @example
   * ```js
   * import { HeartRate } from '@zos/sensor'
   *
   * const heartRate = new HeartRate()
   * const lastValue = heartRate.getLast()
   *
   * const callback = () => {
   *   console.log(heartRate.getCurrent())
   * }
   *
   * heartRate.onCurrentChange(callback)
   *
   * // When not needed for use
   * heartRate.offCurrentChange(callback)
   * ```
   */
export class HeartRate {
	#heart;
	constructor() {
		this.#heart = hmSensor.createSensor(hmSensor.id.HEART);
	}

	/**
     * @zh 获取最近一次心率持续测量的测量值，此方法需要在 `onCurrentChange` 回调函数中使用，注册 `onCurrentChange` 事件后，设备会开启心率持续测量，以一定频率更新心率持续测量的测量值
     * @en Get the current heart rate measurement, this method needs to be used in the `onCurrentChange` callback function
     */
	getCurrent() {
		return this.#heart.current;
	}

	/**
     * @zh 获取最近一次的心率测量值。设备心率自动监测会更新心率测量值，注册 `onCurrentChange` 后设备开始持续测量心率，也会更新心率测量值
     * @en Get the most recent heart rate measurement (single measurement or heart rate monitoring measurement, continuous heart rate measurement `onCurrentChange` results are not counted)
     */
	getLast() {
		return this.#heart.last;
	}

	/**
     * @zh 获取当日自 0 时起至当前时刻以分钟计的心率测量值数据，数组最长为 60*24
     * @en Get the heart rate measurement data in minutes from 0:00 to the current moment of the day, the longest array is 60*24
     */
	getToday() {
		return this.#heart.today;
	}

	/**
     * @zh 调用此方法后设备开始心率持续测量，并注册回调函数，当有测量结果时调用回调函数，在回调函数中调用 `getCurrent` 方法可以获取心率持续测量的测量值，如需停止持续心率测量，需要调用 `offCurrentChange` 方法
     * @en Call this method and start measuring heart rate continuously, call the callback function when there is a measurement result, call the `getCurrent` method in the callback function to get the heart rate measurement value, if you want to stop the heart rate measurement, you need to call the `offCurrentChange` method
     * @version 2.1
     */
	onCurrentChange(callback) {
		this.#heart.addEventListener(this.#heart.event.CURRENT, callback);
	}

	/**
     * @zh 取消持续心率测量，并取消回调函数监听
     * @en Cancel continuous heart rate measurement and cancel callback function listeners
     * @version 2.1
     */
	offCurrentChange(callback) {
		this.#heart.removeEventListener(this.#heart.event.CURRENT, callback);
	}

	/**
     * @zh 注册心率测量值变化事件回调函数
     * @en Register the heart rate single measurement change event callback function
     * @version 2.1
     */
	onLastChange(callback) {
		this.#heart.addEventListener(this.#heart.event.LAST, callback);
	}

	/**
     * @zh 取消心率测量值变化事件回调函数
     * @en Cancel the heart rate single measurement change event callback function
     * @version 2.1
     */
	offLastChange(callback) {
		this.#heart.removeEventListener(this.#heart.event.LAST, callback);
	}

	/**
     * @zh 获取心率日统计数据
     * @en Get daily heart rate statistics
     * @version 3.0
     */
	getDailySummary() {
		throw new Error(UNSUPPORTED);
	}

	/**
     * @zh 获取当前静息心率
     * @en Get current resting heart rate
     * @version 3.0
     */
	getResting() {
		throw new Error(UNSUPPORTED);
	}

	/**
     * @zh 获取房颤数据数组
     * @en Get Atrial Fibrillation Data Array
     * @version 3.0
     */
	getAFibRecord() {
		throw new Error(UNSUPPORTED);
	}

	/**
     * @zh 调用此方法后设备开始实时静息心率测量，并注册回调函数，当有测量结果时调用回调函数，在回调函数中调用 `getResting` 方法可以获取静息心率测量值，如需停止静息心率测量，需要调用 `offRestingChange` 方法
     * @en After calling this method, the device starts real-time resting heart rate measurement and registers a callback function, which is called when there is a measurement result, in which the `getResting` method can be called to get the resting heart rate measurement value, and if you need to stop the resting heart rate measurement, you need to call the `offRestingChange` method
     * @version 3.0
     */
	onRestingChange(callback) {
		throw new Error(UNSUPPORTED);
	}

	/**
     * @zh 取消静息心率持续测量，并取消回调函数监听
     * @en Cancel continuous resting heart rate measurement and cancel callback function listeners
     * @version 3.0
     */
	offRestingChange(callback) {
		throw new Error(UNSUPPORTED);
	}
}
