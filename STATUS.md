# Modules


For each of non-supported function we either have

1. ERROR => function throws an error
2. NOOP => function does nothing

For each module of each API_LEVEL there is 5 level of support:

1. FULL
2. PARTIAL
3. NONE  (ALL are ERROR)
4. NONE* (ALL are NOOP)
5. N/A (not yet implemented)



## SUPPORT STATUS

| Module                                 |  3.0 |    2.0  |  1.0   |
| -------------------------------------- | ---- |-------- |------- |
| [@zos/alarm](#alarm)                   | FULL | PARTIAL | PARTIAL|
| [@zos/app](#app)                       | FULL | PARTIAL | PARTIAL|
| @zos/app-service                       | FULL |  NONE   |  NONE  |
| [@zos/ble](#ble)                       | FULL | PARTIAL | PARTIAL|
| @zos/device                            | FULL |  FULL   |  FULL  |
| [@zos/display](#display)               | FULL | PARTIAL | PARTIAL|
| @zos/fs                                | FULL |  FULL   |  FULL  |
| @zos/i18n                              | FULL |  FULL   |  NONE  |
| @zos/interaction                       | FULL |  FULL   |  FULL  |
| [@zos/notification](#notification)     | FULL |  NONE*  |  NONE* |
| [@zos/page](#page)                     | FULL |  FULL   | PARTIAL|
| [@zos/router](#router)                 | FULL | PARTIAL | PARTIAL|
| [@zos/sensor](#sensor)                 | N/A  |   N/A   |   N/A  |
| [@zos/settings](#settings)             | FULL | PARTIAL | PARTIAL|
| [@zos/storage](#storage)               | FULL | PARTIAL | PARTIAL|
| [@zos/transfer-file](#transfer-file)   | N/A  |   N/A   |   N/A  |
| [@zos/ui](#ui)                         | FULL | PARTIAL | PARTIAL|
| [@zos/user](#user)                     | FULL | PARTIAL | PARTIAL|
| @zos/utils                             | FULL |   FUL   |  FULL  |



# Unsupported functions:

Listing unsupported function only for PARTIAL and NONE*

## Alarm ([@zos/alarm](./zeppos-3.0-modules/@zos/alarm.ts)) <a name = "alarm"></a>

### API_LEVEL 2.0 and 1.0

* repeat_type in set => ERROR

## APP  ([@zos/app](./zeppos-3.0-modules/@zos/app.ts)) <a name = "app"></a>

### API_LEVEL 2.0 and 1.0

* emitCustomSystemEvent => ERROR

## BLE ([@zos/ble](./zeppos-3.0-modules/@zos/ble.ts)) <a name = "ble"></a>

### API_LEVEL 2.0 and 1.0

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

## DISPLAY ([@zos/display](./zeppos-3.0-modules/@zos/display.ts)) <a name = "display"></a>

### API_LEVEL 2.0 and 1.0

* getSettings => ERROR

### API_LEVEL 1.0 only

* pauseDropWristScreenOff => NOOP (but return non-zero indicating non-sucess code)
* resetDropWristScreenOff => NOOP (but return non-zero indicating non-sucess code)
* pausePalmScreenOff => NOOP (but return non-zero indicating non-sucess code)
* resetPalmScreenOff => NOOP (but return non-zero indicating non-sucess code)

## NOTIFICATION ([@zos/notification](./zeppos-3.0-modules/@zos/notification.ts)) <a name = "notification"></a>

### API_LEVEL 2.0 and 1.0

* notify =>  NOOP (return 0 for non success)
* cancel => NOOP
* getAllNotifications => NOOP (return empty array)

## PAGE ([@zos/page](./zeppos-3.0-modules/@zos/page.ts)) <a name = "page"></a>

### API_LEVEL 1.0

* setScrollLock => ERROR

## ROUTER ([@zos/router](./zeppos-3.0-modules/@zos/router.ts)) <a name = "router"></a>

### API_LEVEL 2.0 and 1.0

* ALL SYSTEM_APP constants are undefined
* checkSystemApp => NOOP

## SENSOR ([@zos/sensor](./zeppos-3.0-modules/@zos/sensor.ts)) <a name = "sensor"></a>

<!-- ### API_LEVEL 2.0 and 1.0 -->

N/A

## SETTINGS ([@zos/settings](./zeppos-3.0-modules/@zos/settings.ts)) <a name = "settings"></a>

### API_LEVEL 2.0 and 1.0

* getSystemMode => ERROR

## TRANSFER_FILE ([@zos/transfer-file](./zeppos-3.0-modules/@zos/transfer-file.ts)) <a name = "transfer-file"></a>

<!-- ### API_LEVEL 2.0 and 1.0 -->

N/A

## UI ([@zos/ui](./zeppos-3.0-modules/@zos/ui.ts)) <a name = "ui"></a>

### API_LEVEL 1.0

* getImageInfo => ERROR
* redraw => NOOP
* setAppWidgetSize => ERROR
* getAppWidgetSize => ERROR

### As for Wdigets:

### Not Found in 2.0 and 1.0

* [CANVAS](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/CANVAS/)
* [PAGE_SCROLLBAR](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/PAGE_SCROLLBAR/)
* [KEYBOARD](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/KEYBOARD/)
* [PICKER](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/PICKER/)

### Not found in 1.0

Widgets:
* [POLYLINE](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/GRADIENT_POLYLINE/)
* [PAGE_INDICATOR](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/PAGE_INDICATOR/)
* [VIEW_CONTAINER](https://docs.zepp.com/docs/reference/device-app-api/newAPI/ui/widget/VIEW_CONTAINER/)


## USER ([@zos/user](./zeppos-3.0-modules/@zos/user.ts)) <a name = "user"></a>

### API_LEVEL 2.0 and 1.0

* addHealthData => ERROR