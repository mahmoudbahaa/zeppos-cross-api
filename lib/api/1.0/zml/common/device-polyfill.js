import './_1_setTimeout';
import './_2_es6-promise';
import './buffer';
ES6Promise.polyfill();

Promise._setScheduler(flush => {
  flush && flush();
});
