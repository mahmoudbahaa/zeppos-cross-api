/**
 * @param {Buffer | ArrayBuffer} binOrBuf
 * @returns {number}
 */
export function len(binOrBuf) {
  return binOrBuf.byteLength;
}

export function allocOfBin(size = 0) {
  return Buffer.alloc(size).buffer;
}

export function allocOfBuf(size = 0) {
  return Buffer.alloc(size);
}

// ============= JSON =============
/**
 * @param {any} json
 * @returns {Buffer}
 */
export function json2buf(json) {
  return str2buf(json2str(json));
}

/**
 * @param {any} json
 * @returns {ArrayBuffer}
 */
export function json2bin(json) {
  return str2bin(json2str(json));
}

/**
 * @param {any} json
 * @returns {string}
 */
export function json2str(json) {
  return JSON.stringify(json);
}

// ============= buf =============

/**
 * @param {Buffer} buf
 * @returns {any}
 */
export function buf2json(buf, encoding = 'utf-8') {
  return str2json(buf2str(buf, encoding));
}

/**
 * @param {Buffer} buf
 * @returns {ArrayBuffer}
 */
export function buf2bin(buf) {
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

/**
 * @param {Buffer} buf
 * @returns {string}
 */
export function buf2str(buf, encoding = 'utf-8') {
  return buf.toString(encoding);
}

/**
 * @param {Buffer} buf
 * @returns {string}
 */
export function buf2hex(buf) {
  return buf.toString('hex');
}

// ============= bin =============

/**
 * @param {ArrayBuffer} bin
 * @returns {Buffer}
 */
export function bin2buf(bin) {
  return Buffer.from(bin);
}

/**
 * @param {ArrayBuffer} bin
 * @returns {string}
 */
export function bin2str(bin, encoding = 'utf-8') {
  return buf2str(bin2buf(bin), encoding);
}

/**
 * @param {object} bin
 * @returns {string}
 */
export function bin2hex(bin) {
  return buf2hex(bin2buf(bin));
}

/**
 * @param {any} bin
 */
export function bin2json(bin, encoding = 'utf-8') {
  return buf2json(bin2buf(bin), encoding);
}

// ============= bin =============

/**
 * @param {string} str
 * @returns {any}
 */
export function str2json(str) {
  return JSON.parse(str);
}

/**
 * @param {string} str
 * @returns {Buffer}
 */
export function str2buf(str, encoding = 'utf-8') {
  return Buffer.from(str, encoding);
}

/**
 * @param {string} str
 * @returns {ArrayBuffer}
 */
export function str2bin(str, encoding = 'utf-8') {
  return buf2bin(str2buf(str, encoding));
}
