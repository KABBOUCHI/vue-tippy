# HTML
#### Tooltips can even contain HTML!

@include('_partials.work-in-progress')


@include('_partials.class-table', [
    'rows' => 
    [ 
        [ 
            'reactive', 
            "false",
            "Boolean",
            "<div class='p-2 border-b border-grey-lighter'>
                 <p class='m-2'>When you set <span class='text-purple-dark'>reactive</span> to <span class='text-blue-dark'>true</span>, element will be used directly:</p>
                 <p class='pl-8'>&ndash; Can only be used once</p>
                 <p class='pl-8'>&ndash; Removed from the page and appended directly to the tooltip</p>
                 <p class='pl-8'>&ndash; Saves event listeners attached to it</p>
                 <p class='pl-8'>&ndash; Directly modifiable</p>
             </div>
             
             <div class='p-2'>
                   <p class='m-2'>When you set <span class='text-purple-dark'>reactive</span> to <span class='text-blue-dark'>false</span>, element will be cloned:</p>
                   <p class='pl-8'>&ndash; Can be re-used multiple times</p>
                   <p class='pl-8'>&ndash; Not removed from the page</p>
                   <p class='pl-8'>&ndash; Will not save event listeners attached to it</p>
                   <p class='pl-8'>&ndash; Not directly modifiable</p>
                   <p class='pl-8'>&ndash; if you add <span class='text-purple-dark'>v-tippy-html</span> directive will update the tooltip content automatically</p>
             </div>
         
             " 
        ], 
        [ 
            'interactive', 
            "false",
            "Boolean",
            "Makes a tooltip interactive, i.e. will not close when the user hovers over or clicks on the tooltip. This lets you create a popover (similar to Bootstrap) when used in conjunction with a click trigger." 
        ], 
        
    ] 
])

<h3>Reactive set to false</h3>

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <div id="template-1" class="hidden">
        <div class="max-w-md w-full">
             <div class="m-2">
               <div class="text-black font-bold text-xl">Can coffee make you a better developer?</div>
               <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
             </div>
       </div>
    </div>
    <button class="btn mt-2 mb-2"
            v-tippy="{ html: '#template-1', interactive : true, theme : 'light', animateFill : false }">
                Static HTML Template
    </button>

@slot('code')

<div id="template-1" class="hidden">
    <div class="max-w-md w-full">
        <div class="m-2">
            <div class="text-black font-bold text-xl">
                Can coffee make you a better developer?
            </div>
            <p class="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
            </p>
        </div>
    </div>
</div>    

<button v-tippy="{ html: '#template-1', interactive : true, theme : 'light' }">
    Static HTML Template
</button>
@endslot 

@endcomponent

<h3>Reactive set to false + <span class="text-purple-dark">v-tippy-html</span> directive</h3>  

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <div id="template-2" class="hidden" v-tippy-html>
        <div class="max-w-md w-full">
             (@{{ timer }}) - `<span class="text-purple-dark">v-tippy-html</span>` 
             directive will update the tooltip content automatically
        </div>
    </div>
    <button class="btn mt-2 mb-2"
            v-tippy="{ html: '#template-2', interactive : true, theme : 'light', animateFill : false }">
                HTML Template with VueJS data/props
    </button>

@slot('code')

<div id="template-2" class="hidden" v-tippy-html>
        <div class="max-w-md w-full">
            { { timer } }  - <span class="text-purple-dark">v-tippy-html</span> 
            directive will update the tooltip content automatically
        </div>
</div>    

<button v-tippy="{ html: '#template-2', interactive : true, theme : 'light' }">
    Static HTML Template
</button>
@endslot 

@endcomponent

<h3>Reactive</h3>  
@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <div id="template-3">
        <div class="max-w-md w-full py-4 px-8">
            <p> @{{ message }} | counter : @{{ counter }} </p>  
           <button class="btn mt-2 mb-2" @click="counter++">Increment</button>
        </div>
    </div>
    <button class="btn mt-2 mb-2"
            v-tippy="{ html: '#template-3', reactive : true, interactive : true, theme : 'light', animateFill : false }">
                Full reactive template
    </button>

@slot('code')

<div id="template-3">
    <div class="max-w-md w-full py-4 px-8">
        <p> { { message } } | counter : { { counter } } </p>  
       <button class="btn mt-2 mb-2" @click="counter++">Increment</button>
    </div>
</div>

<button v-tippy="{ html: '#template-3', reactive : true,
        interactive : true, theme : 'light', animateFill : false }">
    Full reactive template
</button>
@endslot 

@endcomponent