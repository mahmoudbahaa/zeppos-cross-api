import { convertLib } from './convert'
export function convertPlugin(opt) {
  opt.convert = function (opts) {
    return convertLib.convert(opts)
  }
}

export { convertLib }
