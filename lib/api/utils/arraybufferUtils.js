/**
 * @param {string} str
 * @param {string} encoding
 * @returns {ArrayBuffer}
 */
export function stringToArrayBuffer (str, encoding) {
  if (!encoding) encoding = 'utf8'
  return Buffer.from(str, encoding).buffer
}

/**
 * @param {ArrayBuffer} buffer
 * @param {string} encoding
 * @returns {string}
 */
export function arrayBufferToString (buffer, encoding) {
  if (!encoding) encoding = 'utf8'
  return Buffer.from(buffer).toString(encoding)
}
