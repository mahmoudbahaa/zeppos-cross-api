export function isZeppOS() {
  return typeof hmApp !== 'undefined';
}

export function isPlainObject(item) {
  return (
    typeof item === 'object'
    && !Buffer.isBuffer(item)
    && !Array.isArray(item)
    && item !== null
  );
}

export function isHmTimerDefined() {
  return typeof timer !== 'undefined';
}

export function notSupported(api) {
  throw new Error(api + ' is only avalaible in API_LEVEL 3.0+');
}
