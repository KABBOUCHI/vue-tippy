<template>
  <div>
    <div>
      <span class="font-semibold mr-4">Tippy Component:</span>

      <tippy content="test">
        <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg">Hi</button>
      </tippy>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + callbacks(console.log):</span>
      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg" ref="button">My Button</button>
    </div>
    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + h(tag) content:</span>
      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg" ref="button2">My Button 2</button>
    </div>
    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + h (reactive) content:</span>
      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg" ref="button3">My Button 3</button>
    </div>
    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + h(SFC) content:</span>
      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg" ref="button4">My Button 4</button>
    </div>
    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + SFC content:</span>
      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg" ref="button5">My Button 5</button>
    </div>
    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + reactive options:</span>
      <button
        class="mr-4 text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        @click="button6Inc"
      >My Button 6 - Inc & Refresh</button>
      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg" ref="button6">My Button 6</button>
    </div>
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
import { useTippy, tippy, TippyOptions } from '../src'
import Counter from './Counter.vue'

tippy.setDefaultProps({ placement: 'right' })
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
      content: h('h1', 'hi'),
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

    const options = reactive<TippyOptions>({
      content: '1',
      sticky: true,
      showOnCreate: true,
      hideOnClick: false,
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
      placement: 'top',
      hideOnClick: false,
      arrow: `<svg style="color: black;width:20px;height:20px" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"></path></svg>`,
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