

declare namespace AppService {
  interface Option {
      /**
       * @zh appService 实例上挂载的数据对象，可用于存储当前服务的状态
       * @en A data object mounted on the appService instance that can be used to store the current state of the service
       */
      state?: object;
      /**
       * @zh 启动服务的时候触发该函数，如果启动服务携带 params 参数，则在 onInit 方法中可以获取到 params 字符串
       * @en This function is triggered when the service is started. If the service is started with params, the params string can be obtained in the onInit method
       */
      onInit?: (params?: string) => void;
      /**
       * @zh 服务销毁时触发 `onDestroy` 生命周期函数
       * @en The `onDestroy` lifecycle function is triggered when the service is destroyed
       */
      onDestroy?: () => void;
  }

  /**
   * @zh AppService 实例
   * @en AppService instance
   */
  type Result = unknown;
}

/**
* @zh 注册设备应用服务，指定当前服务的生命周期回调等。每个设备应用服务都必须调用 `AppService()` 构造函数且只能调用一次
* @en Register a page in the Mini Program, specify the lifecycle callback for the current page, etc. Each page file must call the `Page()` constructor only once
* @permissionCode device:os.bg_service
* @version 3.0
* @example
* ```js title="appService.js"
* AppService({
*   state: {
*     text: 'Hello Zepp OS'
*   },
*   onInit() {
*     console.log('onInit')
*   }
* })
* ```
*/
declare function AppService(option: AppService.Option): AppService.Result;
