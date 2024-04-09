/**
  * @zh 小程序
  * @en Mini Program related
  */
declare module '@zos/app' {

  /**
   * @zh 在小程序内
   * @en In Mini Program
   */
  const SCENE_APP: number;
  /**
   * @zh 在表盘主界面
   * @en In watchface interface
   */
  const SCENE_WATCHFACE: number;
  /**
   * @zh 在小程序配置或者表盘编辑页面
   * @en In the Mini Program configuration or dial edit page
   */
  const SCENE_SETTINGS: number;
  /**
   * @zh 在息屏界面
   * @en In the rest screen screen
   */
  const SCENE_AOD: number;
  namespace getPackageInfo {
    /**
     * @zh 此处不一一列举，请参考 `app.json` 中字段
     * @en Please see the fields in `app.json` for more details
     */
    type Result = any;
  }

  /**
   * @zh 获取小程序配置 `app.json` 中的部分字段
   * @en Get some of the fields in the Mini Program configuration `app.json`
   * @example
   * ```js
   * import { getPackageInfo } from '@zos/app'
   *
   * const packageInfo = getPackageInfo()
   * console.log(packageInfo.name)
   * ```
   */
  function getPackageInfo(): getPackageInfo.Result;
  namespace getScene {
    /**
     * @zh 当前小程序运行的场景，值参考场景常量
     * @en The current scene in which the Mini Program is running, value reference scene constants
     */
    type Result = number;
  }

  /**
   * @zh 获取当前小程序运行的场景
   * @en Get the current scene where the Mini Program is running
   * @constants scene
   * @example
   * ```js
   * import { getScene, SCENE_APP } from '@zos/app'
   *
   * const result = getScene()
   *
   * if (result === SCENE_APP) {
   *   console.log('in Mini Program')
   * }
   * ```
   */
  function getScene(): getScene.Result;
  namespace queryPermission {
    interface Option {
      /**
       * @zh 权限字符串数组，数组长度至少为 `1`
       * @en An array of permission strings, with an array length of at least `1`
       */
      permissions: Array<string>;
    }

    /**
     * @zh 权限查询结果数组，与 `permissions` 数组顺序一一对应，`0`: 未授权、`1`: 未知权限、`2`：已授权
     * @en Permissions query result array, corresponding to the order of `permissions` array, `0`: not authorized, `1`: unknown permissions, `2`: authorized
     */
    type Result = Array<number>;
  }

  /**
   * @zh 查询小程序权限的授权状态
   * @en Check the authorization status of Mini Program permissions
   * @version 3.0
   * @example
   * ```js
   * import { queryPermission } from '@zos/app'
   *
   * const result = queryPermission()
   * console.log(result)
   * ```
   */
  function queryPermission(option: queryPermission.Option): queryPermission.Result;
  namespace requestPermission {
    interface Option {
      /**
       * @zh 权限字符串数组，数组长度至少为 `1`
       * @en An array of permission strings, with an array length of at least `1`
       */
      permissions: Array<string>;
      /**
       * @zh 权限申请结果回调函数
       * @en Permission request result callback function
       */
      function: (result: Array<number>) => void;
    }

    /**
     * @zh 方法结果值，值描述见 `result`
     * @en Method result value. See 'result' for a description
     */
    type Result = number;

    /**
     * @output
     * @enum
     */
    interface result {
      /**
       * @zh 授权处理中，将触发用户交互，并在回调函数中告知用户授权结果
       * @en In authorization processing, user interaction will be triggered, and the user will be informed of the authorization result in the callback function
       */
      0: number;
      /**
       * @zh 没有可以授权的权限
       * @en There are no authorization requests that can be made
       */
      1: number;
      /**
       * @zh 所申请接口已经获得授权，可以立即调用
       * @en The requested interface is authorized and can be called immediately
       */
      2: number;
    }
  }

  /**
   * @zh 动态权限申请，当查询某个动态权限尚未授权时，可使用该接口申请相关权限。一般在使用系统相关功能接口（如启用设备应用服务的接口）前，做相关权限的检查和申请，否则功能接口会因权限问题不被允许执行
   * @en Dynamic permission application, when querying a dynamic permission has not been authorized, you can use this interface to apply for the relevant permission. Generally, before using the system-related functional interface (such as the interface to enable app services), do the relevant permission check and application, otherwise the functional interface will not be allowed to execute due to the permission issue
   * @version 3.0
   * @example
   * ```js
   * import { requestPermission } from '@zos/app'
   *
   * const result = requestPermission({
   *   permissions: ['device:os.bg_service'],
   *   function: (result) => {
   *     console.log(result)
   *   }
   * })
   * console.log(result)
   * ```
   */
  function requestPermission(option: requestPermission.Option): requestPermission.Result;
  namespace emitCustomSystemEvent {
    interface Option {
      /**
       * @zh 自定义事件名称，需要满足 `event.customize.${event}` 的命名约定
       * @en Customize event names that meet the naming convention of 'event.customize.${event}'
       */
      eventName: string;
      /**
       * @zh 自定义事件参数
       * @en Custom event parameters
       */
      eventParam: string;
    }
  }

  /**
   * @zh 小程序可以自定义系统事件，并可以主动派发该自定义系统事件
   * @en The Mini Program can customize the system events and can actively dispatch the custom system events
   * @version 3.0
   * @example
   * ```js
   * import { emitCustomSystemEvent } from '@zos/app'
   *
   * emitCustomSystemEvent('event.customize.test')
   * ```
   */
  function emitCustomSystemEvent(option: emitCustomSystemEvent.Option): void;
}
