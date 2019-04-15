# Demo

#### Default

The default tooltip looks like this. It has a nifty background fill animation!

<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4>
   My Button
</button>

</div>
<div slot="code">

```html
<button content="I'm a Tippy tooltip!" v-tippy>
  Tooltip using directive  
</button>

<!-- OR -->

<tippy>
    <span slot="content">
        I'm a Tippy tooltip!
    </span>
   <button class="btn" slot="trigger">
       Tooltip using component + slots
    </button>
</tippy>

<!-- OR -->

<tippy content="I'm a Tippy tooltip!">
   <button class="btn" slot="trigger">
       Tooltip using component + trigger slot and content as attribute/prop
   </button>
</tippy>

<!-- OR -->

<tippy to="externalTrigger">
    I'm a Tippy tooltip!
</tippy>

<button class="btn" name="externalTrigger">Tooltip using component</button>

```

</div>
</vue-code>


#### Placement

Tooltips can be placed in four different ways in relation to the reference element. Additionally, the tooltip can be shifted along the axis using the suffix `-start` or `-end`

<vue-code>
<div slot="demo">
<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{ placement : 'top'}">Top</button>
<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{ placement : 'bottom'}">Bottom</button>
<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{ placement : 'left'}">Left</button>
<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{ placement : 'right'}">Right</button>
<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{ placement : 'top-start'}">Top-Start</button>
<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{ placement : 'top-end'}">Top-End</button>
</div>
<div slot="code">

```html
<button 
    content="I'm a Tippy tooltip!" 
    v-tippy="{ placement : 'bottom' }">
    Bottom
</button>
```

</div>
</vue-code>


#### Arrows

Tooltips can have an arrow that points toward the reference element. The size and proportion can also be modified with CSS.


<vue-code>
<div slot="demo">

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{arrow : true,animation : 'fade'}">
    Default Arrow
</button>
<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{arrow : true, arrowType : 'round', animation : 'fade'}">
    Round arrow
</button>

</div>
<div slot="code">

```html
<button 
    content="I'm a Tippy tooltip!" 
    v-tippy="{arrow : true, arrowType : 'round', animation : 'fade'}">
    Round arrow
</button>
```
</div>
</vue-code>


#### Animations

Tooltips can have different types of transition animations. Note, the filling effect has been disabled in these examples `(animateFill: false)`.

<vue-code>
<div slot="demo">

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{animateFill : false, animation : 'shift-away'}">
    Shift-Away
</button>

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{animateFill : false, animation : 'shift-toward'}">
    Shift-Toward
</button>

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{animateFill : false, animation : 'scale'}">
    Scale
</button>

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{animateFill : false, animation : 'fade'}">
    Fade
</button>

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{animateFill : false, animation : 'perspective'}">
    Perspective
</button>

</div>
<div slot="code">

```html
<button 
    content="I'm a Tippy tooltip!" 
    v-tippy="{ animateFill: false, animation : 'shift-toward'}">
   Shift Toward
</button>
```
</div>
</vue-code>


#### Themes

Tooltips can have custom styling.


<vue-code>
<div slot="demo">

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{theme : 'dark'}">
   Dark
</button>

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{theme : 'light'}">
   Light
</button>

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{theme : 'light-border'}">
   Light-Border
</button>

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{theme : 'google'}">
   Google
</button>

</div>
<div slot="code">

```html
<button 
    content="I'm a Tippy tooltip!" 
    v-tippy="{ theme : 'light'}">
    Light
</button>
```
</div>
</vue-code>

#### Triggers

Tooltips can also be triggered by `click` or `focus` events.

<vue-code>
<div slot="demo">

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{trigger : 'click'}">
    Click
</button>

<button class="btn mt-2 mb-2" content="I'm a Tippy tooltip!" v-tippy-v4="{trigger : 'focus'}">
    Focus
</button>

</div>
<div slot="code">

```html
<button 
    content="I'm a Tippy tooltip!" 
    v-tippy="{trigger : 'click'}">
    Click
</button>
```
</div>
</vue-code>

#### Interactivity

Tooltips can be interactive, allowing you to hover over and click inside them.

<vue-code>
<div slot="demo">

<button class="btn mt-2 mb-2" content="You can select the text inside here." v-tippy-v4="{interactive : true}">
    Interactive
</button>

</div>
<div slot="code">

```html
<button 
    content="I'm a Tippy tooltip!" 
    v-tippy="{interactive : true}">
    Interactive
</button>
```
</div>
</vue-code>


#### HTML Content

Tooltips can contain HTML.

<vue-code>
<div slot="demo">

<button class="btn mt-2 mb-2" :content='`<strong>Bolded <span style="color: aqua;">content</span> (${timer})</strong>`'  v-tippy-v4>
    HTML Content (hover)
</button>

<tippy-v4 interactive :animate-fill="false" placement="bottom" distant="7" theme="light" animation="fade" trigger="click" arrow>
<span slot="content">
    <button class="btn" @click="timer = timer + 10">Increase</button>
    <p class="mt-2">{{ timer }}</p>
</span>

<button class="btn" slot="trigger">
HTML Content using component (click)
</button>

</tippy-v4>

</div>
<div slot="code">

```html
<button 
    :content='`<strong>Bolded <span>content</span> (${timer})</strong>`' 
    v-tippy-v4>
    HTML Content (hover)
</button>

<tippy 
    interactive 
    :animate-fill="false" 
    placement="bottom" 
    distant="7" 
    theme="light" 
    animation="fade" 
    trigger="click" 
    arrow>
<span slot="content">
    <button @click="timer = timer + 10">Increase</button>
    <p>{{ timer }}</p>
</span>

<button slot="trigger">
HTML Content using component (click)
</button>
</tippy>
```
</div>
</vue-code>

#### Duration

Tooltips can have different animation durations.

<vue-code>
<div slot="demo">

<tippy-v4 content="I'm a Tippy tooltip!" duration="0"><button slot="trigger" class="btn">0</button></tippy-v4>

<tippy-v4  content="I'm a Tippy tooltip!" duration="1000"><button slot="trigger" class="btn">1000</button></tippy-v4>

<tippy-v4  content="I'm a Tippy tooltip!" :duration="[800,100]"><button slot="trigger" class="btn">[800,100]</button></tippy-v4>

</div>
<div slot="code">

```html
<button 
    content="I'm a Tippy tooltip!" 
    v-tippy="{duration : 0}">
    0
</button>

<tippy content="I'm a Tippy tooltip!" duration="1000">
    <button slot="trigger" class="btn">1000</button>
</tippy>

<tippy content="I'm a Tippy tooltip!" :duration="[800,100]">
    <button slot="trigger" class="btn">[800,100]</button>
</tippy>
```
</div>
</vue-code>


#### Delay

Tooltips can delay hiding or showing after a trigger.

<vue-code>
<div slot="demo">

<tippy-v4 content="I'm a Tippy tooltip!" delay="0"><button slot="trigger" class="btn">500</button></tippy-v4>

<tippy-v4  content="I'm a Tippy tooltip!" :delay="[800,0]"><button slot="trigger" class="btn">[800,0]</button></tippy-v4>

<tippy-v4  content="I'm a Tippy tooltip!" :delay="[0,800]"><button slot="trigger" class="btn">[0,800]</button></tippy-v4>

</div>
<div slot="code">

```html
<button 
    content="I'm a Tippy tooltip!" 
    v-tippy="{delay : 500}">
   500
</button>

<tippy content="I'm a Tippy tooltip!" :delay="[800,0]">
    <button slot="trigger" class="btn">[800,0]</button>
</tippy>

<tippy content="I'm a Tippy tooltip!" :delay="[0,800]">
    <button slot="trigger" class="btn">[0,800]</button>
</tippy>
```
</div>
</vue-code>

#### Follow Cursor

Tooltips can follow the mouse cursor and abide by a certain axis. Additionally,
the tooltip can follow the cursor until it shows, at which point it will stop
following (initial).

<vue-code>
<div slot="demo">
  <tippy-v4 content="I'm a Tippy tooltip!" follow-cursor animate-fill=false duration=200 animation="fade">
    <button class="btn" slot="trigger">Default</button>
  </tippy-v4>
  <tippy-v4
    content="I'm a Tippy tooltip!"
    follow-cursor="horizontal"
    animate-fill=false
    duration=200
    animation="fade"
  >
    <button class="btn" slot="trigger">Horizontal</button>
  </tippy-v4>
  <tippy-v4
    content="I'm a Tippy tooltip!"
    followCursor="vertical"
    animateFill=false
    duration=200
    animation="fade"
  >
    <button class="btn" slot="trigger">Vertical</button>
  </tippy-v4>
  <tippy-v4
    content="I'm a Tippy tooltip!"
    followCursor="initial"
    animateFill=false
    delay=200
    duration=200
    animation="fade"
  >
    <button class="btn" slot="trigger">Initial</button>
  </tippy-v4>
</div>
  
<div slot="code">

```html
<button 
    content="I'm a Tippy tooltip!" 
    v-tippy="{followCursor : true}">
    Default
</button>
```
</div>
</vue-code>


### SVGs

Tooltips can be placed on SVG nodes, where `followCursor: 'initial'` becomes
very useful, since it can be placed directly on the line.

<vue-code>
<div slot="demo">

<svg 
    height="150" 
    width="150">
    <line x1="0" y1="0" x2="150" y2="150" style="stroke:red;strokeWidth:5" 
    content="I'm a Tippy tooltip!" v-tippy-v4='{followCursor : "initial", animation:"fade", delay:100, arrow : true}'></line>
</svg>

</div>

<div slot="code">

```html
<svg 
    height="150" 
    width="150">
    <line x1="0" y1="0" x2="150" y2="150" style="stroke:red;strokeWidth:5" 
    content="I'm a Tippy tooltip!" 
    v-tippy='{followCursor : "initial", animation:"fade", delay:100, arrow : true}'></line>
</svg>
```
</div>
</vue-code>

### Multiple

Attach many tippys to a single element.

<vue-code>
<div slot="demo" class="p4">
    <tippy-v4 to="tippyMultiple" flip=false placement="left" multiple>Left</tippy-v4>
    <tippy-v4 to="tippyMultiple" flip=false placement="right" multiple>Right</tippy-v4>
    <tippy-v4 to="tippyMultiple" flip=false placement="top" multiple>Top</tippy-v4>
    <tippy-v4 to="tippyMultiple" flip=false placement="bottom" multiple>Bottom</tippy-v4>
    <button name="tippyMultiple" class="btn"> Multiple </button>
</div>

<div slot="code">

```html
    <tippy to="tippyMultiple" flip=false placement="left" multiple>Left</tippy>
    <tippy to="tippyMultiple" flip=false placement="right" multiple>Right</tippy>
    <tippy to="tippyMultiple" flip=false placement="top" multiple>Top</tippy>
    <tippy to="tippyMultiple" flip=false placement="bottom" multiple>Bottom</tippy>
    
    <button name="tippyMultiple" class="btn"> Multiple </button>
```
</div>

</vue-code>