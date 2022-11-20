---
title: Component
description: ''
position: 12
category: Flavor
---

<alert type="warning"> Work in progess </alert>

Simple, high-level, great for building complex tooltips with interactions

Click [here](/props) to see full documentation on props.

`<Tippy />` additional props:

| Prop            | Type                  | Default | Description           |
| :-------------- | :-------------------- | :------ | :-------------------- |
| `tag`           | `String`              | `span`  | Trigger wrapper tag   |
| `content-tag`   | `String`              | `span`  | Content wrapper tag   |
| `content-class` | `String`              | `null`  | Content wrapper class |
| `to`            | `Element` or `String` | `null`  | Target selector       |

## Basic Usage

```html
<tippy content="Hi!">
  <button>Tippy!</button>
</tippy>
```

## Advanced Usage

### Example 1

```html
<tippy
    arrow
    interactive
    :hide-on-click="false"
    @state="onStateChange"
>
  <template #default="{ state }">
    <div>
      <h1>Tippy!</h1>
      <p>{{ state }}</p>
    </div>
  </template>

  <template #content="{ hide }">
    Hi! <button @click="hide()">X</button>
  </template>
</tippy>
```

### Example 2

```html
<tippy tag="button" content-tag="div" content-class="content-wrapper">
  <template #default>Tippy!</template>
  <template #content>Hi!</template>
</tippy>
```
## Singleton

### Example 1

```html
<tippy-singleton move-transition="transform 0.2s ease-out" placement="top">
  <tippy
    class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
    content="Working tooltip"
  >
    Button 1
  </tippy>

  <tippy
    class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
    content="Working tooltip"
  >
    Button 2
  </tippy>
</tippy-singleton>
```
