# Interactivity
> Tooltips can be interactive, meaning you can hover over or click on them and they won't hide.

<interactivity-table-v2/>

<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" title="I don't close when the cursor moves onto me!" v-tippy='{ interactive : true }'>
    Interactive with hover
    </button>
</div>
<div slot="code">

```html
<button title="I don't close when the cursor moves onto me!"
        v-tippy='{ interactive : true }'>
    Interactive with hover
</button>
```
</div>
</vue-code>

<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" title="Feel free to interact with me." v-tippy='{ interactive : true, trigger: "click" }'>Interactive with click</button>
</div>
<div slot="code">

```html
<button title="Feel free to interact with me." 
        v-tippy='{ interactive : true, trigger: "click" }'>
    Interactive with click
</button>
```
</div>
</vue-code>