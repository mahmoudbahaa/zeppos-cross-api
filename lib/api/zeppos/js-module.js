export function isDevice () {
  return typeof __ZEPPOS__ !== 'undefined' || typeof hmApp !== 'undefined'
}

export function isHmTimerDefined () {
  return typeof timer !== 'undefined'
}
