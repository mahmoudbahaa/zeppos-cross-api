/**
  * @zh 传感器
  * @en Sensor
  */


declare module '@zos/sensor' {

  /**
   * @zh 振动强度轻，时间较短（20ms）
   * @en Light vibration intensity and short time (20ms)
   */
  const VIBRATOR_SCENE_SHORT_LIGHT: number;
  /**
   * @zh 振动强度中等，时间较短（20ms）
   * @en Medium vibration intensity, short time (20ms)
   */
  const VIBRATOR_SCENE_SHORT_MIDDLE: number;
  /**
   * @zh 振动强度高，时间较短（20ms）
   * @en High vibration intensity and short time (20ms)
   */
  const VIBRATOR_SCENE_SHORT_STRONG: number;
  /**
   * @zh 振动强度高，持续 600ms
   * @en High vibration intensity, lasting 600ms
   */
  const VIBRATOR_SCENE_DURATION: number;
  /**
   * @zh 振动强度高，持续 1000ms
   * @en High vibration intensity, lasting 1000ms
   */
  const VIBRATOR_SCENE_DURATION_LONG: number;
  /**
   * @zh 振动强度高，1200ms 内振动四次，用于较强提醒
   * @en High vibration intensity, four vibrations in 1200ms, can be used for stronger reminders
   */
  const VIBRATOR_SCENE_STRONG_REMINDER: number;
  /**
   * @zh 短促振动两次，与手表消息通知振动反馈一致
   * @en Two short, continuous vibrations, consistent with the watch message notification vibration feedback
   */
  const VIBRATOR_SCENE_NOTIFICATION: number;
  /**
   * @zh 振动强度高，单次 500ms 内振动两次，持续振动，需要手动 `stop` 才会停止，与手表来电振动反馈一致
   * @en High vibration intensity, single vibration twice in 500ms, continuous vibration, need to manually `stop`, consistent with the watch call vibration feedback
   */
  const VIBRATOR_SCENE_CALL: number;
  /**
   * @zh 振动强度高，单次长振动 500ms，持续振动，需要手动 `stop` 才会停止，与手表闹钟、倒计时振动反馈一致
   * @en High vibration intensity, single long vibration 500ms, continuous vibration, need to manually `stop`, consistent with the watch alarm clock, countdown vibration feedback
   */
  const VIBRATOR_SCENE_TIMER: number;
  /**
   * @zh 12 小时制
   * @en 12-hour format
   * @version 2.1
   */
  const TIME_HOUR_FORMAT_12: number;
  /**
   * @zh 24 小时制
   * @en 24-hour format
   * @version 2.1
   */
  const TIME_HOUR_FORMAT_24: number;
  /**
   * @zh 低功耗模式，触发频率低
   * @en Low power mode with low trigger frequency
   * @version 3.0
   */
  const FREQ_MODE_LOW: number;
  /**
   * @zh 正常功耗模式，触发频率中等
   * @en Normal power consumption mode, medium trigger frequency
   * @version 3.0
   */
  const FREQ_MODE_NORMAL: number;
  /**
   * @zh 高功耗模式，触发频率高
   * @en High power consumption mode with high trigger frequency
   * @version 3.0
   */
  const FREQ_MODE_HIGH: number;
  namespace Time {
    namespace getLunarMonthCalendar {
      /**
       * @output
       */
      interface LunarMonthCalendar {
        /**
         * @zh 当前月的天数
         * @en Number of days in the current month
         */
        day_count: number;
        /**
         * @zh 当前月每一天展示内容数组，展示内容优先级为节日、节气、日期
         * @en Array of display content for each day of the current month, display content priority for holidays, Solar Term, date
         */
        lunar_days_array: Array<string>;
      }
    }
  }

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
    /**
     * @zh 获取 UTC 时间戳，单位毫秒
     * @en Gets the UTC timestamp in milliseconds
     */
    getTime(): number;
    /**
     * @zh 获取当前日期的年份
     * @en Get the year of the current date
     */
    getFullYear(): number;
    /**
     * @zh 获取当前日期的月份，范围 1 - 12，返回 `1` 代表 1 月
     * @en Get the month of the current date, range 1 - 12, return `1` for January
     */
    getMonth(): number;
    /**
     * @zh 获取当前日期的天数，即一个月中的哪一天，范围 1 - 31
     * @en Get the number of days of the current date, i.e. the day of the month, in the range 1 - 31
     */
    getDate(): number;
    /**
     * @zh 获取当前时间的小时数
     * @en Get the number of hours of the current time
     */
    getHours(): number;
    /**
     * @zh 获取当前时间的分钟数
     * @en Get the number of minutes of the current time
     */
    getMinutes(): number;
    /**
     * @zh 获取当前时间的秒数
     * @en Get the number of seconds of the current time
     */
    getSeconds(): number;
    /**
     * @zh 获取当前时间对应一周中的第几天，范围 1 - 7，返回 `1` 代表星期一
     * @en Get the current time corresponding to the day of the week, range 1 - 7, return `1` for Monday
     */
    getDay(): number;
    /**
     * @zh 获取当前系统时间格式，12 小时/24 小时，值参考小时格式常量
     * @en Get the current system time format, 12-hour format or 24-hour format，value reference hour format constants
     * @constants hour_format
     * @version 2.1
     */
    getHourFormat(): number;
    /**
     * @zh 获取当前时间格式（12 小时/24 小时）下的小时数
     * @en Get the number of hours in the current time format (12-hour format or 24-hour format)
     * @version 2.1
     */
    getFormatHour(): number;
    /**
     * @zh 注册每分钟结束事件监听回调函数
     * @en Register end-of-minute event listener callback function
     * @version 2.1
     */
    onPerMinute(callback: () => void): void;
    /**
     * @zh 注册每天结束事件监听回调函数
     * @en Register the end-of-day event listener callback function
     * @version 2.1
     */
    onPerDay(callback: () => void): void;
    /**
     * @zh 获取公历节日，如果没有节日，则返回字符串 `'INVALID'`
     * @en Get gregorian holidays, or return the string `'INVALID'` if there is no holiday
     */
    getFestival(): string;
    /**
     * @zh 获取中国农历年份，仅在系统语言设置为中文时生效
     * @en Get Chinese lunar year, only works when system language is set to Chinese
     */
    getLunarYear(): number;
    /**
     * @zh 获取中国农历月份，仅在系统语言设置为中文时生效
     * @en Get Chinese lunar month, only works when system language is set to Chinese
     */
    getLunarMonth(): number;
    /**
     * @zh 获取中国农历日期，仅在系统语言设置为中文时生效
     * @en Get Chinese lunar day, only works when system language is set to Chinese
     */
    getLunarDay(): number;
    /**
     * @zh 获取中国农历节日，仅在系统语言设置为中文时生效，如果没有节日，则返回字符串 `'INVALID'`
     * @en Get Chinese lunar holidays, only works when system language is set to Chinese, or return the string `'INVALID'` if there is no holiday
     */
    getLunarFestival(): string;
    /**
     * @zh 获取中国农历节气，仅在系统语言设置为中文时生效，如果没有节气，则返回字符串 `'INVALID'`
     * @en Get Traditional Chinese Solar Terms, only works when system language is set to Chinese, or return the string `'INVALID'` if there is no Solar Term
     */
    getSolarTerm(): string;
    /**
     * @zh 获取当天显示的节日字符串，仅在系统语言设置为中文时生效，优先级依次是公历节日、中国农历节日、中国农历节气，
     * @en Get the holiday strings displayed on that day, the priority is Gregorian holidays, Chinese lunar holidays, Chinese lunar festivals in that order, only when the system language is set to Chinese
     */
    getShowFestival(): string;
    /**
     * @zh 获取中国农历当前月的月历信息，仅在系统语言设置为中文时生效
     * @en Get the monthly calendar information of the current month of Chinese lunar calendar, only works when the system language is set to Chinese
     */
    getLunarMonthCalendar(): Time.getLunarMonthCalendar.LunarMonthCalendar;
    /**
     * @zh 注册日出事件监听回调函数，仅当设备天气信息时才会生效
     * @en Register the Sunrise event listener callback function to take effect only when the device weather information
     * @version 3.0
     */
    onSunrise(callback: () => void): void;
    /**
     * @zh 注册日落事件监听回调函数，仅当设备天气信息时才会生效
     * @en Register the Sunset event listener callback function to take effect only when the device weather information
     * @version 3.0
     */
    onSunset(callback: () => void): void;
    /**
     * @zh 注册手机修改时间事件监听回调函数
     * @en Register the phone modify time event listening callback function
     * @version 3.0
     */
    onPhoneTimeSetting(callback: () => void): void;
  }
  /**
   * @zh 电量传感器
   * @en Battery Sensor
   * @example
   * ```js
   * import { Battery } from '@zos/sensor'
   *
   * const battery = new Battery()
   * const current = battery.getCurrent()
   *
   * const callback = () => {
   *   console.log(battery.getCurrent())
   * }
   *
   * battery.onChange(callback)
   *
   * // When not needed for use
   * battery.offChange(callback)
   * ```
   */
  class Battery {
    /**
     * @zh 获取当前设备电量百分比，范围 0 - 100
     * @en Get the current device power percentage, range 0 - 100
     */
    getCurrent(): number;
    /**
     * @zh 注册电量变化事件监听回调函数
     * @en Register the power change event callback function
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消电量变化事件监听回调函数
     * @en Cancel the power change event callback function
     */
    offChange(callback: () => void): void;
  }
  /**
   * @zh 步数传感器
   * @en Step Sensor
   * @permissionCode data:user.hd.step
   * @example
   * ```js
   * import { Step } from '@zos/sensor'
   *
   * const step = new Step()
   * const current = step.getCurrent()
   * const target = step.getTarget()
   * const callback = () => {
   *   console.log(step.getCurrent())
   * }
   *
   * step.onChange(callback)
   *
   * // When not needed for use
   * step.offChange(callback)
   * ```
   */
  class Step {
    /**
     * @zh 获取当前步数
     * @en Get the current step count
     */
    getCurrent(): number;
    /**
     * @zh 获取步数目标
     * @en Get step goal
     */
    getTarget(): number;
    /**
     * @zh 注册步数变化事件监听回调函数
     * @en Register the step change event callback function
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消步数变化事件监听回调函数
     * @en Cancel the step change event callback function
     */
    offChange(callback: () => void): void;
  }
  /**
   * @zh 卡路里传感器
   * @en Calorie Sensor
   * @permissionCode data:user.hd.calorie
   * @example
   * ```js
   * import { Calorie } from '@zos/sensor'
   *
   * const calorie = new Calorie()
   * const current = calorie.getCurrent()
   * const target = calorie.getTarget()
   * const callback = () => {
   *   console.log(calorie.getCurrent())
   * }
   *
   * calorie.onChange(callback)
   *
   * // When not needed for use
   * calorie.offChange(callback)
   * ```
   */
  class Calorie {
    /**
     * @zh 获取当前消耗卡路里，单位 kcal
     * @en Get the current calorie consumption in kcal
     */
    getCurrent(): number;
    /**
     * @zh 获取目标消耗卡路里，单位 kcal
     * @en Get the target calorie consumption in kcal
     */
    getTarget(): number;
    /**
     * @zh 注册卡路里消耗变化事件监听回调函数
     * @en Register the calories change event callback function
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消卡路里消耗变化事件监听回调函数
     * @en Cancel the calories change event callback function
     */
    offChange(callback: () => void): void;
  }
  namespace HeartRate {
    namespace getDailySummary {
      /**
       * @output
       */
      interface Result {
        /**
         * @zh 最高心率信息
         * @en Maximum heart rate information
         */
        maximum: Maximum;
      }

      /**
       * @output
       */
      interface Maximum {
        /**
         * @zh 最高心率值
         * @en Maximum heart rate value
         */
        hr_value: number;
        /**
         * @zh 最高心率的测量时间
         * @en Measurement time of maximum heart rate
         */
        time: number;
      }
    }

    namespace getAFibRecord {
      /**
       * @zh 房颤信息数组
       * @en Atrial Fibrillation Information Array
       */
      type Result = Array<AfibInfo>;

      /**
       * @output
       */
      interface AfibInfo {
        /**
         * @zh 房颤检测结果，`0` - 正常、`1` - 高预警、`2` - 低预警、`3` - 房颤
         * @en Atrial fibrillation test results, `0` - normal, `1` - high alert, `2` - low alert, `3` - atrial fibrillation
         */
        flag: number;
        /**
         * @zh 房颤数据值，值为 0 - 255 的整数
         * @en Atrial fibrillation data value, integer value 0 - 255
         */
        val: number;
        /**
         * @zh 房颤数据最大值，值为 0 - 255 的整数
         * @en Atrial fibrillation data maximum value, integer value 0 - 255
         */
        maxValue: number;
        /**
         * @zh 房颤数据最小值，值为 0 - 255 的整数
         * @en Atrial fibrillation data minimum value, integer value 0 - 255
         */
        minValue: number;
        /**
         * @zh 房颤数据采集的时间，UTC 秒
         * @en Time of Atrial fibrillation data acquisition, UTC seconds
         */
        time: number;
        /**
         * @zh 持续时间，单位秒
         * @en Duration in seconds
         */
        duration: number;
      }
    }
  }

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
    /**
     * @zh 获取最近一次心率持续测量的测量值，此方法需要在 `onCurrentChange` 回调函数中使用，注册 `onCurrentChange` 事件后，设备会开启心率持续测量，以一定频率更新心率持续测量的测量值
     * @en Get the current heart rate measurement, this method needs to be used in the `onCurrentChange` callback function
     */
    getCurrent(): number;
    /**
     * @zh 获取最近一次的心率测量值。设备心率自动监测会更新心率测量值，注册 `onCurrentChange` 后设备开始持续测量心率，也会更新心率测量值
     * @en Get the most recent heart rate measurement (single measurement or heart rate monitoring measurement, continuous heart rate measurement `onCurrentChange` results are not counted)
     */
    getLast(): number;
    /**
     * @zh 获取当日自 0 时起至当前时刻以分钟计的心率测量值数据，数组最长为 60*24
     * @en Get the heart rate measurement data in minutes from 0:00 to the current moment of the day, the longest array is 60*24
     */
    getToday(): Array<number>;
    /**
     * @zh 调用此方法后设备开始心率持续测量，并注册回调函数，当有测量结果时调用回调函数，在回调函数中调用 `getCurrent` 方法可以获取心率持续测量的测量值，如需停止持续心率测量，需要调用 `offCurrentChange` 方法
     * @en Call this method and start measuring heart rate continuously, call the callback function when there is a measurement result, call the `getCurrent` method in the callback function to get the heart rate measurement value, if you want to stop the heart rate measurement, you need to call the `offCurrentChange` method
     * @version 2.1
     */
    onCurrentChange(callback: () => void): void;
    /**
     * @zh 取消持续心率测量，并取消回调函数监听
     * @en Cancel continuous heart rate measurement and cancel callback function listeners
     * @version 2.1
     */
    offCurrentChange(callback: () => void): void;
    /**
     * @zh 注册心率测量值变化事件回调函数
     * @en Register the heart rate single measurement change event callback function
     * @version 2.1
     */
    onLastChange(callback: () => void): void;
    /**
     * @zh 取消心率测量值变化事件回调函数
     * @en Cancel the heart rate single measurement change event callback function
     * @version 2.1
     */
    offLastChange(callback: () => void): void;
    /**
     * @zh 获取心率日统计数据
     * @en Get daily heart rate statistics
     * @version 3.0
     */
    getDailySummary(): HeartRate.getDailySummary.Result;
    /**
     * @zh 获取当前静息心率
     * @en Get current resting heart rate
     * @version 3.0
     */
    getResting(): number;
    /**
     * @zh 获取房颤数据数组
     * @en Get Atrial Fibrillation Data Array
     * @version 3.0
     */
    getAFibRecord(): HeartRate.getAFibRecord.Result;
    /**
     * @zh 调用此方法后设备开始实时静息心率测量，并注册回调函数，当有测量结果时调用回调函数，在回调函数中调用 `getResting` 方法可以获取静息心率测量值，如需停止静息心率测量，需要调用 `offRestingChange` 方法
     * @en After calling this method, the device starts real-time resting heart rate measurement and registers a callback function, which is called when there is a measurement result, in which the `getResting` method can be called to get the resting heart rate measurement value, and if you need to stop the resting heart rate measurement, you need to call the `offRestingChange` method
     * @version 3.0
     */
    onRestingChange(callback: () => void): void;
    /**
     * @zh 取消静息心率持续测量，并取消回调函数监听
     * @en Cancel continuous resting heart rate measurement and cancel callback function listeners
     * @version 3.0
     */
    offRestingChange(callback: () => void): void;
  }
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
    /**
     * @zh 获取当前累计的 PAI 值
     * @en Get the current cumulative PAI value
     */
    getTotal(): number;
    /**
     * @zh 获取今日获取的 PAI 值
     * @en Get the PAI values obtained today
     */
    getToday(): number;
    /**
     * @zh 获取一周的 PAI 数据，返回值为长度为 `7` 的数组，数组索引 `0` 的位置为今天的 PAI 值，索引 `1` 的位置为前 1 天的 PAI 值，以此类推
     * @en Get the PAI data for a week, the return value is an array of length `7`, the position of index `0` is the PAI value of today, the position of index `1` is the PAI value of the previous day, and so on
     */
    getLastWeek(): Array<number>;
  }
  /**
   * @zh 里程传感器
   * @en Distance Sensor
   * @permissionCode data:user.hd.distance
   * @example
   * ```js
   * import { Distance } from '@zos/sensor'
   *
   * const distance = new Distance()
   * const current = distance.getCurrent()
   * const callback = () => {
   *   console.log(distance.getCurrent())
   * }
   *
   * distance.onChange(callback)
   *
   * // When not needed for use
   * distance.offChange(callback)
   * ```
   */
  class Distance {
    /**
     * @zh 获取当前里程
     * @en Get the current distance
     */
    getCurrent(): number;
    /**
     * @zh 注册里程变化事件监听回调函数
     * @en Register the distance change event callback function
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消里程变化事件监听回调函数
     * @en Cancel the distance change event callback function
     */
    offChange(callback: () => void): void;
  }
  /**
   * @zh 站立行为传感器
   * @en Standing behavior Sensor
   * @permissionCode data:user.hd.stand
   * @example
   * ```js
   * import { Stand } from '@zos/sensor'
   *
   * const stand = new Stand()
   * const current = stand.getCurrent()
   * const target = stand.getTarget()
   * const callback = () => {
   *   console.log(stand.getCurrent())
   * }
   *
   * stand.onChange(callback)
   *
   * // When not needed for use
   * stand.offChange(callback)
   * ```
   */
  class Stand {
    /**
     * @zh 获取当前有站立行为的小时数
     * @en Get the current number of hours with standing behavior
     */
    getCurrent(): number;
    /**
     * @zh 获取有站立行为目标的小时数
     * @en Get the number of hours with standing behavior targets
     */
    getTarget(): number;
    /**
     * @zh 注册站立行为小时数变化事件监听回调函数
     * @en Register a callback function to listen for changes in the number of hours of standing behavior
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消站立行为小时数变化事件监听回调函数
     * @en Cancel a callback function to listen for changes in the number of hours of standing behavior
     */
    offChange(callback: () => void): void;
  }
  /**
   * @zh 脂肪燃烧传感器
   * @en FatBurning Sensor
   * @permissionCode data:user.hd.fat_burning
   * @example
   * ```js
   * import { FatBurning } from '@zos/sensor'
   *
   * const fatBurning = new FatBurning()
   * const current = fatBurning.getCurrent()
   * const target = fatBurning.getTarget()
   * const callback = () => {
   *   console.log(fatBurning.getCurrent())
   * }
   *
   * fatBurning.onChange(callback)
   *
   * // When not needed for use
   * fatBurning.offChange(callback)
   * ```
   */
  class FatBurning {
    /**
     * @zh 获取当前燃脂分钟数
     * @en Get current fat burning minutes
     */
    getCurrent(): number;
    /**
     * @zh 获取当前燃脂目标分钟数
     * @en Get current fat burning target minutes
     */
    getTarget(): number;
    /**
     * @zh 注册燃脂分钟数变化事件监听回调函数
     * @en Register a callback function to listen to the fat burning minutes change event
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消燃脂分钟数变化事件监听回调函数
     * @en Cancel a callback function to listen to the fat burning minutes change event
     */
    offChange(callback: () => void): void;
  }
  namespace BloodOxygen {
    namespace getCurrent {
      /**
       * @output
       */
      interface Result {
        /**
         * @zh 血氧测量值
         * @en Blood oxygen measurement values
         */
        value: number;
        /**
         * @zh 测量时间
         * @en Measurement time
         */
        time: number;
        /**
         * @zh 结果返回码，参考 retCode 描述
         * @en Result code, refer to retCode description
         */
        retCode: number;
      }

      /**
       * @output
       * @enum
       */
      interface retCode {
        /**
         * @zh 测量无效
         * @en Measurement invalid
         */
        0: number;
        /**
         * @zh 继续测量
         * @en Continue measuring
         */
        1: number;
        /**
         * @zh 测量成功
         * @en Measurement success
         */
        2: number;
        /**
         * @zh 测量失败
         * @en Measurement failure
         */
        3: number;
        /**
         * @zh 没有佩戴
         * @en Not wearing
         */
        4: number;
        /**
         * @zh 测量超时
         * @en Measurement timeout
         */
        5: number;
        /**
         * @zh 无效佩戴
         * @en Invalid wearing
         */
        6: number;
        /**
         * @zh 信号无效
         * @en Invalid signal
         */
        7: number;
        /**
         * @zh 血氧值偏低
         * @en Low blood oxygen value
         */
        8: number;
        /**
         * @zh 血氧值偏高
         * @en High blood oxygen value
         */
        9: number;
        /**
         * @zh 测量无效
         * @en Measurement invalid
         */
        10: number;
      }
    }

    namespace getLastFewHour {
      /**
       * @output
       */
      interface Data {
        /**
         * @zh 血氧测量值
         * @en Blood oxygen measurement value
         */
        spo2: number;
        /**
         * @zh 血氧值的测量时间，单位秒
         * @en Time of measurement of blood oxygen values, UTC time stamp in seconds
         */
        time: number;
      }
    }
  }
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
    /**
     * @zh 获取当前测量的血氧结果
     * @en Get the current measured blood oxygen result
     */
    getCurrent(): BloodOxygen.getCurrent.Result;
    /**
     * @zh 返回过去 24 小时平均血氧数据，数组长度为 24
     * @en Returns the average blood sample data for the past 24 hours, with an array length of 24
     */
    getLastDay(): Array<number>;
    /**
     * @zh 开始血氧测量，建议在调用 `start` 方法前，调用 `stop` 来停止上一次测量
     * @en Start blood oxygen measurement, it is recommended to call `stop` to stop the last measurement before calling the `start` method
     * @version 2.1
     */
    start(): void;
    /**
     * @zh 停止血氧测量
     * @en Cancel blood oxygen measurement
     * @version 2.1
     */
    stop(): void;
    /**
     * @zh 注册血氧测量值变化事件监听回调函数
     * @en Register a callback function to listen for blood oxygen measurement change events
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消血氧测量值变化事件监听回调函数
     * @en Cancel a callback function to listen for blood oxygen measurement change events
     */
    offChange(callback: () => void): void;
    /**
     * @zh 获取最近 `hour` 个小时的血氧测量数据，结果按照时间顺序排序
     * @en Obtain blood oxygen measurements for the last `hour` and sort the results in chronological order
     * @version 3.0
     */
    getLastFewHour(hour: number): Array<BloodOxygen.getLastFewHour.Data>;
  }
  namespace Stress {
    namespace getCurrent {
      /**
       * @output
       */
      interface Result {
        /**
         * @zh 压力测量值
         * @en Stress measurement values
         */
        value: number;
        /**
         * @zh 得出测量值的时间
         * @en Time to obtain the measured value
         */
        time: number;
      }
    }

    namespace getToday {
      /**
       * @output
       */
      interface StressInfo {
        /**
         * @zh 压力值测量时间，UTC 时间戳，单位秒
         * @en Pressure value measurement time, UTC time stamp, in seconds
         */
        second: number;
        /**
         * @zh 压力值，`0` 代表无效
         * @en Pressure value, `0` means invalid
         */
        stress: number;
      }
    }

    namespace getLastWeekByHour {
      /**
       * @output
       */
      interface StressInfo {
        /**
         * @zh 压力值测量时间，UTC 时间戳，单位秒
         * @en Pressure value measurement time, UTC time stamp, in seconds
         */
        second: number;
        /**
         * @zh 压力值，`0` 代表无效
         * @en Pressure value, `0` means invalid
         */
        stress: number;
      }
    }
  }
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
    /**
     * @zh 获取当前压力测量值
     * @en Get the current pressure measurement
     */
    getCurrent(): Stress.getCurrent.Result;
    /**
     * @zh 注册压力测量值变化事件监听回调函数
     * @en Register a callback function to listen for stress measurement change events
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消压力测量值变化事件监听回调函数
     * @en Cancel a callback function to listen for stress measurement change events
     */
    offChange(callback: () => void): void;
    /**
     * @zh 获取全天的压力测量值，每分钟记录一次，返回值为不定长数组，数组长度最大 24 * 60
     * @en Get the pressure measurements for the whole day, recorded every minute, the return value is an array of variable length, the maximum length of the array is 24 * 60
     * @version 3.0
     */
    getToday(): Array<number>;
    /**
     * @zh 获取全天的压力均值，返回值为定长数组，为每小时的平均压力，数组长度为 24
     * @en Get the average pressure value for the whole day, the return value is a fixed-length array, the average pressure for each hour, the length of the array is 24
     * @version 3.0
     */
    getTodayByHour(): Array<number>;
    /**
     * @zh 获取过去一周每天的压力均值，返回值为定长数组，为每天平均压力，数组长度为 7，索引 0 的位置代表六天前，索引 6 的位置代表今天
     * @en Get the average pressure value for each day of the past week, the return value is a fixed-length array, the average pressure per day, the length of the array is 7, the position of index 0 represents six days ago, the position of index 6 represents today
     * @version 3.0
     */
    getLastWeek(): Array<number>;
    /**
     * @zh 获取过去一周每小时的压力平均值，返回值为定长数组，数组长度为 7 * 24
     * @en Get the hourly pressure average for the past week, the return value is a fixed-length array, the length of the array is 7 * 24
     * @version 3.0
     */
    getLastWeekByHour(): Array<Stress.getLastWeekByHour.StressInfo>;
  }
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
    /**
     * @zh 获取当前设备佩戴状态，`0`：未佩戴、`1`：佩戴、`2`：运动中、`3`：不确定
     * @en Get the current device wearing status, `0`: not wearing, `1`: wearing, `2`: in motion, `3`: not sure
     */
    getStatus(): number;
    /**
     * @zh 注册设备佩戴状态变化事件监听回调函数
     * @en Register the device wear status change event listening callback function
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消设备佩戴状态变化事件监听回调函数
     * @en Cancel the device wear status change event listening callback function
     */
    offChange(callback: () => void): void;
  }
  namespace Sleep {
    namespace getInfo {
      /**
       * @output
       */
      interface SleepInfo {
        /**
         * @zh 睡眠得分
         * @en Sleep score
         */
        score: number;
        /**
         * @zh 深睡眠时间（分钟）
         * @en Deep sleep time (minutes)
         */
        deepTime: number;
        /**
         * @zh 睡眠起始时间，基于当天 0 点的分钟数
         * @en Sleep onset time, based on the number of minutes at 0:00 of the day
         */
        startTime: number;
        /**
         * @zh 睡眠结束时间，基于当天 0 点的分钟数
         * @en Sleep end time, based on the number of minutes at 0:00 of the day
         */
        endTime: number;
        /**
         * @zh 获取睡眠总时间（分钟）
         * @en Get total sleep time (minutes)
         */
        totalTime: number;
      }
    }

    namespace getStageConstantObj {
      /**
       * @output
       */
      interface StageConstants {
        /**
         * @zh 清醒阶段
         * @en Awake stage
         */
        WAKE_STAGE: number;
        /**
         * @zh REM 阶段
         * @en Deep sleep time (minutes)
         */
        REM_STAGE: number;
        /**
         * @zh 浅睡眠阶段
         * @en Light Sleep stage
         */
        LIGHT_STAGE: number;
        /**
         * @zh 深睡眠阶段
         * @en Deep Sleep stage
         */
        DEEP_STAGE: number;
      }
    }

    namespace getStage {
      /**
       * @output
       */
      interface StageInfo {
        /**
         * @zh 睡眠阶段类型，值的含义参考 `getStageConstantObj` 返回的常量
         * @en Sleep stage type, refer to the constants returned by `getStageConstantObj` for the meaning of the value
         */
        model: number;
        /**
         * @zh 睡眠阶段起始时间，基于当天 0 点的分钟数
         * @en Sleep stage onset time, based on the number of minutes at 0:00 of the day
         */
        start: number;
        /**
         * @zh 睡眠阶段结束时间，基于当天 0 点的分钟数
         * @en Sleep stage end time, based on the number of minutes at 0:00 of the day
         */
        stop: number;
      }
    }

    namespace getNap {
      /**
       * @output
       */
      interface NapInfo {
        /**
         * @zh 小睡时长（分钟）
         * @en Nap duration (minutes)
         */
        length: number;
        /**
         * @zh 小睡起始时间，基于当天 0 点的分钟数
         * @en Nap start time, based on the number of minutes at 0:00 of the day
         */
        start: number;
        /**
         * @zh 小睡结束时间，基于当天 0 点的分钟数
         * @en Nap end time, based on the number of minutes at 0:00 of the day
         */
        stop: number;
      }
    }
  }

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
    /**
     * @zh 系统默认每 `30` 分钟更新一次睡眠数据,`updateInfo` 方法用来主动触发更新睡眠数据
     * @en By default, the system updates the sleep data every `30` minutes, the `updateInfo` method is used to actively trigger the update of the sleep data
     */
    updateInfo(): void;
    /**
     * @zh 获取睡眠信息
     * @en Get sleep information
     */
    getInfo(): Sleep.getInfo.SleepInfo;
    /**
     * @zh 获取睡眠阶段的常量值，用于在 `getSleepStageData` 返回值中判断睡眠阶段
     * @en Get the constant value of the sleep stage, used to determine the sleep stage in the `getSleepStageData` return value
     */
    getStageConstantObj(): Sleep.getStageConstantObj.StageConstants;
    /**
     * @zh 获取睡眠分阶段数据
     * @en Get Sleep Staging Data
     */
    getStage(): Array<Sleep.getStage.StageInfo>;
    /**
     * @zh 获取当前睡眠状态，`0` 醒着，`1` 正在睡眠
     * @en Get the current sleep state, 0 'awake, 1' sleeping
     * @version 3.0
     */
    getSleepingStatus(): number;
    /**
     * @zh 获取零星小睡数据
     * @en Get nap data
     * @version 3.0
     */
    getNap(): Array<Sleep.getNap.NapInfo>;
  }
  namespace Weather {
    namespace getForecastWeather {
      /**
       * @output
       */
      interface ForecastWeather {
        /**
         * @zh 城市名称
         * @en City Name
         */
        cityName: string;
        /**
         * @zh 天气信息
         * @en Weather Information
         */
        forecastData: ForecastData;
        /**
         * @zh 潮汐信息
         * @en Tide Information
         */
        tideData: TideData;
      }

      /**
       * @output
       */
      interface ForecastData {
        /**
         * @zh 天气信息数组，索引 0 位置代表当天
         * @en Weather Information Array, index 0 position represents the day
         */
        data: Array<ForecastDataItem>;
        /**
         * @zh 天气信息数组长度
         * @en The length of Weather Information Array
         */
        count: number;
      }

      /**
       * @output
       */
      interface ForecastDataItem {
        /**
         * @zh 最高温度
         * @en Maximum temperature
         */
        high: number;
        /**
         * @zh 最低温度
         * @en Lowest temperature
         */
        low: number;
        /**
         * @zh 天气的索引值，值描述详见下方 `index`
         * @en The index value of the weather, see `index` below for a description of the value
         */
        index: number;
      }

      /**
       * @output
       * @enum
       */
      interface index {
        /**
         * @zh 多云
         * @en Cloudy
         */
        0: number;
        /**
         * @zh 阵雨
         * @en Showers
         */
        1: number;
        /**
         * @zh 阵雪
         * @en Snow Showers
         */
        2: number;
        /**
         * @zh 晴
         * @en Sunny
         */
        3: number;
        /**
         * @zh 阴
         * @en Overcast
         */
        4: number;
        /**
         * @zh 小雨
         * @en Light Rain
         */
        5: number;
        /**
         * @zh 小雪
         * @en Light Snow
         */
        6: number;
        /**
         * @zh 中雨
         * @en Moderate Rain
         */
        7: number;
        /**
         * @zh 中雪
         * @en Moderate Snow
         */
        8: number;
        /**
         * @zh 大雪
         * @en Heavy Snow
         */
        9: number;
        /**
         * @zh 大雨
         * @en Heavy Rain
         */
        10: number;
        /**
         * @zh 沙尘暴
         * @en Sandstorm
         */
        11: number;
        /**
         * @zh 雨夹雪
         * @en Rain and Snow
         */
        12: number;
        /**
         * @zh 雾
         * @en Fog
         */
        13: number;
        /**
         * @zh 霾
         * @en Hazy
         */
        14: number;
        /**
         * @zh 雷阵雨
         * @en T-Storms
         */
        15: number;
        /**
         * @zh 暴雪
         * @en Snowstorm
         */
        16: number;
        /**
         * @zh 浮尘
         * @en Floating dust
         */
        17: number;
        /**
         * @zh 特大暴雨
         * @en Very Heavy Rainstorm
         */
        18: number;
        /**
         * @zh 雨加冰雹
         * @en Rain and Hail
         */
        19: number;
        /**
         * @zh 雷阵雨伴有冰雹
         * @en T-Storms and Hail
         */
        20: number;
        /**
         * @zh 大暴雨
         * @en Heavy Rainstorm
         */
        21: number;
        /**
         * @zh 扬尘
         * @en Dust
         */
        22: number;
        /**
         * @zh 强沙尘暴
         * @en Heavy sand storm
         */
        23: number;
        /**
         * @zh 暴雨
         * @en Rainstorm
         */
        24: number;
        /**
         * @zh 未知天气
         * @en Unknown
         */
        25: number;
        /**
         * @zh 夜间多云
         * @en Cloudy Nighttime
         */
        26: number;
        /**
         * @zh 夜间阵雨
         * @en Showers Nighttime
         */
        27: number;
        /**
         * @zh 夜间晴
         * @en Sunny Nighttime
         */
        28: number;
      }

      /**
       * @output
       */
      interface TideData {
        /**
         * @zh 潮汐信息数组，索引 0 位置代表当天
         * @en Tide Information Array, index 0 position represents the day
         */
        data: Array<TideDataItem>;
        /**
         * @zh 潮汐信息数组长度
         * @en The length of Tide Information Array
         */
        count: number;
      }

      /**
       * @output
       */
      interface TideDataItem {
        /**
         * @zh 日出时间
         * @en Sunrise time
         */
        sunrise: Sunrise;
        /**
         * @zh 日落时间
         * @en Sunset time
         */
        sunset: Sunset;
      }

      /**
       * @output
       */
      interface Sunrise {
        /**
         * @zh 日出时间 - 小时
         * @en Sunrise time - hour
         */
        hour: number;
        /**
         * @zh 日出时间 - 分钟
         * @en Sunrise time - minute
         */
        minute: number;
      }

      /**
       * @output
       */
      interface Sunset {
        /**
         * @zh 日落时间 - 小时
         * @en Sunrise time - hour
         */
        hour: number;
        /**
         * @zh 日落时间 - 分钟
         * @en Sunrise time - minute
         */
        minute: number;
      }
    }
  }

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
    /**
     * @zh 获取天气预报数据
     * @en Get weather forecast data
     */
    getForecastWeather(): Weather.getForecastWeather.ForecastWeather;
  }
  namespace Vibrator {
    namespace start {
      interface Option {
        /**
         * @zh 振动模式，值参考振动马达模式常量
         * @en Vibration mode, Value refer to Vibration motor mode constants
         * @defaultValue VIBRATOR_SCENE_SHORT_MIDDLE
         */
        mode?: number;
      }
    }

    namespace setMode {
      interface Option {
        /**
         * @zh 振动模式，值参考振动马达模式常量
         * @en Vibration mode, Value refer to Vibration motor mode constants
         */
        mode: number;
      }
    }

    namespace getConfig {
      /**
       * @output
       */
      interface Option {
        /**
         * @zh 振动模式，值参考振动马达模式常量
         * @en Vibration mode, Value refer to Vibration motor mode constants
         */
        mode: number;
      }
    }
  }

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
    /**
     * @zh 开始振动，传入的 `option` 参数，只对此次振动生效
     * @en Start vibration, if the `option` parameter is passed, it will only work for this vibration
     * @constants vibrator_scene
     */
    start(option?: Vibrator.start.Option): void;
    /**
     * @zh 停止振动
     * @en Stop vibration
     */
    stop(): void;
    /**
     * @zh 设置振动模式，设置成功后调用 `start()`，会依照设置的模式进行振动
     * @en Set the vibration mode, call `start()` after successful setting, it will vibrate according to the set mode
     */
    setMode(option: Vibrator.setMode.Option): void;
    /**
     * @zh 获取振动马达配置
     * @en Get Vibration Motor Configuration
     */
    getConfig(): Vibrator.getConfig.Option;
  }
  /**
   * @zh 气压高度传感器
   * @en Barometer Sensor
   * @permissionCode device:os.barometer
   * @version 2.1
   * @example
   * ```js
   * import { Barometer } from '@zos/sensor'
   *
   * const barometer = new Barometer()
   * const airPressure = barometer.getAirPressure()
   * const altitude = barometer.getAltitude()
   *
   * const callback = () => {
   *   console.log(barometer.getAltitude())
   * }
   *
   * barometer.onChange(callback)
   *
   * // When not needed for use
   * barometer.offChange(callback)
   * ```
   */
  class Barometer {
    /**
     * @zh 获取气压值，单位百帕
     * @en Get air pressure value in hPa
     */
    getAirPressure(): number;
    /**
     * @zh 获取海拔高度值，单位米
     * @en Get altitude value in meters
     */
    getAltitude(): number;
    /**
     * @zh 注册气压和海拔变化事件监听回调函数
     * @en Register the air pressure and altitude change event callback function
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消气压和海拔变化事件监听回调函数
     * @en Cancel the air pressure and altitude change event callback function
     */
    offChange(callback: () => void): void;
  }
  namespace Geolocation {
    namespace getLatitude {
      interface Option {
        /**
         * @zh 坐标格式，可选 `DD` 代表十进制或者 `DMS` 度分秒的形式
         * @en Coordinate format, optionally `DD` for decimal or `DMS` in degrees, minutes and seconds
         * @defaultValue DMS
         */
        format?: string;
      }

      /**
       * @zh 坐标，坐标系类型 WGS-84
       * @en Coordinates, coordinate system type WGS-84
       */
      type Result = number | DMS;

      /**
       * @output
       */
      interface DMS {
        /**
         * @zh 方向，`N` 代表北纬，`S` 代表南纬
         * @en Direction, `N` for north latitude, `S` for south latitude
         */
        direction: string;
        /**
         * @zh 度
         * @en degree
         */
        degrees: number;
        /**
         * @zh 分
         * @en minute
         */
        minutes: number;
        /**
         * @zh 秒
         * @en second
         */
        seconds: number;
      }
    }

    namespace getLongitude {
      interface Option {
        /**
         * @zh 坐标格式，可选 `DD` 代表十进制或者 `DMS` 度分秒的形式
         * @en Coordinate format, optionally `DD` for decimal or `DMS` in degrees, minutes and seconds
         * @defaultValue DMS
         */
        format?: string;
      }

      /**
       * @zh 坐标，坐标系类型 WGS-84
       * @en Coordinates, coordinate system type WGS-84
       */
      type Result = number | DMS;

      /**
       * @output
       */
      interface DMS {
        /**
         * @zh 方向，`E` 代表东经，`W` 代表西经
         * @en Direction, `E` for east longitude, `W` for west longitude
         */
        direction: string;
        /**
         * @zh 度
         * @en degree
         */
        degrees: number;
        /**
         * @zh 分
         * @en minute
         */
        minutes: number;
        /**
         * @zh 秒
         * @en second
         */
        seconds: number;
      }
    }

    namespace getSetting {
      /**
       * @output
       */
      interface Result {
        /**
         * @zh 定位设置，值描述详见下方 `mode`
         * @en Positioning settings, see `mode` below for value descriptions
         */
        mode: number;
      }

      /**
       * @output
       * @enum
       */
      interface mode {
        /**
         * @zh 精准模式
         * @en Accuracy
         */
        0: number;
        /**
         * @zh 智能模式
         * @en Automation
         */
        1: number;
        /**
         * @zh 均衡模式
         * @en Balance
         */
        2: number;
        /**
         * @zh 省电模式
         * @en Power Saving
         */
        3: number;
        /**
         * @zh 超级省电模式
         * @en Super Power Saving
         */
        4: number;
        /**
         * @zh 自定义模式
         * @en Custom
         */
        5: number;
      }
    }

    namespace onGnssChange {
      /**
       * @output
       */
      interface Info {
        /**
         * @zh AGPS 更新时间 UTC 时间戳，单位毫秒
         * @en AGPS update time UTC timestamp in milliseconds
         */
        agps_inject_time: number;
        /**
         * @zh 定位卫星的信号强度值
         * @en Signal strength value of the positioning satellite
         */
        top4_cn_val: number;
        /**
         * @zh 是否双频
         * @en Whether dual-band
         */
        is_dualband: number;
        /**
         * @zh 可用卫星数量
         * @en Number of available satellites
         */
        nb_valid_satellite: number;
        /**
         * @zh 使用的卫星数量
         * @en Number of satellites used
         */
        nb_used_satellite: number;
        /**
         * @zh 从搜索卫星开始到定位成功所消耗的时间，单位秒
         * @en Time consumed from the start of satellite search to successful positioning, in seconds
         */
        elapsed_time: number;
        /**
         * @zh 卫星数据数组
         * @en Satellite data arrays
         */
        satellite_data: Array<SatelliteSystem>;
      }

      /**
       * @output
       */
      interface SatelliteSystem {
        /**
         * @zh 卫星 ID
         * @en Satellite ID
         */
        gnss_id: number;
        /**
         * @zh 该卫星系统的最强信号值
         * @en The strongest signal value of this satellite system
         */
        sub_top4_cn_val: number;
        /**
         * @zh 搜索到可用卫星数量
         * @en Number of available satellites that can be searched
         */
        nb_valid_satellite: number;
        /**
         * @zh 单颗卫星数据数组，最大长度 32
         * @en Single satellite data array, maximum length 32
         */
        gsv_data: Array<Satellite>;
      }

      /**
       * @output
       */
      interface Satellite {
        /**
         * @zh 卫星 ID
         * @en Satellite ID
         */
        id: number;
        /**
         * @zh 俯仰角
         * @en Pitch angle
         */
        elevation: number;
        /**
         * @zh 方位角
         * @en Azimuth
         */
        azimuth: number;
        /**
         * @zh 信噪比
         * @en Signal-to-noise ratio
         */
        snr: number;
      }
    }
  }

  /**
   * @zh 定位传感器
   * @en Geolocation Sensor
   * @permissionCode device:os.geolocation
   * @version 2.1
   * @example
   * ```js
   * import { Geolocation } from '@zos/sensor'
   *
   * const geolocation = new Geolocation()
   *
   * const callback = () => {
   *   if (geolocation.getStatus() === 'A') {
   *     console.log(geolocation.getLatitude())
   *     console.log(geolocation.getLongitude())
   *   }
   * }
   *
   * geolocation.start()
   * geolocation.onChange(callback)
   *
   * // When not needed for use
   * geolocation.offChange(callback)
   * geolocation.stop()
   * ```
   */
  class Geolocation {
    /**
     * @zh 开始监听定位数据
     * @en Start listening to location data
     */
    start(): void;
    /**
     * @zh 停止监听定位数据
     * @en Stop listening to location data
     */
    stop(): void;
    /**
     * @zh 获取定位状态，返回 `A` 代表定位中，返回 `V` 代表无效定位
     * @en Get the positioning status, return `A` for positioning in progress, return `V` for invalid positioning
     */
    getStatus(): string;
    /**
     * @zh 获取纬度
     * @en Get Latitude
     */
    getLatitude(option: Geolocation.getLatitude.Option): Geolocation.getLatitude.Result;
    /**
     * @zh 获取经度
     * @en Get Longitude
     */
    getLongitude(option: Geolocation.getLongitude.Option): Geolocation.getLongitude.Result;
    /**
     * @zh 获取定位设置
     * @en Get the positioning settings
     * @version 3.0
     */
    getSetting(): Geolocation.getSetting.Result;
    /**
     * @zh 注册定位信息变化事件监听回调函数
     * @en Register a callback function to listen for location information change events
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消定位信息变化事件监听回调函数
     * @en Cancel the callback function for listening to the location information change event
     */
    offChange(callback: () => void): void;
    /**
     * @zh 注册 GNSS 信息变化事件监听回调函数
     * @en Register a callback function to listen for GNSS information change events
     * @version 3.0
     */
    onGnssChange(callback: (info: Geolocation.onGnssChange.Info) => void): void;
    /**
     * @zh 取消 GNSS 信息变化事件监听回调函数
     * @en Cancel the callback function for listening to the GNSS information change event
     * @version 3.0
     */
    offGnssChange(callback: (...args: any[]) => any): void;
  }
  namespace Workout {
    namespace getStatus {
      /**
       * @output
       */
      interface Status {
        /**
         * @zh 最大摄氧量
         * @en VO2 Max
         */
        vo2Max: number;
        /**
         * @zh 运动负荷
         * @en Training Load
         */
        trainingLoad: number;
        /**
         * @zh 完全恢复时间
         * @en Full Recovery Time
         */
        fullRecoveryTime: number;
      }
    }

    namespace getHistory {
      /**
       * @output
       */
      interface History {
        /**
         * @zh 运动开始时间
         * @en Workout start time
         */
        startTime: number;
        /**
         * @zh 时长，单位秒
         * @en Duration of workout in seconds
         */
        duration: number;
      }
    }
  }

  /**
   * @zh 运动记录传感器
   * @en Workout Sensor
   * @permissionCode data:user.hd.workout
   * @version 3.0
   * @example
   * ```js
   * import { Workout } from '@zos/sensor'
   *
   * const workout = new Workout()
   *
   * const status = workout.getStatus()
   * const history = workout.getHistory()
   * ```
   */
  class Workout {
    /**
     * @zh 获取运动状态
     * @en Get altitude value in meters
     */
    getStatus(): Workout.getStatus.Status;
    /**
     * @zh 获取运动记录时长
     * @en Get the duration of the workout record
     */
    getHistory(): Array<Workout.getHistory.History>;
  }
  namespace WorldClock {
    namespace getInfo {
      /**
       * @output
       */
      interface WorldClockInfo {
        /**
         * @zh 城市名
         * @en City Name
         */
        city: string;
        /**
         * @zh 城市代号，如旧金山 `SFO`
         * @en City code, e.g. San Francisco `SFO`
         */
        cityCode: string;
        /**
         * @zh 小时
         * @en Hour
         */
        hour: number;
        /**
         * @zh 分钟
         * @en Minute
         */
        minute: number;
        /**
         * @zh 时区小时
         * @en Time Zone hours
         */
        timeZoneHour: number;
        /**
         * @zh 时区分钟
         * @en Time zone minutes
         */
        timeZoneMinute: number;
      }
    }
  }

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
    /**
     * @zh 获取配置的世界时钟数量
     * @en Get the number of configured world clocks
     */
    getCount(): number;
    /**
     * @zh 根据索引获取配置的世界时钟信息
     * @en Get the configured world clock information according to the index
     */
    getInfo(index: number): WorldClock.getInfo.WorldClockInfo;
  }
  namespace Compass {
    namespace getDirection {
      /**
       * @output
       * @enum
       */
      interface direction {
        /**
         * @zh 北
         * @en North
         */
        N: string;
        /**
         * @zh 东北
         * @en Northeast
         */
        NE: string;
        /**
         * @zh 东
         * @en East
         */
        E: string;
        /**
         * @zh 东南
         * @en Southeast
         */
        SE: string;
        /**
         * @zh 南
         * @en South
         */
        S: string;
        /**
         * @zh 西南
         * @en Southwest
         */
        SW: string;
        /**
         * @zh 西
         * @en West
         */
        W: string;
        /**
         * @zh 西北
         * @en Northwest
         */
        NW: string;
      }
    }
  }

  /**
   * @zh 指南针
   * @en compass
   * @permissionCode device:os.compass
   * @version 3.0
   * @example
   * ```js
   * import { Compass } from '@zos/sensor'
   *
   * const compass = new Compass()
   *
   * const callback = () => {
   *   if (compass.getStatus()) {
   *     console.log(compass.getDirection())
   *     console.log(compass.getDirectionAngle())
   *   }
   * }
   * compass.onChange(callback)
   * compass.start()
   *
   * // When not needed for use
   * compass.offChange()
   * compass.stop()
   * ```
   */
  class Compass {
    /**
     * @zh 开始监听指南针数据
     * @en Start listening to compass data
     */
    start(): void;
    /**
     * @zh 停止监听指南针数据
     * @en Stop listening to compass data
     */
    stop(): void;
    /**
     * @zh 获取指南针校准状态，`true` 代表已校准
     * @en Get the compass calibration status, `true` means calibrated
     */
    getStatus(): boolean;
    /**
     * @zh 获取当前手表 12 点刻度的方向指向，一共分为八个方向，参考 `direction`
     * @en Get the direction of the current watch's 12-point scale, divided into eight directions, refer to `direction`
     */
    getDirection(): string;
    /**
     * @zh 获取当前方向角，手表 12 点刻度方向相对正北方向的顺时针旋转角度，取值 0 - 360，如果指南针未校准，返回 `INVALID` 字符串
     * @en Get the current direction angle, the clockwise rotation angle of the watch's 12 o'clock scale direction relative to due north, takes the values 0 - 360, if the compass is not calibrated, returns the `INVALID` string
     */
    getDirectionAngle(): number | 'INVALID';
    /**
     * @zh 注册指南针方向变化事件监听回调函数
     * @en Register the compass direction change event listener callback function
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消指南针方向变化事件监听回调函数
     * @en Cancel the compass direction change event listener callback function
     */
    offChange(callback: () => void): void;
  }
  namespace Gyroscope {
    namespace getCurrent {
      /**
       * @output
       */
      interface Result {
        /**
         * @zh x 轴的角速度，单位 DPS，度数/秒
         * @en Angular velocity of x-axis in DPS, degrees per second
         */
        x: number;
        /**
         * @zh y 轴的角速度，单位 DPS，度数/秒
         * @en Angular velocity of y-axis in DPS, degrees per second
         */
        y: number;
        /**
         * @zh z 轴的角速度，单位 DPS，度数/秒
         * @en Angular velocity of z-axis in DPS, degrees per second
         */
        z: number;
      }
    }
  }

  /**
   * @zh 陀螺仪
   * @en gyroscope
   * @permissionCode device:os.gyroscope
   * @version 3.0
   * @example
   * ```js
   * import { Gyroscope } from '@zos/sensor'
   *
   * const gyroscope = new Gyroscope()
   *
   * const callback = () => {
   *   console.log(gyroscope.getCurrent())
   * }
   * gyroscope.onChange(callback)
   * gyroscope.start()
   *
   * // When not needed for use
   * gyroscope.offChange()
   * gyroscope.stop()
   * ```
   */
  class Gyroscope {
    /**
     * @zh 开始监听陀螺仪数据
     * @en Start listening to gyroscope data
     */
    start(): void;
    /**
     * @zh 停止监听陀螺仪数据
     * @en Stop listening to gyroscope data
     */
    stop(): void;
    /**
     * @zh 获取当前陀螺仪数据
     * @en Get current gyroscope data
     */
    getCurrent(): Gyroscope.getCurrent.Result;
    /**
     * @zh 注册陀螺仪数据变化事件监听回调函数
     * @en Register the gyroscope data change event listener callback function
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消陀螺仪数据变化事件监听回调函数
     * @en Cancel the gyroscope data change event listener callback function
     */
    offChange(callback: () => void): void;
    /**
     * @zh 设置触发频率的模式，`mode` 值参考频率模式常量
     * @en Set the mode of trigger frequency, `mode` value reference frequency mode constant
     * @constants freq_mode
     * @version 3.0
     */
    setFreqMode(mode: number): void;
    /**
     * @zh 获取触发频率模式，结果值参考频率模式常量
     * @en Get the mode of trigger frequency, result value reference frequency mode constant
     * @constants freq_mode
     * @version 3.0
     */
    getFreqMode(): number;
  }
  namespace Accelerometer {
    namespace getCurrent {
      /**
       * @output
       */
      interface Result {
        /**
         * @zh x 轴的加速度，单位 cm/s^2
         * @en Acceleration of x-axis in cm/s^2
         */
        x: number;
        /**
         * @zh y 轴的加速度，单位 cm/s^2
         * @en Acceleration of y-axis in cm/s^2
         */
        y: number;
        /**
         * @zh z 轴的加速度，单位 cm/s^2
         * @en Acceleration of z-axis in cm/s^2
         */
        z: number;
      }
    }
  }

  /**
   * @zh 加速度传感器
   * @en accelerometer
   * @permissionCode device:os.accelerometer
   * @version 3.0
   * @example
   * ```js
   * import { Accelerometer } from '@zos/sensor'
   *
   * const accelerometer = new Accelerometer()
   *
   * const callback = () => {
   *   console.log(accelerometer.getCurrent())
   * }
   * accelerometer.onChange(callback)
   * accelerometer.start()
   *
   * // When not needed for use
   * accelerometer.offChange()
   * accelerometer.stop()
   * ```
   */
  class Accelerometer {
    /**
     * @zh 开始监听加速度传感器数据
     * @en Start listening to accelerometer data
     */
    start(): void;
    /**
     * @zh 停止监听加速度传感器数据
     * @en Stop listening to accelerometer data
     */
    stop(): void;
    /**
     * @zh 获取当前加速度传感器数据
     * @en Get current accelerometer data
     */
    getCurrent(): Accelerometer.getCurrent.Result;
    /**
     * @zh 注册加速度传感器数据变化事件监听回调函数
     * @en Register the accelerometer data change event listener callback function
     */
    onChange(callback: () => void): void;
    /**
     * @zh 取消加速度传感器数据变化事件监听回调函数
     * @en Cancel the accelerometer data change event listener callback function
     */
    offChange(callback: () => void): void;
    /**
     * @zh 设置触发频率的模式，`mode` 值参考频率模式常量
     * @en Set the mode of trigger frequency, `mode` value reference frequency mode constant
     * @constants freq_mode
     * @version 3.0
     */
    setFreqMode(mode: number): void;
    /**
     * @zh 获取触发频率模式，结果值参考频率模式常量
     * @en Get the mode of trigger frequency, result value reference frequency mode constant
     * @constants freq_mode
     * @version 3.0
     */
    getFreqMode(): number;
  }
  /**
   * @zh 屏幕状态传感器
   * @en Screen Status Sensor
   * @version 3.0
   * @example
   * ```js
   * import { Screen } from '@zos/sensor'
   *
   * const screen = new Screen()
   * const status = screen.getStatus()
   * const callback = () => {
   *   console.log(screen.getStatus())
   * }
   *
   * screen.onChange(callback)
   *
   * // When not needed for use
   * screen.offChange(callback)
   * ```
   */
  class Screen {
    /**
     * @zh 获取屏幕状态，`1`: 亮屏、`2`: 息屏
     * @en Get the screen status, `1`: On, `2`: Off
     */
    getStatus(): number;
    /**
     * @zh 是否开启 AOD 息屏显示功能
     * @en Whether to turn on the AOD rest screen display function
     */
    getAodMode(): number;
    /**
     * @zh 注册屏幕显示变化事件监听回调函数
     * @en Register a callback function to listen to screen display change events
     */
    onChange(callback: (status: number) => void): void;
    /**
     * @zh 取消屏幕显示变化事件监听回调函数
     * @en Cancel a callback function to listen to screen display change events
     */
    offChange(callback: (status: number) => void): void;
  }
}
