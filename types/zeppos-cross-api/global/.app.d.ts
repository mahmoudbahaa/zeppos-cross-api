declare namespace App {
  interface Option {
      /**
       * @zh App 实例上的挂载的数据对象，可用于存储小程序全局状态
       * @en Mounted data objects on App instances that can be used to store the global state of the Mini Program
       */
      globalData?: object;
      /**
       * @zh App onCreate 生命周期函数，如果是通过 router 模块中相关方法打开小程序，并且携带 params 参数，则在 onCreate 方法中可以获取到 params 字符串
       * @en Mounted data objects on App instances that can be used to store the global state of the Mini Program
       */
      onCreate?: (params?: string) => void;
      /**
       * @zh 小程序销毁时触发 `onDestroy` 生命周期函数
       * @en The `onDestroy` lifecycle function is triggered when the Mini Program is destroyed
       */
      onDestroy?: () => void;
  }

  /**
   * @zh App 实例
   * @en App instance
   */
  type Result = unknown;
}

/**
* @zh 注册小程序，指定小程序的生命周期回调等。`App()` 必须在 `app.js` 中调用，且只能调用一次
* @en Register the Mini Program, specifying the Mini Program's lifecycle callbacks, etc. `App()` must be called in `app.js`, and can only be called once
* @example
* ```js title="app.js"
* App({
*   globalData: {
*     text: 'Hello Zepp OS'
*   },
*   onCreate() {
*     console.log('onCreate')
*     console.log(this.globalData.text)
*   },
*   onDestroy() {
*     console.log('onDestroy')
*   }
* })
* ```
*/
declare function App(option: App.Option): App.Result;

declare namespace getApp {
  /**
   * @zh App 实例
   * @en App instance
   * @output
   */
  interface Result {
      /**
       * @zh app 实例属性
       * @en app instance property
       */
      _options: Options;
  }

  /**
   * @zh app 实例属性
   * @en app instance property
   * @output
   */
  interface Options {
      /**
       * @zh App 构造函数上传入的其他属性
       * @en Other properties passed in on the App constructor
       */
      [propName: string]: any;
      /**
       * @zh app 实例上的挂载的数据对象
       * @en mounted data objects on app instances
       */
      globalData?: any;
  }
}

/**
* @zh 获取 app 实例对象
* @en Get the app instance object
* @example
* ```js
* App({
*   globalData: {
*     text: 'Hello Zepp OS'
*   },
*   onCreate() {
*     console.log('onCreate')
*     console.log(this.globalData.text)
*   },
*   onDestroy() {
*     console.log('onDestroy')
*   }
* })
*
* const app = getApp()
* console.log(app._options.globalData.text)
* ```
*/
declare function getApp(): getApp.Result;