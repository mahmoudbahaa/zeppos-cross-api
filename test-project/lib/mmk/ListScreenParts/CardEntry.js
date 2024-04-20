import { createWidget, event, widget } from '../../api/ui';
import { SCREEN_MARGIN_X, SCREEN_WIDTH, WIDGET_WIDTH } from '../UiParams';

export class CardEntry {
  constructor(config, screen, positionY) {
    this.screen = screen;
    this.positionY = positionY;
    this.config = {
      color: 0x111111,
      offsetX: 0,
      radius: 8,
      width: WIDGET_WIDTH,
      hiddenIcon: null,
      ...config,
    };
  }

  _init() {
    this.group = createWidget(widget.GROUP, this._groupConfig);
    this.bg = this.group.createWidget(widget.FILL_RECT, this._bgConfig);
    this.separator = this.group.createWidget(widget.FILL_RECT, this._separatorConfig);
    this.group.addEventListener(event.CLICK_UP, () => this.config.callback());
  }

  get _groupConfig() {
    return {
      x: SCREEN_MARGIN_X + this.config.offsetX,
      y: this.positionY,
      w: this.config.width,
      h: this.config.height,
    };
  }

  get _buttonConfig() {
    return {
      x: SCREEN_MARGIN_X + this.config.offsetX + this.config.width - 96,
      y: this.positionY,
      w: 96,
      h: this.config.height,
      color: 0xFFFFFF,
      radius: this.config.radius,
      text: this.config.hiddenButton,
      text_size: this.screen.fontSize - 4,
      normal_color: this.screen.accentColor,
      press_color: this.screen.accentColor,
      click_func: this.config.hiddenButtonCallback,
    };
  }

  get _bgConfig() {
    return {
      x: -SCREEN_WIDTH / 2,
      y: 0,
      w: SCREEN_WIDTH * 2,
      h: this.config.height,
      color: this.config.color,
      radius: this.config.radius,
    };
  }

  get _separatorConfig() {
    return {
      x: -SCREEN_WIDTH / 2,
      y: -8,
      w: SCREEN_WIDTH * 2,
      h: 8,
      color: this.config.outlineColor,
    };
  }

  get viewHeight() {
    if (this.config.dontChangePosY) {
      return 0;
    }

    return this.config.height + 8;
  }
}
