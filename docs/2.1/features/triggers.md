# Triggers
> Triggers define the types of events that cause a tooltip to show. A fourth trigger, Manual, is used when you want to programmatically show or hide a tooltip.

<triggers-table-v2/>

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="Some mobile browsers only fire mouseenter" v-tippy='{ trigger : "mouseenter" }'>Hover or touch</button>

    @slot('code')
<button title="Some mobile browsers only fire mouseenter" 
        v-tippy='{ trigger : "mouseenter" }'>
    Hover or touch
</button>
    @endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="Some mobile browsers only fire focus" v-tippy='{ trigger : "focus", hideOnClick : false }'>Focus or touch</button>

    @slot('code')
<button title="Some mobile browsers only fire focus" 
        v-tippy='{ trigger : "focus", hideOnClick : false }'>
    Focus or touch
</button>
    @endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="Thanks for clicking" v-tippy='{ trigger : "click" }'>Click</button>

    @slot('code')
<button title="Thanks for clicking" v-tippy='{ trigger : "click"}'>
    Click
</button>
    @endslot 

@endcomponent