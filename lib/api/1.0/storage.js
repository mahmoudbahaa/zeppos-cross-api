import * as FS from './fs';

export class SessionStorage {
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

export class LocalStorage {
	#directory = 'APP_LOCAL_STORAGE';

	constructor() {
		if (!FS.statSync({path: this.#directory})) {
			FS.mkdirSync({path: this.#directory});
		}
	}

	/**
   * @param {string} key
   * @param {any} value
   */
	setItem(key, value) {
		value = JSON.stringify(value);
		FS.writeFileSync({path: this.#directory + '/' + key, data: value, options: {encoding: 'utf8'}});
	}

	/**
   * @param {string} key
   */
	getItem(key, defaultValue = undefined) {
		if (FS.statSync({path: this.#directory + '/' + key})) {
			// @ts-ignore
			return JSON.parse(FS.readFileSync({path: this.#directory + '/' + key, options: {encoding: 'utf8'}}));
		}

		return defaultValue;
	}

	/**
   * @param {string} key
   */
	removeItem(key) {
		if (FS.statSync({path: this.#directory + '/' + key})) {
			FS.rmSync({path: this.#directory + '/' + key});
		}
	}

	clear() {
		if (FS.statSync({path: this.#directory})) {
			FS.rmSync({path: this.#directory});
		}
	}
}
