// #if API==1.0
/* global hmUI, hmApp */
import { UNSUPPORTED } from './util/constants'
// #endif
// #if API!=1.0
import * as PAGE from '@zos/page'
export default PAGE
// #endif
// #if API==1.0
const _PAGE = {}
_PAGE.SCROLL_MODE_FREE = 'SCROLL_MODE_FREE'
_PAGE.SCROLL_MODE_SWIPER = 'SCROLL_MODE_SWIPER'
_PAGE.SCROLL_MODE_SWIPER_HORIZONTAL = 'SCROLL_MODE_SWIPER_HORIZONTAL'
_PAGE.SCROLL_ANIMATION_SMOOTH = 'SCROLL_ANIMATION_SMOOTH'
_PAGE.SCROLL_ANIMATION_NONE = 'SCROLL_ANIMATION_NONE'
_PAGE.scrollTo = (option) => hmApp.setLayerY(typeof option === 'number' ? option : option.y)
_PAGE.getScrollTop = () => hmApp.getLayerY()
_PAGE.setScrollMode = (option) => {
  if (option.options?.modeParams) return false

  switch (option.mode) {
    case _PAGE.SCROLL_MODE_FREE: return hmUI.setScrollView(false)
    case _PAGE.SCROLL_MODE_SWIPER: return hmUI.setScrollView(true, option.options.height, option.options.count, true)
    case _PAGE.SCROLL_MODE_SWIPER_HORIZONTAL: return hmUI.setScrollView(true, option.options.width, option.options.count, false)
  }

  return false
}
_PAGE.setScrollLock = (option) => { throw new Error(UNSUPPORTED) }
_PAGE.swipeToIndex = (option) => hmUI.scrollToPage(option.index, option.animation !== _PAGE.SCROLL_ANIMATION_NONE)
_PAGE.getSwiperIndex = () => hmUI.getScrollCurrentPage()
// #put "const PAGE = _PAGE"
// #put "export default PAGE"
// #endif
