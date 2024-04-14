import { statSync, mkdirSync, writeFileSync, readFileSync, rmSync } from './fs.js';
import './data.js';

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
