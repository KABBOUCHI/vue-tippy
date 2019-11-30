# Arrows
> Arrows point toward the reference element. There are two different types of arrows: Sharp and Round. You can transform the proportion and scale of the arrows any way you like.

<arrows-table-v2/>

<vue-code>
<div slot="demo">
 <button class="btn mt-2 mb-2" content="I have a nice sharp arrow." v-tippy-v4='{ arrow : true }'>
 Sharp
 </button>
</div>
<div slot="code">

```html
<button content="I have a nice sharp arrow." v-tippy='{ arrow : true }'>
    Sharp
</button>
```

</div>
</vue-code>

<vue-code>
<div slot="demo">
 <button class="btn mt-2 mb-2" content="I have a nice round arrow." v-tippy-v4='{ arrow : true, arrowType : "round"}'>
 Round
 </button>
</div>
<div slot="code">

```html
<button content="I have a nice round arrow." 
        v-tippy='{ arrow : true, arrowType : "round" }'>
    Round
</button>
```

</div>
</vue-code>
