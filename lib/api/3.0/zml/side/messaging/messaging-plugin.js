import { messaging } from './side-message.js'

function addBaseURL(opts) {
  const params = {
    timeout: 10000,
    ...opts,
  }

  if (params.baseURL) {
    params.url = new URL(params.url, params.baseURL).toString()
  }

  return params
}

export function messagingPlugin() {
  return {
    onInit() {
      this.messaging = messaging
      this._onCall = this.onCall?.bind(this)
      this._onRequest = this.onRequest?.bind(this)
      this.messaging.onCall(this._onCall).onRequest(this.__onRequest.bind(this))

      this.messaging.start()
    },
    onDestroy() {
      if (this._onCall) {
        this.messaging.offOnCall(this._onCall)
      }

      if (this._onRequest) {
        this.messaging.offOnRequest(this._onRequest)
      }

      this.messaging.stop()
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
          })
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
      })

      

      downloadTask.onSuccess = (event) => {
        if (event.statusCode !== 200) {
          return res({
            code: 1,
            message: 'download failed',
          })
        }
    
          res(null, event.filePath || event.tempFilePath)
      }
    
      downloadTask.onFail = (event) => {
        return res({
          code: 1,
          message: event.message,
        })
      }
    },
  }
}