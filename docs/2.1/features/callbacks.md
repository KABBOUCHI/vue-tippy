# Callbacks (events)
> Callbacks allow you to react to a tooltip's show and hide events. Open your browser console to see when the logs occur.
<events-table-v2/>


<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="I'm called when a tooltip begins to show."
            @show="onShow"
            v-tippy="{ arrow : true, duration : 600 }"
     >
       @show
    </button>
</div>
<div slot="code">

```html
<button title="I'm called when a tooltip begins to show."
        @show="onShow"
        v-tippy="{ arrow : true, duration : 600 }">
    @show
</button>
```
</div>
</vue-code>

<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" 
            title="I'm called when a tooltip begins to hide."
            @hide="onHide"
            v-tippy="{ arrow : true, duration : 600 }"
     >
       @hide
    </button>
</div>
<div slot="code">

```html
<button title="I'm called when a tooltip begins to hide."
        @hide="onHide"
        v-tippy="{ arrow : true, duration : 600 }">
    @hide
</button>
```
</div>
</vue-code>

<vue-code>
<div slot="demo">
 <button class="btn mt-2 mb-2" 
            title="I'm called when a tooltip begins to show."
            @how="onShow"
            v-tippy="{ arrow : true, duration : 600 }"
     >
       @show
    </button>
</div>
<div slot="code">

```html
<button title="I'm called when a tooltip begins to show."
        @show="onShow"
        v-tippy="{ arrow : true, duration : 600 }">
    @show
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
 <button class="btn mt-2 mb-2" 
            title="I'm called when a tooltip has fully transitioned in."
            @shown="onShown"
            v-tippy="{ arrow : true, duration : 600, maxWidth : '400px' }"
     >
       @shown
    </button>
</div>
<div slot="code">

```html
<button title="I'm called when a tooltip has fully transitioned in."
        @@hown="onShown"
        v-tippy="{ arrow : true, duration : 600, maxWidth : '400px' }">
    @shown
</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
 <button class="btn mt-2 mb-2" 
            title="I'm called when a tooltip has fully transitioned out."
            @hidden="onHidden"
            v-tippy="{ arrow : true, duration : 600, maxWidth : '400px' }"
     >
       @hidden
    </button>
</div>
<div slot="code">

```html
<button title="I'm called when a tooltip has fully transitioned out."
        @hidden="onHidden"
        v-tippy="{ arrow : true, duration : 600, maxWidth : '400px' }">
    @hidden
</button>

```
</div>
</vue-code>