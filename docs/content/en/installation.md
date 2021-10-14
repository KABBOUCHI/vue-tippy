---
title: Installation
description: ''
category: Getting started
position: 2
---

Add `vue-tippy` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add vue-tippy@v6
```

  </code-block>
  <code-block label="NPM">

```bash
npm install vue-tippy@next
```

  </code-block>

### Install VueTippy globally (optional)

```js
import { createApp } from 'vue'

import VueTippy from 'vue-tippy'
// or
import { plugin as VueTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css' // optional for styling

const app = createApp({})

app.use(
  VueTippy,
  // optional
  {
    directive: 'tippy', // => v-tippy
    component: 'tippy', // => <tippy/>
    componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
    defaultProps: {
      placement: 'auto-end',
      allowHTML: true,
    }, // => Global default options * see all props
  }
)

app.mount('#app')
```
