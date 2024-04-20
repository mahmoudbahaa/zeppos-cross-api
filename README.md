<div align="center">
  <a href="" rel="noopener">
 <img width=128px height=128px src="https://raw.githubusercontent.com/mahmoudbahaa/zeppos-cross-api/bd1933d8d4484de71e30ec42bb1f408e5e249f54/icon.png" alt="Project logo"></a>
</div>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/mahmoudbahaa/zeppos-cross-api.svg)](https://github.com/mahmoudbahaa/zeppos-cross-api/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/mahmoudbahaa/zeppos-cross-api.svg)](https://github.com/mahmoudbahaa/zeppos-cross-api/pulls)
[![License](https://img.shields.io/badge/license-APACHE-blue.svg)](/LICENSE)

</div>

---

# <div align="center"> ZeppOS cross-api library </div>

# 📝 Table of Contents

- [About](#about)
- [Usage](#usage)
- [Support Status](#status)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)
- [License](#license)

Advanced Topics
- [Advanced Usage](/readme-ext/ADVANCED_USAGE.md)
- [Changes done to ts types file](/readme-ext/CHANGES_TO_TYPES.md)
- [Test Status](./readme-ext/TEST_STATUS.md)
- [TODO](./readme-ext/TODO.md)
- [Contributing](./readme-ext/CONTRIBUTING.md)
- [Change Log](./readme-ext/CHANGE_LOG.md)

# 🧐 About <a name = "about"></a>

Write Once deploy on multiple API_LEVEL as minimum.

You write using API_LEVEL 3.0 then you can Change min API level of your project on the fly just with one command and same codebase.

***** Although the functionality is almost complete. Testing is not yet complete and expect to find bugs/issues. You can consider this library in beta. 

***** Please report any issues found [here](https://github.com/mahmoudbahaa/zeppos-cross-api/issues) or create a pull request. Thanks in advance

# 🏁 Usage <a name = "Usage"></a>

```
npm i zeppos-cross-api
npx zeppos-cross-api --api-level=X.0
```
where X is 1, 2 or 3 according to your project ( you still write your code using API_LEVEL 3) and can change the min API again as easily as running above command again with new API_LEVEL

then replace each instance of '@zepos' with 'zeppos-cross-api' and you good to go

use try and catch with new functionality with sensible fallbacks for new APIs see status for details. for example

```
try {
  const player = create(id.PLAYER)
} catch (error) {
  do something else
}
```
In addition to the modules in 3.0 There is four 5 new modules (sources [here](https://github.com/zepp-health/zeppos-samples/tree/main/application/2.0/fetch-api/shared) and [here](https://github.com/zepp-health/zeppos-samples/tree/main/application/1.0/fetch-api/shared)):

1. `data-conversion` contains very usefull functions like `str2bin` to convert from `string` to `ArrayBuffer` and `bin2str` for viceversa.
2. `device-polyfill` import in your app.js if you want to use `promises` and `setTimeout`/`setInterval` without worrying about api level
3. `zml-base-app` modified version of [ZML](https://github.com/zepp-health/zml) base app
4. `zml-base-page` modified version of [ZML](https://github.com/zepp-health/zml) base page
5. `zml-base-side` modified version of [ZML](https://github.com/zepp-health/zml) base side

zml is recommended for usage for fetch, httprequest and other side service APIs but take care that 

1. Image Convert
2. Download
3. FileTransfer

are only avaliable in 3.0+ and would throw unsupported exception in other api levels.

# :dart: SUPPORT STATUS <a name = "status"></a>

For each of non-supported function we either have

1. ERROR => function throws an error
2. NOOP => function does nothing

For each module of each API_LEVEL there is 5 level of support:

1. 🟩 FULL
2. 🟧 PARTIAL
3. 🟥 NONE  (ALL are ERROR)
4. 🟥 NONE<sup>*</sup> (ALL are NOOP)
5. N/A (not yet implemented)


| Module                                 | 3.0     |   2.0      |   1.0   |
| -------------------------------------- |:--------|:-----------|:-----------|
| [@zos/alarm](#alarm)                   | 🟩 FULL | 🟧 PARTIAL | 🟧 PARTIAL |
| [@zos/app](#app)                       | 🟩 FULL | 🟧 PARTIAL | 🟧 PARTIAL |
| @zos/app-service                       | 🟩 FULL | 🟥 NONE    | 🟥 NONE    |
| [@zos/ble](#ble)                       | 🟩 FULL | 🟧 PARTIAL | 🟧 PARTIAL |
| @zos/device                            | 🟩 FULL | 🟩 FULL    | 🟩 FULL    |
| [@zos/display](#display)               | 🟩 FULL | 🟧 PARTIAL | 🟧 PARTIAL |
| @zos/fs                                | 🟩 FULL | 🟩 FULL    | 🟩 FULL    |
| @zos/i18n                              | 🟩 FULL | 🟩 FULL    | 🟥 NONE    |
| @zos/interaction                       | 🟩 FULL | 🟩 FULL    | 🟩 FULL    |
| @zos/media                             | 🟩 FULL | 🟥 NONE    | 🟥 NONE    |
| [@zos/notification](#notification)     | 🟩 FULL | 🟥 NONE*   | 🟥 NONE*   |
| [@zos/page](#page)                     | 🟩 FULL | 🟩 FULL    | 🟧 PARTIAL |
| [@zos/router](#router)                 | 🟩 FULL | 🟧 PARTIAL | 🟧 PARTIAL |
| [@zos/sensor](#sensor)                 | 🟩 FULL | 🟧 PARTIAL | 🟧 PARTIAL |
| [@zos/settings](#settings)             | 🟩 FULL | 🟧 PARTIAL | 🟧 PARTIAL |
| [@zos/storage](#storage)               | 🟩 FULL | 🟧 PARTIAL | 🟧 PARTIAL |
| [@zos/ui](#ui)                         | 🟩 FULL | 🟧 PARTIAL | 🟧 PARTIAL |
| [@zos/user](#user)                     | 🟩 FULL | 🟧 PARTIAL | 🟧 PARTIAL |
| @zos/utils                             | 🟩 FULL | 🟩 FULL    | 🟩 FULL    |

Listing unsupported function only for 🟧 PARTIAL and 🟥 NONE*

## @zos/alarm <a name = "alarm"></a>

API_LEVEL 2.0 and 1.0:

* repeat_type in set => ERROR

## @zos/app <a name = "app"></a>

API_LEVEL 2.0 and 1.0:

* emitCustomSystemEvent => ERROR

## @zos/ble <a name = "ble"></a>

API_LEVEL 2.0 and 1.0:

* mstBuildProfile => ERROR
* mstConnect => ERROR
* DestroyProfileInstance => ERROR
* mstDisconnect => ERROR
* mstGetConnIdByRemoteAddr => ERROR
* mstGetProfileInstance => ERROR
* mstOffAllCb => ERROR
* mstOnCharaNotification => ERROR
* mstOnCharaReadComplete => ERROR
* mstOnCharaValueArrived => ERROR
* mstOnCharaWriteComplete => ERROR
* mstOnDescValueArrived => ERROR
* mstOnDescWriteComplete => ERROR
* mstOnPrepare => ERROR
* mstOnServiceChangeBegin => ERROR
* mstOnServiceChangeEnd => ERROR
* mstPair => ERROR
* mstPrepare => ERROR
* mstReadCharacteristic => ERROR
* mstReadDescriptor => ERROR
* mstStartScan => ERROR
* mstStopScan => ERROR
* mstWriteCharacteristic => ERROR
* mstWriteDescriptor => ERROR

## @zos/display <a name = "display"></a>

API_LEVEL 2.0 and 1.0:

* getSettings => ERROR

API_LEVEL 1.0 only:

* pauseDropWristScreenOff => NOOP (but return non-zero indicating non-sucess code)
* resetDropWristScreenOff => NOOP (but return non-zero indicating non-sucess code)
* pausePalmScreenOff => NOOP (but return non-zero indicating non-sucess code)
* resetPalmScreenOff => NOOP (but return non-zero indicating non-sucess code)

## @zos/notification <a name = "notification"></a>

API_LEVEL 2.0 and 1.0:

* notify =>  NOOP (return 0 for non success)
* cancel => NOOP
* getAllNotifications => NOOP (return empty array)

## @zos/page <a name = "page"></a>

API_LEVEL 1.0:

* setScrollLock => ERROR

## @zos/router <a name = "router"></a>

API_LEVEL 2.0 and 1.0:

* ALL SYSTEM_APP constants are undefined
* checkSystemApp => NOOP

## @zos/sensor <a name = "sensor"></a>

|     Sensor      |   3.0      |   2.0      |   1.0   |
|:---------------:|:-----------|:-----------|:--------|
| Accelerometer   | 🟩 FULL    | 🟥 MISSING | 🟥 MISSING |
| Barometer       | 🟩 FULL    | 🟩 FULL    | 🟥 MISSING |
| Battery         | 🟩 FULL    | 🟩 FULL    | 🟩 FULL    |
| BloodOxygen     | 🟩 FULL    | 🟧 PARTIAL | 🟧 PARTIAL |
| Calorie         | 🟩 FULL    | 🟩 FULL    | 🟩 FULL    |
| Compass         | 🟩 FULL    | 🟥 MISSING | 🟥 MISSING |
| Distance        | 🟩 FULL    | 🟩 FULL    | 🟩 FULL    |
| FatBurning      | 🟩 FULL    | 🟩 FULL    | 🟩 FULL    |
| Geolocation     | 🟩 FULL    | 🟧 PARTIAL | 🟥 MISSING |
| Gyroscope       | 🟩 FULL    | 🟥 MISSING | 🟥 MISSING |
| HeartRate       | 🟩 FULL    | 🟧 PARTIAL | 🟧 PARTIAL |
| Pai             | 🟩 FULL    | 🟩 FULL    | 🟩 FULL    |
| Screen          | 🟩 FULL    | 🟥 MISSING | 🟥 MISSING |
| Sleep           | 🟩 FULL    | 🟧 PARTIAL | 🟧 PARTIAL |
| Stand           | 🟩 FULL    | 🟩 FULL    | 🟩 FULL    |
| Step            | 🟩 FULL    | 🟩 FULL    | 🟩 FULL    |
| Stress          | 🟩 FULL    | 🟧 PARTIAL | 🟧 PARTIAL |
| Time            | 🟩 FULL    | 🟧 PARTIAL | 🟧 PARTIAL |
| Vibrator        | 🟩 FULL    | 🟩 FULL    | 🟩 FULL    |
| Wear            | 🟩 FULL    | 🟩 FULL    | 🟩 FULL    |
| Weather         | 🟩 FULL    | 🟩 FULL    | 🟩 FULL    |
| Workout         | 🟩 FULL    | 🟥 MISSING | 🟥 MISSING |
| WorldClock      | 🟩 FULL    | 🟥 MISSING | 🟩 FULL    |


## @zos/settings <a name = "settings"></a>

API_LEVEL 2.0 and 1.0:

* getSystemMode => ERROR

## @zos/ui <a name = "ui"></a>

API_LEVEL 1.0:

* getImageInfo => ERROR
* redraw => NOOP
* setAppWidgetSize => ERROR
* getAppWidgetSize => ERROR

As for Wdigets: (Warning: They wont throw an error but they will return `undefined` for `createWidget`):

Not Found in 2.0 and 1.0:

* [CANVAS](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/CANVAS/)
* [PAGE_SCROLLBAR](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/PAGE_SCROLLBAR/)
* [KEYBOARD](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/KEYBOARD/)
* [PICKER](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/PICKER/)

Not found in 1.0:

* [POLYLINE](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/GRADIENT_POLYLINE/)
* [PAGE_INDICATOR](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/PAGE_INDICATOR/)
* [VIEW_CONTAINER](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/VIEW_CONTAINER/)


## @zos/user <a name = "user"></a>

API_LEVEL 2.0 and 1.0:

* addHealthData => ERROR

## ⛏️ Built Using <a name = "built_using"></a>

- [Zepp OS 3.0](https://docs.zepp.com/docs/intro/) - Framework
- [rollup](https://rollupjs.org/)
- modified version of [prepare_all.py](https://github.com/melianmiko/ZeppOS-Toolbox/blob/master/prepare_all.py), [app.json](https://github.com/melianmiko/ZeppOS-Toolbox/blob/master/app.json) and other files from [ZeppOS-Toolbox](https://github.com/melianmiko/ZeppOS-Toolbox) by [melianmiko](https://github.com/melianmiko)

## ✍️ Authors <a name = "authors"></a>

- [@mahmoudbahaa](https://github.com/mahmoudbahaa) - Idea & Initial work

See also the list of [contributors](https://github.com/mahmoudbahaa/zeppos-cross-api/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used

## :memo: License <a name = "license"></a>
  
  This project is under license from Apache License V2. For more details, see the [LICENSE](./LICENSE) file.
