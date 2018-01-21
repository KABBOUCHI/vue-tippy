---
extends: _layouts.documentation
title: "Installation"
description: "Quick start guide for installing and configuring VueTippy."
---

## CDN

```html
<script src="https://unpkg.com/vue-tippy/dist/vue-tippy.min.js"></script>
```
```html
<script src="https://cdn.jsdelivr.net/npm/vue-tippy/dist/vue-tippy.min.js"></script>
```

## NPM

<div class="rounded bg-grey-lightest border-2 border-grey-light font-mono text-sm p-4">
  <div class="text-grey-dark"># Using npm</div>
  <div class="text-purple-dark">npm install <span class="text-blue-dark">vue-tippy</span> <span class="text-grey-darker">--save-dev</span></div>
  <div class="text-grey-dark mt-6"># Using Yarn</div>
  <div class="text-purple-dark">yarn add <span class="text-blue-dark">vue-tippy</span> <span class="text-grey-darker">--dev</span></div>
</div>

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