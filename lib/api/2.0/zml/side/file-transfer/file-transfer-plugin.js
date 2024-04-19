export function fileTransferPlugin() {
  return {
    sendFile(path, opts) {
      throw new Error('File Transfer only supported in APLI_LEVEL 3.0+');
    },
  };
}
