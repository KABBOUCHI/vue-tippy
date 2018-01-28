---
extends: _layouts.documentation
title: "Transitions &amp; Delays"
description: "Tooltips can have different transition durations or delays."
---
@include('_partials.class-table', [
    'rows' => 
    [ 
        [ 
            'delay', 
            "0",
            "Number | Array \n(milliseconds)",
            "Specifies how long it takes after a show or hide event is fired for a tooltip to begin showing or hiding. Use an array to specify a different show and hide delay, such as [300, 100]." 
        ],
        [ 
            'duration', 
            "[350, 300]",
            "Number | Array \n(milliseconds)",
            "Specifies how long the transition animation takes to complete. A single number will use the same duration for the show and hide events. Use an array to specify a different show and hide duration, such as [300, 100]." 
        ]
    ] 
])

<br>  

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="BAM!" 
            v-tippy="{ arrow : true,  animation : 'fade', duration : 0}"
    >
        Instant
    </button>

@slot('code')
<button title="BAM!"
        v-tippy="{ arrow : true,  animation : 'fade', duration : 0}">
    Instant
</button>
@endslot 
@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Fast!" 
            v-tippy="{ arrow : true,  animation : 'fade', duration : 200}"
    >
        Short duration
    </button>

@slot('code')
<button title="Fast!"
        v-tippy="{ arrow : true,  animation : 'fade', duration : 200}">
    Short duration
</button>
@endslot 
@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Slooooow" 
            v-tippy="{ arrow : true,  animation : 'fade', duration : 1000}"
    >
        Long duration
    </button>

@slot('code')
<button title="Slooooow"
        v-tippy="{ arrow : true,  animation : 'fade', duration : 1000}">
    Long duration
</button>
@endslot 
@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Waited to show" 
            v-tippy="{ arrow : true,  animation : 'fade', delay : [600,0]}"
    >
        Show delay
    </button>

@slot('code')
<button title="Waited to show"
        v-tippy="{ arrow : true,  animation : 'fade', delay : [600,0]}">
    Show delay
</button>
@endslot 
@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Waited to hide" 
            v-tippy="{ arrow : true,  animation : 'fade', delay : [0,600]}"
    >
        Hide delay
    </button>

@slot('code')
<button title="Waited to hide"
        v-tippy="{ arrow : true,  animation : 'fade', delay : [0,600]}">
    Hide delay
</button>
@endslot 
@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Waited for both" 
            v-tippy="{ arrow : true,  animation : 'fade', delay : [600,600]}"
    >
        Combined delay
    </button>

@slot('code')
<button title="Waited for both"
        v-tippy="{ arrow : true,  animation : 'fade', delay : [600,600]}">
    Combined delay
</button>
@endslot 
@endcomponent

