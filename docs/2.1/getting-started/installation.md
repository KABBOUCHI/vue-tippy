# Installation
#### Quick start guide for installing and configuring VueTippy.

## CDN

```html
<script src="https://unpkg.com/vue-tippy/dist/vue-tippy.min.js"></script>
```
```html
<script src="https://cdn.jsdelivr.net/npm/vue-tippy/dist/vue-tippy.min.js"></script>
```

## NPM

```bash
# Using npm
npm install vue-tippy --save

# Using Yarn
yarn add vue-tippy
```

```js
import Vue from 'vue'
import VueTippy from 'vue-tippy'

Vue.use(VueTippy)
// or
Vue.use(VueTippy,{
    flipDuration: 0,
    popperOptions: {
        modifiers: {
            preventOverflow: {
                enabled: false
            }
        }
    }
})
```