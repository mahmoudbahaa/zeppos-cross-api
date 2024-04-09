// #if API==1.0 || API==2.0
import FS from './fs'
// #endif
// #if API!=1.0 && API!=2.0
import * as STORAGE from '@zos/storage'
export default STORAGE
// #endif
// #if API==2.0
// #put "import * as ORG_STORAGE from '@zos/storage'"
// #endif
// #if API==1.0
const _STORAGE = {}
// #endif
// #if API==2.0
// #put "const _STORAGE = { ...ORG_STORAGE }"
// #endif
// #if API==1.0
class SessionStorage {
  #map = new Map()

  /**
   * @param {string} key
   * @param {any} value
   */
  setItem (key, value) {
    this.#map.set(key, value)
  }

  /**
   * @param {string} key
   * @param {any} defaultValue
   */
  getItem (key, defaultValue = undefined) {
    if (this.#map.has(key)) {
      return this.#map.get(key)
    }

    return defaultValue
  }

  /**
   * @param {string} key
   */
  removeItem (key) {
    this.#map.delete(key)
  }

  clear () {
    this.#map.clear()
  }
}

_STORAGE.SessionStorage = SessionStorage
// #endif
// #if API==1.0 || API==2.0
class LocalStorage {
  #directory = 'APP_LOCAL_STORAGE'

  constructor () {
    if (!FS.statSync({ path: this.#directory })) {
      FS.mkdirSync({ path: this.#directory })
    }
  }

  /**
   * @param {string} key
   * @param {any} value
   */
  setItem (key, value) {
    value = JSON.stringify(value)
    FS.writeFileSync({ path: this.#directory + '/' + key, data: value, options: { encoding: 'utf8' } })
  }

  /**
   * @param {string} key
   */
  getItem (key, defaultValue = undefined) {
    if (FS.statSync({ path: this.#directory + '/' + key })) {
      // @ts-ignore
      return JSON.parse(FS.readFileSync({ path: this.#directory + '/' + key, options: { encoding: 'utf8' } }))
    } else {
      return defaultValue
    }
  }

  /**
   * @param {string} key
   */
  removeItem (key) {
    if (FS.statSync({ path: this.#directory + '/' + key })) {
      FS.rmSync({ path: this.#directory + '/' + key })
    }
  }

  clear () {
    if (FS.statSync({ path: this.#directory })) {
      FS.rmSync({ path: this.#directory })
    }
  }
}

_STORAGE.LocalStorage = LocalStorage
// #put "const STORAGE = _STORAGE"
// #put "export default STORAGE"
// #endif
