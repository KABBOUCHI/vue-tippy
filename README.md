# VueTippy

[![npm](https://img.shields.io/npm/v/vue-tippy.svg)](https://www.npmjs.com/package/vue-tippy) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![download](https://img.shields.io/npm/dt/vue-tippy.svg)](https://www.npmjs.com/package/vue-tippy)

> Directive wrapper for Tippy.js

![](https://github.com/KABBOUCHI/vue-tippy/blob/master/preview.gif?v0.3.0)

<aside class="notice">
<a href="https://github.com/KABBOUCHI/vue-tippy/tree/v1">For tippyJS v1 use v1 branch</a>
</aside>

<br/>

<aside class="notice">
<a href="https://vue-tippy.netlify.app/">Vue 3 alpha version</a>
</aside>



## Documentation

For full v4 documentation, visit [https://kabbouchi.github.io/vue-tippy/4.0/](https://kabbouchi.github.io/vue-tippy/4.0/).

## Installation

```bash
npm install --save vue-tippy
# or
yarn add vue-tippy
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from "vue";
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);

// or
Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false
      }
    }
  }
});
Vue.component("tippy", TippyComponent);


// Add additional themes.
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";
```

### Browser

```html
<!-- From CDN -->
<script src="https://unpkg.com/vue-tippy/dist/vue-tippy.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-tippy/dist/vue-tippy.min.js"></script>
```

#### Basic Usage

```html
<button content="Hi!" v-tippy>My Button!</button>
<button :content="dynamicTitle" v-tippy>My Button!</button>
<button content="Hello" v-tippy="{ placement : 'top',  arrow: true }">
  My Button!
</button>
```

#### Using Vue component

```html
<tippy to="myTrigger" arrow>
  <div>
    <h3>Header</h3>
    <p style="color: black">{{ message }} - data binding</p>
    <button @click="clicked">Click</button>
  </div>
</tippy>

<button name="myTrigger">Tippy Trigger</button>
```

```html
<tippy arrow>
  <template v-slot:trigger>
    <button>Tippy Trigger</button>
  </template>

  <div>
    <h3>Header</h3>
    <p style="color: black">{{ message }} - data binding</p>
    <button @click="clicked">Click</button>
  </div>
</tippy>
```

```html
<tippy :content="`tooltip: ${message}`" arrow>
  <template v-slot:trigger>
    <button>Tippy Trigger</button>
  </template>
</tippy>
```

> For full v4 documentation, visit [https://kabbouchi.github.io/vue-tippy/4.0/](https://kabbouchi.github.io/vue-tippy/4.0/).

> For more info on TippyJS view the documentation and demo here: ~https://atomiks.github.io/tippyjs/~ https://kabbouchi.github.io/tippyjs-v4-docs/

## License

[MIT](http://opensource.org/licenses/MIT)
