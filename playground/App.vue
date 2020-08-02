<template>
  <div>
    <tippy content="test">
      Hi
    </tippy>

    <button ref="button">My Button</button>
    <button ref="button2">My Button 2</button>
    <button ref="button3">My Button 3</button>
    <button ref="button4">My Button 4</button>
    <button ref="button5">My Button 5</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, h, computed } from 'vue'
import { useTippy } from '../src'
import Counter from './Counter.vue'

export default defineComponent({
  setup() {
    const counter = ref<number>(0)

    setInterval(() => counter.value++, 1000)

    const button = ref<HTMLButtonElement>()
    const button2 = ref<HTMLButtonElement>()
    const button3 = ref<HTMLButtonElement>()
    const button4 = ref<HTMLButtonElement>()
    const button5 = ref<HTMLButtonElement>()

    useTippy(button, {
      content: 'Test',
      onMount() {
        console.log('here')
      },
    })

    useTippy(button2, {
      content: h('h1', 'hi ' + counter.value),
    })
    useTippy(button3, {
      content: computed(() =>
        h(
          'button',
          {
            onClick: () => {
              counter.value++
            },
          },
          'Counter ' + counter.value
        )
      ),
      showOnCreate: true,
      interactive: true,
    })

    useTippy(button4, {
      content: h(Counter),
      interactive: true,
      showOnCreate: true,
    })

    useTippy(button5, {
      content: h(Counter),
      interactive: true,
      showOnCreate: true,
    })

    return {
      button,
      button2,
      button3,
      button4,
      button5,
    }
  },
})
</script>
