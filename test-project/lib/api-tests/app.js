import {
	SCENE_AOD, SCENE_APP, SCENE_SETTINGS, SCENE_WATCHFACE, emitCustomSystemEvent, getPackageInfo, getScene, queryPermission, requestPermission,
} from '../api/app';

export function testGetPackageInfo() {
  const pkgInfo = getPackageInfo();
  let result = '';
  let key;
  let separator = '';
  // eslint-disable-next-line guard-for-in
  for (key in pkgInfo) {
    result += separator + key + '=' + pkgInfo[key];
    separator = ',';
  }

  return result;
}

export function testGetScene() {
  switch (getScene()) {
    case SCENE_APP: return 'APP';
    case SCENE_AOD: return 'AOD';
    case SCENE_SETTINGS: return 'SETTINGS';
    case SCENE_WATCHFACE: return 'WATCHFACE';
    default: return 'UNKNOWN';
  }
}

/**
 *
 * @param {string[]} permissions
 * @returns {string}
 */
export function testQueryPermission(permissions) {
  if (!permissions) {
    permissions = ['data:os.device.info'];
  }

  let res = '';
  let separator = '';
  queryPermission({ permissions }).forEach((result, i) => {
    switch (result) {
      case 0:
        res += separator + '[' + permissions[i] + '] Not Granted';
        break;
      case 1:
        res += separator + '[' + permissions[i] + '] Unkonwn';
        break;
      case 2:
        res += separator + '[' + permissions[i] + '] Granted';
        break;
      default:
        res += separator + '[' + permissions[i] + '] Error unknown code returned';
        break;
    }

    separator = ',';
  });

  return res;
}

/**
 * @param {string[]} permissions
 * @param {(result: number[]) => void} func
 * @returns {string}
 */
export function testRequestPermission(permissions, func) {
  return requestPermission({ permissions, function: func }).toString();
}

export function testEmitCustomSystemEvent() {
  emitCustomSystemEvent({
    eventName: 'event:customize.test',
    eventParam: 'eventName=event:customize.test&type=0',
  });

  return 'Sent';
}
