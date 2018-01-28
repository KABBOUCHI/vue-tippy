---
extends: _layouts.documentation
title: "Interactivity"
description: "Tooltips can be interactive, meaning you can hover over or click on them and they won't hide."
---
@include('_partials.class-table', [
    'rows' => 
    [ 
        [ 
            'interactive', 
            "false",
            "Boolean",
            "Makes a tooltip interactive, i.e. will not close when the user hovers over or clicks on the tooltip. This lets you create a popover (similar to Bootstrap) when used in conjunction with a click trigger." 
        ], 
        [ 
            'interactiveBorder', 
            "2",
            "Number (pixels)",
            "Specifies the size of the invisible border around an interactive tooltip that will prevent it from closing. Only applies to mouseenter triggered tooltips." 
        ], 
    ] 
])
<br>  
@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="I don't close when the cursor moves onto me!" v-tippy='{ interactive : true }'>Interactive with hover</button>

    @slot('code')
<button title="I don't close when the cursor moves onto me!"
        v-tippy='{ interactive : true }'>
    Interactive with hover
</button>
    @endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="Feel free to interact with me." v-tippy='{ interactive : true, trigger: "click" }'>Interactive with click</button>

    @slot('code')
<button title="Feel free to interact with me." 
        v-tippy='{ interactive : true, trigger: "click" }'>
    Interactive with click
</button>
    @endslot 

@endcomponent