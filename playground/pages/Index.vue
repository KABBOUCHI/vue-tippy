<template>
  <div>
    <div>
      <span class="font-semibold mr-4"
        >Tippy Component + custom element target:</span
      >

      <tippy content="test" to="#btn123"></tippy>

      <button
        id="btn123"
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
      >
        Hi
      </button>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4">Tippy Component:</span>

      <tippy
        content="test"
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
      >
        Hi
      </tippy>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4">Tippy Component with content slot:</span>

      <tippy
        interactive
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
      >
        Hi

        <template #content>
          <button
            class="text-sm py-2 px-3 bg-gray-100 text-black rounded-lg"
            @click="counter++"
          >
            Counter {{ counter }} (click to increase)
          </button>
        </template>
      </tippy>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4"
        >Tippy Component with component content slot:</span
      >

      <tippy
        interactive
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
      >
        Hi

        <template #content>
          <counter />
        </template>
      </tippy>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4"
        >Tippy component + content slot data</span
      >
      <tippy interactive :hideOnClick="false" trigger="manual">
        <template #default="{ show }">
          <button
            @click="show"
            class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
          >
            Hi
          </button>
        </template>
        <template #content="{ tippy, hide }" class="relative">
          <button
            class="absolute top-0 right-0 m-2 w-6 h-6 bg-white text-black rounded"
            @click="hide()"
          >
            &times;
          </button>
          <pre class="p-4">{{ tippy && tippy.state }}</pre>
        </template>
      </tippy>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4">Tippy as a child component with prop content:</span>

      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg">
        Hi
        <tippy to="parent" content="Test"></tippy>
      </button>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4">Tippy as a child component with #content template:</span>

      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg">
        Hi
        <tippy to="parent"><template #content>Test</template></tippy>
      </button>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4">Tippy as a child component with direct content:</span>
      
      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg">
        Hi
        <tippy to="parent">{{counter}} and counting</tippy>
      </button>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + callbacks(console.log):</span>
      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        ref="button"
      >
        My Button
      </button>
    </div>
    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + h(tag) content:</span>
      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        ref="button2"
      >
        My Button 2
      </button>
    </div>
    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + h (reactive) content:</span>
      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        ref="button3"
      >
        My Button 3
      </button>
    </div>
    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + h(SFC) content:</span>
      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        ref="button4"
      >
        My Button 4
      </button>
    </div>
    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + SFC content:</span>
      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        ref="button5"
      >
        My Button 5
      </button>
    </div>
    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + reactive options:</span>
      <button
        class="mr-4 text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        @click="button6Inc"
      >
        My Button 6 - Inc & Refresh
      </button>
      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        ref="button6"
      >
        My Button 6
      </button>
    </div>

    <div class="mt-6">
      <span ref="target7" class="font-semibold mr-4"
        >useTippy + triggerTarget:</span
      >
      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        ref="button7"
      >
        My Button 7
      </button>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4">useTippy + vue component:</span>
      <UiButton ref="vueComponentButton">
        Vue component Button
      </UiButton>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4"
        >Tippy component + change content and props realtime using component
        ref:</span
      >
      <tippy ref="tippyComponent1" @create="log" @hide="log">
        <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg">
          Tippy Component + h(SFC) content
        </button>
      </tippy>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4">v-tippy:</span>
      <button
        class="text-sm py-2 px-3 mr-4 bg-gray-900 text-white rounded-lg"
        @tippyMount="() => log('v-tippy mounted')"
        v-tippy="{ content: 'Hello ' + counter }"
      >
        Tippy directive
      </button>
      <button
        class="text-sm py-2 px-3 mr-4 bg-gray-900 text-white rounded-lg"
        v-tippy="'Passing in a string'"
      >
        Tippy directive with a string
      </button>
      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        v-tippy="`Hello ${counter}`"
      >
        Tippy directive with template literals
      </button>
    </div>

    <div class="mt-6 space-x-2">
      <span class="font-semibold mr-4">Singleton tippy with a transition:</span>
      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        ref="singleton1"
      >
        singleton1
      </button>

      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        ref="singleton2"
      >
        singleton2
      </button>

      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        ref="singleton3"
      >
        singleton3
      </button>
    </div>

    <div class="mt-6 space-x-2">
      <span class="font-semibold mr-4"
        >Singleton v-tippy with a transition:</span
      >
      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        :ref="v => singletons.push(v)"
        v-tippy="{ content: 'Tooltip 1' }"
      >
        singleton1
      </button>

      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        :ref="v => singletons.push(v)"
        v-tippy="{ content: 'Tooltip 2' }"
      >
        singleton2
      </button>

      <button
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        :ref="v => singletons.push(v)"
        v-tippy="{ content: 'Tooltip 3' }"
      >
        singleton3
      </button>
    </div>

    <div class="mt-6">
      <span class="font-semibold mr-4">v-tippy with modifiers</span>
      <button
        class="text-sm py-2 px-3 mr-4 bg-gray-900 text-white rounded-lg"
        v-tippy.left.arrow="'Hello'"
      >
        Tippy
      </button>
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
import { useSingleton, useTippy, TippyOptions, TippyComponent } from '../../src'
import Counter from '../components/Counter.vue'
import UiButton from '../components/Button.vue'

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
  components: { UiButton },
  setup() {
    const counter = ref<number>(0)

    setInterval(() => counter.value++, 1000)

    const button = ref<HTMLButtonElement>()
    const button2 = ref<HTMLButtonElement>()
    const button3 = ref<HTMLButtonElement>()
    const button4 = ref<HTMLButtonElement>()
    const button5 = ref<HTMLButtonElement>()
    const button6 = ref<HTMLButtonElement>()
    const button7 = ref<HTMLButtonElement>()
    const target7 = ref<HTMLButtonElement>()

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
      trigger: 'manual',
    })

    useTippy(button6, options)

    const button6Inc = () => {
      options.content = String(parseInt(options.content) + 1)
    }

    useTippy(target7, {
      content: 'Triggered by button7',
      placement: 'bottom',
      triggerTarget: button7,
    })

    const vueComponentButton = ref()

    useTippy(vueComponentButton, {
      content: 'Test Vue component',
    })

    const { x, y } = useMousePosition()

    const { tippy } = useTippy(() => document.body, {
      content: computed(() => `(${x.value},${y.value})`),
      showOnCreate: true,
      trigger: 'manual',
      // sticky: true, // slow?
      placement: 'top',
      hideOnClick: false,
      arrow: `<svg style="color: black;width:20px;height:20px" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"></path></svg>`,
      getReferenceClientRect: function() {
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

    const tippyComponent1 = ref<TippyComponent>()

    onMounted(() => {
      tippyComponent1.value?.setProps({
        interactive: true,
        offset: [0, 30],
        placement: 'top',
      })

      tippyComponent1.value?.setContent(
        h(Counter, {
          initialValue: 42,
        })
      )
    })

    const singleton1 = ref()
    const singleton2 = ref()
    const singleton3 = ref()

    const { tippy: tippySingleton1 } = useTippy(singleton1, {
      content: 'Singleton 1',
    })
    const { tippy: tippySingleton2 } = useTippy(singleton2, {
      content: '<b>Singleton 2</b>',
    })
    const { tippy: tippySingleton3 } = useTippy(singleton3, {
      content: 'Singleton 3',
    })

    useSingleton([tippySingleton1, tippySingleton2, tippySingleton3], {
      placement: 'top',
      moveTransition: 'transform 0.2s ease-out',
    })
    const singletons = ref([])

    useSingleton(singletons, {
      placement: 'top',
      moveTransition: 'transform 0.2s ease-out',
    })

    return {
      singleton1,
      singleton2,
      singleton3,
      singletons,
      counter,
      button,
      button2,
      button3,
      button4,
      button5,
      button6,
      button6Inc,
      button7,
      target7,
      vueComponentButton,
      tippyComponent1,
      log: console.log,
    }
  },
})
</script>