# Animations
> Tooltips can have different types of transition animations.

<animations-table-v2/>

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I shifted away from my reference element!" 
            v-tippy="{ arrow : true,  animation : 'shift-away'}"
    >
        Shift Away
    </button>

@slot('code')
<button title="I shifted away from my reference element!"
        v-tippy="{ arrow : true,  animation : 'shift-away'}">
    Shift Away
</button>
@endslot 

@endcomponent


@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I shifted toward my reference element!" 
            v-tippy="{ arrow : true,  animation : 'shift-toward'}"
    >
        Shift toward
    </button>

@slot('code')
<button title="I shifted toward my reference element!" 
        v-tippy="{ arrow : true,  animation : 'shift-toward'}"
>
    Shift toward
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
           title="I just faded into existence!"
            v-tippy="{ arrow : true,  animation : 'fade'}"
    >
        Fade
    </button>

@slot('code')
<button title="I just faded into existence!" 
        v-tippy="{ arrow : true,  animation : 'fade'}"
>
    Fade
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I rotated with perspective!" 
            v-tippy="{ arrow : true,  animation : 'perspective'}"
    >
        Perspective
    </button>

@slot('code')
<button title="I rotated with perspective!" 
        v-tippy="{ arrow : true,  animation : 'perspective'}"
>
    Perspective
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I scaled up from nothingness!" 
            v-tippy="{ arrow : true,  animation : 'scale'}"
    >
        Scale
    </button>

@slot('code')
<button title="I scaled up from nothingness!" 
        v-tippy="{ arrow : true,  animation : 'scale'}"
>
    Scale
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Slingshot" 
            v-tippy="{ inertia : true, arrow : true,  duration : '[600,300]'}"
    >
        Inertia (shift away)
    </button>

@slot('code')
<button title="Slingshot" 
        v-tippy="{ inertia : true, arrow : true, duration : '[600,300]'}"
>
    Inertia (shift away)
</button>
@endslot 

@endcomponent


@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Slingshot" 
            v-tippy="{ inertia : true, arrow : true,  animation : 'shift-toward', duration : '[600,300]'}"
    >
        Inertia (shift toward)
    </button>

@slot('code')
<button title="Slingshot" 
        v-tippy="{ inertia : true, arrow : true,  animation : 'shift-toward', duration : '[600,300]'}"
>
    Inertia (shift toward)
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Slingshot" 
            v-tippy="{ inertia : true, arrow : true,  animation : 'scale', duration : '[600,300]'}"
    >
        Inertia (scale)
    </button>

@slot('code')
<button title="Slingshot" 
        v-tippy="{ inertia : true, arrow : true,  animation : 'scale', duration : '[600,300]'}"
>
    Inertia (scale)
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="Slingshot" 
            v-tippy="{ inertia : true, arrow : true,  animation : 'perspective', duration : '[600,300]'}"
    >
        Inertia (perspective)
    </button>

@slot('code')
<button title="Slingshot" 
        v-tippy="{ inertia : true, arrow : true,  animation : 'perspective', duration : '[600,300]'}"
>
    Inertia (perspective)
</button>
@endslot 

@endcomponent