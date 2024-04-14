import { MessageBuilder } from './message-side.js';
import { w as wrapperMessage } from './message-CpHewxrX.js';
import './data.js';
import './defer-CYuMoFqG.js';
import './event-DwQ3RP1v.js';
import './js-module-BLu70XRo.js';

/* global Logger */

const messageBuilder = new MessageBuilder();
const messaging = wrapperMessage(messageBuilder, Logger.getLogger('message-builder-side'));

function addBaseURL(opts) {
  const params = {
    timeout: 10000,
    ...opts,
  };

  if (params.baseURL) {
    params.url = new URL(params.url, params.baseURL).toString();
  }

  return params
}

function messagingPlugin() {
  return {
    onInit() {
      this.messaging = messaging;
      this._onCall = this.onCall?.bind(this);
      this._onRequest = this.onRequest?.bind(this);
      this.messaging.onCall(this._onCall).onRequest(this.__onRequest.bind(this));

      this.messaging.start();
    },
    onDestroy() {
      if (this._onCall) {
        this.messaging.offOnCall(this._onCall);
      }

      if (this._onRequest) {
        this.messaging.offOnRequest(this._onRequest);
      }

      this.messaging.stop();
    },
    request(data, opts = {}) {
      return this.messaging.request(data, opts)
    },
    call(data) {
      return this.messaging.call(data)
    },
    __onRequest(req, res) {
      if (req.method === 'http.request') {
        return this.httpRequestHandler(req, res)
      } else if (req.method === 'download.transfer') {
        return this.downloadTransferHandler(req, res)
      } else {
        return this._onRequest(req, res)
      }
    },
    fetch(opt) {
      return fetch(addBaseURL(opt))
    },
    httpRequestHandler(req, res) {
      return this.fetch(req.params)
        .then((result) => {
          res(null, {
            status: result.status,
            statusText: result.statusText,
            headers: result.headers,
            body: result.body,
          });
        })
        .catch((e) => {
          return res({
            code: 1,
            message: e.message,
          })
        })
    },
    async downloadTransferHandler(req, res) {
      const CHUNK_SIZE = 4096;
      const index = req.params.url.lastIndexOf('/');
      const fileName = req.params.url.substring(index + 1);
      try {
        const result = await this.fetch(req.params.url);
        const arrayBuffer = await result.arrayBuffer();
        for (let i = 0; i < arrayBuffer.byteLength; i += 4096) {
          this.call({ method: 'chunk.received', buffer: arrayBuffer.slice(i, i + CHUNK_SIZE), fileName });
        }

        return res({
          code: 0,
          message: 'success',
        })
      } catch (e) {
        return res({
          code: 1,
          message: e.message,
        })
      }
    },
  }
}

const settingsLib = {
  onChange(cb) {
    if (!cb) return this
    settings.settingsStorage.addListener('change', cb);
    return this
  },
  offChange() {
    settings.settingsStorage.removeListener('change');
    return this
  },
  getItem(i) {
    return settings.settingsStorage.getItem(i)
  },
  setItem(i, value) {
    return settings.settingsStorage.setItem(i, value)
  },
  clear() {
    return settings.settingsStorage.clear()
  },
  removeItem(i) {
    settings.settingsStorage.removeItem(i);
  },
  getAll() {
    return settings.settingsStorage.toObject()
  },
};

function settingsPlugin() {
  return {
    onInit() {
      this.settings = settingsLib;
      this._onSettingsChange = this.onSettingsChange?.bind(this);
      settingsLib.onChange(this._onSettingsChange);

      if (typeof sideService !== 'undefined') {
        if (sideService.launchReasons.settingsChanged) {
          this._onSettingsChange(sideService.launchArgs);
        }
      }
    },
    onDestroy() {
      if (this._onSettingsChange) {
        settingsLib.offChange(this._onSettingsChange);
      }
    },
  }
}

function BaseSideService(option) {
  const settingsPlug = settingsPlugin();
  const messagingPlug = messagingPlugin();
  return {
    ...option,
    ...settingsPlug,
    ...messagingPlug,
    sendFile(path, opts) { throw new Error("File Transfer need API_LEVEL 3.0") },
    download(url, opts) { throw new Error("Download need API_LEVEL 3.0")},
    conver(opts) { throw new Error("Image Convert need API_LEVEL 3.0") },
    onInit(opts) {
      settingsPlug.onInit.apply(this);
      messagingPlug.onInit.apply(this);
      option.onInit?.apply(this, opts);
    },
    onDestroy(opts) {
      option.onDestroy?.apply(this, opts);
      messagingPlug.onDestroy.apply(this);
      settingsPlug.onDestroy.apply(this);
    },
  }
}

export { BaseSideService, settingsLib };
