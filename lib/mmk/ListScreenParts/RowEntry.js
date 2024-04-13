// eslint-disable-next-line camelcase
import { align, getTextLayout, text_style, widget } from '../../ui'
import { WIDGET_WIDTH } from '../UiParams'
import { CardEntry } from './CardEntry'

export class RowEntry extends CardEntry {
  constructor (config, screen, positionY) {
    const cardConfig = config.card ? config.card : {}
    if (!cardConfig.callback) cardConfig.callback = config.callback
    if (!cardConfig.outlineColor) cardConfig.outlineColor = config.outlineColor
    super(cardConfig, screen, positionY)
    this.rowConfig = {
      color: 0xFFFFFF,
      fontSize: this.screen.fontSize,
      ...config
    }

    this.config.height = this.rowViewHeight
  }

  _init () {
    super._init()

    this.textView = this.group.createWidget(widget.TEXT, this._textViewConfig)
  }

  get _textViewConfig () {
    return {
      x: 0,
      y: 9,
      w: this.textWidth,
      h: this.textHeight,
      align_h: this.rowConfig.alignH,
      align_v: align.CENTER_V,
      // eslint-disable-next-line camelcase
      text_style: text_style.WRAP,
      text_size: this.rowConfig.fontSize,
      color: this.rowConfig.color,
      text: this.rowConfig.text
    }
  }

  get textWidth () {
    return (this.config.width ? this.config.width : WIDGET_WIDTH) - 8
  }

  get textHeight () {
    const { height } = getTextLayout(this.rowConfig.text, {
      text_size: this.rowConfig.fontSize,
      text_width: this.textWidth
    })

    return this.rowConfig.description ? height : height * 2
  }

  get rowViewHeight () {
    return Math.max(this.screen.baseRowHeight, this.textHeight + 18)
  }
}
