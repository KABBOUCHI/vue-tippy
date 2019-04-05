# Animations
> Tooltips can have different types of transition animations.

<animations-table-v2/>


<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" 
            title="I shifted away from my reference element!" 
            v-tippy="{ arrow : true,  animation : 'shift-away'}"
    >
        Shift Away
    </button>
</div>
<div slot="code">

```html
<button title="I shifted away from my reference element!"
        v-tippy="{ arrow : true,  animation : 'shift-away'}">
    Shift Away
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" 
            title="I shifted toward my reference element!" 
            v-tippy="{ arrow : true,  animation : 'shift-toward'}"
    >
        Shift toward
    </button>
</div>
<div slot="code">

```html
<button title="I shifted toward my reference element!" 
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
           title="I just faded into existence!"
            v-tippy="{ arrow : true,  animation : 'fade'}"
    >
        Fade
    </button>
</div>
<div slot="code">

```html
<button title="I just faded into existence!" 
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
            title="I rotated with perspective!" 
            v-tippy="{ arrow : true,  animation : 'perspective'}"
    >
        Perspective
    </button>
</div>
<div slot="code">

```html
<button title="I rotated with perspective!" 
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
            title="I scaled up from nothingness!" 
            v-tippy="{ arrow : true,  animation : 'scale'}"
    >
        Scale
    </button>
</div>
<div slot="code">

```html
<button title="I scaled up from nothingness!" 
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
            title="Slingshot" 
            v-tippy="{ inertia : true, arrow : true,  duration : '[600,300]'}"
    >
        Inertia (shift away)
    </button>
</div>
<div slot="code">

```html
<button title="Slingshot" 
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
            title="Slingshot" 
            v-tippy="{ inertia : true, arrow : true,  animation : 'shift-toward', duration : '[600,300]'}"
    >
        Inertia (shift toward)
    </button>

</div>
<div slot="code">

```html
<button title="Slingshot" 
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
            title="Slingshot" 
            v-tippy="{ inertia : true, arrow : true,  animation : 'scale', duration : '[600,300]'}"
    >
        Inertia (scale)
    </button>
</div>
<div slot="code">

```html
<button title="Slingshot" 
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
            title="Slingshot" 
            v-tippy="{ inertia : true, arrow : true,  animation : 'perspective', duration : '[600,300]'}"
    >
        Inertia (perspective)
    </button>
</div>
<div slot="code">

```html
<button title="Slingshot" 
        v-tippy="{ inertia : true, arrow : true,  animation : 'perspective', duration : '[600,300]'}"
>
    Inertia (perspective)
</button>
```
</div>
</vue-code>