/* global hmBle */
import { UNSUPPORTED } from './_constants';
export const addListener = callback => hmBle.addListener(callback);
export const connectStatus = () => hmBle.connectStatus();
export const createConnect = callback => hmBle.createConnect(callback);
export const disConnect = () => hmBle.disConnect();
export const removeListener = () => hmBle.removeListener();
export const send = (data, size) => hmBle.send(data, size);
export const mstBuildProfile = profile => {
  throw new Error(UNSUPPORTED);
};

export const mstConnect = (deviceAddress, callback) => {
  throw new Error(UNSUPPORTED);
};

export const mstDestroyProfileInstance = profile => {
  throw new Error(UNSUPPORTED);
};

export const mstDisconnect = connectId => {
  throw new Error(UNSUPPORTED);
};

export const mstGetConnIdByRemoteAddr = deviceAddress => {
  throw new Error(UNSUPPORTED);
};

export const mstGetProfileInstance = (profileName, connectId) => {
  throw new Error(UNSUPPORTED);
};

export const mstOffAllCb = () => {
  throw new Error(UNSUPPORTED);
};

export const mstOnCharaNotification = callback => {
  throw new Error(UNSUPPORTED);
};

export const mstOnCharaReadComplete = callback => {
  throw new Error(UNSUPPORTED);
};

export const mstOnCharaValueArrived = callback => {
  throw new Error(UNSUPPORTED);
};

export const mstOnCharaWriteComplete = callback => {
  throw new Error(UNSUPPORTED);
};

export const mstOnDescValueArrived = callback => {
  throw new Error(UNSUPPORTED);
};

export const mstOnDescWriteComplete = callback => {
  throw new Error(UNSUPPORTED);
};

export const mstOnPrepare = callback => {
  throw new Error(UNSUPPORTED);
};

export const mstOnServiceChangeBegin = callback => {
  throw new Error(UNSUPPORTED);
};

export const mstOnServiceChangeEnd = callback => {
  throw new Error(UNSUPPORTED);
};

export const mstPair = connectId => {
  throw new Error(UNSUPPORTED);
};

export const mstPrepare = profile => {
  throw new Error(UNSUPPORTED);
};

export const mstReadCharacteristic = (profile, uuid) => {
  throw new Error(UNSUPPORTED);
};

export const mstReadDescriptor = (profile, uuid, descUUID) => {
  throw new Error(UNSUPPORTED);
};

export const mstStartScan = (callback, filter = undefined) => {
  throw new Error(UNSUPPORTED);
};

export const mstStopScan = () => {
  throw new Error(UNSUPPORTED);
};

export const mstWriteCharacteristic = (profile, uuid, data, length) => {
  throw new Error(UNSUPPORTED);
};

export const mstWriteDescriptor = (profile, uuid, descUUID, data, length) => {
  throw new Error(UNSUPPORTED);
};
