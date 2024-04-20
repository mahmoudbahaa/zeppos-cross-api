import{a as e,b as t}from"./utils-BniZYMK7.js";import{E as s}from"./event-41D0pP7K.js";import{buf2json as n,json2buf as r,bin2hex as a,str2buf as i,buf2str as o,buf2bin as h}from"./data.js";function Deferred(){const e={canceled:!1};return e.promise=new Promise(((t,s)=>{e.resolve=t,e.reject=s})),e.cancel=()=>{e.canceled=!0,e.reject(new Error("Task canceled"))},e}const d=void 0,p=3584,c=0,u=1,l=1,y=2,f=4,g=5,I=6,T=1,m=1,k=2,L=3,S="empty",w="json",b="text",E="bin",B=0,U=1,q=2,C=3;function getDataType(e){switch(e.toLowerCase()){case w:return q;case b:return U;case E:return C;case S:return B;default:return C}}const D=0,P=1;let v=1e4;function genTraceId(){return v++}let M=1e3;function genSpanId(){return M++}class Session extends s{constructor(e,t,s){super(),this.id=e,this.type=t,this.ctx=s,this.logger=s.logger,this.chunks=[],this.count=-1,this.finishChunk=null}addChunk(e){e.opCode===P&&(this.count=e.seqId+1,this.finishChunk=e),e.payloadLength===e.payload.byteLength?(this.chunks.push(e),this.checkIfReceiveAllChunks()):this.emit("error",Error(`receive chunk data length error, expect ${e.payloadLength} but ${e.payload.byteLength}`))}checkIfReceiveAllChunks(){if(this.count!==this.chunks.length)return;if(!this.finishChunk)return;let e=[];for(let t=0;t<this.count;t++){const s=this.chunks[t];if(!s||s.seqId!==t)return e=null,this.releaseBuf(),void this.emit("error",Error("receive data error"));e.push(s.payload)}this.chunks=[],this.finishChunk.payload=Buffer.concat(e),e=null,this.finishChunk.payloadLength=this.finishChunk.payload.byteLength,this.finishChunk.totalLength===this.finishChunk.payloadLength?this.emit("data",this.finishChunk):this.emit("error",Error(`receive full data length error, expect ${this.finishChunk.payloadLength} but ${this.finishChunk.payload.byteLength}`))}releaseBuf(){this.chunks=[],this.finishChunk=null,this.count=0}}class SessionMgr{constructor(){this.sessions=new Map}key(e){return`${e.id}:${e.type}`}newSession(e,t,s){const n=new Session(e,t,s);return this.sessions.set(this.key(n),n),n}destroy(e){e.releaseBuf(),this.sessions.delete(this.key(e))}has(e,t){return this.sessions.has(this.key({id:e,type:t}))}getById(e,t){return this.sessions.get(this.key({id:e,type:t}))}clear(){this.sessions.clear()}}const x={SUCCESS:0,SHAKE_TIME_OUT:1,BLE_CLOSE:2,APP_CLOSE:3,REQUEST_TIME_OUT:4};class MessageError extends Error{constructor(e,t){super(t),this.code=e}}const j=1,A=2,O=3,R=4;class MessageBuilder extends s{constructor({appId:t=0,appDevicePort:s=20,appSidePort:n=0,ble:r,logger:a}={appId:0,appDevicePort:20,appSidePort:0,ble:void 0,logger:void 0}){super(),this.isDevice=e(),this.isSide=!this.isDevice,this.appId=t,this.appDevicePort=s,this.appSidePort=n,this.ble=r,this.logger=a,this.sendMsg=this.getSafeSend(),this.chunkSize=p,this.handlers=new Map,this.shakeTask=null,this.waitingShakePromise=null,this.shakeStatus=j,this.shakeTimer=0,this.sessionMgr=new SessionMgr,this.on("response",(e=>{this.onResponse(e)}))}fork(e=5e3){return this.shakeStatus===A||(this.shakeTask=Deferred(),this.waitingShakePromise=this.shakeTask.promise,this.shakeStatus=j,this.clearShakeTimer(),this.shakeTimer=setTimeout((()=>{this.shakeStatus=R,this.shakeTask.reject(new MessageError(x.SHAKE_TIME_OUT,"shake timeout"))}),e),this.shakeStatus=A,this.sendShake()),this.waitingShakePromise}clearShakeTimer(){this.shakeTimer&&clearTimeout(this.shakeTimer),this.shakeTimer=0}getMessageSize(){return 3600}getMessagePayloadSize(){return p}getMessageHeaderSize(){return 16}buf2Json(e){return n(e)}json2Buf(e){return r(e)}now(e=Date.now()){return function getTimestamp(e=Date.now()){return e%1e7}(e)}connect(e){this.on("message",(e=>{this.onMessage(e)})),this.ble&&this.ble.createConnect(((e,t,s)=>{this.onFragmentData(t)})),e&&e(this)}disConnect(e){this.sendClose(),this.off("message"),this.handlers.clear(),this.ble&&this.ble.disConnect(),e&&e(this)}listen(e){this.appSidePort=getApp().port2,messaging&&messaging.peerSocket.addListener("message",(e=>{this.onMessage(e)})),this.waitingShakePromise=Promise.resolve(),e&&e(this)}buildBin(e){if(e.payload.byteLength>this.chunkSize)throw new Error(`${e.payload.byteLength} greater than max size of ${this.chunkSize}`);const t=this.getMessageHeaderSize()+e.payload.byteLength,s=Buffer.alloc(t);let n=0;return s.writeUInt8(e.flag,n),n+=1,s.writeUInt8(e.version,n),n+=1,s.writeUInt16LE(e.type,n),n+=2,s.writeUInt16LE(e.port1,n),n+=2,s.writeUInt16LE(e.port2,n),n+=2,s.writeUInt32LE(e.appId,n),n+=4,s.writeUInt32LE(e.extra,n),n+=4,s.fill(e.payload,n,e.payload.byteLength+n),s}buildShake(){return this.buildBin({flag:u,version:T,type:l,port1:this.appDevicePort,port2:this.appSidePort,appId:this.appId,extra:0,payload:Buffer.from([this.appId])})}sendShake(){const e=this.buildShake();this.sendMsg(e)}buildClose(){return this.buildBin({flag:u,version:T,type:y,port1:this.appDevicePort,port2:this.appSidePort,appId:this.appId,extra:0,payload:Buffer.from([this.appId])})}sendClose(){const e=this.buildClose();this.sendMsg(e)}readBin(e){const t=Buffer.from(e);let s=0;const n=t.readUInt8(s);s+=1;const r=t.readUInt8(s);s+=1;const a=t.readUInt16LE(s);s+=2;const i=t.readUInt16LE(s);s+=2;const o=t.readUInt16LE(s);s+=2;const h=t.readUInt32LE(s);s+=4;const d=t.readUInt32LE(s);s+=4;return{flag:n,version:r,type:a,port1:i,port2:o,appId:h,extra:d,payload:t.subarray(s)}}buildData(e,t={}){return this.buildBin({flag:u,version:T,type:f,port1:this.appDevicePort,port2:this.appSidePort,appId:this.appId,extra:0,...t,payload:e})}sendBin(e,t=d){t&&this.logger.warn("[RAW] [S] send size=%d bin=%s",e.byteLength,a(e.buffer));if(!this.ble.send(e.buffer,e.byteLength))throw Error("send message error")}sendBinBySide(e,t=d){t&&this.logger.warn("[RAW] [S] send size=%d bin=%s",e.byteLength,a(e.buffer)),messaging.peerSocket.send(e.buffer)}getSafeSend(){return this.isDevice?this.sendBin.bind(this):this.sendBinBySide.bind(this)}sendHmProtocol({requestId:e,dataBin:t,type:s,contentType:n,dataType:r},{messageType:a=f}={}){const i=3518,o=t.byteLength;let h=0;const d=Buffer.alloc(i),p=e||genTraceId(),c=genSpanId();let u=0;const l=Math.ceil(o/i);function genSeqId(){return u++}for(let e=1;e<=l;e++){if(this.errorIfBleDisconnect(),e===l){const e=o-h,i=Buffer.alloc(0+e);t.copy(i,0,h,h+e),h+=e,this.sendDataWithSession({traceId:p,spanId:c,seqId:genSeqId(),payload:i,type:s,opCode:P,totalLength:o,contentType:n,dataType:r},{messageType:a});break}t.copy(d,0,h,h+i),h+=i,this.sendDataWithSession({traceId:p,spanId:c,seqId:genSeqId(),payload:d,type:s,opCode:D,totalLength:o,contentType:n,dataType:r},{messageType:a})}}sendJson({requestId:e=0,json:t,type:s=m,contentType:n,dataType:a}){const i=r(t),o=e||genTraceId();this.sendHmProtocol({requestId:o,dataBin:i,type:s,contentType:n,dataType:a})}sendBuf({requestId:e=0,buf:t,type:s=m,contentType:n,dataType:r}){const a=e||genTraceId();return this.sendHmProtocol({requestId:a,dataBin:t,type:s,contentType:n,dataType:r})}sendText({requestId:e=0,text:t,type:s=m,contentType:n,dataType:r}){const a=i(t),o=e||genTraceId();return this.sendHmProtocol({requestId:o,dataBin:a,type:s,contentType:n,dataType:r})}sendDataWithSession({traceId:e,spanId:t,seqId:s,payload:n,type:r,opCode:a,totalLength:i,contentType:o,dataType:h},{messageType:d}){const p=this.buildPayload({traceId:e,spanId:t,seqId:s,totalLength:i,type:r,opCode:a,payload:n,contentType:o,dataType:h}),c=this.isDevice?this.buildData(p,{type:d}):p;this.sendMsg(c)}buildPayload(e){const t=66+e.payload.byteLength,s=Buffer.alloc(t);let n=0;return s.writeUInt32LE(e.traceId,n),n+=4,s.writeUInt32LE(0,n),n+=4,s.writeUInt32LE(e.spanId,n),n+=4,s.writeUInt32LE(e.seqId,n),n+=4,s.writeUInt32LE(e.totalLength,n),n+=4,s.writeUInt32LE(e.payload.byteLength,n),n+=4,s.writeUInt8(e.type,n),n+=1,s.writeUInt8(e.opCode,n),n+=1,s.writeUInt32LE(this.now(),n),n+=4,s.writeUInt32LE(0,n),n+=4,s.writeUInt32LE(0,n),n+=4,s.writeUInt32LE(0,n),n+=4,s.writeUInt32LE(0,n),n+=4,s.writeUInt32LE(0,n),n+=4,s.writeUInt32LE(0,n),n+=4,s.writeUInt8(e.contentType,n),n+=1,s.writeUInt8(e.dataType,n),n+=1,s.writeUInt16LE(0,n),n+=2,s.writeUInt32LE(0,n),n+=4,s.writeUInt32LE(0,n),n+=4,s.fill(e.payload,n,e.payload.byteLength+n),s}readPayload(e){const t=Buffer.from(e);let s=0;const n=t.readUInt32LE(s);s+=4;const r=t.readUInt32LE(s);s+=4;const a=t.readUInt32LE(s);s+=4;const i=t.readUInt32LE(s);s+=4;const o=t.readUInt32LE(s);s+=4;const h=t.readUInt32LE(s);s+=4;const d=t.readUInt8(s);s+=1;const p=t.readUInt8(s);s+=1;const c=t.readUInt32LE(s);s+=4;const u=t.readUInt32LE(s);s+=4;const l=t.readUInt32LE(s);s+=4;const y=t.readUInt32LE(s);s+=4;const f=t.readUInt32LE(s);s+=4;const g=t.readUInt32LE(s);s+=4;const I=t.readUInt32LE(s);s+=4;const T=t.readUInt8(s);s+=1;const m=t.readUInt8(s);s+=1;const k=t.readUInt16LE(s);s+=2;const L=t.readUInt32LE(s);s+=4;const S=t.readUInt32LE(s);s+=4;return{traceId:n,parentId:r,spanId:a,seqId:i,totalLength:o,payloadLength:h,payloadType:d,opCode:p,contentType:T,dataType:m,timestamp1:c,timestamp2:u,timestamp3:l,timestamp4:y,timestamp5:f,timestamp6:g,timestamp7:I,extra1:k,extra2:L,extra3:S,payload:t.subarray(s)}}onFragmentData(e){const t=this.readBin(e);this.emit("raw",e),t.flag===u&&t.type===l?(this.appSidePort=t.port2,this.emit("shake:response",t),this.clearShakeTimer(),this.shakeTask.resolve(),this.shakeStatus=O):t.flag===u&&t.type===f||t.flag===u&&t.type===g?(this.emit("message",t.payload),this.emit("read",t)):t.flag===u&&t.type===I?this.emit("log",t.payload):t.flag===c||t.flag===u&&t.type===y&&(this.appSidePort=0)}errorIfBleDisconnect(){if(!e())return;if(!this.ble.connectStatus())throw new MessageError(x.BLE_CLOSE,"ble disconnect")}errorIfSideServiceDisconnect(){if(e()&&!this.appSidePort)throw new MessageError(x.APP_CLOSE,"side service is not running")}getRequestCount(){return this.handlers.size}onResponse(e){const t=this.handlers.get(e.traceId);t&&t(e)}onMessage(e){const t=this.readPayload(e);let s=this.sessionMgr.getById(t.traceId,t.payloadType);s||(s=this.sessionMgr.newSession(t.traceId,t.payloadType,this),s.on("data",(e=>{e.opCode===P&&(e.payloadType===m?this.emit("request",{request:e,response:({data:t,dataType:s})=>{s=void 0===s?e.dataType:getDataType(s),this.response({requestId:e.traceId,contentType:e.contentType,dataType:s,data:t})}}):e.payloadType===k?this.emit("response",e):e.payloadType===L&&this.emit("call",e),this.emit("data",e),this.sessionMgr.destroy(s))})),s.on("error",(e=>{this.sessionMgr.destroy(s),this.emit("error",e)}))),s.addChunk(t)}request(e,s){try{this.errorIfBleDisconnect()}catch(e){return Promise.reject(e)}return this.waitingShakePromise.then((()=>{this.errorIfBleDisconnect(),this.errorIfSideServiceDisconnect();let r=E;"string"==typeof e?r=b:t(e)?r=w:(e instanceof ArrayBuffer||ArrayBuffer.isView(e)||Buffer.isBuffer(e))&&(r=E);const a={timeout:6e4,contentType:r,dataType:r},i=genTraceId(),h=Deferred();s=Object.assign(a,s);let d=setTimeout((()=>{d=null,h.reject(new MessageError(x.TIMEOUT,"request timeout"))}),s.timeout);return this.handlers.set(i,(({traceId:e,payload:t,dataType:s})=>{let r;switch(this.errorIfBleDisconnect(),this.errorIfSideServiceDisconnect(),s){case U:r=o(t);break;case C:r=t;break;case q:r=n(t);break;default:r=t}h.resolve(r)})),Buffer.isBuffer(e)?this.sendBuf({requestId:i,buf:e,type:m,contentType:C,dataType:getDataType(s.dataType)}):e instanceof ArrayBuffer||ArrayBuffer.isView(e)?this.sendBuf({requestId:i,buf:Buffer.from(e),type:m,contentType:C,dataType:getDataType(s.dataType)}):getDataType(s.contentType)===q?this.sendJson({requestId:i,json:e,type:m,contentType:q,dataType:getDataType(s.dataType)}):getDataType(s.contentType)===U?this.sendText({requestId:i,text:e,type:m,contentType:U,dataType:getDataType(s.dataType)}):this.sendBuf({requestId:i,buf:Buffer.from(e),type:m,contentType:C,dataType:getDataType(s.dataType)}),h.promise.catch((e=>{throw e})).finally((()=>{d&&(clearTimeout(d),d=null),this.handlers.delete(i)}))}))}response({requestId:e,contentType:t,dataType:s,data:n}){C===s?this.sendBuf({requestId:e,buf:n,type:k,contentType:t,dataType:s}):U===s?this.sendText({requestId:e,text:n,type:k,contentType:t,dataType:s}):q===s?this.sendJson({requestId:e,json:n,type:k,contentType:t,dataType:s}):this.sendBuf({requestId:e,buf:n,type:k,contentType:t,dataType:C})}call(e){let s=q;return"string"==typeof e?s=U:t(e)?s=q:(e instanceof ArrayBuffer||ArrayBuffer.isView(e)||Buffer.isBuffer(e))&&(s=C),this.waitingShakePromise.then((()=>Buffer.isBuffer(e)?this.sendBuf({buf:e,type:L,contentType:C,dataType:B}):e instanceof ArrayBuffer||ArrayBuffer.isView(e)?this.sendBuf({buf:Buffer.from(e),type:L,contentType:C,dataType:B}):s===q?this.sendJson({json:e,type:L,contentType:q,dataType:B}):s===U?this.sendText({text:e,type:L,contentType:U,dataType:B}):this.sendBuf({buf:Buffer.from(e),type:L,contentType:C,dataType:B})))}}const z="hmrpcv1";function wrapperMessage(s,r){return{shakeTimeout:5e3,requestTimeout:6e4,transport:s,onCall(e){return e?(s.on("call",(({contentType:t,payload:s})=>{switch(t){case q:s=n(s);break;case U:s=o(s);break;default:s=h(s)}e&&e(s)})),this):this},offOnCall(e){return s.off("call",e),this},call(n){return e()&&s.fork(this.shakeTimeout),n=t(n)?n.contentType?n:{jsonrpc:z,...n}:n,s.call(n)},onRequest(e){return e?(s.on("request",(t=>{let{payload:s}=t.request;switch(t.request.contentType){case q:s=n(s);break;case U:s=o(s);break;default:s=h(s)}e&&e(s,((e,n,r={})=>t.request.contentType===q&&s?.jsonrpc===z?e?t.response({data:{jsonrpc:z,error:e}}):t.response({data:{jsonrpc:z,result:n}}):t.response({data:n,...r})))})),this):this},cancelAllRequest(){return s.off("response"),this},offOnRequest(e){return s.off("request",e),this},request(n,r={}){return e()&&s.fork(this.shakeTimeout),n=t(n)?r.contentType?n:{jsonrpc:z,...n}:n,s.request(n,{timeout:this.requestTimeout,...r}).then((e=>{if(!t(e)||e.jsonrpc!==z)return e;const{error:s,result:n}=e;if(s)throw s;return n}))},connect(){return s.connect((()=>{})),this},disConnect(){return this.cancelAllRequest(),this.offOnRequest(),this.offOnCall(),s.disConnect((()=>{})),this},start(){return s.listen((()=>{})),this},stop(){return this.cancelAllRequest(),this.offOnRequest(),this.offOnCall(),s.disConnect((()=>{})),this}}}export{MessageBuilder as M,wrapperMessage as w};
