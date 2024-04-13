
declare namespace AppWidget {
  interface Option {
      /**
       * @zh AppWidget 快捷卡片实例上挂载的数据对象，可用于存储状态
       * @en A data object mounted on a AppWidget instance that can be used to store the state of the current AppWidget
       */
      state?: object;
      /**
       * @zh 初始化完成时触发，只触发一次，可以用来初始化 AppWidget 状态
       * @en It is triggered once per AppWidget and can be used to initialize the AppWidget state
       */
      onInit?: (params?: string) => void;
      /**
       * @zh 在 `onInit` 执行完成后触发，推荐在 `build` 生命周期中进行 UI 绘制
       * @en Triggered after `onInit` execution completes, recommended for UI drawing in the `build` lifecycle
       */
      build?: (params?: string) => void;
      /**
       * @zh 当屏幕焦点聚焦在此快捷卡片上时触发
       * @en Triggered when the screen focus is on this AppWidget
       */
      onResume?: () => void;
      /**
       * @zh 当屏幕焦点离开此快捷卡片上时触发
       * @en Triggered when the screen focus leaves this AppWidget
       */
      onPause?: () => void;
      /**
       * @zh 销毁时触发 `onDestroy` 生命周期函数
       * @en The `onDestroy` lifecycle function is triggered when the AppWidget is destroyed
       */
      onDestroy?: () => void;
  }

  /**
   * @zh AppWidget 实例
   * @en AppWidget instance
   */
  type Result = unknown;
}

/**
* @zh 注册快捷卡片，指定当前页面的生命周期回调等。每个快捷卡片都必须调用 `AppWidget()` 构造函数且只能调用一次
* @en Register AppWidget, specify the lifecycle callback for the current AppWidget, etc. Each AppWidget file must call the `AppWidget()` constructor only once
* @example
* ```js title="appWidget.js"
* AppWidget({
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
declare function AppWidget(option: AppWidget.Option): AppWidget.Result;