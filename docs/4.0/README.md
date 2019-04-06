
# V4 - Playground
> Work in progress!


<vue-code>
<div slot="demo">
<tippy-v4 to="dyn0" :content="timer" arrow show-on-init sticky></tippy-v4>
<button class="btn" name="dyn0">BTN0</button>
</div>
<div slot="code">

```html
<tippy-v4 to="dyn0" :content="timer" arrow show-on-init sticky></tippy-v4>

<button class="btn" name="dyn0">BTN0</button>
```
</div>
</vue-code>


<vue-code>
<div slot="demo">
<tippy-v4 to="dyn" arrow="" show-on-init sticky trigger="manual">
    {{ timer }}
</tippy-v4>
<button class="btn" name="dyn">Dynamic Title</button>
</div>
<div slot="code">

```html

<tippy-v4 to="dyn" arrow="" show-on-init sticky trigger="manual">
    {{ timer }}
</tippy-v4>

<button class="btn" name="dyn">Dynamic Title</button>

```
</div>
</vue-code>


<vue-code>
<div slot="demo">
<tippy-v4 class="test" test="asdas" arrow="true">
    <span slot="content">
        Hi!
    </span>
    <button class="btn" slot="trigger">My Button</button>
</tippy-v4>
</div>
<div slot="code">

```html

<tippy-v4 class="test" test="asdas" arrow="true">
    <span slot="content">
        Hi!
    </span>
    <button class="btn" slot="trigger">My Button</button>
</tippy-v4>

```
</div>
</vue-code>



<vue-code>
<div slot="demo">

<tippy-v4 to="btn3" arrow="true" @shown="alert">{{timer}}</tippy-v4>

<button class="btn" name="btn3">btn3</button>

</div>
<div slot="code">

```html

<tippy-v4 to="btn3" arrow="true" @shown="alert">{{timer}}</tippy-v4>

<button class="btn" name="btn3">btn3</button>

```
</div>
</vue-code>



<vue-code>
<div slot="demo">
<button class="btn" :content="timer"
    v-tippy-v4="{ showOnInit : true , sticky : true, arrow : timer % 2 == 0}">
    btn4
    </button>
</div>
<div slot="code">

```html

<button class="btn" :content="timer"
    v-tippy-v4="{ showOnInit : true , sticky : true, arrow : timer % 2 == 0}">
    btn4
</button>

```
</div>
</vue-code>


<vue-code>
<div slot="demo">
<button class="btn" content="@shown" v-tippy-v4 @shown="alert('@shown')">
    @shown
</button></div>
<div slot="code">

```html

<button class="btn" content="@shown" v-tippy-v4 @shown="alert('@shown')">
    @shown
</button>

```
</div>
</vue-code>