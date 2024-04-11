// #if API==1.0
/* global hmFS */
import { buf2str, str2buf } from '../zeppos/data'

export const O_RDONLY = hmFS.O_RDONLY
export const O_WRONLY = hmFS.O_WRONLY
export const O_RDWR = hmFS.O_RDWR
export const O_APPEND = hmFS.O_APPEND
export const O_CREAT = hmFS.O_CREAT
export const O_EXCL = hmFS.O_EXCL
export const O_TRUNC = hmFS.O_TRUNC

export const openSync = (option) => hmFS.open(option.path, option.flag || O_RDONLY)
export const openAssetsSync = (option) => hmFS.open_asset(option.path, option.flag || O_RDONLY)
export const statSync = (option) => {
  const [st, e] = hmFS.stat(option.path)
  return e === 0 ? st : undefined
}
export const statAssetsSync = (option) => {
  const [st, e] = hmFS.stat_asset(option.path)
  return e === 0 ? st : undefined
}
export const closeSync = (option) => typeof option === 'number' ? hmFS.close(option) : hmFS.close(option.fd)
export const readSync = (option) => {
  if (!option.options) option.options = {}
  if (!option.options.length) option.options.length = option.buffer.byteLength
  if (!option.options.offset) option.options.offset = 0
  if (option.options.position) hmFS.seek(option.fd, option.options.position, hmFS.SEEK_SET)
  return hmFS.read(option.fd, option.buffer, option.options.offset, option.options.length)
}
export const writeSync = (option) => {
  if (!option.options) option.options = {}
  if (!option.options.length) option.options.length = option.buffer.byteLength
  if (!option.options.offset) option.options.offset = 0
  if (option.options.position) hmFS.seek(option.fd, option.options.position, hmFS.SEEK_SET)
  return hmFS.write(option.fd, option.buffer, option.options.offset, option.options.length)
}
export const rmSync = (option) => typeof option === 'string' ? hmFS.remove(option) : hmFS.remove(option.path)
export const renameSync = (option) => hmFS.rename(option.oldPath, option.newPath)
export const mkdirSync = (option) => typeof option === 'string' ? hmFS.mkdir(option) : hmFS.mkdir(option.path)
export const readdirSync = (option) => {
  const [result, e] = hmFS.readdir(option.path)
  return e === 0 ? result : undefined
}
export const readFileSync = (option) => {
  const st = statSync(option)
  if (st === undefined) return undefined

  const buffer = new ArrayBuffer(st.size)
  const fd = hmFS.open(option.path, hmFS.O_RDONLY)
  readSync({ fd, buffer })
  closeSync(fd)

  if (!option.options?.encoding) return buffer
  return buf2str(buffer, option.options.encoding)
}
export const writeFileSync = (option) => {
  const fd = typeof option.path === 'number'
    ? option.path
    : hmFS.open(option.path, hmFS.O_WRONLY)

  const buffer = typeof option.data === 'string'
    ? str2buf(option.data, option.options?.encoding)
    : (option.data instanceof ArrayBuffer
        ? option.data
        : option.data.buffer)

  writeSync({ fd, buffer })
  closeSync({ fd })
}
// #endif
