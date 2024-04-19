import { _px } from './_pxExporter';
/* global DeviceRuntimeCore */
export { EventBus } from './zml/common/event';

export const px = _px;
// @ts-ignore
export const log = DeviceRuntimeCore.HmLogger;
export const assets = (/** @type {string} */ basePath) => (/** @type {string} */ path, /** @type {boolean} */ isRtl = false) => {
  if (!isRtl) {
    return basePath + '/' + path;
  }

  const i = path.lastIndexOf('.');
  if (i < 0) {
    return basePath + '/' + path + '@rtl';
  }

  return basePath + '/' + path.substring(0, i) + '@rtl' + path.substring(i);
};
