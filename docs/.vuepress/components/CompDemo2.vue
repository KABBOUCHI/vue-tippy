<template>
        <div class="mt-4 mb-4">
            <button class="btn" @click="changePlace">Change option placement</button>
            <button class="btn" ref="btn" >Composition API</button>
        </div>
</template>

<script>

import { ref, reactive} from "@vue/composition-api";
import { useTippy } from "../../../src/index";

export default {
   setup(){
        const btn = ref(null)
        const options = reactive({
           content : "Reactive options!",
           placement: 'left'
        })

       useTippy(btn, options)

       const places = ['left','top','right','bottom']
       
       const changePlace = () => {
           options.placement = places[ parseInt(Math.random() * 100) % places.length ]
       }

       return {
           btn,
           options,
           changePlace
       }
   }
    
}
</script>