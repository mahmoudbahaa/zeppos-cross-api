import { log } from '@zos/utils';

function loggerPlugin() {
  return {
    onInit() {
      this.logger = log.getLogger(this.name || 'Page');

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
    onCreate() {
      this.logger = log.getLogger(this.name || 'app.js');

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

function httpRequest(data, opts = {}) {
  return this.messaging.request(
    {
      method: 'http.request',
      params: data,
    },
    opts,
  )
}

function appPlugin(opts) {
  return {
    sendFile(path, opts) {
      throw new Error('File Transfer only supported in APLI_LEVEL 3.0+');
    },
  };
}

function pagePlugin(opts) {
  return {
    sendFile(path, opts) {
      throw new Error('File Transfer only supported in APLI_LEVEL 3.0+');
    },
  };
}

export { appPlugin as a, httpRequest as h, loggerPlugin as l, pagePlugin as p };
