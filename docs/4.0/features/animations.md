# Animations
> Tooltips can have different types of transition animations.

<animations-table-v2/>


<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" 
            content="I shifted away from my reference element!" 
            v-tippy-v4="{ arrow : true,  animation : 'shift-away'}"
    >
        Shift Away
    </button>
</div>
<div slot="code">

```html
<button content="I shifted away from my reference element!"
        v-tippy="{ arrow : true,  animation : 'shift-away'}">
    Shift Away
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" 
            content="I shifted toward my reference element!" 
            v-tippy-v4="{ arrow : true,  animation : 'shift-toward'}"
    >
        Shift toward
    </button>
</div>
<div slot="code">

```html
<button content="I shifted toward my reference element!" 
        v-tippy="{ arrow : true,  animation : 'shift-toward'}"
>
    Shift toward
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
 <button class="btn mt-2 mb-2" 
           content="I just faded into existence!"
            v-tippy-v4="{ arrow : true,  animation : 'fade'}"
    >
        Fade
    </button>
</div>
<div slot="code">

```html
<button content="I just faded into existence!" 
        v-tippy="{ arrow : true,  animation : 'fade'}"
>
    Fade
</button>
```
</div>
</vue-code>



<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" 
            content="I rotated with perspective!" 
            v-tippy-v4="{ arrow : true,  animation : 'perspective'}"
    >
        Perspective
    </button>
</div>
<div slot="code">

```html
<button content="I rotated with perspective!" 
        v-tippy="{ arrow : true,  animation : 'perspective'}"
>
    Perspective
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" 
            content="I scaled up from nothingness!" 
            v-tippy-v4="{ arrow : true,  animation : 'scale'}"
    >
        Scale
    </button>
</div>
<div slot="code">

```html
<button content="I scaled up from nothingness!" 
        v-tippy="{ arrow : true,  animation : 'scale'}"
>
    Scale
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
 <button class="btn mt-2 mb-2" 
            content="Slingshot" 
            v-tippy-v4="{ inertia : true, arrow : true,  duration : '[600,300]'}"
    >
        Inertia (shift away)
    </button>
</div>
<div slot="code">

```html
<button content="Slingshot" 
        v-tippy="{ inertia : true, arrow : true, duration : '[600,300]'}"
>
    Inertia (shift away)
</button>
```
</div>
</vue-code>

<vue-code>
<div slot="demo">
  <button class="btn mt-2 mb-2" 
            content="Slingshot" 
            v-tippy-v4="{ inertia : true, arrow : true,  animation : 'shift-toward', duration : '[600,300]'}"
    >
        Inertia (shift toward)
    </button>

</div>
<div slot="code">

```html
<button content="Slingshot" 
        v-tippy="{ inertia : true, arrow : true,  animation : 'shift-toward', duration : '[600,300]'}"
>
    Inertia (shift toward)
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            content="Slingshot" 
            v-tippy-v4="{ inertia : true, arrow : true,  animation : 'scale', duration : '[600,300]'}"
    >
        Inertia (scale)
    </button>
</div>
<div slot="code">

```html
<button content="Slingshot" 
        v-tippy="{ inertia : true, arrow : true,  animation : 'scale', duration : '[600,300]'}"
>
    Inertia (scale)
</button>
```
</div>
</vue-code>

<vue-code>
<div slot="demo">
   <button class="btn mt-2 mb-2" 
            content="Slingshot" 
            v-tippy-v4="{ inertia : true, arrow : true,  animation : 'perspective', duration : '[600,300]'}"
    >
        Inertia (perspective)
    </button>
</div>
<div slot="code">

```html
<button content="Slingshot" 
        v-tippy="{ inertia : true, arrow : true,  animation : 'perspective', duration : '[600,300]'}"
>
    Inertia (perspective)
</button>
```
</div>
</vue-code>