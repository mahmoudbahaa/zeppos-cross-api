import { align, createWidget, getTextLayout, widget } from '../ui'
import '../zeppos/device-polyfill'
import { RowEntry } from './ListScreenParts/RowEntry'
import {
  BASE_FONT_SIZE,
  SCREEN_MARGIN_Y,
  SCREEN_WIDTH
} from './UiParams'

export class ListScreen {
  /**
   * @param {boolean} [rtl]
   */
  constructor (rtl) {
    this.rtl = rtl
    this.positionY = SCREEN_MARGIN_Y
    this.fontSize = BASE_FONT_SIZE
    this.accentColor = 0x0077AA
    this.entries = []
  }

  build () {}

  /**
   * @param {string} text
   * @param {string} description
   */
  headlineRow (text, description = undefined) {
    this.row({
      text,
      description,
      color: this.accentColor,
      text_size: this.fontSize - 4,
      card: {
        color: 0x000000,
        radius: 0
      }
    })
  }

  offset (height = SCREEN_MARGIN_Y) {
    const config = {
      x: 0,
      y: this.positionY,
      w: SCREEN_WIDTH,
      h: height
    }

    const entry = {
      widget: createWidget(widget.IMG, config),
      positionY: this.positionY,
      viewHeight: height
    }

    this._registerRow(entry)
    return entry
  }

  /**
   * @param {{ text?: any; icon?: any; outlineColor?: number; callback?: any; card?: any, description?: any; color?: number; text_size?: number; alignH?: number; }} userConfig
   * @returns {RowEntry}
   */
  row (userConfig) {
    if (userConfig.alignH === undefined) userConfig.alignH = this.rtl ? align.RIGHT : align.LEFT
    return this._classBasedEntry(RowEntry, userConfig)
  }

  /**
   * @param {typeof RowEntry} ClassEntry
   * @param {any} userConfig
   * @returns {any} // {CardEntry | RowEntry}
   */
  _classBasedEntry (ClassEntry, userConfig) {
    const entry = new ClassEntry(userConfig, this, this.positionY)
    entry._init()
    this._registerRow(entry)
    return entry
  }

  /**
   * @param {{ widget?: any; viewHeight: any; positionY?: number; _lastHeight?: any; _index?: any; }} data
   */
  _registerRow (data) {
    data._lastHeight = data.viewHeight
    data._index = this.entries.length
    this.entries.push(data)
    this.positionY += data.viewHeight
  }

  get baseRowHeight () {
    if (this.fontSize !== this._brh_lastheight) {
      this._brh_lastheight = this.fontSize
      this._brh_cached = getTextLayout(' ', {
        text_size: this.fontSize,
        text_width: 96
      }).height + 36
    }
    return this._brh_cached
  }
}
