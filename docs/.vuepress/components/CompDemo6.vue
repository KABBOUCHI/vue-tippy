<template>
  <div>
    <button
      v-if="shown"
      @click="hide"
      class="btn mt-4 mb-4"
    >Hide and Unmount Tippy</button>
    <button
      v-else
      @click="show"
      class="btn mt-4 mb-4"
    >Show and Mount Tippy</button>

    <div v-if="shown">
      <button
        ref="btn"
        class="btn mt-4 mb-4"
      >Composition API</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, nextTick } from "@vue/composition-api";
import { useTippy } from "../../../composition";

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