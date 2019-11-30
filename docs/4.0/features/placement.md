# Placement
> Tooltips can be placed in four different ways in relation to their reference element. Additionally, the tooltip can be shifted.

<placement-table-v2/>  

<vue-code>
<div slot="demo">
<button class="btn mt-4 mb-4" content="Look at me on the top!" v-tippy-v4='{ placement : "top" }'>Top</button>
</div>
<div slot="code">

```html
<button content="Look at me on the top!" v-tippy='{ placement : "top" }'>
    Top
</button>
```

</div>
</vue-code>


<vue-code>
<div slot="demo">
<button class="btn mt-4 mb-4" content="I end at the right edge!" v-tippy-v4='{ placement : "top-end" }'>Top-End</button>
</div>
<div slot="code">

```html
<button content="Look at me on the right!" v-tippy='{ placement : "top-end" }'>
    Top-End
</button>
```

</div>
</vue-code>