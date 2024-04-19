import '../common/device-polyfill';
import { loggerPlugin } from './logger/logger-plugin.js';
import { appPlugin as messagingPlugin } from './messaging/app-plugin.js';
import { appPlugin as fileTransferPlugin } from './file-transfer/fileTransfer-plugin.js';

/**
   * @type {{ onCreate?: (opts:any) => void, onDestroy?: (opts:any) => void, [key:string]: any;}[]}
   */
const plugins = [loggerPlugin(), messagingPlugin(), fileTransferPlugin()];

function BaseApp(option) {
  const opts = {};
  plugins.forEach(plugin => Object.assign(opts, plugin));

  return {
    ...option,
    ...opts,
    onCreate(...opts) {
      plugins.forEach(plugin => plugin.onCreate?.apply(this, opts));
      option.onCreate?.apply(this, opts);
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts);
      plugins.reverse().forEach(plugin => plugin.onDestroy?.apply(this, opts));
    },
  };
}

export { BaseApp };
