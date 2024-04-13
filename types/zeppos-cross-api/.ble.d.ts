/**
  * @zh BLE
  * @en BLE
  */
declare module 'zeppos-cross-api/ble' {

  namespace mstStartScan {
    /**
     * @zh 接收扫描结果回调函数
     * @en Callback function for receiving scan results
     */
    type Callback = (result: ScanResult, filter?: Filter) => void;

    /**
     * @output
     */
    interface ScanResult {
      /**
       * @zh 设备名称
       * @en Device name
       */
      dev_name: string;
      /**
       * @zh 设备 MAC 地址，长度 6 字节，建议使用 Uint8Array 视图
       * @en Device MAC address, 6 bytes long, Uint8Array view recommended
       */
      dev_addr: ArrayBuffer;
      /**
       * @zh RSSI 信号强度
       * @en RSSI Signal Strength
       */
      rssi: number;
      /**
       * @zh 广播数据中的 Service UUID 数组
       * @en Service UUID array in broadcast data
       */
      service_uuid_array: Array<string>;
      /**
       * @zh 广播数据中的 Service 数据对象数组
       * @en Array of Service Data Objects in Broadcast Data
       */
      service_data_array: Array<ServiceData>;
    }

    /**
     * @output
     */
    interface ServiceData {
      /**
       * @zh Service UUID
       * @en Service UUID
       */
      uuid: string;
      /**
       * @zh Service 数据
       * @en Service data
       */
      service_data: ArrayBuffer;
    }

    interface Filter {
      /**
       * @zh 设备名称
       * @en Device name
       */
      device_name?: string;
      /**
       * @zh 设备名称匹配是否采用模糊模式
       * @en Whether to use fuzzy mode for device name matching
       */
      fuzzy_mode?: string;
      /**
       * @zh Service UUID
       * @en Service UUID
       */
      service_uuid?: string;
      /**
       * @zh Service 数据 UUID
       * @en Service data UUID
       */
      service_data_uuid?: string;
      /**
       * @zh 设备商 ID
       * @en Manufacturer ID
       */
      manufacturer_id?: number;
    }

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 扫描并发现蓝牙外围设备，可以根据 filter 条件进行过滤
   * @en Scan and discover Bluetooth peripherals, which can be filtered according to filter conditions
   * @version 3.0
   * @example
   * ```js
   * import { mstStartScan } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstStartScan(
    callback: mstStartScan.Callback,
    filter?: mstStartScan.Filter
  ): mstStartScan.Result;
  namespace mstStopScan {
    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 停止设备扫描，与 `mstStartScan` 配套使用
   * @en Stop device scanning, used in conjunction with `mstStartScan`
   * @version 3.0
   * @example
   * ```js
   * import { mstStopScan } from 'zeppos-cross-api/ble'
   *
   * mstStopScan()
   * ```
   */
  function mstStopScan(): mstStopScan.Result;
  namespace mstConnect {
    /**
     * @zh 设备 MAC 地址，长度 6 字节，建议使用 Uint8Array 视图
     * @en Device MAC address, 6 bytes long, Uint8Array view recommended
     */
    type DeviceAddress = ArrayBuffer;

    /**
     * @zh 连接结果回调函数
     * @en Connection result callback function
     */
    type Callback = (result: ConnectResult) => void;

    /**
     * @output
     */
    interface ConnectResult {
      /**
       * @zh 连接状态，`0` - 连接成功、`1` - 连接失败、`2` - 断连
       * @en Connection status, `0` - successful connection, `1` - failed connection, `2` - disconnected
       */
      connected: number;
      /**
       * @zh 连接成功时返回连接的 ID
       * @en The ID of the connection is returned when the connection is successful
       */
      connect_id: number;
      /**
       * @zh 设备 MAC 地址，长度 6 字节，建议使用 Uint8Array 视图
       * @en Device MAC address, 6 bytes long, Uint8Array view recommended
       */
      dev_addr: ArrayBuffer;
    }

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 连接设备
   * @en Connecting Devices
   * @version 3.0
   * @example
   * ```js
   * import { mstConnect } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstConnect(
    deviceAddress: mstConnect.DeviceAddress,
    callback: mstConnect.Callback
  ): mstConnect.Result;
  namespace mstDisconnect {
    /**
     * @zh 使用 `mstConnect` API 连接成功时返回的连接 ID
     * @en The connection ID returned when the connection is successful using the `mstConnect` API
     */
    type ConnectId = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 断开设备连接
   * @en Disconnecting devices
   * @version 3.0
   * @example
   * ```js
   * import { mstDisconnect } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstDisconnect(connectId: mstDisconnect.ConnectId): mstDisconnect.Result;
  namespace mstPair {
    /**
     * @zh 使用 `mstConnect` API 连接成功时返回的连接 ID
     * @en The connection ID returned when the connection is successful using the `mstConnect` API
     */
    type ConnectId = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 通过 `connectId` 与设备进行配对
   * @en Pairing with devices via `connectId`
   * @version 3.0
   * @example
   * ```js
   * import { mstPair } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstPair(connectId: mstPair.ConnectId): mstPair.Result;
  namespace mstGetConnIdByRemoteAddr {
    /**
     * @zh 设备 MAC 地址，长度 6 字节，建议使用 Uint8Array 视图
     * @en Device MAC address, 6 bytes long, Uint8Array view recommended
     */
    type DeviceAddress = ArrayBuffer;

    /**
     * @zh 函数调用结果，查询成功返回 `connectId`，查询失败返回 `undefined`
     * @en The result of the function call returns `connectId` for a successful query and `undefined` for a failed query.
     */
    type Result = number | undefined;
  }

  /**
   * @zh 根据从机 MAC 地址查询连接 Id
   * @en Look up the connection Id based on the Peripheral MAC address
   * @version 3.0
   * @example
   * ```js
   * import { mstGetConnIdByRemoteAddr } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstGetConnIdByRemoteAddr(
    deviceAddress: mstGetConnIdByRemoteAddr.DeviceAddress
  ): mstGetConnIdByRemoteAddr.Result;
  namespace mstBuildProfile {
    interface ProfileObj {
      /**
       * @zh 是否自动配对
       * @en Whether to pair automatically
       */
      pair: boolean;
      /**
       * @zh 连接 ID
       * @en Connection ID
       */
      id: number;
      /**
       * @zh Profile 名称
       * @en Profile Name
       */
      profile: string;
      /**
       * @zh 设备 MAC 地址，长度 6 字节，建议使用 Uint8Array 视图
       * @en Device MAC address, 6 bytes long, Uint8Array view recommended
       */
      dev: ArrayBuffer;
      /**
       * @zh `list` 数组长度
       * @en `list` array length
       */
      len: number;
      /**
       * @zh Services list 数组
       * @en Services list array
       */
      list: Array<ServicesObj>;
    }

    interface ServicesObj {
      /**
       * @zh `list` 数组长度
       * @en `list` array length
       */
      len: number;
      /**
       * @zh Service 数组
       * @en Service array
       */
      list: Array<ServiceObj>;
    }

    interface ServiceObj {
      /**
       * @zh Service UUID
       * @en Service UUID
       */
      uuid: string;
      /**
       * @zh 权限控制，默认 `0` 不控制
       * @en Permission control, default `0` No control
       * @defaultValue 0
       */
      permission?: number;
      /**
       * @zh Characteristic 数组长度
       * @en Characteristic array length
       */
      len1: number;
      /**
       * @zh Characteristic 数组
       * @en Characteristic length
       */
      list: Array<CharacteristicObj>;
    }

    interface CharacteristicObj {
      /**
       * @zh Characteristic UUID
       * @en Characteristic UUID
       */
      uuid: string;
      /**
       * @zh 权限控制，默认 `0` 不控制
       * @en Permission control, default `0` No control
       * @defaultValue 0
       */
      permission?: number;
      /**
       * @zh Descriptor 数组长度
       * @en Descriptor array length
       */
      len: number;
      /**
       * @zh Descriptor 数组
       * @en Descriptor array
       */
      list: Array<DescriptorObj>;
    }

    interface DescriptorObj {
      /**
       * @zh Descriptor UUID
       * @en Descriptor UUID
       */
      uuid: string;
      /**
       * @zh 权限控制，默认 `0` 不控制
       * @en Permission control, default `0` No control
       * @defaultValue 0
       */
      permission?: number;
    }

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 创建 Profile 连接
   * @en Creating a Profile connection
   * @version 3.0
   * @example
   * ```js
   * import { mstGetConnIdByRemoteAddr } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstBuildProfile(profile: mstBuildProfile.ProfileObj): mstBuildProfile.Result;
  namespace mstOnPrepare {
    /**
     * @zh 监听 prepare 事件回调函数
     * @en Listening to the prepare event callback function
     */
    type Callback = (profile: Profile, status: Status) => void;

    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh 状态，`0` 表示成功
     * @en Status, `0` indicates success
     */
    type Status = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 注册 prepare 操作回调函数
   * @en Register the prepare operation callback function
   * @version 3.0
   * @example
   * ```js
   * import { mstOnPrepare } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstOnPrepare(callback: mstOnPrepare.Callback): mstOnPrepare.Result;
  namespace mstOnCharaReadComplete {
    /**
     * @zh 读取 Characteristic 完成回调函数
     * @en Read Characteristic Completion Callback Function
     */
    type Callback = (profile: Profile, uuid: UUID, status: Status) => void;

    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh Characteristic UUID 字符串
     * @en Characteristic UUID string
     */
    type UUID = string;

    /**
     * @zh 状态，`0` 表示成功
     * @en Status, `0` indicates success
     */
    type Status = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 注册读取 Characteristic 完成回调函数
   * @en Register the read Characteristic completion callback function
   * @version 3.0
   * @example
   * ```js
   * import { mstOnCharaReadComplete } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstOnCharaReadComplete(
    callback: mstOnCharaReadComplete.Callback
  ): mstOnCharaReadComplete.Result;
  namespace mstOnCharaValueArrived {
    /**
     * @zh 读取 Characteristic 数据到达回调函数
     * @en Read Characteristic data to the callback function
     */
    type Callback = (profile: Profile, uuid: UUID, data: Data, status: Status) => void;

    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh Characteristic UUID 字符串
     * @en Characteristic UUID string
     */
    type UUID = string;

    /**
     * @zh 读取到的数据，使用 Uint8Array 视图读取
     * @en Reads the data using the Uint8Array view
     */
    type Data = ArrayBuffer;

    /**
     * @zh 状态，`0` 表示成功
     * @en Status, `0` indicates success
     */
    type Status = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 注册读取 Characteristic 数据到达回调函数
   * @en Register to read Characteristic data to the callback function
   * @version 3.0
   * @example
   * ```js
   * import { mstOnCharaValueArrived } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstOnCharaValueArrived(
    callback: mstOnCharaValueArrived.Callback
  ): mstOnCharaValueArrived.Result;
  namespace mstOnCharaWriteComplete {
    /**
     * @zh 写入 Characteristic 数据完成回调函数
     * @en Write Characteristic Data Completion Callback Function
     */
    type Callback = (profile: Profile, uuid: UUID, status: Status) => void;

    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh Characteristic UUID 字符串
     * @en Characteristic UUID string
     */
    type UUID = string;

    /**
     * @zh 状态，`0` 表示成功
     * @en Status, `0` indicates success
     */
    type Status = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 注册写入 Characteristic 数据完成回调函数
   * @en Register the Write Characteristic data completion callback function
   * @version 3.0
   * @example
   * ```js
   * import { mstOnCharaWriteComplete } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstOnCharaWriteComplete(
    callback: mstOnCharaWriteComplete.Callback
  ): mstOnCharaWriteComplete.Result;
  namespace mstOnDescValueArrived {
    /**
     * @zh 读取 Descriptor 数据到达回调函数
     * @en Read Descriptor data to the callback function
     */
    type Callback = (
      profile: Profile,
      uuid: UUID,
      descUUID: DescUUID,
      data: Data,
      status: Status
    ) => void;

    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh Characteristic UUID 字符串
     * @en Characteristic UUID string
     */
    type UUID = string;

    /**
     * @zh Descriptor UUID 字符串
     * @en Descriptor UUID string
     */
    type DescUUID = string;

    /**
     * @zh 读取到的数据，使用 Uint8Array 视图读取
     * @en Reads the data using the Uint8Array view
     */
    type Data = ArrayBuffer;

    /**
     * @zh 状态，`0` 表示成功
     * @en Status, `0` indicates success
     */
    type Status = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 注册读取 Descriptor 数据到达回调函数
   * @en Register the Read Descriptor data arrival callback function
   * @version 3.0
   * @example
   * ```js
   * import { mstOnDescValueArrived } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstOnDescValueArrived(
    callback: mstOnDescValueArrived.Callback
  ): mstOnDescValueArrived.Result;
  namespace mstOnDescWriteComplete {
    /**
     * @zh Descriptor 数据写入完成回调函数
     * @en Descriptor Data write completion callback function
     */
    type Callback = (profile: Profile, uuid: UUID, descUUID: DescUUID, status: Status) => void;

    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh Characteristic UUID 字符串
     * @en Characteristic UUID string
     */
    type UUID = string;

    /**
     * @zh Descriptor UUID 字符串
     * @en Descriptor UUID string
     */
    type DescUUID = string;

    /**
     * @zh 状态，`0` 表示成功
     * @en Status, `0` indicates success
     */
    type Status = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 注册 Descriptor 数据写入完成回调函数
   * @en Register Descriptor data write completion callback function
   * @version 3.0
   * @example
   * ```js
   * import { mstOnDescWriteComplete } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstOnDescWriteComplete(
    callback: mstOnDescWriteComplete.Callback
  ): mstOnDescWriteComplete.Result;
  namespace mstOnCharaNotification {
    /**
     * @zh Characteristic Notification 到达回调函数
     * @en Characteristic Notification arrives at the callback function
     */
    type Callback = (profile: Profile, uuid: UUID, data: Data, length: Length) => void;

    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh Characteristic UUID 字符串
     * @en Characteristic UUID string
     */
    type UUID = string;

    /**
     * @zh 读取到的数据，使用 Uint8Array 视图读取
     * @en It is recommended to use the Uint8Array view to read the data
     */
    type Data = ArrayBuffer;

    /**
     * @zh 数据长度
     * @en Data length
     */
    type Length = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 注册 Characteristic Notification 到达回调函数
   * @en Register Characteristic Notification to reach the callback function
   * @version 3.0
   * @example
   * ```js
   * import { mstOnCharaNotification } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstOnCharaNotification(
    callback: mstOnCharaNotification.Callback
  ): mstOnCharaNotification.Result;
  namespace mstOnServiceChangeBegin {
    /**
     * @zh Service 开始变更回调函数
     * @en Service start change callback function
     */
    type Callback = (profile: Profile) => void;

    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 注册 Service 开始变更回调函数
   * @en Register the Service start change callback function
   * @version 3.0
   * @example
   * ```js
   * import { mstOnServiceChangeBegin } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstOnServiceChangeBegin(
    callback: mstOnServiceChangeBegin.Callback
  ): mstOnServiceChangeBegin.Result;
  namespace mstOnServiceChangeEnd {
    /**
     * @zh Service 变更结束回调函数
     * @en Service change end callback function
     */
    type Callback = (profile: Profile) => void;

    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 注册 Service 变更结束回调函数
   * @en Register the Service change end callback function
   * @version 3.0
   * @example
   * ```js
   * import { mstOnServiceChangeEnd } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstOnServiceChangeEnd(
    callback: mstOnServiceChangeEnd.Callback
  ): mstOnServiceChangeEnd.Result;
  /**
   * @zh 注销所有注册的蓝牙相关回调函数
   * @en Unregister of all registered Bluetooth-related callback functions
   * @version 3.0
   * @example
   * ```js
   * import { mstOffAllCb } from 'zeppos-cross-api/ble'
   *
   * mstOffAllCb()
   * ```
   */
  function mstOffAllCb(): void;
  namespace mstPrepare {
    /**
     * @zh `mstBuildProfile` 返回的 `profile` 指针
     * @en The `profile` pointer returned by `mstBuildProfile`
     */
    type Profile = number;
  }

  /**
   * @zh prepare 接口
   * @en prepare interface
   * @version 3.0
   * @example
   * ```js
   * import { mstPrepare } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstPrepare(profile: mstPrepare.Profile): void;
  namespace mstReadCharacteristic {
    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh Characteristic UUID 字符串
     * @en Characteristic UUID string
     */
    type UUID = string;
  }

  /**
   * @zh 读 Characteristic 信息
   * @en Read Characteristic information
   * @version 3.0
   * @example
   * ```js
   * import { mstReadCharacteristic } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstReadCharacteristic(
    profile: mstReadCharacteristic.Profile,
    uuid: mstReadCharacteristic.UUID
  ): void;
  namespace mstWriteCharacteristic {
    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh Characteristic UUID 字符串
     * @en Characteristic UUID string
     */
    type UUID = string;

    /**
     * @zh 读取到的数据，使用 Uint8Array 视图读取
     * @en Reads the data using the Uint8Array view
     */
    type Data = ArrayBuffer;

    /**
     * @zh 数据长度
     * @en Data length
     */
    type Length = number;
  }

  /**
   * @zh 写 Characteristic 信息
   * @en Write Characteristic information
   * @version 3.0
   * @example
   * ```js
   * import { mstWriteCharacteristic } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstWriteCharacteristic(
    profile: mstWriteCharacteristic.Profile,
    uuid: mstWriteCharacteristic.UUID,
    data: mstWriteCharacteristic.Data,
    length: mstWriteCharacteristic.Length
  ): void;
  namespace mstReadDescriptor {
    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh Characteristic UUID 字符串
     * @en Characteristic UUID string
     */
    type UUID = string;

    /**
     * @zh Descriptor UUID 字符串
     * @en Descriptor UUID string
     */
    type DescUUID = string;
  }

  /**
   * @zh 写 characteristic 信息
   * @en Write characteristic information
   * @version 3.0
   * @example
   * ```js
   * import { mstReadDescriptor } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstReadDescriptor(
    profile: mstReadDescriptor.Profile,
    uuid: mstReadDescriptor.UUID,
    descUUID: mstReadDescriptor.DescUUID
  ): void;
  namespace mstWriteDescriptor {
    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;

    /**
     * @zh Characteristic UUID 字符串
     * @en Characteristic UUID string
     */
    type UUID = string;

    /**
     * @zh Descriptor UUID 字符串
     * @en Descriptor UUID string
     */
    type DescUUID = string;

    /**
     * @zh 读取到的数据，使用 Uint8Array 视图读取
     * @en Reads the data using the Uint8Array view
     */
    type Data = ArrayBuffer;

    /**
     * @zh 数据长度
     * @en Data length
     */
    type Length = number;

    /**
     * @zh 函数调用结果，`true` 表示成功、`false` 表示失败
     * @en The result of the function call, `true` means success, `false` means failure
     */
    type Result = boolean;
  }

  /**
   * @zh 注册 Characteristic notification 到达回调函数
   * @en Register the Characteristic notification arrival callback function
   * @version 3.0
   * @example
   * ```js
   * import { mstOnCharaNotification } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstWriteDescriptor(
    profile: mstWriteDescriptor.Profile,
    uuid: mstWriteDescriptor.UUID,
    descUUID: mstWriteDescriptor.DescUUID,
    data: mstWriteDescriptor.Data,
    length: mstWriteDescriptor.Length
  ): mstWriteDescriptor.Result;
  namespace mstDestroyProfileInstance {
    /**
     * @zh Profile 指针
     * @en Profile pointer
     */
    type Profile = number;
  }

  /**
   * @zh 销毁 Profile
   * @en Destroy Profile
   * @version 3.0
   * @example
   * ```js
   * import { mstDestroyProfileInstance } from 'zeppos-cross-api/ble'
   *
   * mstDestroyProfileInstance()
   * ```
   */
  function mstDestroyProfileInstance(profile: mstDestroyProfileInstance.Profile): void;
  namespace mstGetProfileInstance {
    /**
     * @zh Profile 名称
     * @en Profile name
     */
    type ProfileName = string;

    /**
     * @zh 连接成功时返回的 ID
     * @en The ID returned on a successful connection
     */
    type ConnectId = number;

    /**
     * @zh 查找成功返回 Profile 指针，失败返回 `undefined`
     * @en A successful search returns the Profile pointer, a failed search returns `undefined`
     */
    type Result = number | undefined;
  }

  /**
   * @zh 销毁 Profile
   * @en Destroy Profile
   * @version 3.0
   * @example
   * ```js
   * import { mstGetProfileInstance } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function mstGetProfileInstance(
    profileName: mstGetProfileInstance.ProfileName,
    connectId: mstGetProfileInstance.ConnectId
  ): mstGetProfileInstance.Result;
  namespace createConnect {
    /**
     * @zh 连接回调函数，`index` 分包号、`data` 数据、`size` 数据长度
     * @en Connection callback function, `index` packet number, `data` data, `size` data length
     */
    type Callback = (index?: number, data?: object, size?: number) => void;
  }

  /**
   * @zh 创建连接
   * @en Create connection
   * @example
   * ```js
   * import { createConnect } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function createConnect(callback: createConnect.Callback): void;
  /**
   * @zh 断开连接
   * @en Disconnect
   * @example
   * ```js
   * import { disConnect } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function disConnect(): void;
  /**
   * @zh 发送消息，`data` 待发送数据，`size` 待发送数据长度
   * @en Send message, `data` data to be sent, `size` length of data to be sent
   * @example
   * ```js
   * import { send } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function send(data: object, size: number): void;
  /**
   * @zh 查询连接状态，`true` 表示连接，`false` 表示未连接
   * @en Query connection status, `true` means connected, `false` means not connected
   * @example
   * ```js
   * import { connectStatus } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function connectStatus(): boolean;
  namespace addListener {
    /**
     * @zh 连接回调函数，`status` 连接状态
     * @en Connection callback function, `status` Connection status
     */
    type Callback = (status?: boolean) => void;
  }

  /**
   * @zh 注册连接状态监听回调函数
   * @en Registering connection status listening callback function
   * @example
   * ```js
   * import { addListener } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function addListener(callback: addListener.Callback): void;
  /**
   * @zh 取消连接状态监听回调函数
   * @en Cancel connection status listening callback function
   * @example
   * ```js
   * import { removeListener } from 'zeppos-cross-api/ble'
   *
   * // ...
   * ```
   */
  function removeListener(): void;
}
