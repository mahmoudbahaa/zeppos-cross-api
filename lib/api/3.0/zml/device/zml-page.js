import { loggerPlugin } from './logger/logger-plugin.js';
import { pagePlugin as messagingPlugin } from './messaging/page-plugin.js';
import { pagePlugin as fileTransferPlugin } from './file-transfer/fileTransfer-plugin.js';

/**
  * @type {{ onInit?: (opts:any) => void, onResume?: (opts:any) => void, onPause?: (opts:any) => void,
  * build?: (opts:any) => void, onDestroy?: (opts:any) => void;}[]}
  */
const plugins = [loggerPlugin(), messagingPlugin(), fileTransferPlugin()];

function BasePage(option) {
  const opts = {};
  plugins.forEach(plugin => Object.assign(opts, plugin));

  return {
    ...option,
    ...opts,
    globalData: getApp()._options.globalData,
    onInit(...opts) {
      plugins.forEach(plugin => plugin.onInit?.apply(this, opts));
      option.onInit?.apply(this, opts);
    },
    onResume(...opts) {
      plugins.forEach(plugin => plugin.onResume?.apply(this, opts));
      option.onResume?.apply(this, opts);
    },
    onPause(...opts) {
      option.onPause?.apply(this, opts);
      plugins.reverse().forEach(plugin => plugin.onPause?.apply(this, opts));
    },
    build(...opts) {
      plugins.forEach(plugin => plugin.build?.apply(this, opts));
      option.build?.apply(this, opts);
    },
    onDestroy(...opts) {
      option.onDestroy?.apply(this, opts);
      plugins.reverse().forEach(plugin => plugin.onDestroy?.apply(this, opts));
    },
  };
}

export { BasePage };
