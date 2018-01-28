---
extends: _layouts.documentation
title: "Placement"
description: "Tooltips can be placed in four different ways in relation to their reference element. Additionally, the tooltip can be shifted."
---
@include('_partials.class-table', [
    'rows' => 
    [ 
        [ 
            'placement', 
            "'top'",
            "'top' 'bottom' \n'left' 'right'",
            "Specifies which direction to place the tooltip in relation to the reference element. Add the suffix -start or -end to shift the placement. top-end is an example." 
        ], 
    ] 
])
<br>  
@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-4 mb-4" title="Look at me on the top!" v-tippy='{ placement : "top" }'>Top</button>

@slot('code')

<button title="Look at me on the top!" v-tippy='{ placement : "top" }'>
    Top
</button>

@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-4 mb-4" title="I end at the right edge!" v-tippy='{ placement : "top-end" }'>Top-End</button>

@slot('code')

<button title="Look at me on the right!" v-tippy='{ placement : "top-end" }'>
    Top-End
</button>

@endslot 

@endcomponent