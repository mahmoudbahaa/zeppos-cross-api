/* eslint-disable camelcase */
/* global hmUI */
import { UNSUPPORTED } from './_constants';

export default hmUI;
export const {align} = hmUI;
// @ts-ignore
export const {anim_status} = hmUI;
export const {createDialog} = hmUI;
export const {createWidget} = hmUI;
export const {deleteWidget} = hmUI;
export const {event} = hmUI;
export const {getRtlLayout} = hmUI;
export const {getScrollCurrentPage} = hmUI;
export const {getTextLayout} = hmUI;
export const {prop} = hmUI;
export const {relayoutRtl} = hmUI;
export const {scrollToPage} = hmUI;
export const {setLayerScrolling} = hmUI;
export const {setScrollView} = hmUI;
export const {setStatusBarVisible} = hmUI;
export const {showToast} = hmUI;
export const {text_style} = hmUI;
export const {updateStatusBarTitle} = hmUI;
export const {widget} = hmUI;

export const redraw = () => {};
export const getImageInfo = imgPath => {
	throw new Error(UNSUPPORTED);
};

export const setAppWidgetSize = option => {
	throw new Error(UNSUPPORTED);
};

export const getAppWidgetSize = option => {
	throw new Error(UNSUPPORTED);
};
