---
title: All Props
description: ''
category: Getting started
position: 5
---

`Props` are configurable properties you can pass optionally to:

```html
<!-- Tippy Directive -->
<button v-tippy="props">Hello</button>
```

```html
<!-- Tippy Component -->
<tippy prop1 prop2 ...>
  <button>World!</button>
</tippy>
```

```js
// Composition api
useTippy(target, props)
```

## allowHTML

Determines if content strings are parsed as HTML instead of text.

```js
useTippy(target, {
  // default
  allowHTML: false,
  // parse `content` strings as HTML
  allowHTML: true,
})
```

## animateFill

Determines if the background fill color of the tippy should be animated.

```js
// You must also import the backdrop.css
// and animations/shift-away.css stylesheets
// for styling to work.

import 'tippy.js/dist/backdrop.css'
import 'tippy.js/animations/shift-away.css'

useTippy(target, {
  // default
  animateFill: false,
  // enable it
  animateFill: true,
})
```

## animation

The type of transition animation. See [Animations](/animations) for details.

```js
useTippy(target, {
  // default
  animation: 'fade',
})
```

## appendTo

The element to append the tippy to. If `interactive: true`, the default behavior is `appendTo: "parent"`.

Sometimes the tippy needs to be appended to a different DOM context due to accessibility, clipping, or z-index issues.

```js
useTippy(target, {
  // default (takes reference as an argument)
  appendTo: () => document.body,
  // append to reference's parentNode
  appendTo: 'parent',
  // append to an Element
  appendTo: element,
})
```

## aria

The aria attribute configuration. Both properties are optional:

- `content`: The `aria-*` attribute applied to the reference element to announce the tippy content.
- `expanded`: Whether to add an `aria-expanded` attribute to the reference element.

```js
useTippy(targets, {
  // default
  aria: {
    // `null` when interactive: true, otherwise "describedby"
    content: 'auto',
    // matches `interactive` boolean
    expanded: 'auto',
  },

  // announce as a label rather than a description
  // the content will also be announced with `interactive: true`
  aria: {
    content: 'labelledby',
  },

  // to abide by strict WCAG 2.1 rules with `interactive: true` to make it
  // hoverable if it's not actually interactive, but the content will still be
  // announced
  aria: {
    content: 'describedby',
  },

  // disable completely, left up to you to control
  aria: {
    content: null,
    expanded: false,
  },
})
```

## arrow

<alert type="warning">
   <a href="/themes" target="_blank">Theme</a> or <a href="/themes#styling-the-arrow" target="_blank">Styling the arrow</a> is required
</alert>

Determines if the tippy has an arrow.

```js
useTippy(target, {
  // default
  arrow: true,
  // disable arrow
  arrow: false,
  // custom arrow string
  arrow: '<svg>...</svg>',
  // custom arrow element
  arrow: svgElement,
})
```

## content

The content of the tippy.

```js
useTippy(target, {
  // default
  content: '',
  // string
  content: 'Hello',
  // Element
  content: document.createElement('div'),
  // (reference) => string | Element
  content: reference => reference.getAttribute('title'),
  // using a ref value
  // import { ref } from 'vue'
  // const refContent = ref("Hi!")
  content: refContent,
  // using a computed property
  content: computed(() => `(${x.value},${y.value})`),
  // Render function
  content: h('h1', 'Hello'),
  // Vue Component without props
  content: VueComponent,
  // Vue Component with props
  content: h(VueComponent, { message: 'Hello' }),
  // Vue Component with reactive props
  content: computed(() =>
    h(Counter, { onClick: () => counter.value++ }, 'Click Me!')
  ),
  // using define component
  content: defineComponent(() => {
    return () => h('p', 'Hellooooo')
  }),
})
```

## delay

Delay in ms once a trigger event is fired before tippy shows or hides.

```js
useTippy(target, {
  // default
  delay: 0,
  // show and hide delay are 100ms
  delay: 100,
  // show delay is 100ms, hide delay is 200ms
  delay: [100, 200],
  // show delay is 100ms, hide delay is the default
  delay: [100, null],
}
```

## duration

Duration in ms of the transition animation.

```js
useTippy(target, {
  // default
  duration: [300, 250],
  // show and hide durations are 100ms
  duration: 100,
  // show duration is 100ms, hide duration is 200ms
  duration: [100, 200],
  // show duration is 100ms, hide duration is the default
  duration: [100, null],
}
```

## followCursor

Determines if the tippy follows the user's mouse cursor.

```js
useTippy(target, {
  // default
  followCursor: false,
  // follow on both x and y axes
  followCursor: true,
  // follow on x axis
  followCursor: 'horizontal',
  // follow on y axis
  followCursor: 'vertical',
  // follow until it shows (taking into account `delay`)
  followCursor: 'initial',
})
```

## getReferenceClientRect

Used as the positioning reference for the tippy.

```js
useTippy(target, {
  // default (uses the reference passed as first argument)
  getReferenceClientRect: null,
  // function that returns a ClientRect object
  getReferenceClientRect: () => ({
    width: 100,
    height: 100,
    left: 100,
    right: 200,
    top: 100,
    bottom: 200,
  }),
})
```

## hideOnClick

Determines if the tippy hides upon clicking the reference or outside of the tippy. The behavior can depend upon the `trigger` events used.

```js
useTippy(target, {
  // default
  hideOnClick: true,
  // never hide upon clicking
  hideOnClick: false,
  // hide only upon clicking the reference, but not outside
  hideOnClick: 'toggle',
})
```

## ignoreAttributes

When using UI (component) libraries like Vue, this is generally not necessary and slows down initialization perf a bit.

```js
useTippy(target, {
  // default
  ignoreAttributes: true,
  // consider `data-tippy-*` attributes on the reference element
  ignoreAttributes: false,
})
```

## inertia

Determines if a (customizable) CSS spring-like animation is applied to the transition animation.

Changing the show duration to a higher value makes this look better.

```js
useTippy(target, {
  // default
  inertia: false,
  // enable it
  inertia: true,
})
```

```css
.tippy-box[data-inertia][data-state='visible'] {
  transition-timing-function: cubic-bezier(...);
}
```

## inlinePositioning

Provides enhanced support for `display: inline` elements. It will choose the most appropriate rect based on the placement.

```js
useTippy(target, {
  // default
  inlinePositioning: false,
  // enable it
  inlinePositioning: true,
})
```

## interactive

Determines if the tippy has interactive content inside of it, so that it can be hovered over and clicked inside without hiding.

```js
useTippy(target, {
  // default
  interactive: false,
  // enable it
  interactive: true,
})
```

## interactiveBorder

Determines the size of the invisible border around the tippy that will prevent it from hiding if the cursor left it.

```js
useTippy(target, {
  // default
  interactiveBorder: 2,
  // 30px
  interactiveBorder: 30,
})
```

## interactiveDebounce

Determines the time in ms to debounce the interactive hide handler when the cursor leaves the tippy's interactive region.

Offers a temporal (rather than spacial) alternative to `interactiveBorder`, although it can be used in conjunction with it.

```js
useTippy(target, {
  // default
  interactiveDebounce: 0,
  // 75ms
  interactiveDebounce: 75,
})
```

## maxWidth

Specifies the maximum width of the tippy. Useful to prevent it from being too horizontally wide to read.

<alert type="warning">
This is applied to the `.tippy-box` (inner element), rather than the root positioned popper node. The core CSS applies `max-width: calc(100vw - 10px)` on the root popper node to prevent it from exceeding the viewport width on small screens.
</alert>

```js
useTippy(target, {
  // default
  maxWidth: 350,
  // no maxWidth
  maxWidth: 'none',
})
```

## moveTransition

Specifies the transition applied to the root positioned popper node. This describes the transition between "moves" (or position updates) of the popper element when it e.g. flips or changes target location.

```js
useTippy(target, {
  // default
  moveTransition: '',
  // custom transition
  moveTransition: 'transform 0.2s ease-out',
})
```

## offset

Displaces the tippy from its reference element in pixels (skidding and distance).

See [Popper's docs](https://popper.js.org/docs/v2/modifiers/offset/) for details.

```js
useTippy(target, {
  // default [skidding, distance]
  offset: [0, 10],
})
```

## onAfterUpdate

Invoked after the tippy props has been updated.

```js
useTippy(target, {
  onAfterUpdate(instance, partialProps) {
    // ...
  },
})
```

## onBeforeUpdate

Invoked before the tippy props has been updated.

```js
useTippy(target, {
  onAfterUpdate(instance, partialProps) {
    // ...
  },
})
```

## onClickOutside

Invoked when the user clicks anywhere outside of the tippy or reference element.

```js
useTippy(target, {
  onClickOutside(instance, event) {
    // ...
  },
})
```

## onCreate

Invoked once the tippy has been created.

```js
useTippy(target, {
  onCreate(instance) {
    // ...
  },
})
```

## onDestroy

Invoked once the tippy has been destroyed.

```js
useTippy(target, {
  onDestroy(instance) {
    // ...
  },
})
```
## onHidden

Invoked once the tippy has been fully hidden and unmounted from the DOM.

```js
useTippy(target, {
  onHidden(instance) {
    // ...
  },
})
```
## onHide

Invoked once the tippy begins to hide.

```js
useTippy(target, {
  onHide(instance) {
    // ...
  },
})
```

<alert type="info">You can optionally `return false` from this lifecycle to cancel a hide based on a condition.</alert>

## onMount

Invoked once the tippy has been mounted to the DOM (and the popperInstance created).

```js
useTippy(target, {
  onMount(instance) {
    // ...
  },
})
```

## onShow

Invoked once the tippy begins to show.

```js
useTippy(target, {
  onShow(instance) {
    // ...
  },
})
```

<alert type="info">You can optionally `return false` from this lifecycle to cancel a show based on a condition.</alert>

## onShown

Invoked once the tippy has been fully transitioned in.

<alert type="info">Since this is achieved via CSS `transitionend`, it relies on your own event listeners if using a custom `render` function. You'll need to call the lifecycle manually in this case.</alert>

```js
useTippy(target, {
  onShown(instance) {
    // ...
  },
})
```

## onTrigger

Invoked once the tippy has been triggered by a DOM event (e.g. `mouseenter`).

```js
useTippy(target, {
  onShown(instance, event) {
    // ...
  },
})
```

## onUntrigger

Invoked once the tippy has been untriggered by a DOM event (e.g. `mouseleave`).

```js
useTippy(target, {
  onUntrigger(instance, event) {
    // ...
  },
})
```

## placement

The preferred placement of the tippy. Note that Popper's `flip` modifier can change this to the opposite placement if it has more space.

```js
useTippy(target, {
  // default
  placement: 'top',

  // full list:
  placement: 'top-start',
  placement: 'top-end',

  placement: 'right',
  placement: 'right-start',
  placement: 'right-end',

  placement: 'bottom',
  placement: 'bottom-start',
  placement: 'bottom-end',

  placement: 'left',
  placement: 'left-start',
  placement: 'left-end',

  // choose the side with most space
  placement: 'auto',
  placement: 'auto-start',
  placement: 'auto-end',
})
```

## popperOptions

Specifies custom Popper options. This gives you full control over the tippy's positioning. See [Popper's docs](https://popper.js.org/docs/v2/) for details.

```js
useTippy(target, {
  // default
  popperOptions: {},
  // detailed example
  popperOptions: {
    strategy: 'fixed',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['bottom', 'right'],
        },
      },
      {
        name: 'preventOverflow',
        options: {
          altAxis: true,
          tether: false,
        },
      },
    ],
  },
})
```

## role

Specifies the `role` attribute on the tippy element.

```js
useTippy(target, {
  // default
  role: 'tooltip',
})
```

## showOnCreate

Determines if the tippy is shown once it gets created, respecting `delay`.

```js
useTippy(target, {
  // default
  showOnCreate: false,
  // enable it
  showOnCreate: true,
})
```

## sticky

Determines if the tippy sticks to the reference element while it is mounted. This is usually not needed, but is useful if the reference element's position is animating, or to automatically update the tippy position without needing to manually do it in certain cases where the DOM layout changes.

<alert type="warning">This has a performance cost since checks are run on every animation frame. Use this only when necessary!</alert>

```js
useTippy(target, {
  // default
  sticky: false,
  // enable it
  sticky: true,
  // only check the "reference" rect for changes
  sticky: 'reference',
  // only check the "popper" rect for changes
  sticky: 'popper',
})
```

## themes

Determines the theme of the tippy element. The core CSS defaults to a dark `#333` theme. This can be overridden by a custom theme. See [Themes](/themes) for details.

```js
useTippy(target, {
  // default
  theme: '',
  // custom theme
  theme: 'tomato',
})
```

## touch

Determines the behavior on touch devices.

```js
useTippy(target, {
  // default
  touch: true,
  // disable tippy from showing on touch devices
  touch: false,
  // require pressing & holding the screen to show it
  touch: 'hold',
  // same as above, but long-press behavior
  touch: ['hold', 500],
})
```

## trigger

Determines the events that cause the tippy to show. Multiple event names are separated by spaces.

```js
useTippy(target, {
  // default
  trigger: 'mouseenter focus',
  // others:
  trigger: 'click',
  trigger: 'focusin',
  trigger: 'mouseenter click',
  // only programmatically trigger it
  trigger: 'manual',
})
```

## triggerTarget

The element(s) that the trigger event listeners are added to. Allows you to separate the tippy's positioning from its trigger source.

```js
useTippy(target, {
  // default (reference is used)
  triggerTarget: null,
  // Element
  triggerTarget: someElement,
  // Element[]
  triggerTarget: [someElement1, someElement2],
  // import { ref } from 'vue'
  // const refTriggerTarget = ref(); // <span ref="refTriggerTarget" >...
  triggerTarget: refTriggerTarget,
})
```
## zIndex

Specifies the `z-index` CSS on the root popper node.

```js
useTippy(target, {
  // default
  zIndex: 9999,
})
```
