/**
  * @zh 设备
  * @en Device
  */
declare module 'zeppos-cross-api/device' {

  /**
   * @zh 方形屏幕
   * @en Square Screen
   */
  const SCREEN_SHAPE_SQUARE: number;
  /**
   * @zh 圆形屏幕
   * @en Round Screen
   */
  const SCREEN_SHAPE_ROUND: number;
  namespace getDiskInfo {
    /**
     * @output
     */
    interface Result {
      /**
       * @zh 总空间（字节）
       * @en Total Space in bytes
       */
      total: number;
      /**
       * @zh 可用空间（字节）
       * @en Available Space in bytes
       */
      free: number;
      /**
       * @zh 小程序占用空间（字节）
       * @en Space occupied by Mini Programs in bytes
       */
      app: number;
      /**
       * @zh 表盘占用空间（字节）
       * @en Space occupied by watchfaces in bytes
       */
      watchface: number;
      /**
       * @zh 音乐占用空间（字节）
       * @en Space occupied by musics in bytes
       */
      music: number;
      /**
       * @zh 系统占用空间（字节）
       * @en Space occupied by system in bytes
       */
      system: number;
    }
  }

  /**
   * @zh 获取磁盘信息
   * @en Gets disk information
   * @example
   * ```js
   * import { getDiskInfo } from 'zeppos-cross-api/device'
   *
   * const { total } = getDiskInfo()
   * console.log(total)
   * ```
   */
  function getDiskInfo(): getDiskInfo.Result;
  namespace getDeviceInfo {
    /**
     * @output
     */
    interface Result {
      /**
       * @zh 设备屏幕宽度
       * @en Device screen width
       */
      width: number;
      /**
       * @zh 设备屏幕高度
       * @en Device screen height
       */
      height: number;
      /**
       * @zh 屏幕形状，值参考屏幕形状常量
       * @en Screen shape, value refer to screen shape constants
       */
      screenShape: number;
      /**
       * @zh 设备名称
       * @en Device name
       */
      deviceName: string;
      /**
       * @zh 按键数目
       * @en Number of keys
       */
      keyNumber: number;
      /**
       * @zh 设备纯数字代号
       * @en Device Plain Numeric Designators
       */
      deviceSource: number;
      /**
       * @zh 设备实体按键类型
       * @en Device physical button type
       */
      keyType: string;
      /**
       * @zh 设备颜色标识
       * @en Device color identification
       */
      deviceColor: number;
    }
  }

  /**
   * @zh 获取设备信息
   * @en Gets device information
   * @constants screenShape
   * @permissionCode data:os.device.info
   * @example
   * ```js
   * import { getDeviceInfo, SCREEN_SHAPE_SQUARE } from 'zeppos-cross-api/device'
   *
   * const { width, screenShape } = getDeviceInfo()
   * console.log(width)
   *
   * if (screenShape === SCREEN_SHAPE_SQUARE) {
   *   console.log('Square Screen')
   * }
   * ```
   */
  function getDeviceInfo(): getDeviceInfo.Result;
}
