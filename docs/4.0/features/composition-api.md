# Composition API

> :exclamation: Experimental feature

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
  import { ref } from "@vue/composition-api";
  import { useTippy } from "vue-tippy/composition";

  export default {
    setup() {
      const btn = ref(null);

      useTippy(btn, {
        content: "Cool!",
      });

      return {
        btn,
      };
    },
  };
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
    <button ref="btn">Composition API</button>
  </div>
</template>

<script>
  import { ref, reactive } from "@vue/composition-api";
  import { useTippy } from "vue-tippy/composition";

  export default {
    setup() {
      const btn = ref(null);
      const options = reactive({
        content: "Reactive options!",
        placement: "left",
      });

      useTippy(btn, options);

      const places = ["left", "top", "right", "bottom"];

      const changePlace = () => {
        options.placement =
          places[parseInt(Math.random() * 100) % places.length];
      };

      return {
        btn,
        options,
        changePlace,
      };
    },
  };
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
  import { ref } from "@vue/composition-api";
  import { useTippy } from "vue-tippy/composition";

  export default {
    setup() {
      const btn = ref(null);
      const content = ref(null);

      useTippy(btn, {
        content,
      });

      return {
        btn,
        content,
      };
    },
  };
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
  import { useTippy } from "vue-tippy/composition";

  export default defineComponent({
    setup() {
      const ccc = ref(1);

      const btn = ref(null);
      const btn2 = ref(null);

      useTippy([btn, btn2], {
        content: ccc,
      });

      function inc() {
        ccc.value++;
      }

      return {
        btn,
        btn2,
        ccc,
        inc,
      };
    },
  });
</script>
```

</div>
</vue-code>

#### Example 5

<vue-code>
<div slot="demo">
<comp-demo-5/>
</div>
<div slot="code">

```html
<template>
  <base-button ref="btn">Composition API with Vue Component</base-button>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useTippy } from "vue-tippy/composition";
import BaseButton from './BaseButton.vue';

export default {
  components: { BaseButton },
  setup() {
    const btn = ref(null);

    useTippy(btn, {
      content: "Cool!"
    });

    return {
      btn
    };
  }
};
</script>
```

</div>
</vue-code>


#### Example 6

<vue-code>
<div slot="demo">
<comp-demo-6/>
</div>
<div slot="code">

```html
<template>
  <div>
    <button v-if="shown" @click="hide">Hide and Unmount Tippy</button>
    <button v-else @click="show">Show and Mount Tippy</button>

    <div v-if="shown"> 
      <button ref="btn">Composition API</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, nextTick } from "@vue/composition-api";
import { useTippy } from "vue-tippy/composition";

export default defineComponent({
  setup() {
    const shown = ref(false);
    const btn = ref();

    const { mount, unmount } = useTippy(btn, {
      content: "Cool!"
    }, { mount: false });

    const show = async () => {
      shown.value = true

      await nextTick() // wait for ref to be populated 

      mount()
    }

    const hide = () => {
      unmount()

      shown.value = false
    }

    return {
      shown,
      show,
      hide,
      btn
    };
  }
});
</script>
```

</div>
</vue-code>
