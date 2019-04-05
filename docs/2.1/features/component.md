# Component
> Tooltip as component

@component('_partials.code-sample', ['lang' => 'html', 'class' => 'text-center']) 

    <tippy to="tippy01" @@init="onTippyInit" @@hidden="onHidden" watch-props="true" interactive="true" :theme="theme" :distance="20">
        <div class="max-w-md w-full">
             <div class="m-2">
               <div class="text-black font-bold text-xl">Can coffee make you a better developer?</div>
               <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
         
               <p class="m-2"> Timer:  @{{ timer }} </p> 
               
               <button  class="btn mt-2 mb-2" @click="timer +=3"> 
                    Increase
                </button>   
             </div>
       </div>
    </tippy>
    
    <button name="tippy01" class="btn mt-2 mb-2">
        Click Me
    </button>
@slot('code')
<tippy  to="tippy01" 
        @init="onTippyInit"
        @hidden="onHidden" 
        interactive="true" 
        theme="light" 
        :distance="20"
        watch-props="true"
>
    <div>
        Can coffee make you a better developer?
    </div>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! 
        Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    
    <p> Timer:  { { timer } }  </p> 
    
    <button @click="timer +=3"> 
        Increase
    </button>   

</tippy>

<button name="tippy01">
    Click Me
</button>
@endslot 

@endcomponent
