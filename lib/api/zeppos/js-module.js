export function isDevice () {
  return typeof __ZEPPOS__ !== 'undefined' || typeof hmApp !== 'undefined'
}

export function isHmTimerDefined () {
  return typeof timer !== 'undefined'
}

export function isPlainObject (item) {
  return (
    typeof item === 'object' &&
    !Buffer.isBuffer(item) &&
    !Array.isArray(item) &&
    item !== null
  )
}
