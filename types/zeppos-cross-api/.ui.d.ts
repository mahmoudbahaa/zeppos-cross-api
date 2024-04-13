/**
 * @zh UI 视图
 * @en UI
 */


declare module 'zeppos-cross-api/ui' {
  namespace HmWearableProgram {
    namespace DeviceSide {
      namespace HmUI {
        interface IHmUIPropertyType {
          MORE: number;
          /**
           * @zh x 坐标
           * @en x coordinate
           */
          X: number;
          /**
           * @zh y 坐标
           * @en y coordinate
           */
          Y: number;
          /**
           * @zh 宽度
           * @en Width
           */
          W: number;
          /**
           * @zh 高度
           * @en Height
           */
          H: number;
          POS_X: number;
          POS_Y: number;
          ANGLE: number;
          CENTER_X: number;
          CENTER_Y: number;
          /**
           * @zh 资源路径
           * @en Resource Path
           */
          SRC: number;
          /**
           * @zh 文字内容
           * @en Text Content
           */
          TEXT: number;
          /**
           * @zh 文字大小
           * @en Text size
           */
          TEXT_SIZE: number;
          COLOR: number;
          START_ANGLE: number;
          END_ANGLE: number;
          LINE_WIDTH: number;
          LINE_PROGRESS_START_X: number;
          LINE_PROGRESS_START_Y: number;
          LINE_PROGRESS_END_X: number;
          LINE_PROGRESS_END_Y: number;
          LINE_PROGRESS_PROGRESS: number;
          LINE_PROGRESS_SRC_BG: number;
          LINE_PROGRESS_SRC_PROGRESS: number;
          LINE_PROGRESS_SRC_INDICATOR: number;
          WORD_WRAP: number;
          ID: number;
          DATASET: number;
          VISIBLE: number;
        }

        interface IHmUIWidgetType {
          /**
           * @zh GROUP 组控件用于将一系列控件分组，便于统一控制显示/隐藏，注册事件等
           * @en GROUP group component is used to group a series of components together for unified widget of show/hide, registering events, etc
           */
          GROUP: number;
          /**
           * @zh 图片控件用于展示图片，支持图片旋转
           * @en The image widget is used to display images and supports image rotation
           */
          IMG: number;
          /**
           * @zh 文本控件用于展示文本。支持设置文本大小、颜色、对齐方式
           * @en Text component for displaying text. Support setting text size, color and alignment
           */
          TEXT: number;
          /**
           * @zh 圆弧控件展示圆弧进度。支持设置线宽、颜色、开始和结束的角度
           * @en Arc widget to display arc progress. Support setting line width, color, start and end angle
           */
          ARC: number;
          /**
           * @zh 填充矩形控件用于绘制一个纯色矩形区域
           * @en The Fill Rectangle widget is used to draw a solid color rectangular area
           */
          FILL_RECT: number;
          /**
           * @zh 描边矩形控件在填充矩形控件的基础上加入了描边
           * @en The stroked rectangle widget adds a stroke on the basis of the filled rectangle component
           */
          STROKE_RECT: number;
          TEXT_IMG: number;
          ARC_PROGRESS: number;
          IMG_PROGRESS: number;
          IMG_LEVEL: number;
          /**
           * @zh 按照设置的帧率播放预先给定的图片，形成动画效果
           * @en Play the pre-given image at the set frame rate to create an animation effect
           */
          IMG_ANIM: number;
          /**
           * @zh 按钮控件支持设置正常态和按压态的颜色或者图片
           * @en The button widget supports setting images and colors for normal and pressed states
           */
          BUTTON: number;
          /**
           * @zh 绘制一个圆形，支持颜色、透明度等属性
           * @en Draws a circle with support for color, transparency, and other properties
           */
          CIRCLE: number;
          /**
           * @zh 对话弹窗由一段文本和两个按钮构成，点击按钮后弹框会消失
           * @en Dialog popup consists of a piece of text and two buttons. The popup box disappears when the buttons are clicked
           */
          DIALOG: number;
          /**
           * @zh 创建一块支持滑动的列表区域，每个列表的 item 中可以设置图片和文字
           * @en Create a sliding list area, which can be filled with pictures and text
           */
          SCROLL_LIST: number;
          /**
           * @zh 用于在打开和关闭状态之间进行切换
           * @en Used to switch between open and closed states
           */
          SLIDE_SWITCH: number;
          /**
           * @zh 创建一个可以循环滚动的列表，每个 item 可以设置为一张图片
           * @en Create a list that scrolls in a loop, which can be populated with images
           */
          CYCLE_LIST: number;
          /**
           * @zh 创建一个可以循环滚动的列表，其中可以填充图片和文字
           * @en Create a list that can be scrolled in a loop, filled with images and text
           */
          CYCLE_IMAGE_TEXT_LIST: number;
          IMG_POINTER: number;
          /**
           * @zh 用于在多个选项中选择多个选项。每个选项需要使用 STATE_BUTTON 来创建
           * @en Used to select a single result among multiple options. Each individual option needs to be created using STATE_BUTTON
           */
          CHECKBOX_GROUP: number;
          STATE_BUTTON: number;
          /**
           * @zh 用于在多个选项中选择单个选项。每个单独的选项是 STATE_BUTTON 控件，需要单独创建
           * @en Used to select a single result among multiple options. Each individual option needs to be created using STATE_BUTTON
           */
          RADIO_GROUP: number;
          WIDGET_DELEGATE: number;
          /**
           * @zh 绘制直方图
           * @en Draws a histogram
           */
          HISTOGRAM: number;
          /**
           * @zh 展示时间选择控件，提供用户选择
           * @en Time picker widget, providing user choice
           */
          PICK_DATE: number;
        }

        type HmUIAttributeType = number;
        type HmUIStyleType = number;
        type HmUIPropertyType = number;
        type HmUIPropertyValue = string | number | boolean | object | undefined;

        interface IHmUIWidget {
          getId(): number;
          /**
           * @zh 获取 UI 控件类型
           * @en Get the UI widget type
           */
          getType(): number;
          /**
           * @zh 设置 UI 控件属性
           * @en Set the properties of the UI widget
           */
          setProperty(prop: HmUIPropertyType, val: HmUIPropertyValue): boolean;
          /**
           * @zh 获取 UI 控件属性，可以尝试使用 widget.getProperty(hmUI.prop.MORE, {}) 获取 UI 控件的全部属性
           * @en Get the UI widget properties, use widget.getProperty(hmUI.prop.MORE, {}) to get all the properties of the widget
           */
          getProperty<T>(prop: HmUIPropertyType): T | undefined;
          /**
           * @zh 给 UI 控件注册事件监听器，当触发指定事件时，给定的回调函数就会被执行
           * @en Register a listener to the UI widget and the given callback function will be executed when the specified event is triggered
           */
          addEventListener(eventType: HmUIEventType, listener: IHmUIEventListener): boolean;
          /**
           * @zh 删除 UI 控件使用 widget.addEventListener 方法注册的事件监听器
           * @en Remove event listeners registered by the UI widget using the widget.addEventListener method
           */
          removeEventListener(eventType?: HmUIEventType, listener?: IHmUIEventListener): boolean;
          triggerEvent(eventType: HmUIEventType): boolean;
          getVisibility(): boolean;
          setVisibility(show: boolean): boolean;
          destroy(): boolean;
          /* For Group and view Container */
          createWidget(widgetType: HmUIWidgetType, options: HmUIWidgetOptions): IHmUIWidget;
        }

        type HmUIWidgetOptions = Record<
          string, number | string | boolean | IHmUIEventListener | undefined | null | Record<string, any>
        >;
        type HmUIWidgetType = number;

        interface IHmUIGetTextLayoutOptions {
          text_size: number;
          text_width?: number;
          font_name?: string;
          wrapped?: number;
        }

        interface IHmUIGetTextLayout {
          (text: string, options: IHmUIGetTextLayoutOptions): { width: number; height: number; };
        }

        interface IHmUIFunction {
          /**
           * @zh 创建 UI 控件
           * @en Create UI widgets
           */
          createWidget(widgetType: HmUIWidgetType, options: HmUIWidgetOptions): IHmUIWidget;
          /**
           * @zh 删除 UI 控件
           * @en Delete the UI widget
           */
          deleteWidget(widget: IHmUIWidget): boolean;
          /**
           * @zh 重新绘制页面，防止部分情况下 UI 没有刷新
           * @en Redraw the page to prevent the UI from not refreshing in some cases
           */
          redraw(): void;
        }

        interface IHmUIDialogType {
          show(isShow: boolean): void;
        }

        interface IHmUIExtensionFunction {
          /**
           * @zh 计算出目标文本布局完成之后的高度和宽度，并不会实际进行渲染，只进行布局计算
           * @en Calculate the height and width of the target text after the layout is completed, and does not actually render it, only performs the layout calculation
           */
          getTextLayout: IHmUIGetTextLayout;
          getRtlLayout(): boolean;
          relayoutRtl(): void;
          /**
           * @zh 显示 Toast，支持 \n 文本换行
           * @en Show Toast with \n text line feed support
           */
          showToast(options: { text: string; }): void;
          /**
           * @zh 创建 Dialog 对话框
           * @en Create a Dialog
           */
          createDialog(options: {
            title: string;
            show: boolean;
            auto_hide?: boolean;
            click_linster: (key: number) => void;
          }): IHmUIDialogType;
          /**
           * @zh 将整个页面设置为 Swipe 轮播模式，可支持纵向、横向滚动
           * @en Set the entire page to Swipe mode, which can support vertical and horizontal scrolling
           */
          setScrollView(enable: boolean, pageHeight?: number, pageCount?: number, isVertical?: boolean): boolean;
          /**
           * @zh 设置当前页面是否可以滑动
           * @en Set whether the current page can be slid
           */
          setLayerScrolling(enable: boolean): boolean;
          /**
           * @zh 在使用 hmUI.setScrollView 将页面设置为 Swipe 轮播模式后，使用 hmUI.scrollToPage 可以跳转到对应的页面，并且可以设置跳转的动画效果
           * @en After setting the page to Swipe mode with hmUI.setScrollView, you can use hmUI.scrollToPage to jump to the corresponding location and set the animation effect of the jump
           */
          scrollToPage(index: number, animation: boolean): void;
          /**
           * @zh 在使用 hmUI.setScrollView 将页面设置为 Swipe 轮播模式后，使用 hmUI.getScrollCurrentPage 可以获取当前轮播的页数
           * @en After setting the page to Swipe mode with hmUI.setScrollView, use hmUI.getScrollCurrentPage to get the number of pages currently located
           */
          getScrollCurrentPage(): undefined | number;
          /**
           * @zh 该接口只在方屏设备上有效，设置状态栏是否可见
           * @en This interface is only available on square screen devices, set the status bar visible or not
           */
          setStatusBarVisible(visible: boolean): void;
          /**
           * @zh 该接口只在方屏设备上有效，设置状态栏显示文本内容
           * @en This interface is only available on square screen devices, set the status bar to display text content
           */
          updateStatusBarTitle(title: string): void;
        }

        interface IHmUIAlign {
          /**
           * @zh 竖轴-最上端
           * @en Vertical axis-top
           */
          TOP: number;
          /**
           * @zh 竖轴-最底端
           * @en Vertical axis-bottommost
           */
          BOTTOM: number;
          /**
           * @zh 横轴-左对齐
           * @en Horizontal axis-left aligned
           */
          LEFT: number;
          /**
           * @zh 横轴-右对齐
           * @en Horizontal axis-align right
           */
          RIGHT: number;
          /**
           * @zh 横轴-居中
           * @en Horizontal axis-centered
           */
          CENTER_H: number;
          /**
           * @zh 竖轴-居中
           * @en Vertical axis-centered
           */
          CENTER_V: number;
        }

        interface IHmAnimStatus {
          START: Number;
          STOP: Number;
          PAUSE: Number;
          RESUME: Number;
          UNKNOW: Number;
        }

        interface IHmUIWrapTextStyle {
          WRAP: number;
          CHAR_WRAP: number;
          /**
           * @zh 单行溢出字符显示...
           * @en Single line overflow character display...
           */
          ELLIPSIS: number;
          /**
           * @zh 跑马灯
           * @en Keep scrolling
           */
          NONE: number;
        }

        interface IHmUIEventType {
          /**
           * @zh 抬起
           * @en Lift up
           */
          CLICK_UP: number;
          /**
           * @zh 按下
           * @en Press
           */
          CLICK_DOWN: number;
          /**
           * @zh 划入
           * @en Move in
           */
          MOVE_IN: number;
          /**
           * @zh 划出
           * @en Move out
           */
          MOVE_OUT: number;
          /**
           * @zh 滑动
           * @en Slide
           */
          MOVE: number;
          /**
           * @zh 一次完整点击（包含按下和抬起）
           * @en One full click (including press and lift)
           */
          SELECT: number;
        }

        interface IHmUIEvent {
          x: number;
          y: number;
          type: HmUIEventType;
          target: IHmUIWidget;
        }

        interface IHmUIEventListener {
          (event: IHmUIEvent): void;
        }

        type HmUIEventType = number;

        interface IHmUI extends IHmUIExtensionFunction, IHmUIFunction {
          /**
           * @zh 控件类型
           * @en Widget Type
           */
          widget: IHmUIWidgetType;
          /**
           * @zh 控件属性
           * @en Widget Property
           */
          prop: IHmUIPropertyType;
          /**
           * @zh 控件事件
           * @en Widget Event
           */
          event: IHmUIEventType;
          /**
           * @zh 对齐方式
           * @en Alignment
           */
          align: IHmUIAlign;
          /**
           * @zh 文字换行处理方式
           * @en Text line wrap handling
           */
          text_style: IHmUIWrapTextStyle;
          /**
           * @zh 动画状态设置
           * @en Animation status setting
           */
          anim_status: IHmAnimStatus;
        }
      }
    }
  }

  let hmUI: HmWearableProgram.DeviceSide.HmUI.IHmUI;

  export = hmUI;
}
