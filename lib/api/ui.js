// #if API==1.0
// eslint-disable-next-line no-unused-vars
/* global hmUI */
import { UNSUPPORTED } from './util/constants'
// #endif
// #if API!=1.0
import * as UI from '@zos/ui'
// #endif
// #if API==1.0
// eslint-disable-next-line no-unused-vars
const _UI = {
  ...hmUI,
  getImageInfo: (imgPath) => { throw new Error(UNSUPPORTED) },
  redraw: () => {},
  setAppWidgetSize: (option) => { throw new Error(UNSUPPORTED) },
  getAppWidgetSize: () => { throw new Error(UNSUPPORTED) }
}
// #put "const UI = _UI"
// #endif
export default UI
