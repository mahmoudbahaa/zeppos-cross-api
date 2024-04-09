/**
  * @zh 定时器
  * @en Alarm
  */
declare module '@zos/alarm' {

  /**
   * @zh 重复一次
   * @en Repeat once
   * @version 3.0
   */
  const REPEAT_ONCE: number;
  /**
   * @zh 每分钟重复一次
   * @en Repeat once per minute
   * @version 3.0
   */
  const REPEAT_MINUTE: number;
  /**
   * @zh 每小时重复一次
   * @en Repeat once per hour
   * @version 3.0
   */
  const REPEAT_HOUR: number;
  /**
   * @zh 每天重复一次
   * @en Repeat once per day
   * @version 3.0
   */
  const REPEAT_DAY: number;
  /**
   * @zh 每周重复一次
   * @en Repeat once per week
   * @version 3.0
   */
  const REPEAT_WEEK: number;
  /**
   * @zh 每月重复一次
   * @en Repeat once per month
   * @version 3.0
   */
  const REPEAT_MONTH: number;
  /**
   * @zh 每年重复一次
   * @en Repeat once per year
   * @version 3.0
   */
  const REPEAT_YEAR: number;
  /**
   * @zh 星期一
   * @en Monday
   * @version 3.0
   */
  const WEEK_MON: number;
  /**
   * @zh 星期二
   * @en Tuesday
   * @version 3.0
   */
  const WEEK_TUE: number;
  /**
   * @zh 星期三
   * @en Wednesday
   * @version 3.0
   */
  const WEEK_WED: number;
  /**
   * @zh 星期四
   * @en Thursday
   * @version 3.0
   */
  const WEEK_THU: number;
  /**
   * @zh 星期五
   * @en Friday
   * @version 3.0
   */
  const WEEK_FRI: number;
  /**
   * @zh 星期六
   * @en Saturday
   * @version 3.0
   */
  const WEEK_SAT: number;
  /**
   * @zh 星期日
   * @en Sunday
   * @version 3.0
   */
  const WEEK_SUN: number;
  namespace set {
    interface Option {
      /**
       * @zh 小程序的 App ID，默认当前小程序 ID
       * @en App ID of the Mini Program, default current Mini Program ID
       */
      appid?: number;
      /**
       * @zh 唤醒小程序的文件路径，支持「设备应用服务」
       * @en File path to wake up Mini Program, supporting App Service
       */
      file: string;
      /**
       * @zh 定时器执行的时间，UTC 时间戳，单位秒，该字段优先级高于 `delay`
       * @en Timer execution time, UTC timestamp, in seconds, this field has higher priority than `delay`
       */
      time?: number;
      /**
       * @zh 基于当前时间的延迟多少秒后执行，单位秒
       * @en How many seconds of delay based on the current time after the execution, in seconds
       */
      delay?: number;
      /**
       * @zh 定时器是否需要持久化存储（设备重启后依然能够成功执行）
       * @en Does the timer need persistent storage (can still be executed successfully after device reboot)
       * @defaultValue false
       */
      store?: boolean;
      /**
       * @zh 定时器的重复类型，参考定时器定期重复常量
       * @en Timer repetition type, refer to timer periodic repetition constants
       */
      repeat_type?: number;
      /**
       * @zh 当 repeat_type 设置为 `REPEAT_MINUTE`、`REPEAT_HOUR`、`REPEAT_DAY` 时生效，与 repeat_duration 配合使用，设置一个重复周期，一个重复周期以当前的 `repeat_type` 为单位，包含 `repeat_period` 次，提醒前 `repeat_duration` 次
       * @en Effective when repeat_type is set to `REPEAT_MINUTE`, `REPEAT_HOUR`, `REPEAT_DAY`, used in conjunction with repeat_duration to set a repeat period, one repeat period in the current `repeat_type`, containing `repeat_period` times, and `repeat_duration` times before the reminder
       */
      repeat_period?: number;
      /**
       * @zh 当 repeat_type 设置为 `REPEAT_MINUTE`、`REPEAT_HOUR`、`REPEAT_DAY` 时生效，定时器一个周期内提醒的次数，与 `repeat_duration` 配合使用，一个周期以当前的 `repeat_type` 为单位，包含 repeat_period 次，提醒前 `repeat_duration` 次
       * @en When repeat_type is set to `REPEAT_MINUTE`, `REPEAT_HOUR`, `REPEAT_DAY`, the number of reminders in a period of the timer, used with `repeat_duration`, a period of the current `repeat_type`, including repeat_period times, `repeat_duration` times before the reminder
       */
      repeat_duration?: number;
      /**
       * @zh 当 `repeat_type` 为 `REPEAT_WEEK` 时生效，可以自定义一周内重复哪几天，参考定时器周常量
       * @en Effective when `repeat_type` is `REPEAT_WEEK`, you can customize which days of the week are repeated, refer to the timer week constants
       */
      week_days?: number;
      /**
       * @zh 重复提醒开始的时间，UTC 秒，重复提醒只在重复时间段内生效
       * @en The time when the repeat reminder starts, in UTC seconds, and the repeat reminder only takes effect during the repeat time period
       */
      start_time?: number;
      /**
       * @zh 重复提醒结束的时间，UTC 秒，重复提醒只在重复时间段内生效
       * @en The time when the repeat reminder ends, in UTC seconds, and the repeat reminder only takes effect during the repeat time period
       */
      end_time?: number;
    }

    /**
     * @zh 创建定时器返回的 id，`0` 为无效 ID，表示定时器创建失败，支持持久化的定时器在系统重启后，ID 仍保持不变
     * @en The id returned by the timer creation, `0` is an invalid ID, which means the timer creation failed, and the ID remains the same after the system restart for timers that support persistence
     */
    type Result = number;
  }

  /**
   * @zh 支持持久化的定时器，用来唤醒小程序的页面
   * @en Support for persistent timers to wake up pages of Mini Program
   * @constants alarm_repeat,alarm_week
   * @permissionCode device:os.alarm
   * @version 3.0
   * @example
   * ```js
   * // At a certain time each day
   * import { set, REPEAT_DAY } from '@zos/alarm'
   *
   * const option = {
   *   file: 'pages/index.js',
   *   time: 12345678,
   *   repeat_type: REPEAT_DAY
   * }
   * const id = set(option)
   *
   * // Every Monday and Wednesday
   * import { set, REPEAT_WEEK, WEEK_MON, WEEK_WED } from '@zos/alarm'
   *
   * const option = {
   *   file: 'pages/index.js',
   *   time: 12345678,
   *   repeat_type: REPEAT_WEEK,
   *   week_days: WEEK_MON| WEEK_WED
   * }
   * const id = set(option)
   *
   * // Reminder every 21 days
   * import { set, REPEAT_DAY } from '@zos/alarm'
   *
   * const option = {
   *   file: 'pages/index.js',
   *   time: 12345678,
   *   repeat_type: REPEAT_DAY,
   *   repeat_period: 20,
   *   repeat_duration: 1,
   * }
   * const id = set(option)
   * ```
   */
  function set(option: set.Option): set.Result;
  namespace cancel {
    /**
     * @zh 如果返回 `0` 则表明成功
     * @en If `0` is returned, success is indicated
     */
    type Result = number;
  }

  /**
   * @zh 取消设置的定时器，如果定时器设置了持久化，同时取消持久化，alarmId 由 `set` 返回
   * @en Cancels the set timer, if the timer is set to persist and also cancels the persistence, alarmId is returned by `set`
   * @permissionCode device:os.alarm
   * @version 3.0
   * @example
   * ```js
   * import { stop } from '@zos/alarm'
   *
   * stop(alarmID)
   * ```
   */
  function cancel(alarmId: number): cancel.Result;
  /**
   * @zh 获取当前小程序所有已创建的定时器 alarmId 数组, 包括支持持久化的定时器
   * @en Get an array of all created timers alarmId for the current Mini Program, including timers that support persistence
   * @permissionCode device:os.alarm
   * @version 3.0
   * @example
   * ```js
   * import { getAlarmList } from '@zos/alarm'
   *
   * getAlarmList()
   * ```
   */
  function getAlarmList(): Array<number>;
}
