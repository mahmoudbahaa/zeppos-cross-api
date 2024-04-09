// #if API==1.0
/* global hmUI, hmApp */
// #endif
// #if API!=1.0
import * as INTERACTION from '@zos/interaction'
export default INTERACTION
// #endif
// #if API==1.0
const _INTERACTION = {}
_INTERACTION.GESTURE_UP = hmApp.gesture.UP
_INTERACTION.GESTURE_DOWN = hmApp.gesture.DOWN
_INTERACTION.GESTURE_LEFT = hmApp.gesture.LEFT
_INTERACTION.GESTURE_RIGHT = hmApp.gesture.RIGHT
_INTERACTION.KEY_BACK = hmApp.key.BACK
_INTERACTION.KEY_SELECT = hmApp.key.SELECT
_INTERACTION.KEY_HOME = hmApp.key.HOME
_INTERACTION.KEY_UP = hmApp.key.UP
_INTERACTION.KEY_DOWN = hmApp.key.DOWN
_INTERACTION.KEY_SHORTCUT = hmApp.key.SHORTCUT
_INTERACTION.KEY_EVENT_CLICK = hmApp.action.CLICK
_INTERACTION.KEY_EVENT_LONG_PRESS = hmApp.action.LONG_PRESS
_INTERACTION.KEY_EVENT_DOUBLE_CLICK = hmApp.action.DOUBLE_CLICK
_INTERACTION.KEY_EVENT_PRESS = hmApp.action.PRESS
_INTERACTION.KEY_EVENT_RELEASE = hmApp.action.RELEASE
_INTERACTION.MODAL_CONFIRM = 1
_INTERACTION.MODAL_CANCEL = 0
_INTERACTION.createModal = (option) => { return hmUI.createDialog({ title: option.content, show: option.show || false, auto_hide: option.auto_hide || true, click_linster: option.onClick }) }
_INTERACTION.offDigitalCrown = () => hmApp.unregisterSpinEvent()
_INTERACTION.offGesture = () => hmApp.unregisterGestureEvent()
_INTERACTION.offKey = () => hmApp.unregisterKeyEvent()
_INTERACTION.onDigitalCrown = (callback) => {
  if (callback.callback) callback = callback.callback
  hmApp.registerSpinEvent(callback)
}
_INTERACTION.onGesture = (callback) => {
  if (callback.callback) callback = callback.callback
  hmApp.registerGestureEvent(callback)
}
_INTERACTION.onKey = (callback) => {
  if (callback.callback) callback = callback.callback
  return hmApp.registerKeyEvent(callback)
}
_INTERACTION.showToast = (option) => { return hmUI.showToast({ text: option.content }) }
// #put "const INTERACTION = _INTERACTION"
// #put "export default INTERACTION"
// #endif
