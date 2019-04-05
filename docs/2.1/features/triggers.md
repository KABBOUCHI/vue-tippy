# Triggers
> Triggers define the types of events that cause a tooltip to show. A fourth trigger, Manual, is used when you want to programmatically show or hide a tooltip.

<triggers-table-v2/>

<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" title="Some mobile browsers only fire mouseenter" v-tippy='{ trigger : "mouseenter" }'>
Hover or touch
</button>

</div>
<div slot="code">

```html
<button title="Some mobile browsers only fire mouseenter" 
        v-tippy='{ trigger : "mouseenter" }'>
    Hover or touch
</button>
```

</div>
</vue-code>

<vue-code>
<div slot="demo">
    <button class="btn mt-2 mb-2" title="Some mobile browsers only fire focus" v-tippy='{ trigger : "focus", hideOnClick : false }'>
    Focus or touch
    </button>

</div>
<div slot="code">

```html
<button title="Some mobile browsers only fire focus" 
        v-tippy='{ trigger : "focus", hideOnClick : false }'>
    Focus or touch
</button>
```

</div>
</vue-code>

<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" title="Thanks for clicking" v-tippy='{ trigger : "click" }'>Click</button>
</div>
<div slot="code">

```html
<button title="Thanks for clicking" v-tippy='{ trigger : "click"}'>
    Click
</button>
```
</div>
</vue-code>