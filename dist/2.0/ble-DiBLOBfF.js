import { U as UNSUPPORTED } from './_constants-DnfQ3JJx.js';
import * as ble$1 from '@zos/ble';

function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

const mstBuildProfile = profile => {
	throw new Error(UNSUPPORTED);
};

const mstConnect = (deviceAddress, callback) => {
	throw new Error(UNSUPPORTED);
};

const mstDestroyProfileInstance = profile => {
	throw new Error(UNSUPPORTED);
};

const mstDisconnect = connectId => {
	throw new Error(UNSUPPORTED);
};

const mstGetConnIdByRemoteAddr = deviceAddress => {
	throw new Error(UNSUPPORTED);
};

const mstGetProfileInstance = (profileName, connectId) => {
	throw new Error(UNSUPPORTED);
};

const mstOffAllCb = () => {
	throw new Error(UNSUPPORTED);
};

const mstOnCharaNotification = callback => {
	throw new Error(UNSUPPORTED);
};

const mstOnCharaReadComplete = callback => {
	throw new Error(UNSUPPORTED);
};

const mstOnCharaValueArrived = callback => {
	throw new Error(UNSUPPORTED);
};

const mstOnCharaWriteComplete = callback => {
	throw new Error(UNSUPPORTED);
};

const mstOnDescValueArrived = callback => {
	throw new Error(UNSUPPORTED);
};

const mstOnDescWriteComplete = callback => {
	throw new Error(UNSUPPORTED);
};

const mstOnPrepare = callback => {
	throw new Error(UNSUPPORTED);
};

const mstOnServiceChangeBegin = callback => {
	throw new Error(UNSUPPORTED);
};

const mstOnServiceChangeEnd = callback => {
	throw new Error(UNSUPPORTED);
};

const mstPair = connectId => {
	throw new Error(UNSUPPORTED);
};

const mstPrepare = profile => {
	throw new Error(UNSUPPORTED);
};

const mstReadCharacteristic = (profile, uuid) => {
	throw new Error(UNSUPPORTED);
};

const mstReadDescriptor = (profile, uuid, descUUID) => {
	throw new Error(UNSUPPORTED);
};

const mstStartScan = (callback, filter = undefined) => {
	throw new Error(UNSUPPORTED);
};

const mstStopScan = () => {
	throw new Error(UNSUPPORTED);
};

const mstWriteCharacteristic = (profile, uuid, data, length) => {
	throw new Error(UNSUPPORTED);
};

const mstWriteDescriptor = (profile, uuid, descUUID, data, length) => {
	throw new Error(UNSUPPORTED);
};

var ble = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	mstBuildProfile: mstBuildProfile,
	mstConnect: mstConnect,
	mstDestroyProfileInstance: mstDestroyProfileInstance,
	mstDisconnect: mstDisconnect,
	mstGetConnIdByRemoteAddr: mstGetConnIdByRemoteAddr,
	mstGetProfileInstance: mstGetProfileInstance,
	mstOffAllCb: mstOffAllCb,
	mstOnCharaNotification: mstOnCharaNotification,
	mstOnCharaReadComplete: mstOnCharaReadComplete,
	mstOnCharaValueArrived: mstOnCharaValueArrived,
	mstOnCharaWriteComplete: mstOnCharaWriteComplete,
	mstOnDescValueArrived: mstOnDescValueArrived,
	mstOnDescWriteComplete: mstOnDescWriteComplete,
	mstOnPrepare: mstOnPrepare,
	mstOnServiceChangeBegin: mstOnServiceChangeBegin,
	mstOnServiceChangeEnd: mstOnServiceChangeEnd,
	mstPair: mstPair,
	mstPrepare: mstPrepare,
	mstReadCharacteristic: mstReadCharacteristic,
	mstReadDescriptor: mstReadDescriptor,
	mstStartScan: mstStartScan,
	mstStopScan: mstStopScan,
	mstWriteCharacteristic: mstWriteCharacteristic,
	mstWriteDescriptor: mstWriteDescriptor
}, [ble$1]);

export { mstConnect as a, ble as b, mstDestroyProfileInstance as c, mstDisconnect as d, mstGetConnIdByRemoteAddr as e, mstGetProfileInstance as f, mstOffAllCb as g, mstOnCharaNotification as h, mstOnCharaReadComplete as i, mstOnCharaValueArrived as j, mstOnCharaWriteComplete as k, mstOnDescValueArrived as l, mstBuildProfile as m, mstOnDescWriteComplete as n, mstOnPrepare as o, mstOnServiceChangeBegin as p, mstOnServiceChangeEnd as q, mstPair as r, mstPrepare as s, mstReadCharacteristic as t, mstReadDescriptor as u, mstStartScan as v, mstStopScan as w, mstWriteCharacteristic as x, mstWriteDescriptor as y };
