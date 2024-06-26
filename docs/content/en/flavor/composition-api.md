---
title: Composition API
description: ''
position: 13
category: Flavor
---

<alert type="warning"> Work in progess </alert>

Low level, flexible composition, great for build tooltips with complex interactions.

Click [here](/props) to see full documentation on props.

## Basic Usage

```vue
<template>
  <button ref="btn">Tippy!</button>
</template>

<script setup>
import { useTippy } from 'vue-tippy'
const btn = ref()

useTippy(btn, {
  content: 'Hello!',
})
</script>
```

## Advanced Usage

### Example 1

```vue
<template>
  <button ref="btn">Tippy!</button>
</template>

<script setup>
import { useTippy } from 'vue-tippy'
import Counter from '@components/Counter.vue'

const btn = ref()

const {
  tippy,
  refresh,
  refreshContent,
  setContent,
  setProps,
  destroy,
  hide,
  show,
  disable,
  enable,
  unmount,
  mount,
  state,
} = useTippy(btn, {
  content: Counter,
  arrow: true,
})
</script>
```

### Example 2

```vue
<template>
  <button ref="btn">Tippy!</button>
</template>

<script setup>
import { useTippy } from 'vue-tippy'
import Counter from '@components/Counter.vue'

const btn = ref()

useTippy(btn, {
  content: h(Counter, { initialCount: 42 }),
  arrow: true,
})
</script>
```

## Singleton

### Example 1

```vue
<template>
  <div>
    <button ref="singletons" v-for="i in 10" v-tippy="`Tooltip ${i}`">
      Button {{ i }}
    </button>
  </div>
</template>

<script setup>
import { useSingleton } from 'vue-tippy'

const singletons = ref([])

useSingleton(singletons, {
  placement: 'top',
  moveTransition: 'transform 0.2s ease-out',
})
</script>
```
