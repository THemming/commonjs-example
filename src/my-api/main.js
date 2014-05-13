require('./shims');
var vendor = require('./vendor-libs');
var Api = require('./my-api');

console.log('exposing libs to browser window');
window.$ = vendor.jQuery;
window.api = new Api();