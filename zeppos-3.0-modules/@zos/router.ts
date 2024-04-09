/**
  * @zh 路由
  * @en Router
  */


declare module '@zos/router' {

  /**
   * @zh 今日活动
   * @en Activity
   * @version 3.0
   */
  const SYSTEM_APP_STATUS: number;

  /**
   * @zh 心率
   * @en Heart Rate
   * @version 3.0
   */
  const SYSTEM_APP_HR: number;

  /**
   * @zh 运动
   * @en Workout
   * @version 3.0
   */
  const SYSTEM_APP_SPORT: number;

  /**
   * @zh 天气
   * @en Weather
   * @version 3.0
   */
  const SYSTEM_APP_WEATHER: number;

  /**
   * @zh 闹钟
   * @en Alarm
   * @version 3.0
   */
  const SYSTEM_APP_ALARM: number;

  /**
   * @zh 遥控拍照
   * @en Camera Remote
   * @version 3.0
   */
  const SYSTEM_APP_CAMERA: number;

  /**
   * @zh 音乐
   * @en Music
   * @version 3.0
   */
  const SYSTEM_APP_MUSIC: number;

  /**
   * @zh 秒表
   * @en Stopwatch
   * @version 3.0
   */
  const SYSTEM_APP_STOPWATCH: number;

  /**
   * @zh 倒计时
   * @en Timer
   * @version 3.0
   */
  const SYSTEM_APP_COUNTDOWN: number;

  /**
   * @zh 查找手机
   * @en Find My Phone
   * @version 3.0
   */
  const SYSTEM_APP_FINE_PHONE: number;

  /**
   * @zh 卡包
   * @en Cards
   * @version 3.0
   */
  const SYSTEM_APP_CARD: number;

  /**
   * @zh 支付宝
   * @en Alipay
   * @version 3.0
   */
  const SYSTEM_APP_ALIPAY: number;

  /**
   * @zh 设置
   * @en Settings
   * @version 3.0
   */
  const SYSTEM_APP_SETTING: number;

  /**
   * @zh 运动记录
   * @en Workout History
   * @version 3.0
   */
  const SYSTEM_APP_SPORT_HISTORY: number;

  /**
   * @zh 指南针
   * @en Compass
   * @version 3.0
   */
  const SYSTEM_APP_COMPASS: number;

  /**
   * @zh PAI
   * @en PAI
   * @version 3.0
   */
  const SYSTEM_APP_PAI: number;

  /**
   * @zh 世界时钟
   * @en World Clock
   * @version 3.0
   */
  const SYSTEM_APP_WORLD_CLOCK: number;

  /**
   * @zh 压力
   * @en Stress
   * @version 3.0
   */
  const SYSTEM_APP_PRESSURE: number;

  /**
   * @zh 生理周期
   * @en Cycle Tracking
   * @version 3.0
   */
  const SYSTEM_APP_MENSTRUAL: number;

  /**
   * @zh 运动状态
   * @en Workout Status
   * @version 3.0
   */
  const SYSTEM_APP_SPORT_STATUS: number;

  /**
   * @zh 日历
   * @en Calendar
   * @version 3.0
   */
  const SYSTEM_APP_CALENDAR: number;

  /**
   * @zh 睡眠
   * @en Sleep
   * @version 3.0
   */
  const SYSTEM_APP_SLEEP: number;

  /**
   * @zh 血氧
   * @en Blood Oxygen
   * @version 3.0
   */
  const SYSTEM_APP_SPO2: number;

  /**
   * @zh 电话
   * @en Phone
   * @version 3.0
   */
  const SYSTEM_APP_PHONE: number;

  /**
   * @zh 网易云音乐
   * @en NetEase Music
   * @version 3.0
   */
  const SYSTEM_APP_NETEASE_MUSIC: number;

  /**
   * @zh 微信支付
   * @en Weixin Pay
   * @version 3.0
   */
  const SYSTEM_APP_WEPAY: number;

  /**
   * @zh 呼吸
   * @en Breathe
   * @version 3.0
   */
  const SYSTEM_APP_BREATH: number;

  /**
   * @zh 番茄钟
   * @en Pomodoro Timer
   * @version 3.0
   */
  const SYSTEM_APP_POMODORO: number;

  /**
   * @zh Alexa
   * @en Alexa
   * @version 3.0
   */
  const SYSTEM_APP_ALEAX: number;

  /**
   * @zh 温度计
   * @en Thermometer
   * @version 3.0
   */
  const SYSTEM_APP_THERMOMETER: number;

  /**
   * @zh 待办事项
   * @en To Do
   * @version 3.0
   */
  const SYSTEM_APP_TODO_LIST: number;

  /**
   * @zh 气压高度计
   * @en Barometer
   * @version 3.0
   */
  const SYSTEM_APP_ALTIMETER: number;

  /**
   * @zh 语音备忘录
   * @en Voice Memos
   * @version 3.0
   */
  const SYSTEM_APP_VOICE_MEMO: number;

  /**
   * @zh 太阳和月亮
   * @en Sun & Moon
   * @version 3.0
   */
  const SYSTEM_APP_SUN_AND_MOON: number;

  /**
   * @zh 一键测量
   * @en One-tap Measuring
   * @version 3.0
   */
  const SYSTEM_APP_MEASUREMENT: number;

  /**
   * @zh Zepp 运动教练
   * @en Zepp Coach
   * @version 3.0
   */
  const SYSTEM_APP_ZEPP_COACH: number;

  /**
   * @zh 会员卡
   * @en Membership Card
   * @version 3.0
   */
  const SYSTEM_APP_CLUB_CARD: number;

  /**
   * @zh 身体成分
   * @en Body Composition
   * @version 3.0
   */
  const SYSTEM_APP_BODY_COMPOSITION: number;

  /**
   * @zh 身心准备度
   * @en Readiness
   * @version 3.0
   */
  const SYSTEM_APP_READINESS: number;
  namespace launchApp {
    interface Option {
      /**
       * @zh 小程序 ID
       * @en Mini Program ID
       */
      appId: number;
      /**
       * @zh 页面路径
       * @en path
       */
      url: string;
      /**
       * @zh 是否跳转系统应用，3.0 版本支持跳转系统应用，参考系统应用 ID 常量
       * @en Whether to jump to the system App, version 3.0 supports jumping to the system App, refer to the system App ID constant
       * @default false
       * @version 3.0
       */
      native: boolean;
      /**
       * @zh 传递给 app.js 生命周期 `onCreate` 中的参数，支持字符串或者标准 JSON 对象。如果传递标准 JSON 对象，该方法内部会将其转为字符串
       * @en The argument passed to the app.js lifecycle `onCreate` supports either a string or a standard JSON object. If a standard JSON object is passed, the method internally converts it to a string
       */
      params?: string | object;
    }
  }

  /**
   * @zh 打开小程序
   * @en Open Mini Program
   * @constants system_app
   * @example
   * ```js
   * import { launchApp } from '@zos/router'
   *
   * launchApp({
   *    appId: 1000001,
   *    url: 'pages/js_widget_sample',
   *    params: {
   *      type: 1
   *   }
   * })
   * ```
   */
  function launchApp(option: launchApp.Option): void;
  namespace push {
    interface Option {
      /**
       * @zh 页面路径
       * @en path
       */
      url: string;
      /**
       * @zh 传递给 page.js `onInit` 生命周期中的参数，支持字符串或者标准 JSON 对象。如果传递标准 JSON 对象，该方法内部会将其转为字符串
       * @en Parameters passed to the page `onInit` lifecycle, supporting strings or standard JSON object. If a standard JSON object is passed, the method internally converts it to a string
       */
      params?: string | object;
    }
  }

  /**
   * @zh
   * 跳转到小程序内的某个页面，使用 `back` 方法可以回到原页面
   * @en
   * Navigate to a page within the Mini Program. Use the `back` method to go back to the original page
   * @example
   * ```js
   * import { push } from '@zos/router'
   *
   * push({
   *    url: 'page/index',
   *    params: 'type=1'
   * })
   * ```
   */
  function push(option: push.Option): void;
  namespace replace {
    interface Option {
      /**
       * @zh 页面路径
       * @en path
       */
      url: string;
      /**
       * @zh 传递给 page.js `onInit` 生命周期中的参数，支持字符串或者标准 JSON 对象。如果传递标准 JSON 对象，该方法内部会将其转为字符串
       * @en Parameters passed to the page `onCreate` lifecycle, supporting strings or standard JSON objects. If a standard JSON object is passed, the method internally converts it to a string
       */
      params?: string | object;
    }
  }

  /**
   * @zh
   * 关闭当前页面，跳转到小程序内的某个页面
   * @en
   * Close the current page and jump to a page within the app
   * @example
   * ```js
   * import { replace } from '@zos/router'
   *
   * replace({
   *    url: 'page/index',
   *    params: 'type=1'
   * })
   * ```
   */
  function replace(option: replace.Option): void;
  /**
   * @zh
   * 退出小程序，返回至表盘页面
   * @en
   * Exit the Mini Program and return to the watchface page
   * @example
   * ```js
   * import { home } from '@zos/router'
   *
   * home()
   * ```
   */
  function home(): void;
  /**
   * @zh
   * 关闭当前页面，返回上一页面
   * @en
   * Closes the current page to return to the previous page
   * @example
   * ```js
   * import { back } from '@zos/router'
   *
   * back()
   * ```
   */
  function back(): void;
  /**
   * @zh
   * 关闭当前小程序，回到应用列表页面
   * @en
   * Exit the Mini Program and return to the applist page
   * @example
   * ```js
   * import { exit } from '@zos/router'
   *
   * exit()
   * ```
   */
  function exit(): void;
  namespace setLaunchAppTimeout {
    interface Option {
      /**
       * @zh 小程序 ID
       * @en Mini Program ID
       */
      appId: number;
      /**
       * @zh 页面路径
       * @en path
       */
      url: string;
      /**
       * @zh utc 时间戳（毫秒）
       * @en utc timestamp(milliseconds)
       */
      utc?: number;
      /**
       * @zh 传递给 app.js 生命周期 `onCreate` 中的参数，支持字符串或者标准 JSON 对象。如果传递标准 JSON 对象，该方法内部会将其转为字符串
       * @en The argument passed to the app.js lifecycle `onCreate` supports either a string or a standard JSON object. If a standard JSON object is passed, the method internally converts it to a string
       */
      params?: string | object;
    }

    /**
     * @zh 表示定时器的编号，这个值可以传递给 `clearLaunchAppTimeout` 来取消定时器
     * @en The returned value is a positive integer value which identifies the timer created by the call to `setLaunchAppTimeout`. This value can be passed to `clearLaunchAppTimeout` to cancel the timeout.
     */
    type Result = number;
  }

  /**
   * @zh 注册一个定时器，定时唤起小程序，在此期间如果设备重启，则定时器会失效
   * @en Register a timer to launch the Mini Program at a given time
   * @example
   * ```js
   * import { setLaunchAppTimeout, clearLaunchAppTimeout } from '@zos/router'
   * import { Time } from '@zos/sensor'
   *
   * const time = new Time()
   * const timeoutId = setLaunchAppTimeout({
   *   url: 'pages/js_widget_sample',
   *   appId: 1000001,
   *   utc: time.getTime() + 1000
   * })
   *
   * clearLaunchAppTimeout({
   *   timeoutId
   * })
   * ```
   */
  function setLaunchAppTimeout(option: setLaunchAppTimeout.Option): setLaunchAppTimeout.Result;
  namespace clearLaunchAppTimeout {
    interface Option {
      /**
       * @zh 需要取消的唤醒小程序定时器的编号，这个值通过 `setLaunchAppTimeout` 返回
       * @en The identifier of the timeout you want to cancel. This ID was returned by the corresponding call to `setLaunchAppTimeout`()
       */
      timeoutId: number;
    }

    /**
     * @zh 表示定时器的编号，这个值可以传递给 `clearLaunchAppTimeout` 来取消定时器
     * @en The returned value is a positive integer value which identifies the timer created by the call to `setLaunchAppTimeout`. This value can be passed to `clearLaunchAppTimeout` to cancel the timeout
     */
    type Result = number;
  }

  /**
   * @zh 取消 `setLaunchAppTimeout` 创建的唤醒小程序定时器
   * @en Cancel the wakeup Mini Program timer created by `setLaunchAppTimeout`
   * @example
   * ```js
   * import { setLaunchAppTimeout, clearLaunchAppTimeout } from '@zos/router'
   *
   * const timeoutId = setLaunchAppTimeout({
   *   url: 'pages/js_widget_sample',
   *   appId: 1000001,
   *   delay: 10000
   * })
   *
   * clearLaunchAppTimeout({
   *   timeoutId
   * })
   * ```
   */
  function clearLaunchAppTimeout(option: clearLaunchAppTimeout.Option): void;
  function clearLaunchAppTimeout(timeoutId: number): void;
  namespace checkSystemApp {
    interface Option {
      /**
       * @zh 需要跳转的系统应用 ID，值参考系统应用 ID 常量
       * @en ID of the system App to be jumped to, value refers to the system App ID constant
       */
      appId: number;
    }
  }

  /**
   * @zh 检查系统应用是否支持跳转
   * @en Check if the system application supports jumping
   * @constants system_app
   * @version 3.0
   * @example
   * ```js
   * import { checkSystemApp, SYSTEM_APP_STATUS } from '@zos/router'
   *
   * checkSystemApp({
   *   appId: SYSTEM_APP_STATUS
   * })
   * ```
   */
  function checkSystemApp(option: checkSystemApp.Option): void;
  function checkSystemApp(appId: number): void;
}
