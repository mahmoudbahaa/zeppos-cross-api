import { getPackageInfo } from './app.js';
import { U as UNSUPPORTED } from './_constants-DnfQ3JJx.js';

/* global hmApp */
const currentAlarms = [];
const REPEAT_ONCE = 0;
const REPEAT_MINUTE = 1;
const REPEAT_HOUR = 2;
const REPEAT_DAY = 3;
const REPEAT_WEEK = 4;
const REPEAT_MONTH = 5;
const WEEK_MON = 0;
const WEEK_TUE = 1;
const WEEK_WED = 2;
const WEEK_THU = 3;
const WEEK_FRI = 4;
const WEEK_SAT = 5;
const WEEK_SUN = 6;
const getAllAlarms = () => currentAlarms;
const set = option => {
	if (option.repeat_type) {
		throw new Error(UNSUPPORTED);
	}

	option.appid = option.appid || getPackageInfo().appId;
	if (option.time) {
		option.delay = undefined;
	}

	const alarm = hmApp.alarmNew({
		appId: option.appid,
		url: option.file,
		date: option.time,
		delay: option.delay,
	});
	currentAlarms.push(alarm);
	return alarm;
};

const cancel = alarmId => {
	const i = currentAlarms.indexOf(alarmId);
	if (i > -1) {
		currentAlarms.splice(i, 1);
	}

	return hmApp.alarmCancel(alarmId);
};

export { REPEAT_DAY, REPEAT_HOUR, REPEAT_MINUTE, REPEAT_MONTH, REPEAT_ONCE, REPEAT_WEEK, WEEK_FRI, WEEK_MON, WEEK_SAT, WEEK_SUN, WEEK_THU, WEEK_TUE, WEEK_WED, cancel, getAllAlarms, set };
