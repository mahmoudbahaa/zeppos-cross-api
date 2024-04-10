// @ts-nocheck
/* eslint-disable camelcase */
export {
  align, anim_status, createDialog, createWidget, default, deleteWidget, event, getAppWidgetSize, getImageInfo, getRtlLayout,
  getScrollCurrentPage, getTextLayout, prop, redraw, relayoutRtl, scrollToPage, setAppWidgetSize, setLayerScrolling,
  setScrollView, setStatusBarVisible, showToast, text_style, updateStatusBarTitle, widget
}
  // #if API!=1.0
  // #put "from '@zos/ui'"
  // #endif
  // #if API==1.0
  // #put "from './1.0/ui'"
  // #endif
  // #if 1==2
  from '@zos/ui'
export const done = true
// #endif
