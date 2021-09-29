# VueTippy - V6 - WIP

[![npm](https://img.shields.io/npm/v/vue-tippy/next.svg)](https://www.npmjs.com/package/vue-tippy) [![vue2](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/) [![download](https://img.shields.io/npm/dt/vue-tippy.svg)](https://www.npmjs.com/package/vue-tippy)

> Vue.js 3 wrapper for Tippy.js

## Documentation (WIP)

For full v6 documentation, visit https://vue-tippy.netlify.app

## Installation

```js
npm install vue-tippy@v6

//or

yarn add vue-tippy@v6
```

## Configuration (optional)

```js
import { createApp } from 'vue'

import VueTippy from 'vue-tippy'
// or
import { plugin as VueTippy } from 'vue-tippy'

const app = createApp({})

app.use(
  VueTippy,
  // optional
  {
    directive: 'tippy', // => v-tippy
    component: 'tippy', // => <tippy/>
  }
)

app.mount('#app')
```

## Usage

### Vue Directive

```html
<template>
  <button v-tippy="{ content: 'Hi!' }">Tippy!</button>
  <button v-tippy="'Hello!'">Tippy!</button>
</template>

<!-- 
  The below is optional in case you 
  installed the plugin globally
 -->
<script>
  import { directive } from 'vue-tippy'

  export default {
    directives: {
      tippy: directive,
    },
  }
</script>
```

### Vue Component

```html
<template>
  <tippy content="Hi!">
    <button>Tippy!</button>
  </tippy>
</template>

<!-- 
  The below is optional in case you 
  installed the plugin globally
 -->
<script>
  import { Tippy } from 'vue-tippy'

  export default {
    components: [Tippy],
  }
</script>
```

### Using composition api

```js
import { defineComponent, ref, h } from 'vue'
import { useTippy } from 'vue-tippy'

export default defineComponent({
  setup() {
    const button = ref()

    useTippy(button, {
      content: 'Hi!',
    })

    return () => h('button', { ref: button }, 'Tippy!')
  },
})
```
