const VIBRATOR_SCENE_SHORT_LIGHT = 23;
const VIBRATOR_SCENE_SHORT_MIDDLE = 24;
const VIBRATOR_SCENE_SHORT_STRONG = 25;
const VIBRATOR_SCENE_DURATION = 28;
const VIBRATOR_SCENE_DURATION_LONG = 27;
const VIBRATOR_SCENE_STRONG_REMINDER = 9;
const VIBRATOR_SCENE_NOTIFICATION = 0;
const VIBRATOR_SCENE_CALL = 1;
const VIBRATOR_SCENE_TIMER = 5;
const TIME_HOUR_FORMAT_12 = 0;
const TIME_HOUR_FORMAT_24 = 1;
const FREQ_MODE_LOW = 0;
const FREQ_MODE_NORMAL = 1;
const FREQ_MODE_HIGH = 2;

const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

class Accelerometer {
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

class Barometer {
	getAirPressure() {
		throw new Error(UNSUPPORTED);
	}

	getAltitude() {
		throw new Error(UNSUPPORTED);
	}

	onChange(callback) {
		throw new Error(UNSUPPORTED);
	}

	offChange(callback) {
		throw new Error(UNSUPPORTED);
	}
}

/* global hmSensor */
class BaseSensorNoTarget {
  _sensor
  constructor (sensor) {
    this._sensor = sensor;
  }

  getCurrent () {
    return this._sensor.current
  }

  onChange (callback) {
    this._sensor.addEventListener(hmSensor.event.CHANGE, callback);
  }

  offChange (callback) {
    this._sensor.removeEventListener(hmSensor.event.CHANGE, callback);
  }
}

/* global hmSensor */

class Battery extends BaseSensorNoTarget {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.BATTERY));
  }
}

/* global hmSensor */


/**
   * @zh 血氧传感器
   * @en Blood oxygen Sensor
   * @permissionCode data:user.hd.spo2
   * @example
   * ```js
   * import { BloodOxygen } from '@zos/sensor'
   *
   * const bloodOxygen = new BloodOxygen()
   * const { value } = bloodOxygen.getCurrent()
   * const lastDay = bloodOxygen.getLastDay()
   * const callback = () => {
   *   console.log(bloodOxygen.getCurrent())
   * }
   *
   * bloodOxygen.onChange(callback)
   * bloodOxygen.stop()
   * bloodOxygen.start()
   * // When not needed for use
   * bloodOxygen.offChange(callback)
   * ```
   */
class BloodOxygen {
	#spo2;
	constructor() {
		this.#spo2 = hmSensor.createSensor(hmSensor.id.SPO2);
	}

	/**
   * @zh 获取当前测量的血氧结果
   * @en Get the current measured blood oxygen result
   */
	getCurrent() {
		return {value: this.#spo2.current, time: this.#spo2.time, retCode: this.#spo2.time.retcode};
	}

	/**
   * @zh 返回过去 24 小时平均血氧数据，数组长度为 24
   * @en Returns the average blood sample data for the past 24 hours, with an array length of 24
   */
	getLastDay() {
		return this.#spo2.hourAvgofDay;
	}

	/**
   * @zh 开始血氧测量，建议在调用 `start` 方法前，调用 `stop` 来停止上一次测量
   * @en Start blood oxygen measurement, it is recommended to call `stop` to stop the last measurement before calling the `start` method
   * @version 2.1
   */
	start() {
		return this.#spo2.start();
	}

	/**
   * @zh 停止血氧测量
   * @en Cancel blood oxygen measurement
   * @version 2.1
   */
	stop() {
		return this.#spo2.stop();
	}

	/**
   * @zh 注册血氧测量值变化事件监听回调函数
   * @en Register a callback function to listen for blood oxygen measurement change events
   */
	onChange(callback) {
		this.#spo2.addEventListener(hmSensor.event.CHANGE, callback);
	}

	/**
   * @zh 取消血氧测量值变化事件监听回调函数
   * @en Cancel a callback function to listen for blood oxygen measurement change events
   */
	offChange(callback) {
		this.#spo2.removeEventListener(hmSensor.event.CHANGE, callback);
	}

	/**
   * @zh 获取最近 `hour` 个小时的血氧测量数据，结果按照时间顺序排序
   * @en Obtain blood oxygen measurements for the last `hour` and sort the results in chronological order
   * @version 3.0
   */
	getLastFewHour(hour) {
		throw new Error(UNSUPPORTED);
	}
}

class BaseSensor extends BaseSensorNoTarget {
  getTarget () {
    return this._sensor.target
  }
}

/* global hmSensor */

class Calorie extends BaseSensor {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.CALORIE));
  }
}

class Compass {
	start() {
		throw new Error(UNSUPPORTED);
	}

	stop() {
		throw new Error(UNSUPPORTED);
	}

	getStatus() {
		throw new Error(UNSUPPORTED);
	}

	getDirection() {
		throw new Error(UNSUPPORTED);
	}

	getDirectionAngle() {
		throw new Error(UNSUPPORTED);
	}

	onChange(callback) {
		throw new Error(UNSUPPORTED);
	}

	offChange(callback) {
		throw new Error(UNSUPPORTED);
	}
}

/* global hmSensor */

class Distance extends BaseSensorNoTarget {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.DISTANCE));
  }
}

/* global hmSensor */

class FatBurning extends BaseSensor {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.FAT_BURRING));
  }
}

class Geolocation {
	start() {
		throw new Error(UNSUPPORTED);
	}

	stop() {
		throw new Error(UNSUPPORTED);
	}

	getStatus() {
		throw new Error(UNSUPPORTED);
	}

	getLatitude(option) {
		throw new Error(UNSUPPORTED);
	}

	getLongitude(option) {
		throw new Error(UNSUPPORTED);
	}

	getSetting() {
		throw new Error(UNSUPPORTED);
	}

	onChange(callback) {
		throw new Error(UNSUPPORTED);
	}

	offChange(callback) {
		throw new Error(UNSUPPORTED);
	}

	onGnssChange(callback) {
		throw new Error(UNSUPPORTED);
	}

	offGnssChange(callback) {
		throw new Error(UNSUPPORTED);
	}
}

class Gyroscope {
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

/* global hmSensor */


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
class HeartRate {
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

/* global hmSensor */
/**
   * @zh PAI 传感器
   * @en PAI Sensor
   * @permissionCode data:user.hd.pai
   * @example
   * ```js
   * import { Pai } from '@zos/sensor'
   *
   * const pai = new Pai()
   * const total = pai.getTotal()
   * const today = pai.getToday()
   * const lastWeek = pai.getLastWeek()
   * ```
   */
class Pai {
  #pai
  constructor () {
    this.#pai = hmSensor.createSensor(hmSensor.id.PAI);
  }

  /**
     * @zh 获取当前累计的 PAI 值
     * @en Get the current cumulative PAI value
     */
  getTotal () {
    return this.#pai.totalpai
  }

  /**
     * @zh 获取今日获取的 PAI 值
     * @en Get the PAI values obtained today
     */
  getToday () {
    return this.#pai.dailypai
  }

  /**
     * @zh 获取一周的 PAI 数据，返回值为长度为 `7` 的数组，数组索引 `0` 的位置为今天的 PAI 值，索引 `1` 的位置为前 1 天的 PAI 值，以此类推
     * @en Get the PAI data for a week, the return value is an array of length `7`, the position of index `0` is the PAI value of today, the position of index `1` is the PAI value of the previous day, and so on
     */
  getLastWeek () {
    return [this.#pai.prepai6, this.#pai.prepai5, this.#pai.prepai4, this.#pai.prepai3, this.#pai.prepai2, this.#pai.prepai1, this.#pai.prepai0]
  }
}

class Screen {
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

/* global hmSensor */

/**
   * @zh 时间/日期传感器
   * @en Time/Date Sensor
   * @example
   * ```js
   * import { Time } from '@zos/sensor'
   *
   * const time = new Time()
   * const currentTime = time.getTime()
   * ```
   */
class Time {
	#time;
	constructor() {
		this.#time = hmSensor.createSensor(hmSensor.id.TIME);
	}

	/**
     * @zh 获取 UTC 时间戳，单位毫秒
     * @en Gets the UTC timestamp in milliseconds
     */
	getTime() {
		return this.#time.utc;
	}

	/**
     * @zh 获取当前日期的年份
     * @en Get the year of the current date
     */
	getFullYear() {
		return this.#time.year;
	}

	/**
     * @zh 获取当前日期的月份，范围 1 - 12，返回 `1` 代表 1 月
     * @en Get the month of the current date, range 1 - 12, return `1` for January
     */
	getMonth() {
		return this.#time.month;
	}

	/**
     * @zh 获取当前日期的天数，即一个月中的哪一天，范围 1 - 31
     * @en Get the number of days of the current date, i.e. the day of the month, in the range 1 - 31
     */

	getDate() {
		return this.#time.day;
	}

	/**
     * @zh 获取当前时间的小时数
     * @en Get the number of hours of the current time
     */
	getHours() {
		return this.#time.hour;
	}

	/**
     * @zh 获取当前时间的分钟数
     * @en Get the number of minutes of the current time
     */
	getMinutes() {
		return this.#time.minute;
	}

	/**
     * @zh 获取当前时间的秒数
     * @en Get the number of seconds of the current time
     */
	getSeconds() {
		return this.#time.second;
	}

	/**
     * @zh 获取当前时间对应一周中的第几天，范围 1 - 7，返回 `1` 代表星期一
     * @en Get the current time corresponding to the day of the week, range 1 - 7, return `1` for Monday
     */
	getDay() {
		return this.#time.week;
	}

	/**
     * @zh 获取当前系统时间格式，12 小时/24 小时，值参考小时格式常量
     * @en Get the current system time format, 12-hour format or 24-hour format，value reference hour format constants
     * @constants hour_format
     * @version 2.1
     */
	getHourFormat() {
		return this.#time.is24Hour ? TIME_HOUR_FORMAT_24 : TIME_HOUR_FORMAT_12;
	}

	/**
     * @zh 获取当前时间格式（12 小时/24 小时）下的小时数
     * @en Get the number of hours in the current time format (12-hour format or 24-hour format)
     * @version 2.1
     */
	getFormatHour() {
		return this.#time.format_hour;
	}

	/**
     * @zh 注册每分钟结束事件监听回调函数
     * @en Register end-of-minute event listener callback function
     * @version 2.1
     */
	onPerMinute(callback) {
		this.#time.addEventListener(this.#time.event.MINUTEEND, callback);
	}

	/**
     * @zh 注册每天结束事件监听回调函数
     * @en Register the end-of-day event listener callback function
     * @version 2.1
     */
	onPerDay(callback) {
		this.#time.addEventListener(this.#time.event.DAYCHANGE, callback);
	}

	/**
     * @zh 获取公历节日，如果没有节日，则返回字符串 `'INVALID'`
     * @en Get gregorian holidays, or return the string `'INVALID'` if there is no holiday
     */
	getFestival() {
		return this.#time.solar_festival;
	}

	/**
     * @zh 获取中国农历年份，仅在系统语言设置为中文时生效
     * @en Get Chinese lunar year, only works when system language is set to Chinese
     */
	getLunarYear() {
		return this.#time.lunar_year;
	}

	/**
     * @zh 获取中国农历月份，仅在系统语言设置为中文时生效
     * @en Get Chinese lunar month, only works when system language is set to Chinese
     */
	getLunarMonth() {
		return this.#time.lunar_month;
	}

	/**
     * @zh 获取中国农历日期，仅在系统语言设置为中文时生效
     * @en Get Chinese lunar day, only works when system language is set to Chinese
     */
	getLunarDay() {
		return this.#time.lunar_day;
	}

	/**
     * @zh 获取中国农历节日，仅在系统语言设置为中文时生效，如果没有节日，则返回字符串 `'INVALID'`
     * @en Get Chinese lunar holidays, only works when system language is set to Chinese, or return the string `'INVALID'` if there is no holiday
     */
	getLunarFestival() {
		return this.#time.lunar_festival;
	}

	/**
     * @zh 获取中国农历节气，仅在系统语言设置为中文时生效，如果没有节气，则返回字符串 `'INVALID'`
     * @en Get Traditional Chinese Solar Terms, only works when system language is set to Chinese, or return the string `'INVALID'` if there is no Solar Term
     */
	getSolarTerm() {
		return this.#time.lunar_solar_term;
	}

	/**
     * @zh 获取当天显示的节日字符串，仅在系统语言设置为中文时生效，优先级依次是公历节日、中国农历节日、中国农历节气，
     * @en Get the holiday strings displayed on that day, the priority is Gregorian holidays, Chinese lunar holidays, Chinese lunar festivals in that order, only when the system language is set to Chinese
     */
	getShowFestival() {
		return this.#time.getShowFestival();
	}

	/**
     * @zh 获取中国农历当前月的月历信息，仅在系统语言设置为中文时生效
     * @en Get the monthly calendar information of the current month of Chinese lunar calendar, only works when the system language is set to Chinese
     */
	getLunarMonthCalendar() {
		return this.#time.getLunarMonthCalendar();
	}

	/**
     * @zh 注册日出事件监听回调函数，仅当设备天气信息时才会生效
     * @en Register the Sunrise event listener callback function to take effect only when the device weather information
     * @version 3.0
     */
	onSunrise(callback) {
		throw new Error(UNSUPPORTED);
	}

	/**
     * @zh 注册日落事件监听回调函数，仅当设备天气信息时才会生效
     * @en Register the Sunset event listener callback function to take effect only when the device weather information
     * @version 3.0
     */
	onSunset(callback) {
		throw new Error(UNSUPPORTED);
	}

	/**
     * @zh 注册手机修改时间事件监听回调函数
     * @en Register the phone modify time event listening callback function
     * @version 3.0
     */
	onPhoneTimeSetting(callback) {
		throw new Error(UNSUPPORTED);
	}
}

/* global hmSensor */


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
class Sleep {
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

/* global hmSensor */

class Stand extends BaseSensor {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.STAND));
  }
}

/* global hmSensor */

class Step extends BaseSensor {
  constructor () {
    super(hmSensor.createSensor(hmSensor.id.STEP));
  }
}

/* global hmSensor */


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
class Stress {
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
class Vibrator {
  #vibrate
  #savedOption
  constructor () {
    this.#vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);
  }

  /**
   * @zh 开始振动，传入的 `option` 参数，只对此次振动生效
   * @en Start vibration, if the `option` parameter is passed, it will only work for this vibration
   * @constants vibrator_scene
   */
  start (option) {
    if (option) {
      this.#savedOption = this.getConfig();
      this.setMode(option);
    }

    this.#vibrate.start();
  }

  /**
   * @zh 停止振动
   * @en Stop vibration
   */
  stop () {
    this.#vibrate.stop();

    if (this.#savedOption) {
      this.setMode(this.#savedOption);
      this.#savedOption = undefined;
    }
  }

  /**
   * @zh 设置振动模式，设置成功后调用 `start()`，会依照设置的模式进行振动
   * @en Set the vibration mode, call `start()` after successful setting, it will vibrate according to the set mode
   */
  setMode (option) {
    if (option.mode) this.#vibrate.scene = option.mode;
  }

  /**
   * @zh 获取振动马达配置
   * @en Get Vibration Motor Configuration
   */
  getConfig () {
    return { mode: this.#vibrate.scene }
  }
}

/* global hmSensor */
/**
   * @zh 佩戴状态传感器
   * @en Wearing status sensor
   * @example
   * ```js
   * import { Wear } from '@zos/sensor'
   *
   * const wear = new Wear()
   * const status = wear.getStatus()
   * const callback = () => {
   *   console.log(wear.getStatus())
   * }
   *
   * wear.onChange(callback)
   *
   * // When not needed for use
   * wear.offChange(callback)
   * ```
   */
class Wear {
  #wear
  constructor () {
    this.#wear = hmSensor.createSensor(hmSensor.id.WEAR);
  }

  /**
     * @zh 获取当前设备佩戴状态，`0`：未佩戴、`1`：佩戴、`2`：运动中、`3`：不确定
     * @en Get the current device wearing status, `0`: not wearing, `1`: wearing, `2`: in motion, `3`: not sure
     */
  getStatus () {
    return this.#wear.current
  }

  /**
     * @zh 注册设备佩戴状态变化事件监听回调函数
     * @en Register the device wear status change event listening callback function
     */
  onChange (callback) {
    this.#wear.addEventListener(hmSensor.event.CHANGE, callback);
  }

  /**
     * @zh 取消设备佩戴状态变化事件监听回调函数
     * @en Cancel the device wear status change event listening callback function
     */
  offChange (callback) {
    this.#wear.removeEventListener(hmSensor.event.CHANGE, callback);
  }
}

/* global hmSensor */
/**
   * @zh 天气预报传感器
   * @en Weather Forecasts sensor
   * @deprecated https://github.com/orgs/zepp-health/discussions/83
   * @example
   * ```js
   * import { Weather } from '@zos/sensor'
   *
   * const weather = new Weather()
   * const { forecastData, tideData, cityName } = weather.getForecast()
   *
   * console.log(cityName)
   *
   * for (let i = 0; i < forecastData.count; i++) {
   *   const element = forecastData.data[i]
   *   console.log('Index' + element.index)
   *   console.log('Highest temperature' + element.high)
   *   console.log('Lowest temperature' + element.low)
   * }
   *
   * for (let i = 0; i < tideData.count; i++) {
   *   const element = tideData.data[i]
   *   console.log('Sunrise' + element.sunrise.hour + element.sunrise.minute)
   *   console.log('Sunset' + element.sunset.hour + element.sunset.minute)
   * }
   * ```
   */
class Weather {
  #weather

  constructor () {
    this.#weather = hmSensor.createSensor(hmSensor.id.WEATHER);
  }

  /**
   * @zh 获取天气预报数据
   * @en Get weather forecast data
   */
  getForecastWeather () {
    return this.#weather.getForecastWeather()
  }
}

class Workout {
	getStatus() {
		throw new Error(UNSUPPORTED);
	}

	getHistory() {
		throw new Error(UNSUPPORTED);
	}
}

/* global hmSensor */
/**
   * @zh 世界时钟传感器
   * @en World Clock Sensor
   * @version 3.0
   * @example
   * ```js
   * import { WorldClock } from '@zos/sensor'
   *
   * const worldClock = new WorldClock()
   * const worldClockCount = worldClock.getCount()
   *
   * for (let i = 0; i < worldClockCount; i++) {
   *   const worldClockInfo = worldClock.getInfo(i)
   *   console.log(worldClockInfo.city)
   *   console.log(worldClockInfo.cityCode)
   *   console.log(worldClockInfo.hour)
   *   console.log(worldClockInfo.minute)
   *   console.log(worldClockInfo.timeZoneHour)
   *   console.log(worldClockInfo.timeZoneMinute)
   * }
   *
   * // When not needed for use
   * worldClock.destroy()
   * ```
   */
class WorldClock {
  #world_clock

  constructor () {
    this.#world_clock = hmSensor.createSensor(hmSensor.id.WORLD_CLOCK);
  }

  /**
   * @zh 获取配置的世界时钟数量
   * @en Get the number of configured world clocks
   */
  getCount () {
    this.#world_clock.init();
    const result = this.#world_clock.getWorldClockCount();
    this.#world_clock.uninit();
    return result
  }

  /**
   * @zh 根据索引获取配置的世界时钟信息
   * @en Get the configured world clock information according to the index
   */
  getInfo (index) {
    this.#world_clock.init();
    const result = this.#world_clock.getWorldClockCountInfo(index);
    this.#world_clock.uninit();
    return result
  }
}

export { Accelerometer, Barometer, Battery, BloodOxygen, Calorie, Compass, Distance, FREQ_MODE_HIGH, FREQ_MODE_LOW, FREQ_MODE_NORMAL, FatBurning, Geolocation, Gyroscope, HeartRate, Pai, Screen, Sleep, Stand, Step, Stress, TIME_HOUR_FORMAT_12, TIME_HOUR_FORMAT_24, Time, VIBRATOR_SCENE_CALL, VIBRATOR_SCENE_DURATION, VIBRATOR_SCENE_DURATION_LONG, VIBRATOR_SCENE_NOTIFICATION, VIBRATOR_SCENE_SHORT_LIGHT, VIBRATOR_SCENE_SHORT_MIDDLE, VIBRATOR_SCENE_SHORT_STRONG, VIBRATOR_SCENE_STRONG_REMINDER, VIBRATOR_SCENE_TIMER, Vibrator, Wear, Weather, Workout, WorldClock };
