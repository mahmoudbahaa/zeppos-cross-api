export function appPlugin(opts) {
  return {
    sendFile(path, opts) {
      throw new Error('File Transfer only supported in APLI_LEVEL 3.0+');
    },
  };
}

export function pagePlugin(opts) {
  return {
    sendFile(path, opts) {
      throw new Error('File Transfer only supported in APLI_LEVEL 3.0+');
    },
  };
}
