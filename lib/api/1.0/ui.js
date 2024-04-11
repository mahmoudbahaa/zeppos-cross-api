// #if API==1.0
/* eslint-disable camelcase */
/* global hmUI */
import { UNSUPPORTED } from '../_constants'

export default hmUI
export const align = hmUI.align
// @ts-ignore
export const anim_status = hmUI.anim_status
export const createDialog = hmUI.createDialog
export const createWidget = hmUI.createWidget
export const deleteWidget = hmUI.deleteWidget
export const event = hmUI.event
export const getRtlLayout = hmUI.getRtlLayout
export const getScrollCurrentPage = hmUI.getScrollCurrentPage
export const getTextLayout = hmUI.getTextLayout
export const prop = hmUI.prop
export const relayoutRtl = hmUI.relayoutRtl
export const scrollToPage = hmUI.scrollToPage
export const setLayerScrolling = hmUI.setLayerScrolling
export const setScrollView = hmUI.setScrollView
export const setStatusBarVisible = hmUI.setStatusBarVisible
export const showToast = hmUI.showToast
export const text_style = hmUI.text_style
export const updateStatusBarTitle = hmUI.updateStatusBarTitle
export const widget = hmUI.widget

export const redraw = () => {}
export const getImageInfo = (imgPath) => { throw new Error(UNSUPPORTED) }
export const setAppWidgetSize = (option) => { throw new Error(UNSUPPORTED) }
export const getAppWidgetSize = (option) => { throw new Error(UNSUPPORTED) }
// #endif
