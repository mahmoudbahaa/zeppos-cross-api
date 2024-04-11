## The following changes was made to typescript types file:

1. Added `createWidget` to `IHmUIWidget` (for group and view container)
2. Added `boolean` to types accepted in `HmUIWidgetOptions` (for example `auto_scale` for `IMG`)
3. Changed return type of `px` from `string` to `number`
4. Added `object` to `HmUIPropertyValue` for `prop.MORE`
5. Changed `deviceName` of `getDeviceInfo` from `number` to `string`
6. changed `globalData` from `object` to `any`
7. made `getPackageInfo` return `IHmAppPackageInfo` with some common attributes and extra unknown attributes
8. Separated `readFileSync` into 2 definitions 
    1.  one with `encoding` returning `string | undefined`
    2.  one without `encoding` returning `ArrayBuffer | undefined`
9. Separated `writeFileSync` into 2 definitions 
    1.  one with `encoding` that accept `string | undefined`
    2.  one without `encoding` that accept `ArrayBuffer | undefined`
10. Changed `state` of `Page` from `object` to `any`