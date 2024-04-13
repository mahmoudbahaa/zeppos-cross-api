/**
  * @zh 系统通知
  * @en Notification
  */


declare module 'zeppos-cross-api/notification' {

  namespace notify {
    interface Option {
      /**
       * @zh 通知标题文本
       * @en Notice title text
       */
      title: string;
      /**
       * @zh 通知内容文本
       * @en Text of the notice
       */
      content: string;
      /**
       * @zh 定制按钮数组
       * @en Custom button arrays
       */
      actions: Array<Action>;
    }

    interface Action {
      /**
       * @zh 按钮文本
       * @en Button Text
       */
      text: string;
      /**
       * @zh 按钮点击要启动的「设备应用服务」文件
       * @en The App Service file to be started
       */
      file: string;
      /**
       * @zh 文件加载时传入的参数
       * @en Parameters passed in during file loading
       */
      param?: string;
    }

    /**
     * @zh 通知发送的结果，返回 `0` 代表发送失败，其余结果表明通知的 ID 标识
     * @en The result of the notification delivery, returns `0` for delivery failure, the rest of the result indicates the ID of the notification
     */
    type Result = number;
  }

  /**
   * @zh 发送通知到手表通知中心
   * @en Send notifications to the Watch Notification Center
   * @permissionCode device:os.notification
   * @version 3.0
   * @example
   * ```js
   * import { notify } from 'zeppos-cross-api/notification'
   * ```
   */
  function notify(option: notify.Option): notify.Result;
  /**
   * @zh 删除通知中心里指定 ID 标识的通知信息
   * @en Delete the notification message identified by the specified ID in the notification center
   * @permissionCode device:os.notification
   * @version 3.0
   * @example
   * ```js
   * import { cancel } from 'zeppos-cross-api/notification'
   *
   * cancel(alarmID)
   * ```
   */
  function cancel(alarmId: number | Array<number>): void;
  /**
   * @zh 获取当前应用已发送的还留在通知中心里通知 ID
   * @en Get the notification IDs that have been sent by the current app and are still in the notification center
   * @permissionCode device:os.notification
   * @version 3.0
   * @example
   * ```js
   * import { getAllNotifications } from 'zeppos-cross-api/notification'
   *
   * getAllNotifications()
   * ```
   */
  function getAllNotifications(): Array<number>;
}
