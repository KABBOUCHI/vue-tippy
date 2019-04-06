# Transitions and Delays
> Tooltips can have different transition durations or delays.

<transitions-delays-table-v2/>


<vue-code>
<div slot="demo">
   <button class="btn mt-2 mb-2" 
            title="BAM!" 
            v-tippy="{ arrow : true,  animation : 'fade', duration : 0}"
    >
        Instant
    </button>
</div>
<div slot="code">

```html
<button title="BAM!"
        v-tippy="{ arrow : true,  animation : 'fade', duration : 0}">
    Instant
</button>
```
</div>
</vue-code>

<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="Fast!" 
            v-tippy="{ arrow : true,  animation : 'fade', duration : 200}"
    >
        Short duration
    </button>
</div>
<div slot="code">

```html
<button title="Fast!"
        v-tippy="{ arrow : true,  animation : 'fade', duration : 200}">
    Short duration
</button>
```
</div>
</vue-code>

<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="Slooooow" 
            v-tippy="{ arrow : true,  animation : 'fade', duration : 1000}"
    >
        Long duration
    </button>
</div>
<div slot="code">

```html
<button title="Slooooow"
        v-tippy="{ arrow : true,  animation : 'fade', duration : 1000}">
    Long duration
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="Waited to show" 
            v-tippy="{ arrow : true,  animation : 'fade', delay : [600,0]}"
    >
        Show delay
    </button>
</div>
<div slot="code">

```html
<button title="Waited to show"
        v-tippy="{ arrow : true,  animation : 'fade', delay : [600,0]}">
    Show delay
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" 
        title="Waited to hide" 
        v-tippy="{ arrow : true,  animation : 'fade', delay : [0,600]}"
>
    Hide delay
</button>
</div>
<div slot="code">

```html
<button title="Waited to hide"
        v-tippy="{ arrow : true,  animation : 'fade', delay : [0,600]}">
    Hide delay
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="Waited for both" 
            v-tippy="{ arrow : true,  animation : 'fade', delay : [600,600]}"
    >
        Combined delay
    </button>
</div>
<div slot="code">

```html
<button title="Waited for both"
        v-tippy="{ arrow : true,  animation : 'fade', delay : [600,600]}">
    Combined delay
</button>
```
</div>
</vue-code>
