export { E as EventBus } from './event-DwQ3RP1v.js';

const _px = px;

const px$1 = _px;
// @ts-ignore
const log = DeviceRuntimeCore.HmLogger;
const assets = (/** @type {string} */ basePath) => (/** @type {string} */ path, /** @type {boolean} */ isRtl = false) => {
	if (!isRtl) {
		return basePath + '/' + path;
	}

	const i = path.lastIndexOf('.');
	if (i < 0) {
		return basePath + '/' + path + '@rtl';
	}

	return basePath + '/' + path.substring(0, i) + '@rtl' + path.substring(i);
};

export { assets, log, px$1 as px };
