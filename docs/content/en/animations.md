---
title: Animations
description: ''
category: Getting started
position: 6
---

Tippies use an opacity `fade` transition by default.

## Included animations

The package comes with extra animations for you to use:

- `shift-away`
- `shift-toward`
- `scale`
- `perspective`

They need to be imported separately.

```js
import 'tippy.js/animations/scale.css'
```

Pass the animation name as the `animation` prop:

```js
useTippy(target, {
  animation: 'scale',
})
```

Each of these animations also has 3 variants (normal, subtle, and extreme) using the following format:

```js
import 'tippy.js/animations/scale.css'
import 'tippy.js/animations/scale-subtle.css'
import 'tippy.js/animations/scale-extreme.css'
```

## Custom animations

To create your own animation:

- Specify the animation name in the `[data-animation]` attribute selector
- Target the visibility state of the tippy: `[data-state="hidden"]` or `[data-state="visible"]`
- Depending on the animation, target the placement of the tippy too: e.g. `[data-placement^="top"]`

```css
.tippy-box[data-animation='rotate'][data-state='hidden'] {
  opacity: 0;
  transform: rotate(90deg);
}
```

```js
useTippy(target, {
  animation: 'rotate',
})
```

## Inertia

There's a prop named `inertia` that adds an elastic inertial effect to the tippy, which is a limited CSS-only way to mimic spring physics.

```js
useTippy(target, {
  inertia: true,
})
```

You can customize this prop in your CSS:

```css
.tippy-box[data-inertia][data-state='visible'] {
  transition-timing-function: cubic-bezier(...);
}
```

## Material filling effect

Import `backdrop.css` & `animations/shift-away.css` stylesheets.

```js
import 'tippy.js/dist/backdrop.css'
import 'tippy.js/animations/shift-away.css'

useTippy(target, {
  animateFill: true,
})
```

## CSS animations

Maybe plain transitions aren't enough for your use case. You can also use CSS animations (e.g. `animate.css`):

```js
useTippy(target, {
  onMount(instance) {
    const box = instance.popper.firstElementChild
    requestAnimationFrame(() => {
      box.classList.add('animated')
      box.classList.add('wobble')
    })
  },
  onHidden(instance) {
    const box = instance.popper.firstElementChild
    box.classList.remove('animated')
    box.classList.remove('wobble')
  },
})
```

You can also use `@keyframes` and add the animation property to your `animation` selector too.
