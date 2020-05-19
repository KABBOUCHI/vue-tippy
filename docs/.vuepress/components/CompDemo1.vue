<template>
  <button ref="btn" class="btn mt-4 mb-4">Composition API</button>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useTippy } from "../../../composition";

export default {
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