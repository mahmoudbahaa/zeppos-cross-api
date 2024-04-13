/**
  * @zh 系统设置
  * @en System Settings
  */


declare module 'zeppos-cross-api/settings' {

  /**
   * @zh 年-月-日
   * @en year-month-day
   */
  const DATE_FORMAT_YMD: number;
  /**
   * @zh 日-月-年
   * @en day-month-year
   */
  const DATE_FORMAT_DMY: number;
  /**
   * @zh 月-日-年
   * @en month-day-year
   */
  const DATE_FORMAT_MDY: number;
  /**
   * @zh 12 小时制
   * @en 12-hour format
   * @version 2.1
   */
  const TIME_FORMAT_12: number;
  /**
   * @zh 24 小时制
   * @en 24-hour format
   * @version 2.1
   */
  const TIME_FORMAT_24: number;
  /**
   * @zh 公制
   * @en metric system
   */
  const DISTANCE_UNIT_METRIC: number;
  /**
   * @zh 英制
   * @en imperial system
   */
  const DISTANCE_UNIT_IMPERIAL: number;
  /**
   * @zh 千克
   * @en Kilogram
   */
  const WEIGHT_UNIT_KILOGRAM: number;
  /**
   * @zh 斤
   * @en Jin
   */
  const WEIGHT_UNIT_JIN: number;
  /**
   * @zh 英磅
   * @en Pound
   */
  const WEIGHT_UNIT_POUND: number;
  /**
   * @zh 英石
   * @en Stone
   */
  const WEIGHT_UNIT_STONE: number;
  /**
   * @zh 摄氏温度
   * @en Celsius temperature
   */
  const TEMPERATURE_UNIT_CENTIGRADE: number;
  /**
   * @zh 华氏温度
   * @en Fahrenheit temperature
   */
  const TEMPERATURE_UNIT_FAHRENHEIT: number;
  namespace getLanguage {
    /**
     * @zh 此处不一一列举，请参考多语言映射
     * @en Please see the Multilingual Mapping for more details
     */
    type Result = number;
  }

  /**
   * @zh 获取当前系统语言设置
   * @en Get the current system language setting
   * @example
   * ```js
   * import { getLanguage } from 'zeppos-cross-api/settings'
   *
   * const languageCode = getLanguage()
   * console.log(languageCode)
   * ```
   */
  function getLanguage(): getLanguage.Result;
  namespace getDateFormat {
    /**
     * @zh 日期格式，值参考日期格式常量
     * @en Date format, value refer to date format constants
     */
    type Result = number;
  }

  /**
   * @zh 获取当前系统日期格式
   * @en Get the current system date format
   * @constants dateFormat
   * @example
   * ```js
   * import { getDateFormat, DATE_FORMAT_YMD } from 'zeppos-cross-api/settings'
   *
   * const currentDateFormat = getDateFormat()
   *
   * if (currentDateFormat === DATE_FORMAT_YMD) {
   *   console.log('date format is YYYY-MM-DD')
   * }
   * ```
   */
  function getDateFormat(): getDateFormat.Result;
  namespace getTimeFormat {
    /**
     * @zh 小时格式，值参考小时格式常量
     * @en Hour format, value refer to hour format constants
     */
    type Result = number;
  }

  /**
   * @zh 获取当前系统时间格式，12 小时/24 小时
   * @en Get the current system time format, 12-hour format or 24-hour format
   * @constants hourFormat
   * @version 2.1
   * @example
   * ```js
   * import { getTimeFormat, TIME_FORMAT_24 } from 'zeppos-cross-api/settings'
   *
   * const timeFormat = getTimeFormat()
   *
   * if (timeFormat === TIME_FORMAT_24) {
   *   console.log('time format is 24-hour format')
   * }
   * ```
   */
  function getTimeFormat(): getTimeFormat.Result;
  namespace getDistanceUnit {
    /**
     * @zh 距离单位，值参考距离单位常量
     * @en Distance units, value refer to distance unit constants
     */
    type Result = number;
  }

  /**
   * @zh 返回当前的距离单位是公制还是英制。该方法是获取的是用户设置的单位，不代表数据的单位，数据单位参考相应数据的接口说明
   * @en Returns whether the current distance unit is metric or imperial. This method is to get the units set by the user, not to represent the units of the data, the data units refer to the interface description of the corresponding data
   * @constants distanceUnit
   * @example
   * ```js
   * import { getDistanceUnit, DISTANCE_UNIT_METRIC } from 'zeppos-cross-api/settings'
   *
   * const distanceUnit = getDistanceUnit()
   *
   * if (distanceUnit === DISTANCE_UNIT_METRIC) {
   *   console.log('metric')
   * }
   * ```
   */
  function getDistanceUnit(): getDistanceUnit.Result;
  namespace getWeightUnit {
    /**
     * @zh 重量单位，值参考重量单位常量
     * @en Weight units, value refer to weight unit constants
     */
    type Result = number;
  }

  /**
   * @zh 获取用户设置的重量单位
   * @en Gets the weight unit set by the user
   * @constants weightUnit
   * @example
   * ```js
   * import { getWeightUnit, WEIGHT_UNIT_KILOGRAM } from 'zeppos-cross-api/settings'
   *
   * const weightUnit = getWeightUnit()
   *
   * if (weightUnit === WEIGHT_UNIT_KILOGRAM) {
   *   console.log('Kilogram')
   * }
   * ```
   */
  function getWeightUnit(): getWeightUnit.Result;
  namespace getWeightTarget {
    /**
     * @zh 用户设置的体重目标，默认为 `0`
     * @en User-set weight target, default is `0`
     */
    type Result = number;
  }

  /**
   * @zh 获取用户设置的体重目标
   * @en Get the weight target set by the user
   * @example
   * ```js
   * import { getWeightTarget } from 'zeppos-cross-api/settings'
   *
   * const weightTarget = getWeightTarget()
   * console.log(weightTarget)
   * ```
   */
  function getWeightTarget(): getWeightTarget.Result;
  namespace getSleepTarget {
    /**
     * @zh 用户设置的睡眠目标，默认为 `0`，单位分钟
     * @en User-set sleep target, default is `0`, in minutes
     */
    type Result = number;
  }

  /**
   * @zh 获取用户设置的睡眠目标
   * @en Get the sleep target set by the user
   * @example
   * ```js
   * import { getSleepTarget } from 'zeppos-cross-api/settings'
   *
   * const sleepTarget = getSleepTarget()
   * console.log(sleepTarget)
   * ```
   */
  function getSleepTarget(): getSleepTarget.Result;
  namespace getTemperatureUnit {
    /**
     * @zh 温度单位，值参考温度单位常量
     * @en Temperature units, value reference temperature unit constants
     */
    type Result = number;
  }

  /**
   * @zh 获取用户设置的温度单位
   * @en Get the temperature units set by the user
   * @constants temperatureUnit
   * @version 2.1
   * @example
   * ```js
   * import { getTemperatureUnit, TEMPERATURE_UNIT_CENTIGRADE } from 'zeppos-cross-api/settings'
   *
   * const temperatureUnit = getTemperatureUnit()
   *
   * if (temperatureUnit === TEMPERATURE_UNIT_CENTIGRADE) {
   *   console.log('centigrade')
   * }
   * ```
   */
  function getTemperatureUnit(): getTemperatureUnit.Result;
  namespace getSystemInfo {
    /**
     * @output
     */
    interface Result {
      /**
       * @zh Zepp OS 系统版本
       * @en Zepp OS System Version
       */
      osVersion: string;
      /**
       * @zh 设备固件版本
       * @en Device firmware version
       */
      firmwareVersion: string;
      /**
       * @zh API_LEVEL 版本
       * @en API_LEVEL
       */
      minAPI: string;
    }
  }

  /**
   * @zh 获取系统相关信息
   * @en Get system related information
   * @version 2.1
   * @example
   * ```js
   * import { getSystemInfo } from 'zeppos-cross-api/settings'
   *
   * const { minAPI } = getSystemInfo()
   * console.log(minAPI)
   * ```
   */
  function getSystemInfo(): getSystemInfo.Result;
  namespace getSystemMode {
    /**
     * @output
     */
    interface Result {
      /**
       * @zh 勿扰模式开关状态
       * @en State of Do Not Disturb Mode
       */
      DND: boolean;
      /**
       * @zh 睡眠模式开关状态
       * @en State of Sleep Mode
       */
      sleep: boolean;
      /**
       * @zh 剧场模式开关状态
       * @en State of Sleep Mode
       */
      theater: boolean;
      /**
       * @zh 屏幕锁定开关状态
       * @en State of Screen Lock Mode
       */
      systemLock: boolean;
      /**
       * @zh 低温模式开关状态
       * @en State of Low Temperature Mode
       */
      lowTemperature: boolean;
      /**
       * @zh 省电模式开关状态
       * @en State of Power Saving Mode
       */
      powerSaving: boolean;
      /**
       * @zh 省电时钟模式开关状态
       * @en State of Clock Mode
       */
      ultraPowerSaving: boolean;
      /**
       * @zh 按键模式开关状态
       * @en State of Button Mode
       */
      button: boolean;
      /**
       * @zh 无障碍模式开关状态
       * @en State of Accessible
       */
      accessibleSwitch: boolean;
    }
  }

  /**
   * @zh 获取系统各种模式的设置信息
   * @en Get the system mode setting information
   * @version 3.0
   * @example
   * ```js
   * import { getSystemMode } from 'zeppos-cross-api/settings'
   *
   * const mode = getSystemMode()
   * console.log(mode)
   * ```
   */
  function getSystemMode(): getSystemMode.Result;
}
