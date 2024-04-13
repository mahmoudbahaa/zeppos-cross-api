/**
  * @zh 国际化
  * @en I18n
  */


declare module 'zeppos-cross-api/i18n' {

  namespace getText {
    /**
     * @zh 国际化 key
     * @en Internationalization key
     */
    type Key = string;

    /**
     * @zh 国际化 key 对应的字符串
     * @en The string corresponding to the internationalized key
     */
    type Result = string;
  }

  /**
   * @zh 根据国际化 key 从国际化资源文件（.po）中获取对应的字符串
   * @en Get the corresponding string from the internationalization resource file (.po) based on the internationalization key
   * @example
   * ```js
   * import { getText } from 'zeppos-cross-api/i18n'
   *
   * getText('name')
   * ```
   */
  function getText(key: getText.Key): getText.Result;
}
