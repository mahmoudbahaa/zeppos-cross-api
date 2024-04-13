/**
 * @param {Buffer | ArrayBuffer} binOrBuf
 * @returns {number}
 */
function len (binOrBuf) {
  return binOrBuf.byteLength
}

function allocOfBin (size = 0) {
  return Buffer.alloc(size).buffer
}

function allocOfBuf (size = 0) {
  return Buffer.alloc(size)
}

// ============= JSON =============
/**
 * @param {any} json
 * @returns {Buffer}
 */
function json2buf (json) {
  return str2buf(json2str(json))
}

/**
 * @param {any} json
 * @returns {ArrayBuffer}
 */
function json2bin (json) {
  return str2bin(json2str(json))
}

/**
 * @param {any} json
 * @returns {string}
 */
function json2str (json) {
  return JSON.stringify(json)
}

// ============= buf =============

/**
 * @param {Buffer} buf
 * @returns {any}
 */
function buf2json (buf, encoding = 'utf-8') {
  return str2json(buf2str(buf, encoding))
}

/**
 * @param {Buffer} buf
 * @returns {ArrayBuffer}
 */
function buf2bin (buf) {
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
}

/**
 * @param {Buffer} buf
 * @returns {string}
 */
function buf2str (buf, encoding = 'utf-8') {
  return buf.toString(encoding)
}

/**
 * @param {Buffer} buf
 * @returns {string}
 */
function buf2hex (buf) {
  return buf.toString('hex')
}

// ============= bin =============

/**
 * @param {ArrayBuffer} bin
 * @returns {Buffer}
 */
function bin2buf (bin) {
  return Buffer.from(bin)
}

/**
 * @param {ArrayBuffer} bin
 * @returns {string}
 */
function bin2str (bin, encoding = 'utf-8') {
  return buf2str(bin2buf(bin), encoding)
}

/**
 * @param {object} bin
 * @returns {string}
 */
function bin2hex (bin) {
  return buf2hex(bin2buf(bin))
}

/**
 * @param {any} bin
 */
function bin2json (bin, encoding = 'utf-8') {
  return buf2json(bin2buf(bin), encoding)
}

// ============= bin =============

/**
 * @param {string} str
 * @returns {any}
 */
function str2json (str) {
  return JSON.parse(str)
}

/**
 * @param {string} str
 * @returns {Buffer}
 */
function str2buf (str, encoding = 'utf-8') {
  return Buffer.from(str, encoding)
}

/**
 * @param {string} str
 * @returns {ArrayBuffer}
 */
function str2bin (str, encoding = 'utf-8') {
  return buf2bin(str2buf(str, encoding))
}

export { allocOfBin, allocOfBuf, bin2buf, bin2hex, bin2json, bin2str, buf2bin, buf2hex, buf2json, buf2str, json2bin, json2buf, json2str, len, str2bin, str2buf, str2json };
