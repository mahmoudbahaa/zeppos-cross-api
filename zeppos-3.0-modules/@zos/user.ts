/**
  * @zh 用户
  * @en User
  */


declare module '@zos/user' {

  /**
   * @zh 男性
   * @en Male
   */
  const GENDER_MALE: number;
  /**
   * @zh 女性
   * @en Female
   */
  const GENDER_FEMALE: number;
  /**
   * @zh 用户未指定
   * @en User not specified
   */
  const GENDER_UNSPECIFIED: number;
  namespace getProfile {
    /**
     * @output
     */
    interface Result {
      /**
       * @zh 用户年龄，无数据时为 `0`
       * @en User age, `0` if no data
       */
      age: number;
      /**
       * @zh 用户身高，无数据时为 `0`
       * @en User height, `0` if no data
       */
      height: number;
      /**
       * @zh 用户体重，无数据时为 `0`
       * @en User weight, `0` if no data
       */
      weight: number;
      /**
       * @zh 用户性别，值参考用户性别常量
       * @en User gender, value refer to user gender constants
       */
      gender: number;
      /**
       * @zh 用户昵称
       * @en User's nickname
       */
      nickName: string;
      /**
       * @zh 用户账号注册国家/地区 ISO 代码
       * @en ISO code of the country or region where the user account is registered
       */
      region: string;
    }
  }

  /**
   * @zh 获取用户信息
   * @en Get user information
   * @constants gender
   * @permissionCode data:user.info
   * @example
   * ```js
   * import { getProfile, GENDER_MALE } from '@zos/user'
   *
   * const { age, gender } = getProfile()
   * console.log(age)
   *
   * if (gender === GENDER_MALE) {
   *   console.log('male')
   * }
   * ```
   */
  function getProfile(): getProfile.Result;
  namespace addHealthData {
    interface Option {
      /**
       * @zh 体重，单位 g
       * @en Weight, in g
       */
      weight: number;
      /**
       * @zh BMI 数值的 100 倍
       * @en 100 times the value of BMI
       */
      bmi: number;
    }

    type Result = boolean;
  }

  /**
   * @zh 设置用户健康数据信息
   * @en Set user health data information
   * @permissionCode data:user.health
   * @version 3.0
   * @example
   * ```js
   * import { addHealthData } from '@zos/user'
   *
   * addHealthData({
   *   weight: 65,
   *   bmi: 1900
   * })
   * ```
   */
  function addHealthData(option: addHealthData.Option): addHealthData.Result;
}
