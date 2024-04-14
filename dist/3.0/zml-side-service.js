import { g as getFileTransfer } from './file-transfer-knPiEayp.js';
import { MessageBuilder } from './message-side.js';
import { w as wrapperMessage } from './message-Bs_ux96Y.js';
import './data.js';
import './defer-CYuMoFqG.js';
import './js-module-CctPB5ss.js';

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

function downloadPlugin(opt) {
  opt.download = function (url, opts) {
    const task = network.downloader.downloadFile({
      url,
      ...opts,
    });

    return task
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

/* global Logger */

const messageBuilder = new MessageBuilder();

// @ts-ignore
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
        return this.downloadAndTransfer(req, res)
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
    downloadAndTransfer(req, res) {
      // @ts-ignore
      const downloadTask = network.downloader.downloadFile({
        ...req.params,
      });

      

      downloadTask.onSuccess = (event) => {
        if (event.statusCode !== 200) {
          return res({
            code: 1,
            message: 'download failed',
          })
        }
    
          res(null, event.filePath || event.tempFilePath);
      };
    
      downloadTask.onFail = (event) => {
        return res({
          code: 1,
          message: event.message,
        })
      };
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
  const fileTransferPlug = fileTransferPlugin();
  downloadPlugin(option);
  convertPlugin(option);
  return {
    ...option,
    ...settingsPlug,
    ...messagingPlug,
    ...fileTransferPlug,
    onInit(opts) {
      settingsPlug.onInit.apply(this);
      messagingPlug.onInit.apply(this);
      fileTransferPlug.onInit.apply(this);
      option.onInit?.apply(this, opts);
    },
    onDestroy(opts) {
      option.onDestroy?.apply(this, opts);
      fileTransferPlug.onDestroy.apply(this);
      messagingPlug.onDestroy.apply(this);
      settingsPlug.onDestroy.apply(this);
    },
  }
}

export { BaseSideService, convertLib, settingsLib };
