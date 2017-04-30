const vueTippy = require('./vue-tippy.js');

global.VueTippy = vueTippy;

window.Vue && global.Vue.use(vueTippy);