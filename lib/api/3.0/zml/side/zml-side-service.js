import { loggerPlugin } from './logger/logger-plugin.js';
import { settingsPlugin } from './settings/settings-plugin.js';
import { messagingPlugin } from './messaging/messaging-plugin.js';
import { fileTransferPlugin } from './file-transfer/file-transfer-plugin.js';
import { downloadPlugin } from './download/download-plugin.js';
import { convertPlugin, convertLib } from './convert-image/convert-image-plugin.js';
import { settingsLib } from './settings/side-settings.js';

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
