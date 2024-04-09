
declare namespace App {
    interface Option {
        /**
         * @zh App 实例上的挂载的数据对象，可用于存储小程序全局状态
         * @en Mounted data objects on App instances that can be used to store the global state of the Mini Program
         */
        globalData?: object;
        /**
         * @zh App onCreate 生命周期函数，如果是通过 router 模块中相关方法打开小程序，并且携带 params 参数，则在 onCreate 方法中可以获取到 params 字符串
         * @en Mounted data objects on App instances that can be used to store the global state of the Mini Program
         */
        onCreate?: (params?: string) => void;
        /**
         * @zh 小程序销毁时触发 `onDestroy` 生命周期函数
         * @en The `onDestroy` lifecycle function is triggered when the Mini Program is destroyed
         */
        onDestroy?: () => void;
    }

    /**
     * @zh App 实例
     * @en App instance
     */
    type Result = unknown;
}

/**
 * @zh 注册小程序，指定小程序的生命周期回调等。`App()` 必须在 `app.js` 中调用，且只能调用一次
 * @en Register the Mini Program, specifying the Mini Program's lifecycle callbacks, etc. `App()` must be called in `app.js`, and can only be called once
 * @example
 * ```js title="app.js"
 * App({
 *   globalData: {
 *     text: 'Hello Zepp OS'
 *   },
 *   onCreate() {
 *     console.log('onCreate')
 *     console.log(this.globalData.text)
 *   },
 *   onDestroy() {
 *     console.log('onDestroy')
 *   }
 * })
 * ```
 */
declare function App(option: App.Option): App.Result;

declare namespace getApp {
    /**
     * @zh App 实例
     * @en App instance
     * @output
     */
    interface Result {
        /**
         * @zh app 实例属性
         * @en app instance property
         */
        _options: Options;
    }

    /**
     * @zh app 实例属性
     * @en app instance property
     * @output
     */
    interface Options {
        /**
         * @zh App 构造函数上传入的其他属性
         * @en Other properties passed in on the App constructor
         */
        [propName: string]: any;
        /**
         * @zh app 实例上的挂载的数据对象
         * @en mounted data objects on app instances
         */
        globalData?: any;
    }
}

/**
 * @zh 获取 app 实例对象
 * @en Get the app instance object
 * @example
 * ```js
 * App({
 *   globalData: {
 *     text: 'Hello Zepp OS'
 *   },
 *   onCreate() {
 *     console.log('onCreate')
 *     console.log(this.globalData.text)
 *   },
 *   onDestroy() {
 *     console.log('onDestroy')
 *   }
 * })
 *
 * const app = getApp()
 * console.log(app._options.globalData.text)
 * ```
 */
declare function getApp(): getApp.Result;

declare namespace Page {
    interface Option {
        /**
         * @zh page 实例上挂载的数据对象，可用于存储当前页面的状态
         * @en A data object mounted on a page instance that can be used to store the state of the current page
         */
        state?: any;
        /**
         * @zh 页面初始化完成时触发，每个页面只触发一次，可以用来初始化 page 状态。如果是通过 router 模块中相关方法打开页面，并且携带 params 参数，则在 onInit 方法中可以获取到 params 字符串
         * @en It is triggered once per page and can be used to initialize the page state. If the page is opened by the relevant method in the router module with params parameters, the params string can be retrieved in the onInit method
         */
        onInit?: (params?: string) => void;
        /**
         * @zh 在 `onInit` 执行完成后触发，推荐在 `build` 生命周期中进行 UI 绘制
         * @en Triggered after `onInit` execution completes, recommended for UI drawing in the `build` lifecycle
         */
        build?: (params?: string) => void;
        /**
         * @zh 页面销毁时触发 `onDestroy` 生命周期函数
         * @en The `onDestroy` lifecycle function is triggered when the page is destroyed
         */
        onDestroy?: () => void;
    }

    /**
     * @zh Page 实例
     * @en Page instance
     */
    type Result = unknown;
}

/**
 * @zh 注册小程序中的一个页面，指定当前页面的生命周期回调等。每个页面文件都必须调用 `Page()` 构造函数且只能调用一次
 * @en Register a page in the Mini Program, specify the lifecycle callback for the current page, etc. Each page file must call the `Page()` constructor only once
 * @example
 * ```js title="page.js"
 * Page({
 *   state: {
 *     text: 'Hello Zepp OS'
 *   },
 *   onInit() {
 *     console.log('onInit')
 *   },
 *   build() {
 *     console.log('build')
 *     console.log(this.state.text)
 *   }
 * })
 * ```
 */
declare function Page(option: Page.Option): Page.Result;

declare namespace SecondaryWidget {
    interface Option {
        /**
         * @zh SecondaryWidget 副屏应用实例上挂载的数据对象，可用于存储状态
         * @en A data object mounted on a SecondaryWidget instance that can be used to store the state of the current SecondaryWidget
         */
        state?: object;
        /**
         * @zh 初始化完成时触发，只触发一次，可以用来初始化 SecondaryWidget 状态
         * @en It is triggered once per SecondaryWidget and can be used to initialize the SecondaryWidget state
         */
        onInit?: (params?: string) => void;
        /**
         * @zh 在 `onInit` 执行完成后触发，推荐在 `build` 生命周期中进行 UI 绘制
         * @en Triggered after `onInit` execution completes, recommended for UI drawing in the `build` lifecycle
         */
        build?: (params?: string) => void;
        /**
         * @zh 当屏幕焦点聚焦在此副屏应用上时触发
         * @en Triggered when the screen focus is on this SecondaryWidget
         */
        onResume?: () => void;
        /**
         * @zh 当屏幕焦点离开此副屏应用上时触发
         * @en Triggered when the screen focus leaves this SecondaryWidget
         */
        onPause?: () => void;
        /**
         * @zh 销毁时触发 `onDestroy` 生命周期函数
         * @en The `onDestroy` lifecycle function is triggered when the SecondaryWidget is destroyed
         */
        onDestroy?: () => void;
    }

    /**
     * @zh SecondaryWidget 实例
     * @en SecondaryWidget instance
     */
    type Result = unknown;
}

/**
 * @zh 注册副屏应用，指定当前页面的生命周期回调等。每个副屏应用都必须调用 `SecondaryWidget()` 构造函数且只能调用一次
 * @en Register SecondaryWidget, specify the lifecycle callback for the current SecondaryWidget, etc. Each SecondaryWidget file must call the `SecondaryWidget()` constructor only once
 * @example
 * ```js title="secondaryWidget.js"
 * SecondaryWidget({
 *   state: {
 *     text: 'Hello Zepp OS'
 *   },
 *   onInit() {
 *     console.log('onInit')
 *   },
 *   build() {
 *     console.log('build')
 *     console.log(this.state.text)
 *   }
 * })
 * ```
 */
declare function SecondaryWidget(option: SecondaryWidget.Option): SecondaryWidget.Result;

declare namespace AppWidget {
    interface Option {
        /**
         * @zh AppWidget 快捷卡片实例上挂载的数据对象，可用于存储状态
         * @en A data object mounted on a AppWidget instance that can be used to store the state of the current AppWidget
         */
        state?: object;
        /**
         * @zh 初始化完成时触发，只触发一次，可以用来初始化 AppWidget 状态
         * @en It is triggered once per AppWidget and can be used to initialize the AppWidget state
         */
        onInit?: (params?: string) => void;
        /**
         * @zh 在 `onInit` 执行完成后触发，推荐在 `build` 生命周期中进行 UI 绘制
         * @en Triggered after `onInit` execution completes, recommended for UI drawing in the `build` lifecycle
         */
        build?: (params?: string) => void;
        /**
         * @zh 当屏幕焦点聚焦在此快捷卡片上时触发
         * @en Triggered when the screen focus is on this AppWidget
         */
        onResume?: () => void;
        /**
         * @zh 当屏幕焦点离开此快捷卡片上时触发
         * @en Triggered when the screen focus leaves this AppWidget
         */
        onPause?: () => void;
        /**
         * @zh 销毁时触发 `onDestroy` 生命周期函数
         * @en The `onDestroy` lifecycle function is triggered when the AppWidget is destroyed
         */
        onDestroy?: () => void;
    }

    /**
     * @zh AppWidget 实例
     * @en AppWidget instance
     */
    type Result = unknown;
}

/**
 * @zh 注册快捷卡片，指定当前页面的生命周期回调等。每个快捷卡片都必须调用 `AppWidget()` 构造函数且只能调用一次
 * @en Register AppWidget, specify the lifecycle callback for the current AppWidget, etc. Each AppWidget file must call the `AppWidget()` constructor only once
 * @example
 * ```js title="appWidget.js"
 * AppWidget({
 *   state: {
 *     text: 'Hello Zepp OS'
 *   },
 *   onInit() {
 *     console.log('onInit')
 *   },
 *   build() {
 *     console.log('build')
 *     console.log(this.state.text)
 *   }
 * })
 * ```
 */
declare function AppWidget(option: AppWidget.Option): AppWidget.Result;

declare namespace AppService {
    interface Option {
        /**
         * @zh appService 实例上挂载的数据对象，可用于存储当前服务的状态
         * @en A data object mounted on the appService instance that can be used to store the current state of the service
         */
        state?: object;
        /**
         * @zh 启动服务的时候触发该函数，如果启动服务携带 params 参数，则在 onInit 方法中可以获取到 params 字符串
         * @en This function is triggered when the service is started. If the service is started with params, the params string can be obtained in the onInit method
         */
        onInit?: (params?: string) => void;
        /**
         * @zh 服务销毁时触发 `onDestroy` 生命周期函数
         * @en The `onDestroy` lifecycle function is triggered when the service is destroyed
         */
        onDestroy?: () => void;
    }

    /**
     * @zh AppService 实例
     * @en AppService instance
     */
    type Result = unknown;
}

/**
 * @zh 注册设备应用服务，指定当前服务的生命周期回调等。每个设备应用服务都必须调用 `AppService()` 构造函数且只能调用一次
 * @en Register a page in the Mini Program, specify the lifecycle callback for the current page, etc. Each page file must call the `Page()` constructor only once
 * @permissionCode device:os.bg_service
 * @version 3.0
 * @example
 * ```js title="appService.js"
 * AppService({
 *   state: {
 *     text: 'Hello Zepp OS'
 *   },
 *   onInit() {
 *     console.log('onInit')
 *   }
 * })
 * ```
 */
declare function AppService(option: AppService.Option): AppService.Result;

declare namespace getCurrentPage {
    /**
     * @zh page 实例
     * @en page instance
     * @output
     */
    interface Result {
        /**
         * @zh page 实例属性
         * @en page instance property
         */
        _options: Options;
    }

    interface Options {
        /**
         * @zh Page 构造函数上传入的其他属性
         * @en Other properties passed in on the Page constructor
         */
        [propName: string]: any;
        /**
         * @zh page 实例上的挂载的数据对象
         * @en mounted data objects on page instances
         */
        state?: object;
    }
}

/**
 * @zh 获取 page 实例对象
 * @en Get the page instance object
 * @example
 * ```js title="page.js"
 * Page({
 *   state: {
 *     text: 'Hello Zepp OS'
 *   },
 *   onInit() {
 *     console.log('onInit')
 *   },
 *   build() {
 *     console.log('build')
 *     console.log(this.state.text)
 *   }
 * })
 *
 * const page = getCurrentPage()
 * console.log(page._options.state.text)
 * ```
 */
declare function getCurrentPage(): getCurrentPage.Result;

/**
 * @zh 控制台打印日志
 * @en Console Print Log
 * @example
 * ```js
 * console.log('Hello Zepp OS')
 * ```
 */
declare interface console {
    /**
     * @zh 打印 log 等级的日志，可传入任意多个参数。每条日志打印长度有限，超出部分会被截断，如需打印完整内容，需要开发者将内容分多次打印
     * @en Print log level logs with any number of parameters. Each log is limited in length and will be truncated if it is exceeded. To print the full content, the developer needs to print the content in multiple times
     */
    log(...data: any[]): void;
}

declare namespace setTimeout {
    /**
     * @zh 定时器到期后执行的回调函数
     * @en Callback functions executed after the timer expires
     */
    type Callback = () => unknown;
    /**
     * @zh 函数延迟的毫秒数，默认 1ms
     * @en The number of milliseconds to delay the function, default 1ms
     */
    type Delay = number;
    /**
     * @zh 定时器的编号
     * @en Timer number
     */
    type TimeoutID = number;
}

/**
 * @zh 设置一个定时器，在定时器到期之后执行注册的回调函数
 * @en Set a timer and execute the registered callback function after the timer expires
 * @example
 * ```js
 * setTimeout(() => {
 *   console.log('Hello Zepp OS')
 * }, 1000)
 * ```
 */
declare function setTimeout(callback: setTimeout.Callback, delay?: setTimeout.Delay): setTimeout.TimeoutID;

declare namespace clearTimeout {
    /**
     * @zh 定时器的编号
     * @en Timer number
     */
    type TimeoutID = number;
}

/**
 * @zh 取消 `setTimeout` 注册的定时器
 * @en Cancel the timer registered by `setTimeout`
 * @example
 * ```js
 * const timeoutID = setTimeout(() => {
 *   console.log('Hello Zepp OS')
 * }, 1000)
 *
 * clearTimeout(timeoutID)
 * ```
 */
declare function clearTimeout(timeoutID: clearTimeout.TimeoutID): void;

declare namespace setInterval {
    /**
     * @zh 重复调用的回调函数
     * @en Repeatedly called callback functions
     */
    type Callback = () => unknown;
    /**
     * @zh 每次调用回调函数的时间间隔
     * @en Time interval between each callback function call
     */
    type Delay = number;
    /**
     * @zh 定时器的编号
     * @en Timer number
     */
    type IntervalID = number;
}

/**
 * @zh 重复调用一个函数，在每次调用之间具有固定的时间间隔
 * @en Repeatedly call a function with a fixed time interval between each call
 * @example
 * ```js
 * setInterval(() => {
 *   console.log('Hello Zepp OS')
 * }, 1000)
 * ```
 */
declare function setInterval(callback: setInterval.Callback, delay: setInterval.Delay): setInterval.IntervalID;

declare namespace clearInterval {
    /**
     * @zh 定时器的编号
     * @en Timer number
     */
    type IntervalID = number;
}

/**
 * @zh 取消 `setInterval` 注册的定时器
 * @en Cancel the timer registered by `setInterval`
 * @example
 * ```js
 * const intervalID = setInterval(() => {
 *   console.log('Hello Zepp OS')
 * }, 1000)
 *
 * clearInterval(intervalID)
 * ```
 */
declare function clearInterval(intervalID: clearInterval.IntervalID): void;
declare class Buffer extends Uint8Array {
  length: number
  write(string: string, offset?: number, length?: number, encoding?: string): number
  toString(encoding?: string, start?: number, end?: number): string
  toJSON(): { type: 'Buffer'; data: any[] }
  equals(otherBuffer: Buffer): boolean
  compare(
    otherBuffer: Uint8Array,
    targetStart?: number,
    targetEnd?: number,
    sourceStart?: number,
    sourceEnd?: number,
  ): number
  copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number
  slice(start?: number, end?: number): Buffer
  writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number
  writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number
  writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number
  writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number
  readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number
  readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number
  readIntLE(offset: number, byteLength: number, noAssert?: boolean): number
  readIntBE(offset: number, byteLength: number, noAssert?: boolean): number
  readUInt8(offset: number, noAssert?: boolean): number
  readUInt16LE(offset: number, noAssert?: boolean): number
  readUInt16BE(offset: number, noAssert?: boolean): number
  readUInt32LE(offset: number, noAssert?: boolean): number
  readUInt32BE(offset: number, noAssert?: boolean): number
  readBigUInt64LE(offset: number): BigInt
  readBigUInt64BE(offset: number): BigInt
  readInt8(offset: number, noAssert?: boolean): number
  readInt16LE(offset: number, noAssert?: boolean): number
  readInt16BE(offset: number, noAssert?: boolean): number
  readInt32LE(offset: number, noAssert?: boolean): number
  readInt32BE(offset: number, noAssert?: boolean): number
  readBigInt64LE(offset: number): BigInt
  readBigInt64BE(offset: number): BigInt
  readFloatLE(offset: number, noAssert?: boolean): number
  readFloatBE(offset: number, noAssert?: boolean): number
  readDoubleLE(offset: number, noAssert?: boolean): number
  readDoubleBE(offset: number, noAssert?: boolean): number
  reverse(): this
  swap16(): Buffer
  swap32(): Buffer
  swap64(): Buffer
  writeUInt8(value: number, offset: number, noAssert?: boolean): number
  writeUInt16LE(value: number, offset: number, noAssert?: boolean): number
  writeUInt16BE(value: number, offset: number, noAssert?: boolean): number
  writeUInt32LE(value: number, offset: number, noAssert?: boolean): number
  writeUInt32BE(value: number, offset: number, noAssert?: boolean): number
  writeBigUInt64LE(value: number, offset: number): BigInt
  writeBigUInt64BE(value: number, offset: number): BigInt
  writeInt8(value: number, offset: number, noAssert?: boolean): number
  writeInt16LE(value: number, offset: number, noAssert?: boolean): number
  writeInt16BE(value: number, offset: number, noAssert?: boolean): number
  writeInt32LE(value: number, offset: number, noAssert?: boolean): number
  writeInt32BE(value: number, offset: number, noAssert?: boolean): number
  writeBigInt64LE(value: number, offset: number): BigInt
  writeBigInt64BE(value: number, offset: number): BigInt
  writeFloatLE(value: number, offset: number, noAssert?: boolean): number
  writeFloatBE(value: number, offset: number, noAssert?: boolean): number
  writeDoubleLE(value: number, offset: number, noAssert?: boolean): number
  writeDoubleBE(value: number, offset: number, noAssert?: boolean): number
  fill(value: any, offset?: number, end?: number): this
  indexOf(value: string | number | Buffer, byteOffset?: number, encoding?: string): number
  lastIndexOf(value: string | number | Buffer, byteOffset?: number, encoding?: string): number
  includes(value: string | number | Buffer, byteOffset?: number, encoding?: string): boolean

  /**
   * Allocates a new buffer containing the given {str}.
   *
   * @param str String to store in buffer.
   * @param encoding encoding to use, optional.  Default is 'utf8'
   */
  constructor(str: string, encoding?: string)
  /**
   * Allocates a new buffer of {size} octets.
   *
   * @param size count of octets to allocate.
   */
  constructor(size: number)
  /**
   * Allocates a new buffer containing the given {array} of octets.
   *
   * @param array The octets to store.
   */
  constructor(array: Uint8Array)
  /**
   * Produces a Buffer backed by the same allocated memory as
   * the given {ArrayBuffer}.
   *
   *
   * @param arrayBuffer The ArrayBuffer with which to share memory.
   */
  constructor(arrayBuffer: ArrayBuffer)
  /**
   * Allocates a new buffer containing the given {array} of octets.
   *
   * @param array The octets to store.
   */
  constructor(array: any[])
  /**
   * Copies the passed {buffer} data onto a new {Buffer} instance.
   *
   * @param buffer The buffer to copy.
   */
  constructor(buffer: Buffer)
  prototype: Buffer
  /**
   * Allocates a new Buffer using an {array} of octets.
   *
   * @param array
   */
  static from(array: any[]): Buffer
  /**
   * When passed a reference to the .buffer property of a TypedArray instance,
   * the newly created Buffer will share the same allocated memory as the TypedArray.
   * The optional {byteOffset} and {length} arguments specify a memory range
   * within the {arrayBuffer} that will be shared by the Buffer.
   *
   * @param arrayBuffer The .buffer property of a TypedArray or a new ArrayBuffer()
   * @param byteOffset
   * @param length
   */
  static from(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): Buffer
  /**
   * Copies the passed {buffer} data onto a new Buffer instance.
   *
   * @param buffer
   */
  static from(buffer: Buffer | Uint8Array): Buffer
  /**
   * Creates a new Buffer containing the given JavaScript string {str}.
   * If provided, the {encoding} parameter identifies the character encoding.
   * If not provided, {encoding} defaults to 'utf8'.
   *
   * @param str
   */
  static from(str: string, encoding?: string): Buffer
  /**
   * Returns true if {obj} is a Buffer
   *
   * @param obj object to test.
   */
  static isBuffer(obj: any): obj is Buffer
  /**
   * Returns true if {encoding} is a valid encoding argument.
   * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
   *
   * @param encoding string to test.
   */
  static isEncoding(encoding: string): boolean
  /**
   * Gives the actual byte length of a string. encoding defaults to 'utf8'.
   * This is not the same as String.prototype.length since that returns the number of characters in a string.
   *
   * @param string string to test.
   * @param encoding encoding used to evaluate (defaults to 'utf8')
   */
  static byteLength(string: string, encoding?: string): number
  /**
   * Returns a buffer which is the result of concatenating all the buffers in the list together.
   *
   * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
   * If the list has exactly one item, then the first item of the list is returned.
   * If the list has more than one item, then a new Buffer is created.
   *
   * @param list An array of Buffer objects to concatenate
   * @param totalLength Total length of the buffers when concatenated.
   *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
   */
  static concat(list: Uint8Array[], totalLength?: number): Buffer
  /**
   * The same as buf1.compare(buf2).
   */
  static compare(buf1: Uint8Array, buf2: Uint8Array): number
  /**
   * Allocates a new buffer of {size} octets.
   *
   * @param size count of octets to allocate.
   * @param fill if specified, buffer will be initialized by calling buf.fill(fill).
   *    If parameter is omitted, buffer will be filled with zeros.
   * @param encoding encoding used for call to buf.fill while initializing
   */
  static alloc(size: number, fill?: string | Buffer | number, encoding?: string): Buffer
  /**
   * Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents
   * of the newly created Buffer are unknown and may contain sensitive data.
   *
   * @param size count of octets to allocate
   */
  static allocUnsafe(size: number): Buffer
  /**
   * Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents
   * of the newly created Buffer are unknown and may contain sensitive data.
   *
   * @param size count of octets to allocate
   */
  static allocUnsafeSlow(size: number): Buffer
}



