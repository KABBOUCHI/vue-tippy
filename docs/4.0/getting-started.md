# Getting Started


## Option1: CDN

```html
<script src="https://unpkg.com/vue-tippy@@4.0.0-beta.3/dist/vue-tippy.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-tippy@4.0.0-beta.3/dist/vue-tippy.min.js"></script>
```

## Option 2: Package Manager

```bash
npm install --save vue-tippy@next
yarn add vue-tippy@next
```

Then, import the vue-tippy:

```js
import Vue from 'vue'
import VueTippy, { VueComponent]} from 'vue-tippy'

Vue.use(VueTippy)
// or
Vue.use(VueTippy,{
    directive : 'tippy', // => v-tippy
    flipDuration: 0,
    popperOptions: {
        modifiers: {
            preventOverflow: {
                enabled: false
            }
        }
    }
})

Vue.component('tippy',VueComponent);
```