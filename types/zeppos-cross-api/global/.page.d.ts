declare namespace Page {
  interface Option {
      /**
       * @zh page 实例上挂载的数据对象，可用于存储当前页面的状态
       * @en A data object mounted on a page instance that can be used to store the state of the current page
       */
      state?: any;
      /**
       * @zh 页面初始化完成时触发，每个页面只触发一次，可以用来初始化 page 状态。如果是通过 router 模块中相关方法打开页面，并且携带 params 参数，则在 onInit 方法中可以获取到 params 字符串
       * @en It is triggered once per page and can be used to initialize the page state. If the page is opened by the relevant method in the router module with params parameters, the params string can be retrieved in the onInit method
       */
      onInit?: (params?: string) => void;
      /**
       * @zh 在 `onInit` 执行完成后触发，推荐在 `build` 生命周期中进行 UI 绘制
       * @en Triggered after `onInit` execution completes, recommended for UI drawing in the `build` lifecycle
       */
      build?: (params?: string) => void;
      /**
       * @zh 页面销毁时触发 `onDestroy` 生命周期函数
       * @en The `onDestroy` lifecycle function is triggered when the page is destroyed
       */
      onDestroy?: () => void;
      [key: string]: any;
  }

  /**
   * @zh Page 实例
   * @en Page instance
   */
  type Result = unknown;
}

/**
* @zh 注册小程序中的一个页面，指定当前页面的生命周期回调等。每个页面文件都必须调用 `Page()` 构造函数且只能调用一次
* @en Register a page in the Mini Program, specify the lifecycle callback for the current page, etc. Each page file must call the `Page()` constructor only once
* @example
* ```js title="page.js"
* Page({
*   state: {
*     text: 'Hello Zepp OS'
*   },
*   onInit() {
*     console.log('onInit')
*   },
*   build() {
*     console.log('build')
*     console.log(this.state.text)
*   }
* })
* ```
*/
declare function Page(option: Page.Option): Page.Result;

declare namespace getCurrentPage {
  /**
   * @zh page 实例
   * @en page instance
   * @output
   */
  interface Result {
      /**
       * @zh page 实例属性
       * @en page instance property
       */
      _options: Options;
  }

  interface Options {
      /**
       * @zh Page 构造函数上传入的其他属性
       * @en Other properties passed in on the Page constructor
       */
      [propName: string]: any;
      /**
       * @zh page 实例上的挂载的数据对象
       * @en mounted data objects on page instances
       */
      state?: object;
  }
}

/**
* @zh 获取 page 实例对象
* @en Get the page instance object
* @example
* ```js title="page.js"
* Page({
*   state: {
*     text: 'Hello Zepp OS'
*   },
*   onInit() {
*     console.log('onInit')
*   },
*   build() {
*     console.log('build')
*     console.log(this.state.text)
*   }
* })
*
* const page = getCurrentPage()
* console.log(page._options.state.text)
* ```
*/
declare function getCurrentPage(): getCurrentPage.Result;