# Modules

For each module of each API_LEVEL there is 3 level of test status:

1. TESTED (tested what can be tested)
2. PARTIAL 
3. NONE

## TEST STATUS

For 3.0 no testing is needed as we just do (export * from) for each module so nothing is manipulated

| Module                                                  |   2.0   |   1.0   |
| --------------------------------------                  |:-------:|:-------:|
| [@zos/alarm](./lib/api/tests/alarm.js)                  | TESTED  | TESTED  |
| [@zos/app](./lib/api/tests/app.js)                      | TESTED  | TESTED  |
| [@zos/app-service](./lib/api/tests/app-service.js)      ||  
| [@zos/ble](./lib/api/tests/ble.js)                      | NONE    | NONE    |
| [@zos/device](./lib/api/tests/device.js)                | TESTED  | TESTED  |
| [@zos/display](./lib/api/tests/display.js)              | TESTED  | TESTED  |
| [@zos/fs](./lib/api/tests/fs.js)                        | NONE    | NONE    |
| [@zos/i18n](./lib/api/tests/i18n.js)                    | NONE    | NONE    |
| [@zos/interaction](./lib/api/tests/interaction.js)      | NONE    | NONE    |
| [@zos/notification](./lib/api/tests/notification.js)    | NONE    | NONE    |
| [@zos/page](./lib/api/tests/page.js)                    | NONE    | NONE    |
| [@zos/router](./lib/api/tests/router.js)                | NONE    | NONE    |
| [@zos/sensor](./lib/api/tests/sensor.js)                | NONE    | NONE    |
| [@zos/settings](./lib/api/tests/settings.js)            | NONE    | NONE    |
| [@zos/storage](./lib/api/tests/storage.js)              | NONE    | NONE    |
| [@zos/transfer-file](./lib/api/tests/transfer-file.js)  ||
| [@zos/ui](./lib/api/tests/ui.js)                        | NONE    | NONE    |
| [@zos/user](./lib/api/tests/user.js)                    | NONE    | NONE    |
| [@zos/utils](./lib/api/tests/utils.js)                  | NONE    | NONE    |
