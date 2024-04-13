

declare namespace SecondaryWidget {
  interface Option {
      /**
       * @zh SecondaryWidget 副屏应用实例上挂载的数据对象，可用于存储状态
       * @en A data object mounted on a SecondaryWidget instance that can be used to store the state of the current SecondaryWidget
       */
      state?: object;
      /**
       * @zh 初始化完成时触发，只触发一次，可以用来初始化 SecondaryWidget 状态
       * @en It is triggered once per SecondaryWidget and can be used to initialize the SecondaryWidget state
       */
      onInit?: (params?: string) => void;
      /**
       * @zh 在 `onInit` 执行完成后触发，推荐在 `build` 生命周期中进行 UI 绘制
       * @en Triggered after `onInit` execution completes, recommended for UI drawing in the `build` lifecycle
       */
      build?: (params?: string) => void;
      /**
       * @zh 当屏幕焦点聚焦在此副屏应用上时触发
       * @en Triggered when the screen focus is on this SecondaryWidget
       */
      onResume?: () => void;
      /**
       * @zh 当屏幕焦点离开此副屏应用上时触发
       * @en Triggered when the screen focus leaves this SecondaryWidget
       */
      onPause?: () => void;
      /**
       * @zh 销毁时触发 `onDestroy` 生命周期函数
       * @en The `onDestroy` lifecycle function is triggered when the SecondaryWidget is destroyed
       */
      onDestroy?: () => void;
  }

  /**
   * @zh SecondaryWidget 实例
   * @en SecondaryWidget instance
   */
  type Result = unknown;
}

/**
* @zh 注册副屏应用，指定当前页面的生命周期回调等。每个副屏应用都必须调用 `SecondaryWidget()` 构造函数且只能调用一次
* @en Register SecondaryWidget, specify the lifecycle callback for the current SecondaryWidget, etc. Each SecondaryWidget file must call the `SecondaryWidget()` constructor only once
* @example
* ```js title="secondaryWidget.js"
* SecondaryWidget({
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
declare function SecondaryWidget(option: SecondaryWidget.Option): SecondaryWidget.Result;
