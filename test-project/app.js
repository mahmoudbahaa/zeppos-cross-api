/* global App */

App({
  globalData: {
    pageNumber: 0,
    scrollTop: 0,
    continue: true,
    errorCount: 0,
    restorePlayer: true,
  },
  onCreate(options) {
    console.log('app on create invoke');
  },
  onDestroy(options) {
    console.log('app on destroy invoke');
  },
});
