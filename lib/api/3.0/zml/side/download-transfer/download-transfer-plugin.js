export function downloadPlugin(opt) {
  opt.downloadTransfer = function (url, opts) {
    return new Promise((resolve, reject) => {
      const downloadTask = network.downloader.downloadFile({
        url,
        ...opts,
      });

      downloadTask.onSuccess = event => {
        const task = opt.sendFile(event.filePath || event.tempFilePath);
        task.on('change', e => {
          switch (e.data.readyState) {
            case 'transferred': {
              resolve({ status: 'success' });
              break;
            }

            case 'error': {
              reject(new Error('Error while trasnfering file'));
              break;
            }

            default: break;
          }
        });
      };

      downloadTask.onFail = event => {
        reject(new Error(event.message));
      };
    });
  };
}
