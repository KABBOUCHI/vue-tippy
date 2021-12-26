---
title: Configuration
description: ''
category: Getting started
position: 3
---

### Using global installation

```js
import { createApp } from 'vue'
import VueTippy from 'vue-tippy'

const app = createApp({})

app.use(VueTippy, {
  defaultProps: { placement: 'right' },
})

app.mount('#app')
```

### Using global function

```js
import { setDefaultProps } from 'vue-tippy'

setDefaultProps({
  placement: 'right',
})
```
