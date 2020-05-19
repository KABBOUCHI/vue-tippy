# Composition API


## Installation

```bash
yarn add @vue/composition-api
```


## Usage

#### Example 1

<vue-code>
<div slot="demo">
<comp-demo-1/>
</div>
<div slot="code">

```html
<template>
    <button ref="btn">Composition API</button>
</template>

<script>

import { ref} from "@vue/composition-api";
import { useTippy } from "vue-tippy/composition";

export default {
   setup(){
       const btn = ref(null)
       
       useTippy(btn, {
           content : "Cool!"
       })

       return {
           btn
       }
   }
    
}
</script>
```

</div>
</vue-code>


#### Example 2

<vue-code>
<div slot="demo">
<comp-demo-2/>
</div>
<div slot="code">

```html
<template>
    <div>
        <button @click="changePlace">Change option placement</button>
        <button ref="btn" >Composition API</button>
    </div>
</template>

<script>

import { ref, reactive} from "@vue/composition-api";
import { useTippy } from "vue-tippy/composition";

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
```

</div>
</vue-code>

#### Example 3

<vue-code>
<div slot="demo">
<comp-demo-3/>
</div>
<div slot="code">

```html
<template>
    <div>
        <button ref="btn">Composition API</button>
        
        <div ref="content">
            WHAAAT!
        </div>
    </div>
</template>

<script>

import { ref} from "@vue/composition-api";
import { useTippy } from "vue-tippy/composition";

export default {
   setup(){
       const btn = ref(null)
       const content = ref(null)
       
       useTippy(btn, {
           content
       })

       return {
           btn,
           content
       }
   }
    
}
</script>
```

</div>
</vue-code>


### Example 4

<vue-code>
<div slot="demo">
<comp-demo-4/>
</div>
<div slot="code">

```html
<template>
  <div class="mt-4 mb-4">
    <button ref="btn" class="btn">Composition API</button>

    <button ref="btn2" class="btn">Composition API 2</button>

    <button class="btn" @click="inc">{{ ccc }}</button>
  </div>
</template>

<script>
import { ref, watch, defineComponent } from "@vue/composition-api";
import { useTippy } from "../../../src/index";
import CompDemo2Vue from "./CompDemo2.vue";

export default defineComponent({
  setup() {
    const ccc = ref(1);

    const btn = ref(null);
    const btn2 = ref(null);

    useTippy([btn, btn2], {
      content: ccc
    });

    function inc() {
      ccc.value++;
    }

    return {
      btn,
      btn2,
      ccc,
      inc
    };
  }
});
</script>
```

</div>
</vue-code>
