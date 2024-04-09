// #if API!=1.0
import * as I18N from '@zos/i18n'
// #else
import { UNSUPPORTED } from './util/constants'
// #endif
// #if API!=1.0
export default I18N
// #endif
// #if API==1.0
const _I18N = {}
_I18N.getText = (str) => { throw new Error(UNSUPPORTED) }
// #put "const I18N = _I18N"
// #put "export default I18N"
// #endif
