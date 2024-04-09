// #if API!=1.0 && API!=2.0
import * as APP_SERVICE from '@zos/app-service'
// #else
import { UNSUPPORTED } from './util/constants'
// #endif

// #if API!=1.0 && API!=2.0
export default APP_SERVICE
// #endif
// #if API==1.0 || API==2.0
const _APP_SERVICE = {}
_APP_SERVICE.start = (option) => { throw new Error(UNSUPPORTED) }
_APP_SERVICE.stop = (option) => { throw new Error(UNSUPPORTED) }
_APP_SERVICE.getAllAppServices = () => { throw new Error(UNSUPPORTED) }
_APP_SERVICE.exit = () => { throw new Error(UNSUPPORTED) }
// #put "const APP_SERVICE = _APP_SERVICE"
// #put "export default APP_SERVICE"
// #endif
