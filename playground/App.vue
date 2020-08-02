<template>
  <div>
    <tippy content="test">
      Hi
    </tippy>

    <button ref="button">My Button</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTippy } from '../src'
import { TippyOptions } from '../src/composables/useTippy'
export default defineComponent({
  setup() {
    const button = ref<HTMLButtonElement>()

    useTippy(button, {
      content: 'Test',
    } as Partial<TippyOptions>)

    return {
      button,
    }
  },
})
</script>
