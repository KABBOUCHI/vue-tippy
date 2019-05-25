# VueTippy

[![npm](https://img.shields.io/npm/v/vue-tippy.svg)](https://www.npmjs.com/package/vue-tippy) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) [![download](https://img.shields.io/npm/dt/vue-tippy.svg)](https://www.npmjs.com/package/vue-tippy)
> Directive wrapper for Tippy.js

![](https://github.com/KABBOUCHI/vue-tippy/blob/master/preview.gif?v0.3.0)

<aside class="notice">
<a href="https://github.com/KABBOUCHI/vue-tippy/tree/v1">For tippyJS v1 use v1 branch</a>
</aside>
<br>  
<aside class="notice">
<a href="https://github.com/KABBOUCHI/vue-tippy/tree/next">For tippyJS v4 use next branch</a>
</aside>

## Documentation

For full documentation, visit [https://kabbouchi.github.io/vue-tippy/](https://kabbouchi.github.io/vue-tippy/).

## Installation

```bash
npm install --save vue-tippy
# or
yarn add vue-tippy
```

## Usage

### Bundler (Webpack, Rollup)

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

### Browser

```html
<!-- From CDN -->
<script src="https://unpkg.com/vue-tippy/dist/vue-tippy.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-tippy/dist/vue-tippy.min.js"></script>
```

#### Basic
```html
<button title="Hi!" v-tippy> My Button! </button>
```

#### Bind title
```html
<button :title="dynamicTitle" v-tippy> My Button! </button>
```

#### Bind settings
```html
<button title="Hello" v-tippy="{ placement : 'top',  arrow: true }"> My Button! </button>
```

#### HTML Template 1 (without reactivity)
```html
<button data-tippy-html="#contentpopup1" data-tippy-interactive="true" v-tippy> My Button! </button>
```

```html
<div id="contentpopup1" style="display: none" v-tippy-html>
    <div>
        <h3> Header</h3>
        <p style="color: black"> {{ message }} - data binding </p>
    </div>
</div>
```

#### HTML Template 2 (with reactivity)
```html
<button v-tippy="{ html : '#contentpopup2'  , interactive : true , reactive : true }"> My Button! </button>
```

```html
<div id="contentpopup2">
    <div>
        <h3> Header</h3>
        <p style="color: black"> {{ message }} - data binding </p>
        <button @click="clicked">Click<button>
    </div>
</div>
```
 
#### Vue component
```html
<button  v-tippy="{ html : '#comppopup'  , interactive : true, reactive : true }"> My Button! </button>
```

```html
<vue-component-test id="comppopup"></vue-component-test>
```
 
> For more info on TippyJS view the documentation and demo here: https://atomiks.github.io/tippyjs/

## License

[MIT](http://opensource.org/licenses/MIT)
