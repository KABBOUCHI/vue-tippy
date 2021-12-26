// necessary for webpack
///<reference path="../src/global.d.ts"/>
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueTippy from '../src'
import "tippy.js/dist/tippy.css";
import App from './App.vue'
import PageIndex from './pages/Index.vue'
import PageNestedComponents from './pages/NestedComponents.vue'
import PageSingletonComponents from './pages/SingletonComponents.vue'
import ReactiveProps from './pages/ReactiveProps.vue'
import Testing from './pages/Testing.vue'
import ReactiveState from './pages/ReactiveState.vue'
import Counter from './components/Counter.vue'
import UiIcon from "./components/Icon.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: PageIndex },
    { path: '/nested-components', component: PageNestedComponents },
    { path: '/singleton-components', component: PageSingletonComponents },
    { path: '/testing', component: Testing },
    { path: '/reactive-props', component: ReactiveProps },
    { path: '/reactive-state', component: ReactiveState },
  ]
})


const app = createApp(App)
app.component('counter', Counter)
app.component("ui-icon", UiIcon);

app.use(router)
app.use(VueTippy, {
  defaultProps: { placement: 'right' },
})
app.mount('#app')
