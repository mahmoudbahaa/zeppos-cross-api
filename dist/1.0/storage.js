/**
 * @param {Buffer | ArrayBuffer} binOrBuf
 * @returns {number}
 */

/**
 * @param {Buffer} buf
 * @returns {string}
 */
function buf2str (buf, encoding = 'utf-8') {
  return buf.toString(encoding)
}

/**
 * @param {string} str
 * @returns {Buffer}
 */
function str2buf (str, encoding = 'utf-8') {
  return Buffer.from(str, encoding)
}

/* global hmFS */

hmFS;
hmFS;
hmFS;
hmFS;
hmFS;
hmFS;
hmFS;
const statSync = option => {
	const [st, e] = hmFS.stat(option.path);
	return e === 0 ? st : undefined;
};

const closeSync = option => typeof option === 'number' ? hmFS.close(option) : hmFS.close(option.fd);
const readSync = option => {
	option.options ||= {};
	if (!option.options.length) {
		option.options.length = option.buffer.byteLength;
	}

	if (!option.options.offset) {
		option.options.offset = 0;
	}

	if (option.options.position) {
		hmFS.seek(option.fd, option.options.position, hmFS.SEEK_SET);
	}

	return hmFS.read(option.fd, option.buffer, option.options.offset, option.options.length);
};

const writeSync = option => {
	option.options ||= {};
	if (!option.options.length) {
		option.options.length = option.buffer.byteLength;
	}

	if (!option.options.offset) {
		option.options.offset = 0;
	}

	if (option.options.position) {
		hmFS.seek(option.fd, option.options.position, hmFS.SEEK_SET);
	}

	return hmFS.write(option.fd, option.buffer, option.options.offset, option.options.length);
};

const rmSync = option => typeof option === 'string' ? hmFS.remove(option) : hmFS.remove(option.path);
const mkdirSync = option => typeof option === 'string' ? hmFS.mkdir(option) : hmFS.mkdir(option.path);

const readFileSync = option => {
	const st = statSync(option);
	if (st === undefined) {
		return undefined;
	}

	const buffer = new ArrayBuffer(st.size);
	const fd = hmFS.open(option.path, hmFS.O_RDONLY);
	readSync({fd, buffer});
	closeSync(fd);

	if (!option.options?.encoding) {
		return buffer;
	}

	return buf2str(buffer, option.options.encoding);
};

const writeFileSync = option => {
	const fd = typeof option.path === 'number'
		? option.path
		: hmFS.open(option.path, hmFS.O_WRONLY);

	const buffer = typeof option.data === 'string'
		? str2buf(option.data, option.options?.encoding)
		: (option.data instanceof ArrayBuffer
			? option.data
			: option.data.buffer);

	writeSync({fd, buffer});
	closeSync({fd});
};

class SessionStorage {
	#map = new Map();

	/**
   * @param {string} key
   * @param {any} value
   */
	setItem(key, value) {
		this.#map.set(key, value);
	}

	/**
   * @param {string} key
   * @param {any} defaultValue
   */
	getItem(key, defaultValue = undefined) {
		if (this.#map.has(key)) {
			return this.#map.get(key);
		}

		return defaultValue;
	}

	/**
   * @param {string} key
   */
	removeItem(key) {
		this.#map.delete(key);
	}

	clear() {
		this.#map.clear();
	}
}

class LocalStorage {
	#directory = 'APP_LOCAL_STORAGE';

	constructor() {
		if (!statSync({path: this.#directory})) {
			mkdirSync({path: this.#directory});
		}
	}

	/**
   * @param {string} key
   * @param {any} value
   */
	setItem(key, value) {
		value = JSON.stringify(value);
		writeFileSync({path: this.#directory + '/' + key, data: value, options: {encoding: 'utf8'}});
	}

	/**
   * @param {string} key
   */
	getItem(key, defaultValue = undefined) {
		if (statSync({path: this.#directory + '/' + key})) {
			// @ts-ignore
			return JSON.parse(readFileSync({path: this.#directory + '/' + key, options: {encoding: 'utf8'}}));
		}

		return defaultValue;
	}

	/**
   * @param {string} key
   */
	removeItem(key) {
		if (statSync({path: this.#directory + '/' + key})) {
			rmSync({path: this.#directory + '/' + key});
		}
	}

	clear() {
		if (statSync({path: this.#directory})) {
			rmSync({path: this.#directory});
		}
	}
}

export { LocalStorage, SessionStorage };
