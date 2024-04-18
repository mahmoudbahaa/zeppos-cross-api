import { M as MessageBuilder, w as wrapperMessage } from './message-DvV8XCTS.js';
import { g as getFileTransfer } from './file-transfer-btNVMsMj.js';
import './data.js';

function loggerPlugin() {
  return {
    onInit() {
      this.logger = Logger.getLogger(sideService.appInfo.app.appName);
      this.logger.scope = sideService.appInfo.app.appName;
      this.logger.name = 'side-service';
      this.log = (...args) => {
        this.logger.log(...args);
      };

      this.error = (...args) => {
        if (args[0] instanceof Error) {
          this.logger.error(...args);
        } else {
          this.logger.error({}, ...args);
        }
      };

      this.debug = (...args) => {
        this.logger.debug(...args);
      };
    },
  };
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
  };
}

/* global Logger */

const messageBuilder = new MessageBuilder({ logger: Logger.getLogger('side-message') });

const messaging = wrapperMessage(messageBuilder, Logger.getLogger('message-builder-device'));

function addBaseURL(opts) {
  const params = {
    timeout: 10000,
    ...opts,
  };

  if (params.baseURL) {
    params.url = new URL(params.url, params.baseURL).toString();
  }

  return params;
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
      return this.messaging.request(data, opts);
    },
    call(data) {
      return this.messaging.call(data);
    },
    __onRequest(req, res) {
      if (req.method === 'http.request') {
        return this.httpRequestHandler(req, res);
      }

      return this._onRequest(req, res);
    },
    fetch(opt) {
      return fetch(addBaseURL(opt));
    },
    httpRequestHandler(req, res) {
      return this.fetch(req.params)
        .then(result => {
          res(null, {
            status: result.status,
            statusText: result.statusText,
            headers: result.headers,
            body: result.body,
          });
        })
        .catch(e => res({
          code: 1,
          message: e.message,
        }));
    },
  };
}

const fileTransferLib = getFileTransfer(transferFile);

function fileTransferPlugin() {
  return {
    onInit() {
      this._onReceivedFile = this.onReceivedFile?.bind(this);
      fileTransferLib.onSideServiceFileFinished(this._onReceivedFile);

      if (typeof sideService !== 'undefined') {
        if (sideService.launchReasons.fileTransfer) {
          fileTransferLib.emitFile();
        }
      }
    },
    onDestroy() {
      if (this._onReceivedFile) {
        fileTransferLib.offFile(this._onReceivedFile);
      }
    },
    sendFile(path, opts) {
      return fileTransferLib.sendFile(path, opts)
    },
  }
}

function downloadPlugin(opt) {
  opt.download = function (url, opts) {
    const task = network.downloader.downloadFile({
      url,
      ...opts,
    });

    return task
  };
}

const convertLib = {
  convert(opts) {
    return image.convert(opts)
  },
};

function convertPlugin(opt) {
  opt.convert = function (opts) {
    return convertLib.convert(opts)
  };
}

/**
   * @type {{ onInit?: (opts:any) => void, onRun?: (opts:any) => void, onDestroy?: (opts:any) => void;}[]}
   */
const plugins = [loggerPlugin(), settingsPlugin(), messagingPlugin(), fileTransferPlugin()];
const transfomers = [downloadPlugin, convertPlugin];

function BaseSideService(option) {
  const opts = {};
  transfomers.forEach(transfomer => transfomer(opts));
  plugins.forEach(plugin => Object.assign(opts, plugin));

  return {
    ...option,
    ...opts,
    onInit(opts) {
      plugins.forEach(plugin => plugin.onInit?.apply(this, opts));
      option.onInit?.apply(this, opts);
    },
    onRun(opts) {
      plugins.forEach(plugin => plugin.onRun?.apply(this, opts));
      option.onRun?.apply(this, opts);
    },
    onDestroy(opts) {
      option.onDestroy?.apply(this, opts);
      plugins.reverse().forEach(plugin => plugin.onDestroy?.apply(this, opts));
    },
  };
}

export { BaseSideService, convertLib, settingsLib };
