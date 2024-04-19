import { notSupported } from '../../common/utils';

export function fileTransferPlugin() {
  return { sendFile: (path, opts) => notSupported('File Transfer') };
}
