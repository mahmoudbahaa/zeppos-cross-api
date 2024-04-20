import { showToast } from './api/ui';
import { ListScreen } from './mmk/ListScreen';
import { BASE_FONT_SIZE } from './mmk/UiParams';

export class TestSreen extends ListScreen {
  constructor() {
    super(false);
    this.fontSize = BASE_FONT_SIZE;
  }

  /**
   * @param {number[]} result
   */
  reqPermCB(result) {
    showToast({ text: JSON.stringify(result) });
  }

  /**
   * @param {{ [x: string]: () => string; }} option
   */
  start(option) {
    // eslint-disable-next-line guard-for-in
    for (const key in option) {
      this.row({
        text: key,
        callback() {
          try {
            const result = option[key]().split(',');
            if (result.length === 1) {
              showToast({ text: result[0] });
            } else {
              let timeout = 1000;
              result.forEach((/** @type {any} */ part) => {
                setTimeout(() => {
                  showToast({ text: part });
                }, timeout);
                timeout += 1000;
              });
            }
          } catch (e) {
            showToast({ text: e.toString() });
          }
        },
      });
    }
  }
}
