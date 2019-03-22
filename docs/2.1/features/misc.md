
# Misc
#### Tippy has many more features! These are just some of them.
@include('_partials.class-table', [
    'rows' => 
    [ 
        [ 
            'distance', 
            "10",
            "Number (pixels)",
            "Specifies how far away the tooltip is from its reference element. This contrasts the offset option in that it only applies to a single axis and allows tooltips to still be interactive when their trigger is mouseenter."
        ],
        [ 
            'offset', 
            "0",
            "Number | String (pixels)",
            "Offsets a tooltip on a certain axis. Use a string such as '25, 10' to offset it on both the x and y axes."
        ],
        [ 
            'followCursor', 
            "false",
            "Boolean",
            "Specifies whether to follow the user's mouse cursor (mouse devices only)."
        ], 
        [ 
            'sticky', 
            "false",
            "Boolean",
            "Specifies whether the tooltip should stick to its reference element when it's showing (for example, if the element is animated/moves)."
        ],
        [ 
            'size', 
            "'regular'",
            "'small' 'regular' 'large'",
            "Specifies how large the tooltip is."
        ],
        [ 
            'touchHold', 
            "false",
            "Boolean",
            "Changes the trigger behavior on touch devices. It will change it from a tap to show and tap off to hide, to a tap and hold to show, and a release to hide."
        ],          
    ] 
])

<br>  

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm hugging the tooltip!" 
            v-tippy="{ animation : 'fade', animateFill : false, distance : 0 }"
    >
       Distance
    </button>

@slot('code')
<button title="I'm hugging the tooltip!" 
        v-tippy="{ animation : 'fade', animateFill : false, distance : 0 }">
   Distance
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm offset 50px on the x-axis, and 10px on the y-axis!" 
            v-tippy="{ animation : 'fade', animateFill : false, arrow : true, offset : '50, 10' }"
    >
       Offset
    </button>

@slot('code')
<button title="I'm offset 50px on the x-axis, and 10px on the y-axis!" 
        v-tippy="{  animation : 'fade', 
                    animateFill : false,
                    arrow : true, 
                    offset : '50, 10' }">
   Offset
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'll follow your mouse cursor!" 
            v-tippy="{  animation : 'scale', 
                        animateFill : false,
                        arrow : true, 
                        followCursor : true}"
    >
       Follow cursor
    </button>

@slot('code')
<button title="I'll follow your mouse cursor!" 
        v-tippy="{  animation : 'scale', 
                    animateFill : false,
                    arrow : true, 
                    followCursor : true}">
   Follow cursor
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'll flip to the bottom if there's not enough room on the right." 
            v-tippy="{   placement: 'right',
                         animation: 'fade',
                         arrowType: 'round',
                         arrow: true,
                         flipBehavior: ['right', 'bottom']}"
    >
       Custom flips
    </button>

@slot('code')
<button title="I'll flip to the bottom if there's not enough room on the right." 
        v-tippy="{   placement: 'right',
                     animation: 'fade',
                     arrowType: 'round',
                     arrow: true,
                     flipBehavior: ['right', 'bottom']}">
   Custom flips
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" id="animated-tippy"
            title="Sticky tooltip! Click my element to hide me." 
            v-tippy="{  theme: 'transparent', sticky: true, hideOnClick: false, trigger: 'click' }"
    >
      Sticky <small class="opacity-75">(click)</small>
    </button>

@slot('code')

#animated-tippy {
  animation: hover 2s ease-in-out infinite;
}

<button class="btn mt-2 mb-2" id="animated-tippy"
            title="Sticky tooltip! Click my element to hide me." 
            v-tippy="{  
                        theme: 'transparent',
                        sticky: true,
                        hideOnClick: false,
                        trigger: 'click'
                     }"
>
    Sticky <small class="opacity-75">(click)</small>
</button>
@endslot 

@endcomponent


@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm a tooltip!" 
            v-tippy="{ size : 'small' }"
    >
       Small tooltip
    </button>

@slot('code')
<button title="I'm a tooltip!"  v-tippy="{ size : 'small' }">
   Small tooltip
</button>
@endslot 

@endcomponent


@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm a tooltip!" 
            v-tippy="{ size : 'large' }"
    >
       Large tooltip
    </button>

@slot('code')
<button title="I'm a tooltip!"  v-tippy="{ size : 'large' }">
   Large tooltip
</button>
@endslot 

@endcomponent


@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Use a touch device to see" 
            v-tippy="{ touchHold : true }"
    >
       Touch and hold only
    </button>

@slot('code')
<button title="Use a touch device to see"  v-tippy="{ touchHold : true }">
   Touch and hold only
</button>
@endslot 

@endcomponent