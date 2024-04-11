import './buffer'
import './es6-promise'
import './setTimeout'
ES6Promise.polyfill()

Promise._setScheduler(function (flush) {
  flush && flush()
})
