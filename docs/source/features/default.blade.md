---
extends: _layouts.documentation
title: "Default"
description: "The default tooltip looks like this when Tippy is given no options. It has a nifty backdrop filling animation!"
---

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <button class="btn mt-4 mb-4" title="I'm the default tooltip!" v-tippy>Try me!</button>

@slot('code')

<button title="I'm the default tooltip!" v-tippy>
    Try me!
</button>

@endslot 

@endcomponent
