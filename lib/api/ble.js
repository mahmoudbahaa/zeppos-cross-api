// #if API==1.0
/* global hmBle */
// #endif
// #if API!=1.0 &&  API!=2.0
import * as BLE from '@zos/ble'
// #endif
// #if API==2.0
// #put "import * as ORG_BLE from '@zos/ble'"
// #endif
// #if API==1.0 || API==2.0
import { UNSUPPORTED } from './util/constants'
// #endif
// #if API!=1.0 && API!=2.0
export default BLE
// #endif
// #if API==1.0
const _BLE = {}
// #endif
// #if API==2.0
// #put "const _BLE = { ...ORG_BLE }"
// #endif
// #if API==1.0
_BLE.addListener = (callback) => hmBle.addListener(callback)
_BLE.connectStatus = () => hmBle.connectStatus()
_BLE.createConnect = (callback) => hmBle.createConnect(callback)
_BLE.disConnect = () => hmBle.disConnect()
_BLE.removeListener = () => hmBle.removeListener()
_BLE.send = (data, size) => hmBle.send(data, size)
// #endif
// #if API==1.0 || API==2.0
_BLE.mstBuildProfile = (profile) => { throw new Error(UNSUPPORTED) }
_BLE.mstConnect = (deviceAddress, callback) => { throw new Error(UNSUPPORTED) }
_BLE.mstDestroyProfileInstance = (profile) => { throw new Error(UNSUPPORTED) }
_BLE.mstDisconnect = (connectId) => { throw new Error(UNSUPPORTED) }
_BLE.mstGetConnIdByRemoteAddr = (deviceAddress) => { throw new Error(UNSUPPORTED) }
_BLE.mstGetProfileInstance = (profileName, connectId) => { throw new Error(UNSUPPORTED) }
_BLE.mstOffAllCb = () => { throw new Error(UNSUPPORTED) }
_BLE.mstOnCharaNotification = (callback) => { throw new Error(UNSUPPORTED) }
_BLE.mstOnCharaReadComplete = (callback) => { throw new Error(UNSUPPORTED) }
_BLE.mstOnCharaValueArrived = (callback) => { throw new Error(UNSUPPORTED) }
_BLE.mstOnCharaWriteComplete = (callback) => { throw new Error(UNSUPPORTED) }
_BLE.mstOnDescValueArrived = (callback) => { throw new Error(UNSUPPORTED) }
_BLE.mstOnDescWriteComplete = (callback) => { throw new Error(UNSUPPORTED) }
_BLE.mstOnPrepare = (callback) => { throw new Error(UNSUPPORTED) }
_BLE.mstOnServiceChangeBegin = (callback) => { throw new Error(UNSUPPORTED) }
_BLE.mstOnServiceChangeEnd = (callback) => { throw new Error(UNSUPPORTED) }
_BLE.mstPair = (connectId) => { throw new Error(UNSUPPORTED) }
_BLE.mstPrepare = (profile) => { throw new Error(UNSUPPORTED) }
_BLE.mstReadCharacteristic = (profile, uuid) => { throw new Error(UNSUPPORTED) }
_BLE.mstReadDescriptor = (profile, uuid, descUUID) => { throw new Error(UNSUPPORTED) }
_BLE.mstStartScan = (callback, filter = undefined) => { throw new Error(UNSUPPORTED) }
_BLE.mstStopScan = () => { throw new Error(UNSUPPORTED) }
_BLE.mstWriteCharacteristic = (profile, uuid, data, length) => { throw new Error(UNSUPPORTED) }
_BLE.mstWriteDescriptor = (profile, uuid, descUUID, data, length) => { throw new Error(UNSUPPORTED) }
// #put "const BLE = _BLE"
// #put "export default BLE"
// #endif
