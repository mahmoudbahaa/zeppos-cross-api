// #if API==1.0
/* global hmSetting */
// #endif
// #if API==1.0 || API==2.0
import { UNSUPPORTED } from './util/constants'
// #endif
// #if API!=1.0 && API!=2.0
import * as USER from '@zos/user'
export default USER
// #endif
// #if API==2.0
// #put "import * as ORG_USER from '@zos/user'"
// #endif
// #if API==1.0
const _USER = {}
// #endif
// #if API==2.0
// #put "const _USER = { ...ORG_USER }"
// #endif
// #if API==1.0
_USER.GENDER_MALE = 0
_USER.GENDER_FEMALE = 1
_USER.GENDER_UNSPECIFIED = 2
_USER.getProfile = () => { return hmSetting.getUserData() }
// #endif
// #if API==1.0 || API==2.0
_USER.addHealthData = () => { throw new Error(UNSUPPORTED) }
// #put "const USER = _USER"
// #put "export default USER"
// #endif
