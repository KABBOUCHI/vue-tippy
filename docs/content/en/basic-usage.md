---
title: Basic Usage
description: ''
category: Getting started
position: 4
---

### Vue Directive

```html
<template>
  <button v-tippy="{ content: 'Hi!' }">Tippy!</button>
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

  <tippy>
    <button>Tippy!</button>

    <template #content>
      Hi!
    </template>
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
