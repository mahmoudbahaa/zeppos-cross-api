/* global hmUI, hmApp */
import { UNSUPPORTED } from './_constants';

export const SCROLL_MODE_FREE = 'SCROLL_MODE_FREE';
export const SCROLL_MODE_SWIPER = 'SCROLL_MODE_SWIPER';
export const SCROLL_MODE_SWIPER_HORIZONTAL = 'SCROLL_MODE_SWIPER_HORIZONTAL';
export const SCROLL_ANIMATION_SMOOTH = 'SCROLL_ANIMATION_SMOOTH';
export const SCROLL_ANIMATION_NONE = 'SCROLL_ANIMATION_NONE';
export const scrollTo = option => hmApp.setLayerY(typeof option === 'number' ? option : option.y);
export const getScrollTop = () => hmApp.getLayerY();
export const setScrollMode = option => {
	if (option.options?.modeParams) {
		return false;
	}

	switch (option.mode) {
		case SCROLL_MODE_FREE: return hmUI.setScrollView(false);
		case SCROLL_MODE_SWIPER: return hmUI.setScrollView(true, option.options.height, option.options.count, true);
		case SCROLL_MODE_SWIPER_HORIZONTAL: return hmUI.setScrollView(true, option.options.width, option.options.count, false);
	}

	return false;
};

export const setScrollLock = option => {
	throw new Error(UNSUPPORTED);
};

export const swipeToIndex = option => hmUI.scrollToPage(option.index, option.animation !== SCROLL_ANIMATION_NONE);
export const getSwiperIndex = () => hmUI.getScrollCurrentPage();
