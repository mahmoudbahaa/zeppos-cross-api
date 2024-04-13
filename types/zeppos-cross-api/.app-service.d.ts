/**
  * @zh 设备应用服务
  * @en App Service
  */
declare module 'zeppos-cross-api/app-service' {

  namespace start {
    interface Option {
      /**
       * @zh 设备应用服务 js 文件，必须是在 app.json module 中 app-service 字段配置的文件
       * @en The App Service js file must be the one configured in the module app-service in app.json
       */
      file: string;
      /**
       * @zh 设备应用服务 js 文件加载时，传入的参数
       * @en Parameters passed in when the js file is loaded by the backend service
       */
      param?: string;
      /**
       * @zh 设备应用服务启动完成回调函数
       * @en Callback function for the completion of the backend service start
       */
      complete_func: (callbackOption: CallbackOption) => void;
    }

    /**
     * @output
     */
    interface CallbackOption {
      /**
       * @zh 设备应用服务 js 文件，与 `start` 传入参数相同
       * @en App service js file, same as `start` incoming parameters
       */
      file: string;
      /**
       * @zh 设备应用服务启动结果，`true` 代表成功，`false` 代表失败
       * @en App service start result, `true` means success, `false` means failure
       */
      result: boolean;
    }

    /**
     * @zh 如果返回 `0` 则表明设备应用服务启动成功，其余值的含义参考 ERROR_CODE
     * @en If `0` is returned, The App Service was started successfully.
     */
    type Result = boolean;

    /**
     * @output
     * @enum
     */
    interface ERROR_CODE {
      /**
       * @zh 成功
       * @en Success
       */
      0: number;
      /**
       * @zh 参数错误
       * @en Parameter error
       */
      1: number;
      /**
       * @zh 服务状态错误
       * @en Service Status Error
       */
      2: number;
      /**
       * @zh 无权限
       * @en No Permission
       */
      3: number;
      /**
       * @zh 内存不足
       * @en Out Of Memory
       */
      4: number;
      /**
       * @zh 不支持
       * @en Not Supported
       */
      5: number;
      /**
       * @zh 服务被禁止
       * @en Prohibited
       */
      6: number;
      /**
       * @zh 服务数量已达系统限制
       * @en The number of services has reached the system limit
       */
      7: number;
      /**
       * @zh 未知错误
       * @en Unknown Error
       */
      255: number;
    }
  }

  /**
   * @zh 启动指定的设备应用服务，启动结果通过回调函数返回
   * @en Start the specified App service, return the result through the callback function
   * @permissionCode device:os.bg_service
   * @version 3.0
   * @example
   * ```js
   * import { start } from 'zeppos-cross-api/app-service'
   * ```
   */
  function start(option: start.Option): start.Result;
  namespace stop {
    interface Option {
      /**
       * @zh 设备应用服务 js 文件，必须是在 app.json 中 service module 中配置的文件
       * @en The App Service js file must be the one configured in the service module in app.json
       */
      file: string;
      /**
       * @zh 设备应用服务关闭完成回调函数
       * @en Callback function for the completion of the backend service stop
       */
      complete_func: (callbackOption: CallbackOption) => void;
    }

    /**
     * @output
     */
    interface CallbackOption {
      /**
       * @zh 设备应用服务 js 文件，与 `stop` 传入参数相同
       * @en App service js file, same as `stop` incoming parameters
       */
      file: string;
      /**
       * @zh 设备应用服务关闭结果，`true` 代表成功，`false` 代表失败
       * @en App service stop result, `true` means success, `false` means failure
       */
      result: boolean;
    }

    /**
     * @zh 如果返回 `0` 则表明设备应用服务关闭成功
     * @en If `0` is returned, The App Service is closed successfully
     */
    type Result = boolean;
  }

  /**
   * @zh 关闭指定的设备应用服务，异步调用，关闭结果通过回调函数返回
   * @en Shutdown the specified backend service, called asynchronously, with the shutdown result returned via a callback function
   * @permissionCode device:os.bg_service
   * @version 3.0
   * @example
   * ```js
   * import { stop } from 'zeppos-cross-api/app-service'
   * ```
   */
  function stop(option: stop.Option): stop.Result;
  namespace getAllAppServices {
    /**
     * @zh 获取当前正在运行的设备应用服务列表
     * @en Get the list of currently running App services
     */
    type Result = Array<string>;
  }

  /**
   * @zh 获取当前应用在运行的设备应用服务列表，用于查询服务状态
   * @en Get the list of running App services, used to query the service status
   * @permissionCode device:os.bg_service
   * @version 3.0
   * @example
   * ```js
   * import { getAllAppServices } from 'zeppos-cross-api/app-service'
   *
   * const serviceList = getAllAppServices()
   * console.log(serviceList)
   * ```
   */
  function getAllAppServices(): getAllAppServices.Result;
  /**
   * @zh 在设备应用服务中调用，会退出该服务，不会影响前台页面
   * @en Called in The App Service, it will exit the service and will not affect the foreground page
   * @permissionCode device:os.bg_service
   * @version 3.0
   * @example
   * ```js
   * import { exit } from 'zeppos-cross-api/app-service'
   *
   * exit()
   * ```
   */
  function exit(): void;
}
