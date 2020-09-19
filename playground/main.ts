// necessary for webpack
///<reference path="../src/global.d.ts"/>
import { createApp } from 'vue'
import VueTippy from '../src'

import App from './App.vue'
const app = createApp(App)
app.use(VueTippy, {
  defaultProps: { placement: 'right' },
})
app.mount('#app')
