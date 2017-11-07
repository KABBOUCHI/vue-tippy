# vue-tippy

> Directive wrapper for Tippy.js

![](https://github.com/KABBOUCHI/vue-tippy/blob/master/preview.gif?v0.3.0)

## Install

#### CDN
  
  [unpkg.com](https://unpkg.com/vue-tippy/dist/vue-tippy.min.js)  
  [cdn.jsdelivr.net](https://cdn.jsdelivr.net/npm/vue-tippy/dist/vue-tippy.min.js)  

#### Available through npm as `vue-tippy`.

  ``` js
  var vueTippy = require('vue-tippy')
  Vue.use(vueTippy)
  ```
  

## Usage

#### Using the `v-tippy` directive

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
<button title="Hello" v-tippy="{ position : 'top',  arrow: true }"> My Button! </button>
```

#### HTML Template 1 (without reactivity)
```html
<button data-html="#contentpopup1" data-interactive="true" v-tippy> My Button! </button>
```
```html
<div id="contentpopup1" style="display: none">
        <div>
            <h3> Header</h3>
            <p style="color: black"> {{ message }} - data binding </p>
        </div>
 </div>
```

#### HTML Template 2 (with reactivity)
```html
<button v-tippy="{ html : '#contentpopup2'  , interactive : true }"> My Button! </button>
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
<button  v-tippy="{ html : '#comppopup'  , interactive : true }"> My Button! </button>
```
```html
<vue-component-test id="comppopup"></vue-component-test>
```

#### Bugs
- ~~Constant updating HTML or VueComponent will cause small delay for tooltip to pickup the new content, 
  if your tooltip depend on it, you can use  ```this.$tippy.forceUpdateHtml()``` to update it instantly.~~ fixed in v0.2.9
## License

[MIT](http://opensource.org/licenses/MIT)
