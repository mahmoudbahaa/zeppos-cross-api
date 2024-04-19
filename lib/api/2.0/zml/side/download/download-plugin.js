export function downloadPlugin(opt) {
  opt.download = function (url, opts) {
    throw new Error('Download is only avalaible in API_LEVEL 3.0+');
  };
}

