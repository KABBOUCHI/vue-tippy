# Interactivity
> Tooltips can be interactive, meaning you can hover over or click on them and they won't hide.

<interactivity-table-v2/>

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="I don't close when the cursor moves onto me!" v-tippy='{ interactive : true }'>Interactive with hover</button>

    @slot('code')
<button title="I don't close when the cursor moves onto me!"
        v-tippy='{ interactive : true }'>
    Interactive with hover
</button>
    @endslot 

@endcomponent

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-2 mb-2" title="Feel free to interact with me." v-tippy='{ interactive : true, trigger: "click" }'>Interactive with click</button>

    @slot('code')
<button title="Feel free to interact with me." 
        v-tippy='{ interactive : true, trigger: "click" }'>
    Interactive with click
</button>
    @endslot 

@endcomponent