import { U as UNSUPPORTED } from './_constants-DnfQ3JJx.js';

/* global hmUI, hmApp */

const SCROLL_MODE_FREE = 'SCROLL_MODE_FREE';
const SCROLL_MODE_SWIPER = 'SCROLL_MODE_SWIPER';
const SCROLL_MODE_SWIPER_HORIZONTAL = 'SCROLL_MODE_SWIPER_HORIZONTAL';
const SCROLL_ANIMATION_SMOOTH = 'SCROLL_ANIMATION_SMOOTH';
const SCROLL_ANIMATION_NONE = 'SCROLL_ANIMATION_NONE';
const scrollTo = option => hmApp.setLayerY(typeof option === 'number' ? option : option.y);
const getScrollTop = () => hmApp.getLayerY();
const setScrollMode = option => {
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

const setScrollLock = option => {
	throw new Error(UNSUPPORTED);
};

const swipeToIndex = option => hmUI.scrollToPage(option.index, option.animation !== SCROLL_ANIMATION_NONE);
const getSwiperIndex = () => hmUI.getScrollCurrentPage();

export { SCROLL_ANIMATION_NONE, SCROLL_ANIMATION_SMOOTH, SCROLL_MODE_FREE, SCROLL_MODE_SWIPER, SCROLL_MODE_SWIPER_HORIZONTAL, getScrollTop, getSwiperIndex, scrollTo, setScrollLock, setScrollMode, swipeToIndex };
