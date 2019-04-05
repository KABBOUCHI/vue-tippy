# Themes
> You can create all kinds of custom funky themes for your tooltips with ease.

<themes-table-v2/>

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="See through!" 
            v-tippy="{ arrow : true, animateFill: false, theme : 'translucent', flip : false }"
     >
       Translucent
    </button>

@slot('code')
<button title="See through!" 
        v-tippy="{ arrow : true, animateFill: false, theme : 'translucent' }">
Translucent
</button>
@endslot 

@endcomponent


@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Awesome colors!" 
            v-tippy="{ animateFill: false, theme : 'gradient' }"
     >
       Gradient
    </button>

@slot('code')
<button title="Awesome colors!" 
        v-tippy="{ animateFill: false, theme : 'gradient' }">
Gradient
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Cool huh?" 
            v-tippy="{ animateFill: false, theme : 'light bordered'}"
     >
       Light
    </button>

@slot('code')
<button title="Cool huh?" 
        v-tippy="{ animateFill: false, theme : 'light bordered' }">
    Light
</button>
@endslot 

@endcomponent

## Creating themes

Creating a theme for your tooltips is easy. If you wanted to make a theme called honeybee, then your CSS would look like:

```css
.tippy-tooltip.honeybee-theme {
  /* Your styling here. Example: */
  background-color: yellow;
  border: 2px solid orange;
}
```

Themes need the <span class="text-purple-dark">-theme</span> suffix.

#### Style the arrow

To style the arrow, target the element with a <span class="text-purple-dark">tippy-arrow</span> or <span class="text-purple-dark">tippy-roundarrow</span> class:

```css
.tippy-popper[x-placement^=top] .tippy-tooltip.honeybee-theme .tippy-arrow {
  /* Your arrow styling here. */
}
```

In this example, the arrow is being styled when the tooltip placement begins with <span class="text-purple-dark">top</span>. You will need to target a specific popper placement (top, bottom, left, right) because the arrow will change based on the placement.

Sharp arrows are CSS triangles which use the border trick, while round arrows are an SVG shape which can have their color changed with <span class="text-purple-dark">fill</span>.

#### Style content directly
<span></span>  
```css
.tippy-tooltip.honeybee-theme .tippy-content {
  /* Your styling here. Example: */
  color: black;
}
```

#### Style the animateFill backdrop
<span></span>  
```css
.tippy-tooltip.honeybee-theme .tippy-backdrop {
  /* Your styling here. Example: */
  background-color: yellow;
}
```
#### Specify a theme
<span></span>
@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm a tooltip" 
            v-tippy="{ theme : 'honeybee' , animateFill : false}" 
     >
       Honeybee theme
    </button>

@slot('code')
<button title="I'm a tooltip" v-tippy="{ theme : 'honeybee' }">
    Honeybee theme
</button>

<style>
    .tippy-tooltip.honeybee-theme {
        background-color: yellow;
        border: 2px solid orange;
        color: black;
    }
    .tippy-popper[x-placement^='top'] 
    .tippy-tooltip.honeybee-theme 
    .tippy-arrow {
        border-top: 7px solid orange;
    }
    .tippy-popper[x-placement^='top'] 
    .tippy-tooltip.honeybee-theme 
    .tippy-arrow::after {
        content: '';
        position: absolute;
        top: -8px;
        left: -6px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid yellow;
    }
</style>
@endslot 

@endcomponent

#### Multiple themes
<span></span>  
@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm a tooltip" 
            v-tippy="{ theme : 'honeybee light' , animateFill : false}" 
     >
       Multiple themes
    </button>

@slot('code')
<button title="I'm a tooltip" v-tippy="{ theme : 'honeybee light' }">
    Multiple themes
</button>
@endslot 

@endcomponent