export function isZeppOS() {
  return typeof __ZEPPOS__ !== 'undefined';
}

export function isPlainObject(item) {
  return (
    typeof item === 'object'
    && !Buffer.isBuffer(item)
    && !Array.isArray(item)
    && item !== null
  );
}
