import { getPackageInfo } from '@zos/app';
export * from '@zos/app';

const UNSUPPORTED = 'Unsupported opertaion in current API_LEVEL';

const validPermissions = [
	// Data:os
	'data:os.device.info',
	// Device:os
	'device:os.accelerometer',
	'device:os.alarm',
	'device:os.barometer',
	'device:os.bg_service',
	'device:os.compass',
	'device:os.geolocation',
	'device:os.gyroscope',
	'device:os.notification',
	// Data:user
	'data:user.info',
	// Data:user.hd
	'data:user.hd.spo2',
	'data:user.hd.calorie',
	'data:user.hd.distance',
	'data:user.hd.fat_burning',
	'data:user.hd.heart_rate',
	'data:user.hd.pai',
	'data:user.hd.sleep',
	'data:user.hd.stand',
	'data:user.hd.step',
	'data:user.hd.stress',
	'data:user.hd.workout',
];
const queryPermission = option => {
	const result = [];
	const {permissions} = getPackageInfo();
	if (!option.permissions) {
		return [];
	}

	option.permissions.forEach(permission => {
		if (permissions.indexOf(permission) > -1) {
			result.push(2);
		} else if (validPermissions.indexOf(permission) > -1) {
			result.push(0);
		} else {
			// Can stil be valid. list above can be non-complete
			// Better not to depend on 1 to be unknown
			result.push(1);
		}
	});

	return result;
};

const requestPermission = option =>
// QueryPermission(option).forEach((result) => {
//   if (result !== 2) return 1
// })

// return 2
	1;

const emitCustomSystemEvent = Option => {
	throw new Error(UNSUPPORTED);
};

export { emitCustomSystemEvent, queryPermission, requestPermission };
