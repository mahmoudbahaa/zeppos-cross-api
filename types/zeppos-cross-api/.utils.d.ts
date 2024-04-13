/**
  * @zh 工具
  * @en Utils
  */


declare module 'zeppos-cross-api/utils' {

  namespace px {
    /**
     * @zh 以 `designWidth` 为缩放基准的像素值
     * @en Pixel values based on `designWidth`
     */
    type PxValue = number;

    /**
     * @zh 根据机型实际宽度进行缩放计算后的像素值
     * @en Pixel values after scaling calculation
     */
    type Result = number;
  }

  /**
   * @zh 以小程序配置 `app.json` 中 `targets` 对象中各机型配置的 `designWidth` 为基准进行像素值缩放计算
   * @en Pixel scaling calculation. The `designWidth` of each model in the `targets` object in the `app.json` is used as the base.
   * @example
   * ```js
   * import { px } from 'zeppos-cross-api/utils'
   *
   * px(480)
   * ```
   */
  function px(value: px.PxValue): px.Result;
  namespace assets {
    /**
     * @zh 基础路径，会拼接在资源文件路径之前
     * @en The base path, which will be spliced before the resource file path
     */
    type BasePath = string;

    /**
     * @zh 资源文件路径构造函数
     * @en Resource file path constructor
     */
    type AssetsPathFunc = (path: Path, isRtl?: IsRtl) => ResultPath;

    /**
     * @zh 资源文件路径
     * @en Resource file path
     */
    type Path = string;

    /**
     * @zh 是否需要拼接 rtl 路径
     * @en Whether to splice the rtl path
     */
    type IsRtl = boolean;

    /**
     * @zh 最终文件路径
     * @en Final file path
     */
    type ResultPath = string;
  }

  /**
   * @zh 用于处理资源文件路径，拼接 `basePath`。并可传入参数对图片进行 rtl 路径转换，用于小程序的 RTL 适配
   * @en Used to handle resource file paths, splice `basePath`. and can pass in parameters for rtl path conversion of images, for RTL adaptation of Mini Program
   * @example
   * ```js
   * import { assets } from 'zeppos-cross-api/utils'
   *
   * const imagePath = 'zeppos-logo.png'
   * const assetsPathFunc = assets('img')
   *
   * console.log(assetsPathFunc(imagePath)) // img/zeppos-logo.png
   * console.log(assetsPathFunc(imagePath, true)) // img/zeppos-logo@rtl.png
   * ```
   */
  function assets(basePath: assets.BasePath): assets.AssetsPathFunc;
  /**
   * @zh `log` 实例用于日志打印，有多种等级的日志方法，方便在控制台进行过滤
   * @en The `log` instance is used for log printing and has multiple levels of logging methods for easy filtering in the console
   * @example
   * ```js
   * import { log } from 'zeppos-cross-api/utils'
   *
   * const pageLogger = log.getLogger('page')
   *
   * pageLogger.log('page created')
   * pageLogger.error('page error')
   * ```
   */
  interface log {
    /**
     * @zh 返回一个新的 `log` 实例，带有 `name` 标记，在执行打印日志方法时，会加入 `name` 标记，便于区分
     * @en Returns a new `log` instance with the `name` tag, which is added when the print log method is executed to make it easier to distinguish
     */
    getLogger(name: string): log;
    /**
     * @zh 打印 log 级别的日志
     * @en Print log level logs
     */
    log(...args: string[]): void;
    /**
     * @zh 打印 warn 级别的日志
     * @en Print warn level logs
     */
    warn(...args: string[]): void;
    /**
     * @zh 打印 debug 级别的日志
     * @en Print debug level logs
     */
    debug(...args: string[]): void;
    /**
     * @zh 打印 error 级别的日志
     * @en Print error level logs
     */
    error(...args: string[]): void;
    /**
     * @zh 打印 info 级别的日志
     * @en Print info level logs
     */
    info(...args: string[]): void;
  }

  const log: log;
  /**
   * @zh EventBus 是一个提供事件发布/订阅的工具类
   * @en EventBus is a tool class that provides event publishing/subscription
   * @example
   * ```js
   * import { EventBus } from 'zeppos-cross-api/utils'
   *
   * const eventBus = new EventBus()
   *
   * eventBus.on('data', (data) => {
   *  console.log(data)
   * })
   *
   * eventBus.emit('data', 'Hello Zepp OS!')
   * ```
   */
  class EventBus {
    /**
     * @zh 为 `eventName` 对应的的监听器数组中添加一个事件监听器
     * @en Adds the listener function to the end of the listeners array for the event named eventName
     */
    on(eventName: string, listener: (...args: any[]) => void): void;
    /**
     * @zh 移除 `eventName` 对应的的监听器数组中的一个事件监听器
     * @en Removes the specified listener from the listener array for the event named eventName
     */
    off(eventName: string, listener: (...args: any[]) => void): void;
    /**
     * @zh 触发 `eventName` 对应的的监听器数组中的所有事件监听器
     * @en Triggers the listener functions for the event named eventName
     */
    emit(eventName: string, ...args: any[]): void;
    /**
     * @zh 为 `eventName` 添加一个仅生效一次的事件监听器
     * @en Adds a one-time listener function for the event named eventName
     */
    once(eventName: string, listener: (...args: any[]) => void): void;
    /**
     * @zh 移除所有事件监听器
     * @en Removes all listeners, or those of the specified eventName
     */
    clear(): void;
    /**
     * @zh 获取对应 `eventName` 对应的注册事件监听器的数量。不传递 `eventName` 则获取所注册 `eventName` 种类的数量
     * @en Gets the number of registered event listeners corresponding to `eventName`. If `eventName` is not passed, get the number of registered `eventName` types
     */
    count(eventName?: string): number;
  }
}
