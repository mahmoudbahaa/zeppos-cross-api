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