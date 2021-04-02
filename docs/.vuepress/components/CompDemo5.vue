<template>
  <base-button ref="btn" class="btn mt-4 mb-4">Composition API with Vue Component</base-button>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useTippy } from "../../../composition";
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