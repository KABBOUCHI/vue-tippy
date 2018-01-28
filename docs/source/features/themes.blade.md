---
extends: _layouts.documentation
title: "Themes"
description: "You can create all kinds of custom funky themes for your tooltips with ease."
---
@include('_partials.class-table', [
    'rows' => 
    [ 
        [ 
            'theme', 
            "'dark'",
            "'dark' 'light' \n'translucent' 'gradient",
            "" 
        ], 
    ] 
])
<br>  

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