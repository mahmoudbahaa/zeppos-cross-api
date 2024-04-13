/**
  * @zh 页面
  * @en Page related
  */


declare module 'zeppos-cross-api/page' {

  /**
   * @zh 自由滚动，系统默认滚动模式
   * @en Free scrolling mode, system default scrolling mode
   */
  const SCROLL_MODE_FREE: string;
  /**
   * @zh Swiper 模式，竖向轮播图、走马灯，通过配置单个页面高度和数量可以做到整屏滚动效果
   * @en Swiper mode, vertical rotating map, walking lights, by configuring the height and number of individual pages can achieve the whole screen scrolling effect
   */
  const SCROLL_MODE_SWIPER: string;
  /**
   * @zh Swiper 模式，横向轮播图、走马灯，通过配置单个页面宽度和数量可以做到整屏滚动效果
   * @en Swiper mode, horizontal rotating map, walking lights, by configuring the width and number of individual pages can achieve the whole screen scrolling effect
   * @version 2.1
   */
  const SCROLL_MODE_SWIPER_HORIZONTAL: string;
  /**
   * @zh 平滑滚动至对应位置
   * @en Scroll smoothly to the corresponding position
   */
  const SCROLL_ANIMATION_SMOOTH: string;
  /**
   * @zh 无动画，直接滚动至对应位置
   * @en No animation, scroll directly to the corresponding position
   */
  const SCROLL_ANIMATION_NONE: string;
  namespace scrollTo {
    interface Option {
      /**
       * @zh 页面的纵轴坐标
       * @en Vertical axis coordinates of the page
       */
      y: number;
    }
  }

  /**
   * @zh 滚动页面至指定位置
   * @en Scroll the page to the specified position
   * @example
   * ```js
   * import { scrollTo } from 'zeppos-cross-api/page'
   *
   * scrollTo({
   *    y: 200
   * })
   * ```
   */
  function scrollTo(option: scrollTo.Option): void;
  function scrollTo(y: number): void;
  namespace getScrollTop {
    /**
     * @zh 垂直坐标
     * @en The vertical coordinate of the current scroll position of the page
     */
    type Result = number;
  }

  /**
   * @zh 获取页面当前滚动位置的垂直坐标
   * @en Get the vertical coordinate of the current scroll position of the page
   * @example
   * ```js
   * import { getScrollTop } from 'zeppos-cross-api/page'
   *
   * const top = getScrollTop()
   * console.log(top)
   * ```
   */
  function getScrollTop(): getScrollTop.Result;
  namespace setScrollMode {
    interface Option {
      /**
       * @zh 页面滚动模式，值参考页面滚动模式常量
       * @en Page scroll mode, value reference page scroll mode constants
       */
      mode: string;
      /**
       * @zh 其他选项
       * @en Other Options
       */
      options?: Options;
    }

    interface Options {
      /**
       * @zh 指定 Swiper 中单个项目的高度，仅当页面滚动模式为 `SCROLL_MODE_SWIPER` 生效
       * @en Specify the height of a single item in Swiper, effective only if the scroll mode is `SCROLL_MODE_SWIPER`
       */
      height?: number;
      /**
       * @zh 指定 Swiper 中项目的数量，仅当页面滚动模式为 `SCROLL_MODE_SWIPER` 和 `SCROLL_MODE_SWIPER_HORIZONTAL` 生效
       * @en Specify the number of items in the Swiper, effective only if the scroll mode is `SCROLL_MODE_SWIPER` or `SCROLL_MODE_SWIPER_HORIZONTAL`
       */
      count?: number;
      /**
       * @zh 指定 Swiper 中单个项目的宽度，仅当页面滚动模式为 `SCROLL_MODE_SWIPER_HORIZONTAL` 生效
       * @en Specify the width of a single item in Swiper, effective only if the scroll mode is `SCROLL_MODE_SWIPER_HORIZONTAL`
       * @version 2.1
       */
      width?: number;
      /**
       * @zh 模式的控制参数
       * @en Parameters for the scroll mode
       * @version 3.0
       */
      modeParams?: FreeModeParams | SwipeModeParams;
    }

    /**
     * @output
     */
    interface FreeModeParams {
      /**
       * @zh 滚动过程中每帧的回调函数
       * @en The callback function for each frame during scrolling
       * @version 3.0
       */
      scroll_frame_func: (params: ScrollObj) => void;
      /**
       * @zh 滚动结束的回调函数
       * @en The end of the scroll callback function
       * @version 3.0
       */
      scroll_complete_func: (params: ScrollObj) => void;
    }

    /**
     * @output
     */
    interface ScrollObj {
      /**
       * @zh 待补充
       * @en Todo
       * @version 3.0
       */
      type: number;
      /**
       * @zh y 轴偏移的像素
       * @en Pixel offset on the y axis
       * @version 3.0
       */
      yoffset: number;
    }

    /**
     * @output
     */
    interface SwipeModeParams {
      /**
       * @zh 翻页完成后的回调函数，`pageIndex` 为翻页完成后的页面索引，索引从 0 开始
       * @en Callback function after page flipping, `pageIndex` is the page index after page flipping, and the index starts from `0`
       * @version 3.0
       */
      on_page: (pageIndex: number) => void;
      /**
       * @zh 是否响应表冠事件，默认响应，可以通过表冠来控制翻页
       * @en Whether to respond to crown events, the default response, you can use the crown to control page turning
       * @defaultValue true
       * @version 3.0
       */
      crown_enable: boolean;
    }

    /**
     * @zh 如果返回 `true` 则表明成功
     * @en If `true` is returned, success is indicated
     */
    type Result = number;
  }

  /**
   * @zh 设置页面的滚动模式
   * @en Set the scroll mode of the page
   * @constants scrollMode
   * @example
   * ```js
   * import { setScrollMode, SCROLL_MODE_SWIPER } from 'zeppos-cross-api/page'
   *
   * setScrollMode({
   *   mode: SCROLL_MODE_SWIPER,
   *   options: {
   *     height: 480,
   *     count: 10
   *   }
   * })
   * ```
   */
  function setScrollMode(option: setScrollMode.Option): setScrollMode.Result;
  namespace setScrollLock {
    interface Option {
      /**
       * @zh 是否锁定当前页面滚动位置
       * @en Whether to lock the current page scroll position
       * @defaultValue true
       */
      lock?: boolean;
    }
  }

  /**
   * @zh 设置当前页面滚动位置锁定，即屏幕位置不会跟随手势滑动改变。调用此 API 执行解锁操作之后，页面滚动模式会设置为自由滚动模式
   * @en Set the current page scrolling position to be locked, i.e. the screen position will not change with the gesture swipe. After calling this API to perform the unlock operation, the page scrolling mode will be set to free scrolling mode
   * @example
   * ```js
   * import { setScrollLock } from 'zeppos-cross-api/page'
   *
   * setScrollLock({
   *   lock: true
   * })
   * ```
   */
  function setScrollLock(option: setScrollLock.Option): void;
  namespace swipeToIndex {
    interface Option {
      /**
       * @zh 目标项目的索引
       * @en Target Swiper Item Index
       */
      index: number;
      /**
       * @zh 滚动动画，值参考页面滚动动画常量
       * @en Scrolling animation, value reference page scrolling animation constants
       * @defaultValue `SCROLL_ANIMATION_SMOOTH`
       */
      animation?: string;
    }
  }

  /**
   * @zh 将页面滚动至 Swiper 的目标项目，仅当当前页面滚动模式为 `SCROLL_MODE_SWIPER` 的时候生效
   * @en Scrolls the page to the Swiper's target item, only if the current page scroll mode is `SCROLL_MODE_SWIPER`
   * @constants scrollAnimation
   * @example
   * ```js
   * import { setScrollMode, swipeToIndex, SCROLL_MODE_SWIPER } from 'zeppos-cross-api/page'
   *
   * setScrollMode({
   *   mode: SCROLL_MODE_SWIPER,
   *   options: {
   *     height: 480,
   *     count: 10
   *   }
   * })
   *
   * swipeToIndex({
   *   index: 5
   * })
   * ```
   */
  function swipeToIndex(option: swipeToIndex.Option): void;
  namespace getSwiperIndex {
    /**
     * @zh 页面滚动模式为 `SCROLL_MODE_SWIPER` 或 `SCROLL_MODE_SWIPER_HORIZONTAL` 时，值为当前项目的索引（从 `1` 开始）。否则为 `undefined`
     * @en If the page scroll mode is `SCROLL_MODE_SWIPER` or `SCROLL_MODE_SWIPER_HORIZONTAL`, the value is the index of the current item (starting from `1`). Otherwise, it is `undefined`.
     */
    type Result = number | undefined;
  }

  /**
   * @zh 获取当前页面的滚动位置，仅当页面滚动模式为 `SCROLL_MODE_SWIPER` 或 `SCROLL_MODE_SWIPER_HORIZONTAL` 返回当前项目的索引（从 `1` 开始），否则返回 `undefined`
   * @en Get the scroll position of the current page, only if the page scroll mode is `SCROLL_MODE_SWIPER` or `SCROLL_MODE_SWIPER_HORIZONTAL` return the index of the current item (starting from `1`), otherwise return `undefined`
   * @example
   * ```js
   * import { setScrollMode, swipeToIndex, getSwiperIndex, SCROLL_MODE_SWIPER } from 'zeppos-cross-api/page'
   *
   * setScrollMode({
   *   mode: SCROLL_MODE_SWIPER,
   *   options: {
   *     height: 480,
   *     count: 10
   *   }
   * })
   *
   * swipeToIndex({
   *   index: 5
   * })
   *
   * const currentIndex = getSwiperIndex()
   * console.log(currentIndex)
   * ```
   */
  function getSwiperIndex(): getSwiperIndex.Result;
}
