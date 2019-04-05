
# Misc
> Tippy has many more features! These are just some of them.

<misc-table-v2/>

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