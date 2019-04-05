# Callbacks (events)
> Callbacks allow you to react to a tooltip's show and hide events. Open your browser console to see when the logs occur.
<events-table-v2/>

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm called when a tooltip begins to show."
            @@show="onShow"
            v-tippy="{ arrow : true, duration : 600 }"
     >
       @@show
    </button>

@slot('code')
<button title="I'm called when a tooltip begins to show."
        @@show="onShow"
        v-tippy="{ arrow : true, duration : 600 }">
    @@show
</button>
@endslot 
@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm called when a tooltip begins to hide."
            @@hide="onHide"
            v-tippy="{ arrow : true, duration : 600 }"
     >
       @@hide
    </button>

@slot('code')
<button title="I'm called when a tooltip begins to hide."
        @@hide="onHide"
        v-tippy="{ arrow : true, duration : 600 }">
    @@hide
</button>
@endslot 
@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm called when a tooltip begins to show."
            @@show="onShow"
            v-tippy="{ arrow : true, duration : 600 }"
     >
       @@show
    </button>

@slot('code')
<button title="I'm called when a tooltip begins to show."
        @@show="onShow"
        v-tippy="{ arrow : true, duration : 600 }">
    @@show
</button>
@endslot 
@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm called when a tooltip has fully transitioned in."
            @@shown="onShown"
            v-tippy="{ arrow : true, duration : 600, maxWidth : '400px' }"
     >
       @@shown
    </button>

@slot('code')
<button title="I'm called when a tooltip has fully transitioned in."
        @@shown="onShown"
        v-tippy="{ arrow : true, duration : 600, maxWidth : '400px' }">
    @@shown
</button>
@endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" 
            title="I'm called when a tooltip has fully transitioned out."
            @@hidden="onHidden"
            v-tippy="{ arrow : true, duration : 600, maxWidth : '400px' }"
     >
       @@hidden
    </button>

@slot('code')
<button title="I'm called when a tooltip has fully transitioned out."
        @@hidden="onHidden"
        v-tippy="{ arrow : true, duration : 600, maxWidth : '400px' }">
    @@hidden
</button>
@endslot 

@endcomponent
