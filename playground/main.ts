// necessary for webpack
///<reference path="../src/global.d.ts"/>
import { createApp } from 'vue'
import { Tippy } from '../src'

import App from './App.vue'
const app = createApp(App)
app.component('tippy', Tippy)
app.mount('#app')
