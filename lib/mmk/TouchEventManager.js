/* global hmUI */
import '../api/zeppos/device-polyfill'
export class TouchEventManager {
  /**
   * @param {HmWearableProgram.DeviceSide.HmUI.IHmUIWidget} widget
   * @param {HmWearableProgram.DeviceSide.HmUI.IHmUIWidget} bg
   * @param {number} [color]
   */
  constructor (widget, bg = undefined, color = undefined) {
    this.ontouch = null
    this.bg = bg
    if (this.bg) this.orgColor = 0x000000 // bg.getProperty(hmUI.prop.COLOR)
    this.color = color
    this.#init(widget)
  }

  /**
   * @param {HmWearableProgram.DeviceSide.HmUI.IHmUIWidget} widget
   */
  #init (widget) {
    let handleClick = true
    let startX = 0
    let startY = 0

    widget.addEventListener(hmUI.event.CLICK_UP, (/** @type {{ x: number; y: number; }} */ e) => {
      if (handleClick && this.ontouch) {
        if (this.bg) {
          this.bg.setProperty(hmUI.prop.COLOR, this.color)
          setTimeout(() => {
            this.bg.setProperty(hmUI.prop.COLOR, this.orgColor)
            this.ontouch(e)
          }, 50)
        } else {
          this.ontouch(e)
        }
      }

      handleClick = false
    })

    widget.addEventListener(hmUI.event.CLICK_DOWN, (/** @type {{ x: number; y: number; }} */ e) => {
      if (!handleClick) {
        startX = e.x
        startY = e.y
        handleClick = true
      }
    })

    widget.addEventListener(hmUI.event.MOVE, (/** @type {{ x: number; y: number; }} */ e) => {
      if (Math.abs(e.x - startX) > 3 || Math.abs(e.y - startY) > 3) {
        handleClick = false
      }
    })

    widget.addEventListener(hmUI.event.MOVE_OUT, (/** @type {{ x: number; y: number; }} */ e) => {
      handleClick = false
    })
  }
}
