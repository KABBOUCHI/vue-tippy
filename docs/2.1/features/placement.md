# Placement
> Tooltips can be placed in four different ways in relation to their reference element. Additionally, the tooltip can be shifted.

| Option        | Default       | Inputs| Role|
| ------------- |:-------------:|:-----:|----:|
| placement      | top  | top  bottom left right | Specifies which direction to place the tooltip in relation to the reference element. Add the suffix -start or -end to shift the placement. top-end is an example.

<br>  

<vue-code>
<div slot="demo">
<button class="btn mt-4 mb-4" title="Look at me on the top!" v-tippy='{ placement : "top" }'>Top</button>
</div>
<div slot="code">

```html
<button title="Look at me on the top!" v-tippy='{ placement : "top" }'>
    Top
</button>
```

</div>
</vue-code>


<vue-code>
<div slot="demo">
<button class="btn mt-4 mb-4" title="I end at the right edge!" v-tippy='{ placement : "top-end" }'>Top-End</button>
</div>
<div slot="code">

```html
<button title="Look at me on the right!" v-tippy='{ placement : "top-end" }'>
    Top-End
</button>
```

</div>
</vue-code>