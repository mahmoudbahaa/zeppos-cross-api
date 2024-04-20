import { bin2str } from 'zeppos-cross-api/data-conversion';

export function downloadPlugin(opt) {
  opt.downloadTransfer = function (url, opts) {
    const CHUNK_SIZE = 4096;
    const index = url.lastIndexOf('/');
    const fileName = url.substring(index + 1);
    let i = 0;
    return fetch(url)
      .then(result => result.arrayBuffer())
      .then(arrayBuffer => {
        opt.request({
          method: 'chunk.received',
          data: bin2str(arrayBuffer.slice(i, i + CHUNK_SIZE)),
          fileName,
        });

        i += CHUNK_SIZE;
        opt.onRequest(data => {
          if (data.method !== 'next.chunk') {
            return;
          }

          if (i > arrayBuffer.byteLength) {
            opt.request({ method: 'chunks.finished', fileName });
          }

          opt.request({
            method: 'chunk.received',
            data: bin2str(arrayBuffer.slice(i, i + CHUNK_SIZE)),
            fileName,
          });
        });
      });
  };
}
