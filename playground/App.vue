<template>
  <div>
    <tippy content="test">Hi</tippy>

    <button ref="button">My Button</button>
    <button ref="button2">My Button 2</button>
    <button ref="button3">My Button 3</button>
    <button ref="button4">My Button 4</button>
    <button ref="button5">My Button 5</button>
    <button ref="button6">My Button 6</button>
    <button @click="button6Inc">My Button 6 - Inc & Refresh</button>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  h,
  computed,
  reactive,
  onMounted,
  onUnmounted,
  watch,
} from 'vue'
import { useTippy } from '../src'
import Counter from './Counter.vue'

function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function handler(e: MouseEvent) {
    x.value = e.clientX
    y.value = e.clientY
  }

  onMounted(() => {
    window.addEventListener('mousemove', handler, false)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handler, false)
  })

  return {
    x,
    y,
  }
}
export default defineComponent({
  setup() {
    const counter = ref<number>(0)

    setInterval(() => counter.value++, 1000)

    const button = ref<HTMLButtonElement>()
    const button2 = ref<HTMLButtonElement>()
    const button3 = ref<HTMLButtonElement>()
    const button4 = ref<HTMLButtonElement>()
    const button5 = ref<HTMLButtonElement>()
    const button6 = ref<HTMLButtonElement>()

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
      content: defineComponent(() => {
        return () => h('p', 'Hellooooo')
      }),
      interactive: true,
      showOnCreate: true,
    })

    const options = reactive({
      content: '1',
    })

    useTippy(button6, options)

    const button6Inc = () => {
      options.content = String(parseInt(options.content) + 1)
    }

    const { x, y } = useMousePosition()

    const { tippy } = useTippy(() => document.body, {
      content: computed(() => `(${x.value},${y.value})`),
      showOnCreate: true,
      trigger: 'manual',
      // sticky: true, // slow?
      hideOnClick: false,
      getReferenceClientRect: function () {
        return {
          width: 0,
          height: 0,
          top: y.value,
          right: x.value,
          bottom: y.value,
          left: x.value,
        }
      },
    })

    watch([x, y], () => tippy.value?.popperInstance?.update())

    return {
      button,
      button2,
      button3,
      button4,
      button5,
      button6,
      button6Inc,
    }
  },
})
</script>
