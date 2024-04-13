declare namespace NMessageBuilder {
  class MessageBuilder {
    constructor(options?: { appId: number, appDevicePort?: number, appSidePort?: number })

    /**
     * @zh 为 `eventName` 对应的的监听器数组中添加一个事件监听器
     * @en Adds the listener function to the end of the listeners array for the event named eventName
     */
    on(eventName: string, listener: (...args: any[]) => void): void
    /**
     * @zh 移除 `eventName` 对应的的监听器数组中的一个事件监听器
     * @en Removes the specified listener from the listener array for the event named eventName
     */
    off(eventName: string, listener: (...args: any[]) => void): void
    /**
     * @zh 触发 `eventName` 对应的的监听器数组中的所有事件监听器
     * @en Triggers the listener functions for the event named eventName
     */
    emit(eventName: string, ...args: any[]): void
    /**
     * @zh 获取对应 `eventName` 对应的注册事件监听器的数量。不传递 `eventName` 则获取所注册 `eventName` 种类的数量
     * @en Gets the number of registered event listeners corresponding to `eventName`. If `eventName` is not passed, get the number of registered `eventName` types
     */
    count(eventName?: string): number

    connect (cb: (MessageBuilder) => void): void
    disConnect (cb: (MessageBuilder) => void): void
    listen (cb: (MessageBuilder) => void): void
    request (data: object | Buffer | ArrayBuffer | ArrayBufferLike, opts: any): Promise<any>
    buf2Json (buf: ArrayBuffer): object
    json2Buf (json: object): ArrayBuffer
    response ({ requestId, contentType, dataType, data }): void
    call (data: object | Buffer): void

    // getMessageSize(): number
    // getMessagePayloadSize(): number
    // getMessageHeaderSize (): number
    // now (t?: number): number
    // buildBin (data: any): Buffer
    // buildShake (): Buffer
    // sendShake (): void
    // buildClose (): Buffer
    // sendClose (): void
    // readBin (arrayBuf: ArrayBuffer): { flag: number, version: number, type: number, port1: number, port2: number, appId: number, extra: number, payload: Uint8Array}
    // // opts 覆盖头部选项
    // buildData (payload, opts = {}): Buffer
    // sendBin (buf: Buffer, debug?: boolean): void
    // sendBinBySide (buf: Buffer, debug?: boolean): void
    // // 通用获取逻辑
    // getSafeSend (): void
    // // 大数据的复杂头部分包协议
    // sendHmProtocol ({ requestId, dataBin, type, contentType, dataType }, { messageType = MessageType.Data } = {}): void
    // // 大数据的简单分包协议
    // sendSimpleProtocol ({ dataBin }, { messageType = MessageType.Data } = {}): void
    // sendJson ({ requestId = 0, json, type = MessagePayloadType.Request, contentType, dataType }): void
    // sendBuf ({ requestId = 0, buf, type = MessagePayloadType.Request, contentType, dataType }): void
    // sendLog (str: string): void
    // sendDataWithSession ({ traceId, spanId, seqId, payload, type, opCode, totalLength, contentType, dataType }, { messageType }): void
    // sendSimpleData ({ payload }, { messageType }): void
    // buildPayload (data): Buffer
    // readPayload (arrayBuf: ArrayBuffer): {
    //   traceId: number,
    //   parentId: number,
    //   spanId: number,
    //   seqId: number,
    //   totalLength: number,
    //   payloadLength: number,
    //   payloadType: number,
    //   opCode: number,
    //   contentType: number,
    //   dataType: number,
    //   timestamp1: number,
    //   timestamp2: number,
    //   timestamp3: number,
    //   timestamp4: number,
    //   timestamp5: number,
    //   timestamp6: number,
    //   timestamp7: number,
    //   extra1: number,
    //   extra2: number,
    //   extra3: number,
    //   payload: Uint8Array
    // }
    // onFragmentData (bin): void
    // errorIfBleDisconnect (): void
    // onMessage (messagePayload): void
    // requestCb (data, opts, cb): Promise<void>
  }
}

declare module 'zeppos-cross-api/message' {
  class MessageBuilder extends NMessageBuilder.MessageBuilder { }
}

declare module 'zeppos-cross-api/message-side' {
  class MessageBuilder extends NMessageBuilder.MessageBuilder { }
}

