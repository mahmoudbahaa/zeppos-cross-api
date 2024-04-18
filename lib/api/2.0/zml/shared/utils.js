export function isZeppOS() {
  return typeof hmApp !== 'undefined' || typeof __$$R$$__ !== 'undefined';
}

export function isPlainObject(item) {
  return (
    typeof item === 'object'
    && !Buffer.isBuffer(item)
    && !Array.isArray(item)
    && item !== null
  );
}
