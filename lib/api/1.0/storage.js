import * as FS from './fs';

export class SessionStorage {
  constructor() {
    this._map = new Map();
  }

  /**
   * @param {string} key
   * @param {any} value
   */
  setItem(key, value) {
    this._map.set(key, value);
  }

  /**
   * @param {string} key
   * @param {any} defaultValue
   */
  getItem(key, defaultValue = undefined) {
    if (this._map.has(key)) {
      return this._map.get(key);
    }

    return defaultValue;
  }

  /**
   * @param {string} key
   */
  removeItem(key) {
    this._map.delete(key);
  }

  clear() {
    this._map.clear();
  }
}

export class LocalStorage {
  constructor() {
    this._directory = 'APP_LOCAL_STORAGE';
    if (!FS.statSync({ path: this._directory })) {
      FS.mkdirSync({ path: this._directory });
    }
  }

  /**
   * @param {string} key
   * @param {any} value
   */
  setItem(key, value) {
    value = JSON.stringify(value);
    FS.writeFileSync({ path: this._directory + '/' + key, data: value, options: { encoding: 'utf8' } });
  }

  /**
   * @param {string} key
   */
  getItem(key, defaultValue = undefined) {
    if (FS.statSync({ path: this._directory + '/' + key })) {
      // @ts-ignore
      return JSON.parse(FS.readFileSync({ path: this._directory + '/' + key, options: { encoding: 'utf8' } }));
    }

    return defaultValue;
  }

  /**
   * @param {string} key
   */
  removeItem(key) {
    if (FS.statSync({ path: this._directory + '/' + key })) {
      FS.rmSync({ path: this._directory + '/' + key });
    }
  }

  clear() {
    if (FS.statSync({ path: this._directory })) {
      FS.rmSync({ path: this._directory });
    }
  }
}
