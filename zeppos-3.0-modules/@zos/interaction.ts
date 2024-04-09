/**
  * @zh 交互
  * @en Interaction
  */


declare module '@zos/interaction' {

  /**
   * @zh 手势上滑
   * @en Gesture up slide
   */
  const GESTURE_UP: number;
  /**
   * @zh 手势下滑
   * @en Gesture down slide
   */
  const GESTURE_DOWN: number;
  /**
   * @zh 手势左滑
   * @en Gesture left slide
   */
  const GESTURE_LEFT: number;
  /**
   * @zh 手势右滑
   * @en Gesture right slide
   */
  const GESTURE_RIGHT: number;
  /**
   * @zh BACK 按键
   * @en BACK KEY
   */
  const KEY_BACK: number;
  /**
   * @zh SELECT 按键
   * @en SELECT KEY
   */
  const KEY_SELECT: number;
  /**
   * @zh HOME 按键
   * @en HOME KEY
   */
  const KEY_HOME: number;
  /**
   * @zh UP 按键
   * @en UP KEY
   */
  const KEY_UP: number;
  /**
   * @zh DOWN 按键
   * @en SHORTCUT KEY
   */
  const KEY_DOWN: number;
  /**
   * @zh SHORTCUT 按键
   * @en SHORTCUT KEY
   */
  const KEY_SHORTCUT: number;
  /**
   * @zh 按键点击事件
   * @en Key click event
   */
  const KEY_EVENT_CLICK: number;
  /**
   * @zh 按键长按事件
   * @en Key long-press event
   */
  const KEY_EVENT_LONG_PRESS: number;
  /**
   * @zh 按键双击事件
   * @en Key double-click event
   */
  const KEY_EVENT_DOUBLE_CLICK: number;
  /**
   * @zh 按键按下事件，只要是按下按键就会触发，如一次 CLICK 事件一共会触发三次事件 PRESS -> RELEASE -> CLICK
   * @en Key press event
   */
  const KEY_EVENT_PRESS: number;
  /**
   * @zh 按键释放事件
   * @en Key release event
   */
  const KEY_EVENT_RELEASE: number;
  /**
   * @zh Modal 确认按键
   * @en Modal Confirm button
   */
  const MODAL_CONFIRM: number;
  /**
   * @zh Modal 取消按键
   * @en Modal Cancel button
   */
  const MODAL_CANCEL: number;
  namespace showToast {
    interface Option {
      /**
       * @zh 提示的内容
       * @en Content of the prompt
       */
      content: string;
    }
  }

  /**
   * @zh 显示消息提示框
   * @en Display Message Prompt Box
   * @img https://img-cdn.huami.com/20220927/d53c5278ad075cdabc9bcf4e359d3d5c.jpg
   * @example
   * ```js
   * import { showToast } from '@zos/interaction'
   *
   * showToast({
   *   content: 'hello world'
   * })
   * ```
   */
  function showToast(option: showToast.Option): void;
  namespace createModal {
    interface Option {
      /**
       * @zh Modal 对话框的内容
       * @en Content of Modal
       */
      content: string;
      /**
       * @zh 完成创建后是否立即显示 Modal 对话框
       * @en Whether to display Modal immediately after the creation is completed
       * @defaultValue false
       */
      show?: boolean;
      /**
       * @zh 点击确认或者取消的回调函数
       * @en Whether to display Modal immediately
       */
      onClick?: (keyName: ModalKey) => void;
      /**
       * @zh 点击确认或者取消按钮后，是否自动关闭 Modal 对话框
       * @en Whether to automatically close the Modal dialog after clicking the Confirm or Cancel button
       * @defaultValue true
       */
      autoHide?: boolean;
    }

    /**
     * @zh Modal 按键名，值参考 Modal 按键名常量
     * @en Modal key name, value reference Modal key name constants
     */
    type ModalKey = number;

    /**
     * @output
     */
    interface Modal {
      /**
       * @zh 显示或隐藏 Modal 对话框
       * @en Show or hide Modal
       */
      show: (isShow: boolean) => void;
    }
  }

  /**
   * @zh 创建 Modal 确认提示框
   * @en Create Modal prompt box
   * @constants modalKey
   * @img https://img-cdn.huami.com/20220927/9a9ce61a400f089c984951ca71c6f9b0.jpg
   * @example
   * ```js
   * import { createModal, MODAL_CONFIRM } from '@zos/interaction'
   *
   * const dialog = createModal({
   *   content: 'hello world',
   *   autoHide: false,
   *   onClick: (keyName) => {
   *     if (keyName === MODAL_CONFIRM) {
   *       console.log('confirm')
   *     } else {
   *       dialog.show(false)
   *     }
   *   }
   * })
   *
   * dialog.show(true)
   * ```
   */
  function createModal(option: createModal.Option): createModal.Modal;
  namespace onGesture {
    interface Option {
      /**
       * @zh 手势事件回调函数
       * @en Gesture event callback function
       */
      callback: (event: GestureEvent) => PreventDefault;
    }

    /**
     * @zh 手势事件名，值参考手势事件常量
     * @en Gesture event name, value reference gesture event constants
     */
    type GestureEvent = number;

    /**
     * @zh 是否跳过默认手势行为，`true` - 跳过，`false` - 不跳过
     * @en Whether to skip the default gesture behavior, `true` - skip, `false` - don't skip
     */
    type PreventDefault = boolean;
  }

  /**
   * @zh 监听用户手势事件，只允许注册一个事件，如果多次注册会导致上一次注册的事件失效
   * @en Listen to user gesture events, only one event is allowed to be registered, if multiple registrations will cause the last registered event to fail
   * @constants gestureEvent
   * @example
   * ```js
   * import { onGesture, GESTURE_UP } from '@zos/interaction'
   *
   * onGesture({
   *   callback: (event) => {
   *     if (event === GESTURE_UP) {
   *       console.log('up')
   *     }
   *     return true
   *   }
   * })
   * ```
   */
  function onGesture(option: onGesture.Option): void;
  function onGesture(callback: (event: onGesture.GestureEvent) => onGesture.PreventDefault): void;
  /**
   * @zh 取消 `onGesture` 注册的监听用户手势事件
   * @en Cancel the `onGesture` registration to listen for user gesture events
   * @example
   * ```js
   * import { onGesture, offGesture, GESTURE_UP } from '@zos/interaction'
   *
   * const gestureCallback = (event) => {
   *   if (event === GESTURE_UP) {
   *     console.log('up')
   *   }
   *
   *   return true
   * }
   *
   * onGesture({
   *   callback: gestureCallback
   * })
   *
   * offGesture()
   * ```
   */
  function offGesture(): void;
  namespace onKey {
    interface Option {
      /**
       * @zh 按键事件回调函数
       * @en Key event callback function
       */
      callback: (key: Key, event: KeyEvent) => PreventDefault;
    }

    /**
     * @zh 按键名，值参考按键名常量
     * @en Key name, value reference key name constants
     */
    type Key = number;

    /**
     * @zh 按键事件名，值参考按键事件常量
     * @en Key event name, value reference key event constants
     */
    type KeyEvent = number;

    /**
     * @zh 是否跳过默认按键行为，`true` - 跳过，`false` - 不跳过
     * @en Whether to skip the default key behavior, `true` - skip, `false` - don't skip
     */
    type PreventDefault = boolean;
  }

  /**
   * @zh 监听按键事件，只允许注册一个事件，如果多次注册会导致上一次注册的事件失效
   * @en Listen to key events, only one event is allowed to be registered, if multiple registrations will cause the last registered event to fail
   * @constants key
   * @example
   * ```js
   * import { onKey, KEY_UP, KEY_EVENT_CLICK } from '@zos/interaction'
   *
   * onKey({
   *   callback: (key, keyEvent) => {
   *     if (key === KEY_UP && keyEvent === KEY_EVENT_CLICK) {
   *       console.log('up click')
   *     }
   *     return true
   *   }
   * })
   * ```
   */
  function onKey(option: onKey.Option): void;
  function onKey(callback: (key: onKey.Key, event: onKey.KeyEvent) => onKey.PreventDefault): void;
  /**
   * @zh 取消 `onKey` 注册的监听按键事件
   * @en Cancel the keystroke event registered by `onKey`.
   * @example
   * ```js
   * import { onKey, offKey, KEY_UP, KEY_EVENT_CLICK } from '@zos/interaction'
   *
   * const keyCallback = (key, keyEvent) => {
   *   if (key === KEY_UP && keyEvent === KEY_EVENT_CLICK) {
   *     console.log('up click')
   *   }
   *   return true
   * }
   *
   * onKey({
   *   callback: keyCallback
   * })
   *
   * offKey()
   * ```
   */
  function offKey(): void;
  namespace onDigitalCrown {
    interface Option {
      /**
       * @zh 数字表冠旋转事件回调函数
       * @en Digital crown rotation event callback function
       */
      callback: (key: Key, degree: Degree) => void;
    }

    /**
     * @zh 按键名，值参考按键名常量，目前仅支持 `KEY_HOME`
     * @en Key name, value reference key name constants, currently only `KEY_HOME` is supported
     */
    type Key = number;

    /**
     * @zh 旋转角度，正数为逆时针旋转，负数为顺时针旋转。数值为转过的角度，旋转速度越快，绝对值越大
     * @en The rotation angle, positive number is counterclockwise rotation, negative number is clockwise rotation. The value is the angle of rotation, the faster the rotation speed, the larger the absolute value
     */
    type Degree = number;
  }

  /**
   * @zh 监听数字表冠旋转事件，只允许注册一个事件，如果多次注册会导致上一次注册的事件失效
   * @en Listen to the digital crown rotation event, only one event is allowed to be registered, if multiple registrations will cause the last registered event to fail
   * @constants key
   * @example
   * ```js
   * import { onDigitalCrown, KEY_HOME } from '@zos/interaction'
   *
   * onDigitalCrown({
   *   callback: (key, degree) => {
   *     if (key === KEY_HOME) {
   *       console.log(degree)
   *     }
   *   }
   * })
   * ```
   */
  function onDigitalCrown(option: onDigitalCrown.Option): void;
  function onDigitalCrown(
    callback: (key: onDigitalCrown.Key, degree: onDigitalCrown.Degree) => void
  ): void;
  /**
   * @zh 取消 `onDigitalCrown` 注册的监听数字表冠旋转事件
   * @en Cancel the `onDigitalCrown` registration to listen for digital crown rotation events
   * @example
   * ```js
   * import { onDigitalCrown, offDigitalCrown, KEY_HOME } from '@zos/interaction'
   *
   * const callback = (key, degree) => {
   *   if (key === KEY_HOME) {
   *     console.log(degree)
   *   }
   * }
   *
   * onDigitalCrown({
   *   callback
   * })
   *
   * offDigitalCrown()
   * ```
   */
  function offDigitalCrown(): void;
}
