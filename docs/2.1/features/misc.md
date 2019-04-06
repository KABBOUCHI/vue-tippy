
# Misc
> Tippy has many more features! These are just some of them.

<misc-table-v2/>

<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="I'm hugging the tooltip!" 
            v-tippy="{ animation : 'fade', animateFill : false, distance : 0 }"
    >
       Distance
    </button>
</div>
<div slot="code">

```html
<button title="I'm hugging the tooltip!" 
        v-tippy="{ animation : 'fade', animateFill : false, distance : 0 }">
   Distance
</button>
```

</div>
</vue-code>


<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="I'm offset 50px on the x-axis, and 10px on the y-axis!" 
            v-tippy="{ animation : 'fade', animateFill : false, arrow : true, offset : '50, 10' }"
    >
       Offset
    </button>
</div>
<div slot="code">

```html
<button title="I'm offset 50px on the x-axis, and 10px on the y-axis!" 
        v-tippy="{  animation : 'fade', 
                    animateFill : false,
                    arrow : true, 
                    offset : '50, 10' }">
   Offset
</button>
```

</div>
</vue-code>


<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="I'll follow your mouse cursor!" 
            v-tippy="{  animation : 'scale', 
                        animateFill : false,
                        arrow : true, 
                        followCursor : true}"
    >
       Follow cursor
    </button>
</div>
<div slot="code">

```html
<button title="I'll follow your mouse cursor!" 
        v-tippy="{  animation : 'scale', 
                    animateFill : false,
                    arrow : true, 
                    followCursor : true}">
   Follow cursor
</button>
```

</div>
</vue-code>


<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="I'll flip to the bottom if there's not enough room on the right." 
            v-tippy="{   placement: 'right',
                         animation: 'fade',
                         arrowType: 'round',
                         arrow: true,
                         flipBehavior: ['right', 'bottom']}"
    >
       Custom flips
    </button>
</div>
<div slot="code">

```html
<button title="I'll flip to the bottom if there's not enough room on the right." 
        v-tippy="{   placement: 'right',
                     animation: 'fade',
                     arrowType: 'round',
                     arrow: true,
                     flipBehavior: ['right', 'bottom']}">
   Custom flips
</button>
```

</div>
</vue-code>

<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" id="animated-tippy"
            title="Sticky tooltip! Click my element to hide me." 
            v-tippy="{  theme: 'transparent', sticky: true, hideOnClick: false, trigger: 'click' }"
    >
      Sticky <small class="opacity-75">(click)</small>
    </button>
</div>
<div slot="code">

```html

#animated-tippy {
  animation: hover 2s ease-in-out infinite;
}

<button class="btn mt-2 mb-2" id="animated-tippy"
            title="Sticky tooltip! Click my element to hide me." 
            v-tippy="{  
                        theme: 'transparent',
                        sticky: true,
                        hideOnClick: false,
                        trigger: 'click'
                     }"
>
    Sticky <small class="opacity-75">(click)</small>
</button>
```

</div>
</vue-code>

<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="I'm a tooltip!" 
            v-tippy="{ size : 'small' }"
    >
       Small tooltip
    </button>
</div>
<div slot="code">

```html
<button title="I'm a tooltip!"  v-tippy="{ size : 'small' }">
   Small tooltip
</button>
```

</div>
</vue-code>


<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="I'm a tooltip!" 
            v-tippy="{ size : 'large' }"
    >
       Large tooltip
    </button>
</div>
<div slot="code">

```html
<button title="I'm a tooltip!"  v-tippy="{ size : 'large' }">
   Large tooltip
</button>
```

</div>
</vue-code>

<vue-code>
<div slot="demo">
   <button class="btn mt-2 mb-2" 
         title="Use a touch device to see" 
         v-tippy="{ touchHold : true }"
   >
   Touch and hold only
   </button>
</div>
<div slot="code">

```html
<button title="Use a touch device to see"  v-tippy="{ touchHold : true }">
   Touch and hold only
</button>
```

</div>
</vue-code>