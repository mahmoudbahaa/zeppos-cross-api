const convertLib = {
  convert(opts) {
    return image.convert(opts)
  },
};

function convertPlugin(opt) {
  opt.convert = function (opts) {
    return convertLib.convert(opts)
  };
}

function downloadPlugin(opt) {
  opt.download = function (url, opts) {
    const task = network.downloader.downloadFile({
      url,
      ...opts,
    });

    return task
  };
}

function getFileTransfer(fileTransfer) {
  /**
   *     start(newfile)------------finished(file)
   *     device supported newfile and file
   *     side supported file
   */
  return {
    canUseFileTransfer() {
      if (typeof fileTransfer === 'undefined') {
        console.log('WARNING: FileTransfer require API_LEVEL 3.0');
        return false
      }
      return true
    },
    onFile(cb) {
      if (!cb) {
        return this
      }

      if (!this.canUseFileTransfer()) {
        return this
      }

      // at file task start
      fileTransfer.inbox.on('newfile', function () {
        const file = fileTransfer.inbox.getNextFile();
        cb && cb(file);
      });
      return this
    },
    onSideServiceFileFinished(cb) {
      if (!cb) {
        return this
      }

      if (!this.canUseFileTransfer()) {
        return this
      }

      // at file task finished
      fileTransfer.inbox.on('file', function () {
        const file = fileTransfer.inbox.getNextFile();
        cb && cb(file);
      });
      return this
    },
    emitFile() {
      fileTransfer.inbox.emit('file');
      return this
    },
    offFile() {
      if (!this.canUseFileTransfer()) {
        return this
      }

      fileTransfer.inbox.off('newfile');
      fileTransfer.inbox.off('file');
      return this
    },
    getFile() {
      if (!this.canUseFileTransfer()) {
        return null
      }

      return fileTransfer.inbox.getNextFile()
    },
    sendFile(path, opts) {
      if (!this.canUseFileTransfer()) {
        throw new Error('fileTransfer is not available')
      }

      return fileTransfer.outbox.enqueueFile(path, opts)
    },
  }
}

const fileTransferLib = getFileTransfer(transferFile);

function fileTransferPlugin() {
  return {
    onInit() {
      this._onReceivedFile = this.onReceivedFile?.bind(this);
      fileTransferLib.onSideServiceFileFinished(this._onReceivedFile);

      if (typeof sideService !== 'undefined') {
        if (sideService.launchReasons.fileTransfer) {
          fileTransferLib.emitFile();
        }
      }
    },
    onDestroy() {
      if (this._onReceivedFile) {
        fileTransferLib.offFile(this._onReceivedFile);
      }
    },
    sendFile(path, opts) {
      return fileTransferLib.sendFile(path, opts)
    },
  }
}

/**
 * @param {Buffer | ArrayBuffer} binOrBuf
 * @returns {number}
 */

// ============= JSON =============
/**
 * @param {any} json
 * @returns {Buffer}
 */
function json2buf (json) {
  return str2buf(json2str(json))
}

/**
 * @param {any} json
 * @returns {string}
 */
function json2str (json) {
  return JSON.stringify(json)
}

// ============= buf =============

/**
 * @param {Buffer} buf
 * @returns {any}
 */
function buf2json (buf, encoding = 'utf-8') {
  return str2json(buf2str(buf, encoding))
}

/**
 * @param {Buffer} buf
 * @returns {ArrayBuffer}
 */
function buf2bin (buf) {
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
}

/**
 * @param {Buffer} buf
 * @returns {string}
 */
function buf2str (buf, encoding = 'utf-8') {
  return buf.toString(encoding)
}

/**
 * @param {Buffer} buf
 * @returns {string}
 */
function buf2hex (buf) {
  return buf.toString('hex')
}

// ============= bin =============

/**
 * @param {ArrayBuffer} bin
 * @returns {Buffer}
 */
function bin2buf (bin) {
  return Buffer.from(bin)
}

/**
 * @param {object} bin
 * @returns {string}
 */
function bin2hex (bin) {
  return buf2hex(bin2buf(bin))
}

// ============= bin =============

/**
 * @param {string} str
 * @returns {any}
 */
function str2json (str) {
  return JSON.parse(str)
}

/**
 * @param {string} str
 * @returns {Buffer}
 */
function str2buf (str, encoding = 'utf-8') {
  return Buffer.from(str, encoding)
}

function Deferred() {
  const defer = {};

  defer.promise = new Promise(function (resolve, reject) {
    defer.resolve = resolve;
    defer.reject = reject;
  });

  return defer
}

function timeout(ms, cb) {
  const defer = Deferred();
  ms = ms || 1000;

  const wait = setTimeout(() => {
    clearTimeout(wait);

    if (cb) {
      cb && cb(defer.resolve, defer.reject);
    } else {
      defer.reject('Timed out in ' + ms + 'ms.');
    }
  }, ms);

  return defer.promise
}

class EventBus {
  constructor() {
    this.map = new Map();
  }

  on(type, cb) {
    if (this.map.has(type)) {
      this.map.get(type).push(cb);
    } else {
      this.map.set(type, [cb]);
    }
  }

  off(type, cb) {
    if (type) {
      if (cb) {
        const cbs = this.map.get(type);

        if (!cbs) return
        const index = cbs.findIndex((i) => i === cb);

        if (index >= 0) {
          cbs.splice(index, 1);
        }
      } else {
        this.map.delete(type);
      }
    } else {
      this.map.clear();
    }
  }

  emit(type, ...args) {
    for (let cb of this.map.get(type) ? this.map.get(type) : []) {
      cb && cb(...args);
    }
  }

  count(type) {
    return this.map.get(type) ? this.map.get(type).length : 0
  }
}

function isDevice () {
  return typeof __ZEPPOS__ !== 'undefined' || typeof hmApp !== 'undefined'
}

/* global Logger */

let logger;

function initLogger() {
  logger = Logger.getLogger('side-message');
}

const DEBUG = true;

const MESSAGE_SIZE = 3600;
const MESSAGE_HEADER = 16;
const MESSAGE_PAYLOAD = MESSAGE_SIZE - MESSAGE_HEADER;
const HM_MESSAGE_PROTO_HEADER = 66;
const HM_MESSAGE_PROTO_PAYLOAD = MESSAGE_PAYLOAD - HM_MESSAGE_PROTO_HEADER;

const MessageFlag = {
  Runtime: 0x0,
  App: 0x1
};

const MessageType = {
  Shake: 0x1,
  Close: 0x2,
  Heart: 0x3,
  Data: 0x4,
  DataWithSystemTool: 0x5,
  Log: 0x6
};
const MessageVersion = {
  Version1: 0x1
};

const MessagePayloadType = {
  Request: 0x1,
  Response: 0x2,
  Notify: 0x3
};

const DataType = {
  empty: 'empty',
  json: 'json',
  text: 'text',
  bin: 'bin'
};

const MessagePayloadDataTypeOp$1 = {
  EMPTY: 0x0,
  TEXT: 0x1,
  JSON: 0x2,
  BIN: 0x3
};

function getDataType(type) {
  switch (type.toLowerCase()) {
    case DataType.json:
      return MessagePayloadDataTypeOp$1.JSON
    case DataType.text:
      return MessagePayloadDataTypeOp$1.TEXT
    case DataType.bin:
      return MessagePayloadDataTypeOp$1.BIN
    case DataType.empty:
      return MessagePayloadDataTypeOp$1.EMPTY
    default:
      return MessagePayloadDataTypeOp$1.TEXT
  }
}

// 中续，结束
const MessagePayloadOpCode = {
  Continued: 0x0,
  Finished: 0x1
};

let traceId = 10000;
function genTraceId() {
  return traceId++
}

let spanId = 1000;
function genSpanId() {
  return spanId++
}

function getTimestamp(t = Date.now()) {
  return t % 10000000
}

class Session extends EventBus {
  constructor(id, type, ctx) {
    super();
    this.id = id;
    this.type = type; // payloadType
    this.ctx = ctx;
    this.tempBuf = null;
    this.chunks = [];
    this.count = 0;
    this.finishChunk = null;
  }

  addChunk(payload) {
    if (payload.opCode === MessagePayloadOpCode.Finished) {
      this.count = payload.seqId;
      this.finishChunk = payload;
    }

    if (payload.payloadLength !== payload.payload.byteLength) {
      logger.error('receive chunk data length error, expect %d but %d', payload.payloadLength, payload.payload.byteLength);
      this.emit('error', Error(`receive chunk data length error, expect ${payload.payloadLength} but ${payload.payload.byteLength}`));
      return
    }

    this.chunks.push(payload);
    this.checkIfReceiveAllChunks();
  }

  checkIfReceiveAllChunks() {
    if (this.count !== this.chunks.length) return

    for (let i = 1; i <= this.count; i++) {
      const chunk = this.chunks.find((c) => c.seqId === i);

      if (!chunk) {
        this.releaseBuf();
        this.emit('error', Error('receive data error'));
        return
      }

      const buf = chunk.payload;
      this.tempBuf = this.tempBuf ? Buffer.concat([this.tempBuf, buf]) : buf;
    }

    if (!this.finishChunk) return

    this.finishChunk.payload = this.tempBuf;
    this.finishChunk.payloadLength = this.finishChunk.payload.byteLength;

    if (this.finishChunk.totalLength !== this.finishChunk.payloadLength) {
      logger.error('receive full data length error, expect %d but %d', this.finishChunk.payloadLength, this.finishChunk.payload.byteLength);
      this.emit('error', Error(`receive full data length error, expect ${this.finishChunk.payloadLength} but ${this.finishChunk.payload.byteLength}`));
      return
    }

    this.emit('data', this.finishChunk);
  }

  getLength() {
    return this.tempBufLength
  }
  releaseBuf() {
    this.tempBuf = null;
    this.chunks = [];
    this.finishChunk = null;
    this.count = 0;
  }
}

class SessionMgr {
  constructor() {
    this.sessions = new Map();
  }

  key(session) {
    return `${session.id}:${session.type}`
  }

  newSession(id, type, ctx) {
    const newSession = new Session(id, type, ctx);
    this.sessions.set(this.key(newSession), newSession);
    return newSession
  }

  destroy(session) {
    session.releaseBuf();
    this.sessions.delete(this.key(session));
  }

  has(id, type) {
    return this.sessions.has(
      this.key({
        id,
        type
      })
    )
  }

  getById(id, type) {
    return this.sessions.get(
      this.key({
        id,
        type
      })
    )
  }

  clear() {
    this.sessions.clear();
  }
}

class MessageBuilder extends EventBus {
  constructor(
    { appId = 0, appDevicePort = 20, appSidePort = 0, ble = undefined } = {
      appId: 0,
      appDevicePort: 20,
      appSidePort: 0,
      ble: undefined
    }
  ) {
    super();
    initLogger();
    this.isDevice = isDevice();
    this.isSide = !this.isDevice;

    this.appId = appId;
    this.appDevicePort = appDevicePort;
    this.appSidePort = appSidePort;
    this.ble = ble;
    this.sendMsg = this.getSafeSend();
    this.chunkSize = MESSAGE_PAYLOAD;
    this.tempBuf = null;
    this.shakeTask = Deferred();
    this.waitingShakePromise = this.shakeTask.promise;
    this.sessionMgr = new SessionMgr();
  }

  getMessageSize() {
    return MESSAGE_SIZE
  }

  getMessagePayloadSize() {
    return MESSAGE_PAYLOAD
  }

  getMessageHeaderSize() {
    return MESSAGE_HEADER
  }

  buf2Json(buf) {
    return buf2json(buf)
  }

  json2Buf(json) {
    return json2buf(json)
  }

  now(t = Date.now()) {
    return getTimestamp(t)
  }

  connect(cb) {
    this.on('message', (message) => {
      this.onMessage(message);
    });

    this.ble &&
      this.ble.createConnect((index, data, size) => {
        logger.warn('[RAW] [R] receive index=>%d size=>%d bin=>%s', index, size, bin2hex(data));
        this.onFragmentData(data);
      });

    this.sendShake();
    cb && cb(this);
  }

  disConnect(cb) {
    logger.debug('app ble disconnect');
    this.sendClose();
    this.off('message');
    this.ble && this.ble.disConnect();

    cb && cb(this);
  }

  listen(cb) {
    if (typeof messaging === 'undefined') {
      return
    }

    messaging &&
      messaging.peerSocket.addListener('message', (message) => {
        logger.warn('[RAW] [R] receive size=>%d bin=>%s', message.byteLength, bin2hex(message));
        this.onMessage(message);
      });

    this.waitingShakePromise = Promise.resolve();
    cb && cb(this);
  }

  buildBin(data) {
    if (data.payload.byteLength > this.chunkSize) {
      throw new Error(`${data.payload.byteLength} greater than max size of ${this.chunkSize}`)
    }

    const size = this.getMessageHeaderSize() + data.payload.byteLength;
    let buf = Buffer.alloc(size);
    let offset = 0;

    buf.writeUInt8(data.flag, offset);
    offset += 1;

    buf.writeUInt8(data.version, offset);
    offset += 1;

    buf.writeUInt16LE(data.type, offset);
    offset += 2;

    buf.writeUInt16LE(data.port1, offset);
    offset += 2;

    buf.writeUInt16LE(data.port2, offset);
    offset += 2;

    buf.writeUInt32LE(data.appId, offset);
    offset += 4;

    buf.writeUInt32LE(data.extra, offset);
    offset += 4;

    buf.fill(data.payload, offset, data.payload.byteLength + offset);

    return buf
  }

  buildShake() {
    return this.buildBin({
      flag: MessageFlag.App,
      version: MessageVersion.Version1,
      type: MessageType.Shake,
      port1: this.appDevicePort,
      port2: this.appSidePort,
      appId: this.appId,
      extra: 0,
      payload: Buffer.from([this.appId])
    })
  }

  sendShake() {
    if (this.appSidePort === 0) {
      const shake = this.buildShake();
      this.sendMsg(shake);
    }
  }

  buildClose() {
    return this.buildBin({
      flag: MessageFlag.App,
      version: MessageVersion.Version1,
      type: MessageType.Close,
      port1: this.appDevicePort,
      port2: this.appSidePort,
      appId: this.appId,
      extra: 0,
      payload: Buffer.from([this.appId])
    })
  }

  sendClose() {
    if (this.appSidePort !== 0) {
      const close = this.buildClose();

      this.sendMsg(close);
    }
  }

  readBin(arrayBuf) {
    const buf = Buffer.from(arrayBuf);
    let offset = 0;

    const flag = buf.readUInt8(offset);
    offset += 1;

    const version = buf.readUInt8(offset);
    offset += 1;

    const type = buf.readUInt16LE(offset);
    offset += 2;

    const port1 = buf.readUInt16LE(offset);
    offset += 2;

    const port2 = buf.readUInt16LE(offset);
    offset += 2;

    const appId = buf.readUInt32LE(offset);
    offset += 4;

    const extra = buf.readUInt32LE(offset);
    offset += 4;

    const payload = buf.subarray(offset);

    return {
      flag,
      version,
      type,
      port1,
      port2,
      appId,
      extra,
      payload
    }
  }

  // opts 覆盖头部选项
  buildData(payload, opts = {}) {
    return this.buildBin({
      flag: MessageFlag.App,
      version: MessageVersion.Version1,
      type: MessageType.Data,
      port1: this.appDevicePort,
      port2: this.appSidePort,
      appId: this.appId,
      extra: 0,
      ...opts,
      payload
    })
  }

  sendBin(buf, debug = DEBUG) {
    // ble 发送消息
    debug && logger.warn('[RAW] [S] send size=%d bin=%s', buf.byteLength, bin2hex(buf.buffer));
    const result = this.ble.send(buf.buffer, buf.byteLength);

    if (!result) {
      throw Error('send message error')
    }
  }

  sendBinBySide(buf, debug = DEBUG) {
    // side 发送消息
    debug && logger.warn('[RAW] [S] send size=%d bin=%s', buf.byteLength, bin2hex(buf.buffer));
    messaging && messaging.peerSocket.send(buf.buffer);
  }

  // 通用获取逻辑
  getSafeSend() {
    if (this.isDevice) {
      return this.sendBin.bind(this)
    } else {
      return this.sendBinBySide.bind(this)
    }
  }

  _logSend(buf) {
    this.sendMsg(buf, false);
  }

  // 大数据的复杂头部分包协议
  sendHmProtocol({ requestId, dataBin, type, contentType, dataType }, { messageType = MessageType.Data } = {}) {
    const headerSize = 0;
    const hmDataSize = HM_MESSAGE_PROTO_PAYLOAD;
    const userDataLength = dataBin.byteLength;

    let offset = 0;
    const _buf = Buffer.alloc(hmDataSize);
    const traceId = requestId ? requestId : genTraceId();
    const spanId = genSpanId();
    let seqId = 1;

    const count = Math.ceil(userDataLength / hmDataSize);

    function genSeqId() {
      return seqId++
    }

    for (let i = 1; i <= count; i++) {
      this.errorIfBleDisconnect();
      if (i === count) {
        // last
        const tailSize = userDataLength - offset;
        const tailBuf = Buffer.alloc(headerSize + tailSize);

        dataBin.copy(tailBuf, headerSize, offset, offset + tailSize);
        offset += tailSize;
        this.sendDataWithSession(
          {
            traceId,
            spanId: spanId,
            seqId: genSeqId(),
            payload: tailBuf,
            type,
            opCode: MessagePayloadOpCode.Finished,
            totalLength: userDataLength,
            contentType,
            dataType
          },
          {
            messageType
          }
        );

        break
      }

      dataBin.copy(_buf, headerSize, offset, offset + hmDataSize);
      offset += hmDataSize;

      this.sendDataWithSession(
        {
          traceId,
          spanId: spanId,
          seqId: genSeqId(),
          payload: _buf,
          type,
          opCode: MessagePayloadOpCode.Continued,
          totalLength: userDataLength,
          contentType,
          dataType
        },
        {
          messageType
        }
      );
    }

    if (offset === userDataLength) {
      logger.debug('HmProtocol send ok msgSize=> %d dataSize=> %d', offset, userDataLength);
    } else {
      logger.error('HmProtocol send error msgSize=> %d dataSize=> %d', offset, userDataLength);
    }
  }

  // 大数据的简单分包协议
  sendSimpleProtocol({ dataBin }, { messageType = MessageType.Data } = {}) {
    const dataSize = this.chunkSize;
    const headerSize = 0;
    const userDataLength = dataBin.byteLength;

    let offset = 0;
    const _buf = Buffer.alloc(dataSize);

    const count = Math.ceil(userDataLength / dataSize);

    for (let i = 1; i <= count; i++) {
      if (i === count) {
        // last
        const tailSize = userDataLength - offset;
        const tailBuf = Buffer.alloc(headerSize + tailSize);

        dataBin.copy(tailBuf, headerSize, offset, offset + tailSize);
        offset += tailSize;
        this.sendSimpleData(
          {
            payload: tailBuf
          },
          {
            messageType
          }
        );

        break
      }

      dataBin.copy(_buf, headerSize, offset, offset + dataSize);
      offset += dataSize;

      this.sendSimpleData(
        {
          payload: _buf
        },
        {
          messageType
        }
      );
    }
  }

  sendJson({ requestId = 0, json, type = MessagePayloadType.Request, contentType, dataType }) {
    const packageBin = json2buf(json);
    const traceId = requestId ? requestId : genTraceId();

    this.sendHmProtocol({
      requestId: traceId,
      dataBin: packageBin,
      type,
      contentType,
      dataType
    });
  }

  sendBuf({ requestId = 0, buf, type = MessagePayloadType.Request, contentType, dataType }) {
    const traceId = requestId ? requestId : genTraceId();

    return this.sendHmProtocol({
      requestId: traceId,
      dataBin: buf,
      type,
      contentType,
      dataType
    })
  }

  sendLog(str) {
    const packageBuf = str2buf(str);
    this.sendSimpleProtocol(
      {
        dataBin: packageBuf
      },
      {
        messageType: MessageType.Log
      }
    );
  }

  sendDataWithSession({ traceId, spanId, seqId, payload, type, opCode, totalLength, contentType, dataType }, { messageType }) {
    const payloadBin = this.buildPayload({
      traceId,
      spanId,
      seqId,
      totalLength,
      type,
      opCode,
      payload,
      contentType,
      dataType
    });

    let data = this.isDevice
      ? this.buildData(payloadBin, {
        type: messageType
      })
      : payloadBin;

    this.sendMsg(data);
  }

  sendSimpleData({ payload }, { messageType }) {
    let data = this.isDevice
      ? this.buildData(payload, {
        type: messageType
      })
      : payload;

    this._logSend(data);
  }

  buildPayload(data) {
    const size = HM_MESSAGE_PROTO_HEADER + data.payload.byteLength;
    let buf = Buffer.alloc(size);
    let offset = 0;

    // header
    // traceId
    buf.writeUInt32LE(data.traceId, offset);
    offset += 4;

    // parentId
    buf.writeUInt32LE(0, offset);
    offset += 4;

    // spanId
    buf.writeUInt32LE(data.spanId, offset);
    offset += 4;

    // seqId // 顺序 id,消息部分顺序序列号
    buf.writeUInt32LE(data.seqId, offset);
    offset += 4;

    // message total length
    buf.writeUInt32LE(data.totalLength, offset);
    offset += 4;

    // payload length 当前
    buf.writeUInt32LE(data.payload.byteLength, offset);
    offset += 4;

    // payload type
    buf.writeUInt8(data.type, offset);
    offset += 1;

    // opCode
    buf.writeUInt8(data.opCode, offset);
    offset += 1;

    // timestamp1
    buf.writeUInt32LE(this.now(), offset);
    offset += 4;

    // timestamp2
    buf.writeUInt32LE(0, offset);
    offset += 4;

    // timestamp3
    buf.writeUInt32LE(0, offset);
    offset += 4;

    // timestamp4
    buf.writeUInt32LE(0, offset);
    offset += 4;

    // timestamp5
    buf.writeUInt32LE(0, offset);
    offset += 4;

    // timestamp6
    buf.writeUInt32LE(0, offset);
    offset += 4;

    // timestamp7
    buf.writeUInt32LE(0, offset);
    offset += 4;

    // request content data type
    buf.writeUInt8(data.contentType, offset);
    offset += 1;

    // response data type
    buf.writeUInt8(data.dataType, offset);
    offset += 1;

    buf.writeUInt16LE(0, offset);
    offset += 2;

    // extra1
    buf.writeUInt32LE(0, offset);
    offset += 4;

    // extra2
    buf.writeUInt32LE(0, offset);
    offset += 4;

    // payload
    buf.fill(data.payload, offset, data.payload.byteLength + offset);

    return buf
  }

  readPayload(arrayBuf) {
    const buf = Buffer.from(arrayBuf);
    let offset = 0;

    const traceId = buf.readUInt32LE(offset);
    offset += 4;

    const parentId = buf.readUInt32LE(offset);
    offset += 4;

    const spanId = buf.readUInt32LE(offset);
    offset += 4;

    const seqId = buf.readUInt32LE(offset);
    offset += 4;

    const totalLength = buf.readUInt32LE(offset);
    offset += 4;

    const payloadLength = buf.readUInt32LE(offset);
    offset += 4;

    const payloadType = buf.readUInt8(offset);
    offset += 1;

    const opCode = buf.readUInt8(offset);
    offset += 1;

    const timestamp1 = buf.readUInt32LE(offset);
    offset += 4;

    const timestamp2 = buf.readUInt32LE(offset);
    offset += 4;

    const timestamp3 = buf.readUInt32LE(offset);
    offset += 4;

    const timestamp4 = buf.readUInt32LE(offset);
    offset += 4;

    const timestamp5 = buf.readUInt32LE(offset);
    offset += 4;

    const timestamp6 = buf.readUInt32LE(offset);
    offset += 4;

    const timestamp7 = buf.readUInt32LE(offset);
    offset += 4;

    // request data type
    const contentType = buf.readUInt8(offset);
    offset += 1;

    // response data type
    const dataType = buf.readUInt8(offset);
    offset += 1;

    const extra1 = buf.readUInt16LE(offset);
    offset += 2;

    const extra2 = buf.readUInt32LE(offset);
    offset += 4;

    const extra3 = buf.readUInt32LE(offset);
    offset += 4;

    const payload = buf.subarray(offset);

    return {
      traceId,
      parentId,
      spanId,
      seqId,
      totalLength,
      payloadLength,
      payloadType,
      opCode,
      contentType,
      dataType,
      timestamp1,
      timestamp2,
      timestamp3,
      timestamp4,
      timestamp5,
      timestamp6,
      timestamp7,
      extra1,
      extra2,
      extra3,
      payload
    }
  }

  onFragmentData(bin) {
    const data = this.readBin(bin);
    this.emit('raw', bin);

    logger.debug('receive data=>', JSON.stringify(data));
    if (data.flag === MessageFlag.App && data.type === MessageType.Shake) {
      this.appSidePort = data.port2;
      logger.debug('appSidePort=>', data.port2);
      this.shakeTask.resolve();
    } else if (data.flag === MessageFlag.App && data.type === MessageType.Data && data.port2 === this.appSidePort) {
      this.emit('message', data.payload);
      this.emit('read', data);
    } else if (data.flag === MessageFlag.App && data.type === MessageType.DataWithSystemTool && data.port2 === this.appSidePort) {
      this.emit('message', data.payload);
      this.emit('read', data);
    } else if (data.flag === MessageFlag.App && data.type === MessageType.Log && data.port2 === this.appSidePort) {
      this.emit('log', data.payload);
    } else {
      logger.error('error appSidePort=>%d data=>%j', this.appSidePort, data);
    }
  }

  errorIfBleDisconnect() { }

  onMessage(messagePayload) {
    const payload = this.readPayload(messagePayload);
    let session = this.sessionMgr.getById(payload.traceId, payload.payloadType);

    if (!session) {
      session = this.sessionMgr.newSession(payload.traceId, payload.payloadType, this);

      // TODO: 需要考虑缓冲，监听回调要放到启动之前，或者没有增加监听就缓存请求
      session.on('data', (fullPayload) => {
        if (fullPayload.opCode === MessagePayloadOpCode.Finished) {
          if (fullPayload.payloadType === MessagePayloadType.Request) {
            this.emit('request', {
              request: fullPayload,
              response: ({ data }) => {
                this.response({
                  requestId: fullPayload.traceId,
                  contentType: fullPayload.contentType,
                  dataType: fullPayload.dataType,
                  data
                });
              }
            });
          } else if (fullPayload.payloadType === MessagePayloadType.Response) {
            this.emit('response', fullPayload);
          } else if (fullPayload.payloadType === MessagePayloadType.Notify) {
            this.emit('call', fullPayload);
          }

          this.emit('data', fullPayload);
          this.sessionMgr.destroy(session);
        }
      });

      session.on('error', (error) => {
        this.sessionMgr.destroy(session);
        this.emit('error', error);
      });
    }

    session.addChunk(payload);
  }

  /**
   * 发送请求
   * @param {object buffer arraybuffer arraybuffer like} data 传输的数据
   * @param {*} opts
   * @returns
   */
  request(data, opts) {
    const _request = () => {
      const defaultOpts = {
        timeout: 60000,
        contentType: 'json',
        dataType: 'json'
      };
      const requestId = genTraceId();
      const defer = Deferred();
      opts = Object.assign(defaultOpts, opts);

      const error = (error) => {
        this.off('error', error);
        defer.reject(error);
      };

      const transact = ({ traceId, payload, dataType }) => {
        this.errorIfBleDisconnect();
        logger.debug('traceId=>%d payload=>%s', traceId, payload.toString('hex'));
        if (traceId === requestId) {
          let result;
          switch (dataType) {
            case MessagePayloadDataTypeOp$1.TEXT:
              result = buf2str(payload);
              break
            case MessagePayloadDataTypeOp$1.BIN:
              result = payload;
              break
            case MessagePayloadDataTypeOp$1.JSON:
              result = buf2json(payload);
              break
            default: // text
              result = buf2str(payload);
              break
          }
          logger.debug('request id=>%d payload=>%j', requestId, data);
          logger.debug('response id=>%d payload=>%j', requestId, result);

          this.off('response', transact);
          this.off('error', error);
          defer.resolve(result);
        }
      };

      this.on('response', transact);
      this.on('error', error);
      if (Buffer.isBuffer(data)) {
        this.sendBuf({
          requestId,
          buf: data,
          type: MessagePayloadType.Request,
          contentType: MessagePayloadDataTypeOp$1.BIN,
          dataType: getDataType(opts.dataType)
        });
      } else if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
        this.sendBuf({
          requestId,
          buf: Buffer.from(data),
          type: MessagePayloadType.Request,
          contentType: MessagePayloadDataTypeOp$1.BIN,
          dataType: getDataType(opts.dataType)
        });
      } else {
        this.sendJson({
          requestId,
          json: data,
          type: MessagePayloadType.Request,
          contentType: MessagePayloadDataTypeOp$1.JSON,
          dataType: getDataType(opts.dataType)
        });
      }

      let hasReturned = false;

      return Promise.race([
        timeout(opts.timeout, (resolve, reject) => {
          if (hasReturned) {
            return resolve()
          }

          logger.error(`request timeout in ${opts.timeout}ms error=> %d data=> %j`, requestId, data);
          this.off('response', transact);

          reject(Error(`Timed out in ${opts.timeout}ms.`));
        }),
        defer.promise.finally(() => {
          hasReturned = true;
        })
      ])
    };

    return this.waitingShakePromise.then(_request)
  }

  requestCb(data, opts, cb) {
    const _requestCb = () => {
      const defaultOpts = {
        timeout: 60000,
        contentType: 'json',
        dataType: 'json'
      };

      if (typeof opts === 'function') {
        cb = opts;
        opts = defaultOpts;
      } else {
        opts = Object.assign(defaultOpts, opts);
      }

      const requestId = genTraceId();
      let timer1 = null;
      let hasReturned = false;

      const transact = ({ traceId, payload, dataType }) => {
        logger.debug('traceId=>%d payload=>%s', traceId, payload.toString('hex'));
        if (traceId === requestId) {
          let result;
          switch (dataType) {
            case MessagePayloadDataTypeOp$1.TEXT:
              result = buf2str(payload);
              break
            case MessagePayloadDataTypeOp$1.BIN:
              result = payload;
              break
            case MessagePayloadDataTypeOp$1.JSON:
              result = buf2json(payload);
              break
            default: // text
              result = buf2str(payload);
              break
          }
          logger.debug('request id=>%d payload=>%j', requestId, data);
          logger.debug('response id=>%d payload=>%j', requestId, result);

          timer1 && clearTimeout(timer1);
          timer1 = null;
          this.off('response', transact);
          hasReturned = true;
          cb(null, result);
        }
      };

      this.on('response', transact);
      if (Buffer.isBuffer(data)) {
        this.sendBuf({
          requestId,
          buf: data,
          type: MessagePayloadType.Request,
          contentType: MessagePayloadDataTypeOp$1.BIN,
          dataType: getDataType(opts.dataType)
        });
      } else if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
        this.sendBuf({
          requestId,
          buf: Buffer.from(data),
          type: MessagePayloadType.Request,
          contentType: MessagePayloadDataTypeOp$1.BIN,
          dataType: getDataType(opts.dataType)
        });
      } else {
        this.sendJson({
          requestId,
          json: data,
          type: MessagePayloadType.Request,
          contentType: MessagePayloadDataTypeOp$1.JSON,
          dataType: getDataType(opts.dataType)
        });
      }

      timer1 = setTimeout(() => {
        timer1 = null;
        if (hasReturned) {
          return
        }

        logger.error(`request time out in ${opts.timeout}ms error=>%d data=>%j`, requestId, data);
        this.off('response', transact);
        cb(Error(`Timed out in ${opts.timeout}ms.`));
      }, opts.timeout);
    };

    return this.waitingShakePromise.then(_requestCb)
  }

  /**
   * 相应接口给当前请求
   * @param {obj} param0
   */
  response({ requestId, contentType, dataType, data }) {
    if (MessagePayloadDataTypeOp$1.BIN === dataType) {
      this.sendBuf({
        requestId,
        buf: data,
        type: MessagePayloadType.Response,
        contentType,
        dataType
      });
    } else {
      this.sendJson({
        requestId,
        json: data,
        type: MessagePayloadType.Response,
        contentType,
        dataType
      });
    }
  }

  /**
   * call 模式调用接口到伴生服务
   * @param {json | buffer} data
   * @returns
   */
  call(data) {
    return this.waitingShakePromise.then(() => {
      if (Buffer.isBuffer(data)) {
        return this.sendBuf({
          buf: data,
          type: MessagePayloadType.Notify,
          contentType: MessagePayloadDataTypeOp$1.BIN,
          dataType: MessagePayloadDataTypeOp$1.EMPTY
        })
      } else if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
        return this.sendBuf({
          buf: Buffer.from(data),
          type: MessagePayloadType.Notify,
          contentType: MessagePayloadDataTypeOp$1.BIN,
          dataType: MessagePayloadDataTypeOp$1.EMPTY
        })
      } else {
        return this.sendJson({
          json: data,
          type: MessagePayloadType.Notify,
          contentType: MessagePayloadDataTypeOp$1.JSON,
          dataType: MessagePayloadDataTypeOp$1.EMPTY
        })
      }
    })
  }
}

const requestTimeout = 60000;

const HM_RPC = 'hmrpcv1';

const MessagePayloadDataTypeOp = {
	EMPTY: 0x0,
	TEXT: 0x1,
	JSON: 0x2,
	BIN: 0x3,
};

function isPlainObject(item) {
	return (
		typeof item === 'object'
    && !Buffer.isBuffer(item)
    && !Array.isArray(item)
    && item !== null
	);
}

function wrapperMessage(messageBuilder, logger) {
	return {
		requestTimeout,
		transport: messageBuilder,
		onCall(cb) {
			if (!cb) {
				return this;
			}

			messageBuilder.on('call', ({contentType, payload}) => {
				switch (contentType) {
					case MessagePayloadDataTypeOp.JSON:
						payload = buf2json(payload);
						break;
					case MessagePayloadDataTypeOp.TEXT:
						payload = buf2str(payload);
						break;
					case MessagePayloadDataTypeOp.BIN:
					default:
						payload = buf2bin(payload);
						break;
				}

				cb && cb(payload);
			});

			return this;
		},
		offOnCall(cb) {
			messageBuilder.off('call', cb);
			return this;
		},
		call(data) {
			data = isPlainObject(data)
				? data.contentType
					? data
					: {
						jsonrpc: HM_RPC,
						...data,
					}
				: data;
			return messageBuilder.call(data);
		},
		onRequest(cb) {
			if (!cb) {
				return this;
			}

			messageBuilder.on('request', ctx => {
				let {payload} = ctx.request;

				switch (ctx.request.contentType) {
					case MessagePayloadDataTypeOp.JSON:
						payload = buf2json(payload);
						break;
					case MessagePayloadDataTypeOp.TEXT:
						payload = buf2str(payload);
						break;
					case MessagePayloadDataTypeOp.BIN:
					default:
						payload = buf2bin(payload);
						break;
				}

				cb
          && cb(payload, (error, data, opts = {}) => {
          	if (
          		ctx.request.contentType === MessagePayloadDataTypeOp.JSON
              && payload?.jsonrpc === HM_RPC
          	) {
          		if (error) {
          			return ctx.response({
          				data: {
          					jsonrpc: HM_RPC,
          					error,
          				},
          			});
          		}

          		return ctx.response({
          			data: {
          				jsonrpc: HM_RPC,
          				result: data,
          			},
          		});
          	}

          	return ctx.response({
          		data,
          		...opts,
          	});
          });
			});

			return this;
		},
		cancelAllRequest() {
			messageBuilder.off('response');
			return this;
		},
		offOnRequest(cb) {
			messageBuilder.off('request', cb);
			return this;
		},
		request(data, opts = {}) {

			data = isPlainObject(data)
				? opts.contentType
					? data
					: {
						jsonrpc: HM_RPC,
						...data,
					}
				: data;

			return messageBuilder
				.request(data, {
					timeout: this.requestTimeout,
					...opts,
				})
				.then(payload => {
					if (!isPlainObject(payload) || payload.jsonrpc !== HM_RPC) {
						return payload;
					}

					// Hmrpc
					const {error, result} = payload;
					if (error) {
						throw error;
					}

					return result;
				});
		},
		// 设备接口
		connect() {
			messageBuilder.connect(() => {
			});
			return this;
		},
		disConnect() {
			this.cancelAllRequest();
			this.offOnRequest();
			this.offOnCall();
			messageBuilder.disConnect(() => {
			});
			return this;
		},
		// 伴生服务接口
		start() {
			messageBuilder.listen(() => {
			});
			return this;
		},
		stop() {
			this.cancelAllRequest();
			this.offOnRequest();
			this.offOnCall();
			messageBuilder.disConnect(() => {
			});
			return this;
		},
	};
}

/* global Logger */

const messageBuilder = new MessageBuilder();

// @ts-ignore
const messaging$1 = wrapperMessage(messageBuilder, Logger.getLogger('message-builder-side'));

function addBaseURL(opts) {
  const params = {
    timeout: 10000,
    ...opts,
  };

  if (params.baseURL) {
    params.url = new URL(params.url, params.baseURL).toString();
  }

  return params
}

function messagingPlugin() {
  return {
    onInit() {
      this.messaging = messaging$1;
      this._onCall = this.onCall?.bind(this);
      this._onRequest = this.onRequest?.bind(this);
      this.messaging.onCall(this._onCall).onRequest(this.__onRequest.bind(this));

      this.messaging.start();
    },
    onDestroy() {
      if (this._onCall) {
        this.messaging.offOnCall(this._onCall);
      }

      if (this._onRequest) {
        this.messaging.offOnRequest(this._onRequest);
      }

      this.messaging.stop();
    },
    request(data, opts = {}) {
      return this.messaging.request(data, opts)
    },
    call(data) {
      return this.messaging.call(data)
    },
    __onRequest(req, res) {
      if (req.method === 'http.request') {
        return this.httpRequestHandler(req, res)
      } else {
        return this._onRequest(req, res)
      }
    },
    fetch(opt) {
      return fetch(addBaseURL(opt))
    },
    httpRequestHandler(req, res) {
      return this.fetch(req.params)
        .then((result) => {
          res(null, {
            status: result.status,
            statusText: result.statusText,
            headers: result.headers,
            body: result.body,
          });
        })
        .catch((e) => {
          return res({
            code: 1,
            message: e.message,
          })
        })
    },
  }
}

const settingsLib = {
  onChange(cb) {
    if (!cb) return this
    settings.settingsStorage.addListener('change', cb);
    return this
  },
  offChange() {
    settings.settingsStorage.removeListener('change');
    return this
  },
  getItem(i) {
    return settings.settingsStorage.getItem(i)
  },
  setItem(i, value) {
    return settings.settingsStorage.setItem(i, value)
  },
  clear() {
    return settings.settingsStorage.clear()
  },
  removeItem(i) {
    settings.settingsStorage.removeItem(i);
  },
  getAll() {
    return settings.settingsStorage.toObject()
  },
};

function settingsPlugin() {
  return {
    onInit() {
      this.settings = settingsLib;
      this._onSettingsChange = this.onSettingsChange?.bind(this);
      settingsLib.onChange(this._onSettingsChange);

      if (typeof sideService !== 'undefined') {
        if (sideService.launchReasons.settingsChanged) {
          this._onSettingsChange(sideService.launchArgs);
        }
      }
    },
    onDestroy() {
      if (this._onSettingsChange) {
        settingsLib.offChange(this._onSettingsChange);
      }
    },
  }
}

function BaseSideService(option) {
  const settingsPlug = settingsPlugin();
  const messagingPlug = messagingPlugin();
  const fileTransferPlug = fileTransferPlugin();
  downloadPlugin(option);
  convertPlugin(option);
  return {
    ...option,
    ...settingsPlug,
    ...messagingPlug,
    ...fileTransferPlug,
    onInit(opts) {
      settingsPlug.onInit.apply(this);
      messagingPlug.onInit.apply(this);
      fileTransferPlug.onInit.apply(this);
      option.onInit?.apply(this, opts);
    },
    onDestroy(opts) {
      option.onDestroy?.apply(this, opts);
      fileTransferPlug.onDestroy.apply(this);
      messagingPlug.onDestroy.apply(this);
      settingsPlug.onDestroy.apply(this);
    },
  }
}

export { BaseSideService, convertLib, settingsLib };
