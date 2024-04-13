/**
  * @zh 屏幕显示
  * @en Display
  */
declare module 'zeppos-cross-api/display' {

  namespace setWakeUpRelaunch {
    /**
     * @zh 如果类型为 `boolean` 参数含义为 `relaunch`，否则代表 Options 对象
     * @en `true` - auto-brightness is set to on, `false` - auto-brightness is set to off
     */
    type Option = Options | boolean;

    interface Options {
      /**
       * @zh 息屏后再次唤醒手表是否重新打开小程序
       * @en Whether to reopen the Mini Program after waking up the watch again after a screen break
       */
      relaunch: boolean;
    }
  }

  /**
   * @zh 默认情况下，在小程序某个页面中触发系统息屏，10s 后系统会退出该小程序，再次唤醒手表时进入表盘页面，如果设置 `relaunch` 为 `true`，再次唤醒手表后会重新打开小程序，并进入对应页面
   * @en By default, the system will off the screen in one page of the Mini Program, and the system will exit the Mini Program after 10s, and enter the dial page when the watch is woken up again. If `relaunch` is set to `true`, the Mini Program will reopen and enter the corresponding page when the watch is woken up again.
   * @example
   * ```js
   * import { setWakeUpRelaunch } from 'zeppos-cross-api/display'
   *
   * setWakeUpRelaunch({
   *   relaunch: true
   * })
   * ```
   */
  function setWakeUpRelaunch(option: setWakeUpRelaunch.Option): void;
  function setWakeUpRelaunch(relaunch: boolean): void;
  namespace setAutoBrightness {
    interface Option {
      /**
       * @zh 是否开启自动亮度
       * @en Whether to open the automatic brightness
       */
      autoBright: boolean;
    }
  }

  /**
   * @zh 设置是否开启自动亮度，如果开启，则屏幕亮度由光线传感器控制，`setBrightness` 的设置会失效
   * @en Set whether to turn on auto-brightness, if it is on, then the screen brightness will be controlled by the light sensor and the `setBrightness` will be disabled
   * @example
   * ```js
   * import { setAutoBrightness } from 'zeppos-cross-api/display'
   *
   * setAutoBrightness({
   *   autoBright: true
   * })
   * ```
   */
  function setAutoBrightness(option: setAutoBrightness.Option): void;
  function setAutoBrightness(autoBright: boolean): void;
  namespace getAutoBrightness {
    /**
     * @zh `true` - 自动亮度设置为开启状态，`false` - 自动亮度设置为关闭状态
     * @en `true` - auto-brightness is set to on, `false` - auto-brightness is set to off
     */
    type Result = boolean;
  }

  /**
   * @zh 获取是否开启屏幕自动亮度设置
   * @en Get whether to turn on the screen auto brightness setting
   * @example
   * ```js
   * import { getAutoBrightness } from 'zeppos-cross-api/display'
   *
   * const result = getAutoBrightness()
   *
   * if (result) {
   *   console.log('Auto brightness setting is turned on')
   * }
   * ```
   */
  function getAutoBrightness(): getAutoBrightness.Result;
  namespace setBrightness {
    interface Option {
      /**
       * @zh 屏幕亮度数值，范围 0 - 100
       * @en Screen brightness value, range 0 - 100
       */
      brightness: number;
    }

    /**
     * @zh 如果返回 `0` 则表明成功
     * @en If `0` is returned, success is indicated
     */
    type Result = number;
  }

  /**
   * @zh 设置当前设备的屏幕亮度。如果当前开启了自动亮度设置，亮度由光线传感器自动调节，此时调用 `setBrightness` 不会生效，需要使用 `setAutoBrightness` 关闭自动亮度后再进行设置。注意事项：如果退出当前页面，需要考虑是否需要设置回原来的亮度
   * @en Set the screen brightness of the current device. If the auto brightness setting is currently turned on, the brightness is automatically adjusted by the light sensor, calling `setBrightness` will not take effect at this time, you need to use `setAutoBrightness` to turn off the auto brightness and then set it again. Note: If you exit the current page, you need to consider whether you need to set the brightness back to the original brightness
   * @example
   * ```js
   * import { setBrightness } from 'zeppos-cross-api/display'
   *
   * const result = setBrightness({
   *   brightness: 50
   * })
   *
   * if (result === 0) {
   *   console.log('setBrightness success')
   * }
   * ```
   */
  function setBrightness(option: setBrightness.Option): setBrightness.Result;
  function setBrightness(brightness: number): setBrightness.Result;
  namespace getBrightness {
    /**
     * @zh 屏幕亮度数值，范围 0 - 100
     * @en Screen brightness value, range 0 - 100
     */
    type Result = number;
  }

  /**
   * @zh 获取当前设备的屏幕亮度
   * @en Get the screen brightness of the current device
   * @example
   * ```js
   * import { getBrightness } from 'zeppos-cross-api/display'
   *
   * const result = getBrightness()
   * console.log(`current brightness ${result}`)
   * ```
   */
  function getBrightness(): getBrightness.Result;
  namespace setScreenOff {
    /**
     * @zh 如果返回 `0` 则表明成功
     * @en If `0` is returned, success is indicated
     */
    type Result = number;
  }

  /**
   * @zh 设置屏幕息屏
   * @en Set the screen to rest
   * @example
   * ```js
   * import { setScreenOff } from 'zeppos-cross-api/display'
   *
   * const result = setScreenOff()
   *
   * if (result === 0) {
   *   console.log('setScreenOff success')
   * }
   * ```
   */
  function setScreenOff(): setScreenOff.Result;
  namespace setPageBrightTime {
    interface Option {
      /**
       * @zh 亮屏时间（毫秒），范围 [1000 - 2147483000]
       * @en Screen brightness value, range 0 - 100
       * @defaultValue 10000
       */
      brightTime?: number;
    }

    /**
     * @zh 如果返回 `0` 则表明成功
     * @en If `0` is returned, success is indicated
     */
    type Result = number;
  }

  /**
   * @zh 设置当前页面屏幕亮屏时间，这个设置随页面销毁会做重置
   * @en Set the current page screen lighting time, this setting will follow the page destruction to do reset
   * @example
   * ```js
   * import { setPageBrightTime } from 'zeppos-cross-api/display'
   *
   * const result = setPageBrightTime({
   *   brightTime: 60000
   * })
   *
   * if (result === 0) {
   *   console.log('setPageBrightTime success')
   * }
   * ```
   */
  function setPageBrightTime(option: setPageBrightTime.Option): setPageBrightTime.Result;
  namespace resetPageBrightTime {
    /**
     * @zh 如果返回 `0` 则表明成功
     * @en If `0` is returned, success is indicated
     */
    type Result = number;
  }

  /**
   * @zh 取消 `setPageBrightTime` 设置的亮屏时间
   * @en Cancel the bright time set by `setPageBrightTime`
   * @example
   * ```js
   * import { setPageBrightTime, resetPageBrightTime } from 'zeppos-cross-api/display'
   *
   * setPageBrightTime({
   *   brightTime: 60000
   * })
   *
   * const result = resetPageBrightTime()
   * ```
   */
  function resetPageBrightTime(): resetPageBrightTime.Result;
  namespace pausePalmScreenOff {
    interface Option {
      /**
       * @zh 持续时间（毫秒），如果传 `0`，则一直暂停覆掌息屏行为，直到调用 `resetPalmScreenOff`
       * @en Duration (milliseconds), if `0` is passed, the palm rest behavior is suspended until `resetPalmScreenOff` is called
       * @defaultValue 30000
       */
      duration?: number;
    }

    /**
     * @zh 如果返回 `0` 则表明成功
     * @en If `0` is returned, success is indicated
     */
    type Result = number;
  }

  /**
   * @zh 暂停覆掌息屏行为
   * @en Suspension of overlapping palm resting screen behavior
   * @version 2.1
   * @example
   * ```js
   * import { pausePalmScreenOff } from 'zeppos-cross-api/display'
   *
   * pausePalmScreenOff({
   *   duration: 60000
   * })
   * ```
   */
  function pausePalmScreenOff(option: pausePalmScreenOff.Option): pausePalmScreenOff.Result;
  namespace resetPalmScreenOff {
    /**
     * @zh 如果返回 `0` 则表明成功
     * @en If `0` is returned, success is indicated
     */
    type Result = number;
  }

  /**
   * @zh 恢复覆掌息屏行为
   * @en Recovery of overlapping palm resting screen behavior
   * @version 2.1
   * @example
   * ```js
   * import { pausePalmScreenOff, resetPalmScreenOff } from 'zeppos-cross-api/display'
   *
   * pausePalmScreenOff({
   *   duration: 0
   * })
   *
   * setTimeout(() => {
   *   resetPalmScreenOff()
   * }, 3000)
   * ```
   */
  function resetPalmScreenOff(): resetPalmScreenOff.Result;
  namespace pauseDropWristScreenOff {
    interface Option {
      /**
       * @zh 持续时间（毫秒），如果传 `0`，则一直暂停落腕息屏行为，直到调用 `resetPalmScreenOff`
       * @en Duration (milliseconds), if `0` is passed, the wrist rest behavior will be suspended until `resetPalmScreenOff` is called
       * @defaultValue 30000
       */
      duration?: number;
    }

    /**
     * @zh 如果返回 `0` 则表明成功
     * @en If `0` is returned, success is indicated
     */
    type Result = number;
  }

  /**
   * @zh 暂停落腕息屏行为
   * @en Suspension of wrist resting behavior
   * @version 2.1
   * @example
   * ```js
   * import { pauseDropWristScreenOff } from 'zeppos-cross-api/display'
   *
   * pauseDropWristScreenOff({
   *   duration: 60000
   * })
   * ```
   */
  function pauseDropWristScreenOff(
    option: pauseDropWristScreenOff.Option
  ): pauseDropWristScreenOff.Result;
  namespace resetDropWristScreenOff {
    /**
     * @zh 如果返回 `0` 则表明成功
     * @en If `0` is returned, success is indicated
     */
    type Result = number;
  }

  /**
   * @zh 恢复落腕息屏行为
   * @en Resume wrist drop resting behavior
   * @version 2.1
   * @example
   * ```js
   * import { pauseDropWristScreenOff, resetDropWristScreenOff } from 'zeppos-cross-api/display'
   *
   * pauseDropWristScreenOff({
   *   duration: 0
   * })
   *
   * setTimeout(() => {
   *   resetDropWristScreenOff()
   * }, 3000)
   * ```
   */
  function resetDropWristScreenOff(): resetDropWristScreenOff.Result;
  namespace getSettings {
    /**
     * output
     */
    interface Result {
      /**
       * @zh 屏幕状态
       * @en Screen Status
       */
      screen: ScreenObj;
      /**
       * @zh 抬腕亮屏设置
       * @en Lift wrist to view info setting
       */
      wrist: WristObj;
      /**
       * @zh 息屏显示设置
       * @en Rest screen display settings
       */
      standby: StandbyObj;
    }

    /**
     * output
     */
    interface ScreenObj {
      /**
       * @zh 当前屏幕状态，`1`: 亮屏、`2`: 息屏
       * @en Current screen status, `1`: On, `2`: Off
       */
      status: number;
      /**
       * @zh 屏幕亮屏时长，单位秒
       * @en Screen light-up time, in seconds
       */
      duration: number;
    }

    interface WristObj {
      /**
       * @zh 抬腕亮屏响应速度
       * @en Response speed
       */
      speed: number;
      /**
       * @zh 抬腕亮屏开启模式，值见 `model`
       * @en Mode, see `model` for value
       */
      model: number;
      /**
       * @zh 抬腕亮屏开启时间，基于当天 0 点的分钟数
       * @en Start time, based on the number of minutes at 0:00 of the day
       */
      startTime: number;
      /**
       * @zh 抬腕亮屏结束时间，基于当天 0 点的分钟数
       * @en End time, based on the number of minutes at 0:00 of the day
       */
      endTime: number;
    }

    interface StandbyObj {
      /**
       * @zh 息屏表盘样式，`0`: 系统默认、`1`: 跟随当前表盘
       * @en Rest screen Watchface style, `0`: system default, `1`: follow the current dial
       */
      style: number;
      /**
       * @zh 息屏显示开启模式，值见 model
       * @en Mode, see `model` for value
       */
      model: number;
      /**
       * @zh 息屏显示开启时间，基于当天 0 点的分钟数
       * @en Start time, based on the number of minutes at 0:00 of the day
       */
      startTime: number;
      /**
       * @zh 息屏显示结束时间，基于当天 0 点的分钟数
       * @en End time, based on the number of minutes at 0:00 of the day
       */
      endTime: number;
    }

    /**
     * @output
     * @enum
     */
    interface mode {
      /**
       * @zh 关闭
       * @en Measurement invalid
       */
      0: number;
      /**
       * @zh 定时开启
       * @en Measurement invalid
       */
      1: number;
      /**
       * @zh 全天开启
       * @en Measurement invalid
       */
      2: number;
      /**
       * @zh 智能开启
       * @en Measurement invalid
       */
      3: number;
    }
  }

  /**
   * @zh 获取系统显示相关信息
   * @en Get system display related information
   * @version 3.0
   * @example
   * ```js
   * import { getSettings } from 'zeppos-cross-api/display'
   *
   * console.log(getSettings())
   * ```
   */
  function getSettings(): getSettings.Result;
}
