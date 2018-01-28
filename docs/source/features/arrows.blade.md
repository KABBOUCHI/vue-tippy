---
extends: _layouts.documentation
title: "Arrows"
description: "Arrows point toward the reference element. There are two different types of arrows: Sharp and Round. You can transform the proportion and scale of the arrows any way you like."
---
@include('_partials.class-table', [
    'rows' => 
    [ 
        [ 
            'arrow', 
            "false",
            "Boolean",
            "Adds an arrow pointing to the reference element. Setting this to true disables animateFill." 
        ],
        [ 
            'arrowType', 
            "'sharp'",
            "'sharp' 'round'",
            "Specifies the type of arrow to use. Sharp is a CSS triangle, whereas Round is a custom SVG shape." 
        ],
        [ 
            'arrowTransform', 
            "''",
            "Transform CSS",
            "Allows you to transform the arrow, such as the proportion using scale. 
             <br/>
             <br/>Because of flipping, the syntax becomes dynamic. You must use the syntax that gives the desired results for the top placement, even if you use a different placement. Only translate and scale are supported for dynamic syntax. 
             <br/>
             <br/>'scaleX(1.5)' = wider arrow
             <br/>'scaleX(0.5)' = narrower arrow
             <br/>'scale(0.5)' = smaller arrow
             <br/>'scale(1.5)' = larger arrow
             <br/>'translateY(-5px)' = arrow closer to tooltip
             <br/>'translateY(5px)' = arrow farther from tooltip" 
        ],
    ] 
])
<br>  
@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="I have a nice sharp arrow." v-tippy='{ arrow : true }'>Sharp</button>

@slot('code')
    <button title="I have a nice sharp arrow." v-tippy='{ arrow : true }'>Sharp</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="I have a nice round arrow." v-tippy='{ arrow : true, arrowType : "round"}'>Round</button>

@slot('code')
<button title="I have a nice round arrow." 
        v-tippy='{ arrow : true, arrowType : "round" }'>
    Round
</button>
@endslot 

@endcomponent


@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="My arrow is wide." v-tippy='{ arrow : true, arrowTransform : "scaleX(1.4)" }'>Wide</button>

@slot('code')
<button title="My arrow is wide." 
        v-tippy='{ arrow : true, arrowTransform : "scaleX(1.4)" }'>
    Wide
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="My arrow is skinny and round." v-tippy='{ arrow : true, arrowType : "round", arrowTransform : "scale(0.7, 1)" }'>Skinny</button>

@slot('code')
<button title="My arrow is wide." 
        v-tippy='{ arrow : true, arrowType : "round", arrowTransform : "scale(0.7, 1)" }'>
    Skinny
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="My arrow is small." v-tippy='{ arrow : true, arrowTransform : "scale(0.75)" }'>Small</button>

@slot('code')
<button title="My arrow is small." 
        v-tippy='{ arrow : true, arrowTransform : "scale(0.75)" }'>
    Small
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="My arrow is large." v-tippy='{ arrow : true, arrowTransform : "scale(1.5)" }'>Large</button>

@slot('code')
<button title="My arrow is large."
        v-tippy='{ arrow : true, arrowTransform : "scale(1.5)" }'>
    Large
</button>
@endslot 

@endcomponent