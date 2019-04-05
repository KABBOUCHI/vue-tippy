# Transitions and Delays
> Tooltips can have different transition durations or delays.

<transitions-delays-table-v2/>

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

