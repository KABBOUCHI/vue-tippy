<template>
  <div class="mt-4 mb-4">
    <button ref="btn" class="btn">Composition API</button>

    <button ref="btn2" class="btn">Composition API 2</button>

    <button class="btn" @click="inc">{{ ccc }}</button>
  </div>
</template>

<script>
import { ref, watch, defineComponent } from "@vue/composition-api";
import { useTippy } from "../../../composition";
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