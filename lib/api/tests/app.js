import APP from '../app'

export function testGetPackageInfo () {
  const pkgInfo = APP.getPackageInfo()
  let result = ''
  let key
  let separator = ''
  for (key in pkgInfo) {
    result += separator + key + '=' + pkgInfo[key]
    separator = ','
  }

  return result
}

export function testGetScene () {
  switch (APP.getScene()) {
    case APP.SCENE_APP: return 'APP'
    case APP.SCENE_AOD: return 'AOD'
    case APP.SCENE_SETTINGS: return 'SETTINGS'
    case APP.SCENE_WATCHFACE: return 'WATCHFACE'
  }
}

/**
 *
 * @param {string[]} permissions
 * @returns {string}
 */
export function testQueryPermission (permissions) {
  if (!permissions) permissions = ['data:os.device.info']
  let res = ''
  let separator = ''
  APP.queryPermission({ permissions }).forEach((result, i) => {
    switch (result) {
      case 0: res += separator + '[' + permissions[i] + '] Not Granted'; break
      case 1: res += separator + '[' + permissions[i] + '] Unkonwn'; break
      case 2: res += separator + '[' + permissions[i] + '] Granted'; break
    }

    separator = ','
  })

  return res
}

/**
 * @param {string[]} permissions
 * @param {(result: number[]) => void} func
 * @returns {string}
 */
export function testRequestPermission (permissions, func) {
  return APP.requestPermission({ permissions, function: func }).toString()
}

export function testEmitCustomSystemEvent () {
  APP.emitCustomSystemEvent({
    eventName: 'event:customize.test',
    eventParam: 'eventName=event:customize.test&type=0'
  })

  return 'Sent'
}
