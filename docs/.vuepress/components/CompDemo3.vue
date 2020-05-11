<template>
  <div class="mt-4 mb-4">
    <button ref="btn" class="btn">Composition API</button>

    <div ref="content">WHAAAT!</div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useTippy } from "../../../src/index";

export default {
  setup() {
    const btn = ref(null);
    const content = ref(null);

    useTippy(btn, {
      content: "asd"
    });

    return {
      btn,
      content
    };
  }
};
</script>