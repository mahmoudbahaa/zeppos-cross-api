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

const {O_RDONLY} = hmFS;
const {O_WRONLY} = hmFS;
const {O_RDWR} = hmFS;
const {O_APPEND} = hmFS;
const {O_CREAT} = hmFS;
const {O_EXCL} = hmFS;
const {O_TRUNC} = hmFS;

const openSync = option => hmFS.open(option.path, option.flag || O_RDONLY);
const openAssetsSync = option => hmFS.open_asset(option.path, option.flag || O_RDONLY);
const statSync = option => {
	const [st, e] = hmFS.stat(option.path);
	return e === 0 ? st : undefined;
};

const statAssetsSync = option => {
	const [st, e] = hmFS.stat_asset(option.path);
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
const renameSync = option => hmFS.rename(option.oldPath, option.newPath);
const mkdirSync = option => typeof option === 'string' ? hmFS.mkdir(option) : hmFS.mkdir(option.path);
const readdirSync = option => {
	const [result, e] = hmFS.readdir(option.path);
	return e === 0 ? result : undefined;
};

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

export { O_APPEND, O_CREAT, O_EXCL, O_RDONLY, O_RDWR, O_TRUNC, O_WRONLY, closeSync, mkdirSync, openAssetsSync, openSync, readFileSync, readSync, readdirSync, renameSync, rmSync, statAssetsSync, statSync, writeFileSync, writeSync };
