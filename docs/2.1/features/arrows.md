# Arrows
> Arrows point toward the reference element. There are two different types of arrows: Sharp and Round. You can transform the proportion and scale of the arrows any way you like.

<arrows-table-v2/>

<vue-code>
<div slot="demo">
 <button class="btn mt-2 mb-2" title="I have a nice sharp arrow." v-tippy='{ arrow : true }'>
 Sharp
 </button>
</div>
<div slot="code">

```html
<button title="I have a nice sharp arrow." v-tippy='{ arrow : true }'>
    Sharp
</button>
```

</div>
</vue-code>

<vue-code>
<div slot="demo">
 <button class="btn mt-2 mb-2" title="I have a nice round arrow." v-tippy='{ arrow : true, arrowType : "round"}'>
 Round
 </button>
</div>
<div slot="code">

```html
<button title="I have a nice round arrow." 
        v-tippy='{ arrow : true, arrowType : "round" }'>
    Round
</button>
```

</div>
</vue-code>


<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" title="My arrow is wide." v-tippy='{ arrow : true, arrowTransform : "scaleX(1.4)" }'>
Wide
</button>
</div>
<div slot="code">

```html
<button title="My arrow is wide." 
        v-tippy='{ arrow : true, arrowTransform : "scaleX(1.4)" }'>
    Wide
</button>
```

</div>
</vue-code>


<vue-code>
<div slot="demo">
 <button 
    class="btn mt-2 mb-2" 
    title="My arrow is skinny and round."
    v-tippy='{ arrow : true, arrowType : "round", arrowTransform : "scale(0.7, 1)" }'>
 Skinny
 </button>
</div>
<div slot="code">

```html
<button title="My arrow is wide." 
        v-tippy='{ arrow : true, arrowType : "round", arrowTransform : "scale(0.7, 1)" }'>
    Skinny
</button>
```

</div>
</vue-code>


<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" title="My arrow is small." v-tippy='{ arrow : true, arrowTransform : "scale(0.75)" }'>Small</button>
</div>
<div slot="code">

```html
<button title="My arrow is small." 
        v-tippy='{ arrow : true, arrowTransform : "scale(0.75)" }'>
    Small
</button>
```

</div>
</vue-code>

<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" title="My arrow is large." v-tippy='{ arrow : true, arrowTransform : "scale(1.5)" }'>Large</button>
</div>
<div slot="code">

```html
<button title="My arrow is large."
        v-tippy='{ arrow : true, arrowTransform : "scale(1.5)" }'>
    Large
</button>
```

</div>
</vue-code>