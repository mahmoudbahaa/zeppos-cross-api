function isDevice () {
  return typeof __ZEPPOS__ !== 'undefined' || typeof hmApp !== 'undefined'
}

function isHmTimerDefined () {
  return typeof timer !== 'undefined'
}

export { isDevice as a, isHmTimerDefined as i };
