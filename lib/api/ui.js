// @ts-nocheck
/* eslint-disable camelcase */
export {
  align, anim_status, createDialog, createWidget, deleteWidget, event, getAppWidgetSize, getImageInfo, getRtlLayout,
  getScrollCurrentPage, getTextLayout, prop, redraw, relayoutRtl, scrollToPage, setAppWidgetSize, setLayerScrolling,
  setScrollView, setStatusBarVisible, showToast, text_style, updateStatusBarTitle, widget
}
  // #if API!=1.0
  from '@zos/ui'

// #endif
// #if API==1.0
// from './1.0/ui';
// #endif
