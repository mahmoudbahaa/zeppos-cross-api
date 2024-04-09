// #if API==1.0
/* global hmFS */
// #endif
// #if API!=1.0
import * as FS from '@zos/fs'
// #endif
// #if API==1.0
import { arrayBufferToString, stringToArrayBuffer } from './util/arraybufferUtils'
// #endif
// #if API!=1.0
export default FS
// #endif
// #if API==1.0
const _FS = {}
_FS.O_RDONLY = hmFS.O_RDONLY
_FS.O_WRONLY = hmFS.O_WRONLY
_FS.O_RDWR = hmFS.O_RDWR
_FS.O_APPEND = hmFS.O_APPEND
_FS.O_CREAT = hmFS.O_CREAT
_FS.O_EXCL = hmFS.O_EXCL
_FS.O_TRUNC = hmFS.O_TRUNC

_FS.openSync = (option) => hmFS.open(option.path, option.flag || _FS.O_RDONLY)
_FS.openAssetsSync = (option) => hmFS.open(option.path, option.flag || _FS.O_RDONLY)
_FS.statSync = (option) => {
  const [st, e] = hmFS.stat(option.path)
  return e === 0 ? st : undefined
}
_FS.statAssetsSync = (option) => {
  const [st, e] = hmFS.stat_asset(option.path)
  return e === 0 ? st : undefined
}
_FS.closeSync = (option) => typeof option === 'number' ? hmFS.close(option) : hmFS.close(option.fd)
_FS.readSync = (option) => {
  if (!option.options) option.options = {}
  if (!option.options.length) option.options.length = option.buffer.byteLength
  if (!option.options.offset) option.options.offset = 0
  if (option.options.position) hmFS.seek(option.fd, option.options.position, hmFS.SEEK_SET)
  return hmFS.read(option.fd, option.buffer, option.options.offset, option.options.length)
}
_FS.writeSync = (option) => {
  if (!option.options) option.options = {}
  if (!option.options.length) option.options.length = option.buffer.byteLength
  if (!option.options.offset) option.options.offset = 0
  if (option.options.position) hmFS.seek(option.fd, option.options.position, hmFS.SEEK_SET)
  return hmFS.write(option.fd, option.buffer, option.options.offset, option.options.length)
}
_FS.rmSync = (option) => typeof option === 'string' ? hmFS.remove(option) : hmFS.remove(option.path)
_FS.renameSync = (option) => hmFS.rename(option.oldPath, option.newPath)
_FS.mkdirSync = (option) => typeof option === 'string' ? hmFS.mkdir(option) : hmFS.mkdir(option.path)
_FS.readdirSync = (option) => {
  const [result, e] = hmFS.readdir(option.path)
  return e === 0 ? result : undefined
}
_FS.readFileSync = (option) => {
  const st = _FS.stat()
  if (st === undefined) return undefined

  const buffer = new ArrayBuffer(st.size)
  const fd = hmFS.open(option.path, hmFS.O_RDONLY)
  _FS.readSync({ fd, buffer })
  _FS.closeSync(fd)

  if (!option.options?.encoding) return buffer
  return arrayBufferToString(buffer, option.options.encoding)
}
_FS.writeFileSync = (option) => {
  const fd = typeof option.path === 'number'
    ? option.path
    : hmFS.open(option.path, hmFS.O_WRONLY)

  const buffer = typeof option.data === 'string'
    ? stringToArrayBuffer(option.data, option.options?.encoding)
    : (option.data instanceof ArrayBuffer
        ? option.data
        : option.data.buffer)

  _FS.writeSync({ fd, buffer })
  _FS.closeSync({ fd })
}
// #put "const FS = _FS"
// #put "export default FS"
// #endif
