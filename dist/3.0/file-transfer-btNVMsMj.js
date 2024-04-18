function getFileTransfer(fileTransfer) {
  /**
   *     start(newfile)------------finished(file)
   *     device supported newfile and file
   *     side supported file
   */
  return {
    onFile(cb) {
      if (!cb) {
        return this;
      }

      // at file task start
      fileTransfer.inbox.on('newfile', () => {
        const file = fileTransfer.inbox.getNextFile();
        cb && cb(file);
      });
      return this;
    },
    onSideServiceFileFinished(cb) {
      if (!cb) {
        return this;
      }

      // at file task finished
      fileTransfer.inbox.on('file', () => {
        const file = fileTransfer.inbox.getNextFile();
        cb && cb(file);
      });
      return this;
    },
    emitFile() {
      fileTransfer.inbox.emit('file');
      return this;
    },
    offFile() {
      fileTransfer.inbox.off('newfile');
      fileTransfer.inbox.off('file');
      return this;
    },
    getFile() {
      return fileTransfer.inbox.getNextFile();
    },
    sendFile(path, opts) {
      return fileTransfer.outbox.enqueueFile(path, opts);
    },
  };
}

export { getFileTransfer as g };
