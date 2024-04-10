// #if API==1.0
/* global hmUI, hmApp */
export const GESTURE_UP = hmApp.gesture.UP
export const GESTURE_DOWN = hmApp.gesture.DOWN
export const GESTURE_LEFT = hmApp.gesture.LEFT
export const GESTURE_RIGHT = hmApp.gesture.RIGHT
export const KEY_BACK = hmApp.key.BACK
export const KEY_SELECT = hmApp.key.SELECT
export const KEY_HOME = hmApp.key.HOME
export const KEY_UP = hmApp.key.UP
export const KEY_DOWN = hmApp.key.DOWN
export const KEY_SHORTCUT = hmApp.key.SHORTCUT
export const KEY_EVENT_CLICK = hmApp.action.CLICK
export const KEY_EVENT_LONG_PRESS = hmApp.action.LONG_PRESS
export const KEY_EVENT_DOUBLE_CLICK = hmApp.action.DOUBLE_CLICK
export const KEY_EVENT_PRESS = hmApp.action.PRESS
export const KEY_EVENT_RELEASE = hmApp.action.RELEASE
export const MODAL_CONFIRM = 1
export const MODAL_CANCEL = 0
export const createModal = (option) => {
  return hmUI.createDialog({
    title: option.content,
    show: option.show || false,
    auto_hide: option.auto_hide || true,
    click_linster: option.onClick
  })
}
export const offDigitalCrown = () => hmApp.unregisterSpinEvent()
export const offGesture = () => hmApp.unregisterGestureEvent()
export const offKey = () => hmApp.unregisterKeyEvent()
export const onDigitalCrown = (callback) => {
  if (callback.callback) callback = callback.callback
  hmApp.registerSpinEvent(callback)
}
export const onGesture = (callback) => {
  if (callback.callback) callback = callback.callback
  hmApp.registerGestureEvent(callback)
}
export const onKey = (callback) => {
  if (callback.callback) callback = callback.callback
  return hmApp.registerKeyEvent(callback)
}
export const showToast = (option) => hmUI.showToast({ text: option.content })
// #endif
