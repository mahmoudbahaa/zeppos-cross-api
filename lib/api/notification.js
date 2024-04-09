// #if API==1.0
/* global */
// #endif
// #if API!=1.0 && API!=2.0
import * as NOTIFICATION from '@zos/notification'
export default NOTIFICATION
// #endif
// #if API==1.0 || API==2.0
const _NOTIFICATION = {}
_NOTIFICATION.notify = (option) => { return 0 /* Failure code */ }
_NOTIFICATION.cancel = (notificationId) => { /* NOOP */ }
_NOTIFICATION.getAllNotifications = () => { return [] }
// #put "const NOTIFICATION = _NOTIFICATION"
// #put "export default NOTIFICATION"
// #endif
