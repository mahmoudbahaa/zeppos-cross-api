/* global hmUI, hmApp */
const GESTURE_UP = hmApp.gesture.UP;
const GESTURE_DOWN = hmApp.gesture.DOWN;
const GESTURE_LEFT = hmApp.gesture.LEFT;
const GESTURE_RIGHT = hmApp.gesture.RIGHT;
const KEY_BACK = hmApp.key.BACK;
const KEY_SELECT = hmApp.key.SELECT;
const KEY_HOME = hmApp.key.HOME;
const KEY_UP = hmApp.key.UP;
const KEY_DOWN = hmApp.key.DOWN;
const KEY_SHORTCUT = hmApp.key.SHORTCUT;
const KEY_EVENT_CLICK = hmApp.action.CLICK;
const KEY_EVENT_LONG_PRESS = hmApp.action.LONG_PRESS;
const KEY_EVENT_DOUBLE_CLICK = hmApp.action.DOUBLE_CLICK;
const KEY_EVENT_PRESS = hmApp.action.PRESS;
const KEY_EVENT_RELEASE = hmApp.action.RELEASE;
const MODAL_CONFIRM = 1;
const MODAL_CANCEL = 0;
const createModal = (option) => {
  return hmUI.createDialog({
    title: option.content,
    show: option.show || false,
    auto_hide: option.auto_hide || true,
    click_linster: option.onClick
  })
};
const offDigitalCrown = () => hmApp.unregisterSpinEvent();
const offGesture = () => hmApp.unregisterGestureEvent();
const offKey = () => hmApp.unregisterKeyEvent();
const onDigitalCrown = (callback) => {
  if (callback.callback) callback = callback.callback;
  hmApp.registerSpinEvent(callback);
};
const onGesture = (callback) => {
  if (callback.callback) callback = callback.callback;
  hmApp.registerGestureEvent(callback);
};
const onKey = (callback) => {
  if (callback.callback) callback = callback.callback;
  return hmApp.registerKeyEvent(callback)
};
const showToast = (option) => hmUI.showToast({ text: option.content });

export { GESTURE_DOWN, GESTURE_LEFT, GESTURE_RIGHT, GESTURE_UP, KEY_BACK, KEY_DOWN, KEY_EVENT_CLICK, KEY_EVENT_DOUBLE_CLICK, KEY_EVENT_LONG_PRESS, KEY_EVENT_PRESS, KEY_EVENT_RELEASE, KEY_HOME, KEY_SELECT, KEY_SHORTCUT, KEY_UP, MODAL_CANCEL, MODAL_CONFIRM, createModal, offDigitalCrown, offGesture, offKey, onDigitalCrown, onGesture, onKey, showToast };
