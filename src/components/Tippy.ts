import { defineComponent, ref, h, UnwrapNestedRefs, onMounted, nextTick, watch, unref, reactive, PropType } from 'vue'
import { TippyOptions } from '../types'
import { useTippy } from '../composables'
import tippy from 'tippy.js'

declare module '@vue/runtime-core' {
  interface ComponentCustomProps extends TippyOptions {
    to: string | Element
    tag: string
    contentTag: string
    contentClass: string
  }
  interface ComponentCustomProperties extends UnwrapNestedRefs<ReturnType<typeof useTippy>> { }
}


const TippyComponent = defineComponent({
  props: {
    to: {
      type: [String, Function] as PropType<string | Element>,
    },
    tag: {
      type: String,
      default: 'span'
    },
    contentTag: {
      type: String,
      default: 'span'
    },
    contentClass: {
      type: String,
      default: null
    },
    appendTo: { default: () => tippy.defaultProps['appendTo'] },
    aria: { default: () => tippy.defaultProps['aria'] },
    delay: { default: () => tippy.defaultProps['delay'] },
    duration: { default: () => tippy.defaultProps['duration'] },
    getReferenceClientRect: { default: () => tippy.defaultProps['getReferenceClientRect'] },
    hideOnClick: { default: () => tippy.defaultProps['hideOnClick'] },
    ignoreAttributes: { default: () => tippy.defaultProps['ignoreAttributes'] },
    interactive: { default: () => tippy.defaultProps['interactive'] },
    interactiveBorder: { default: () => tippy.defaultProps['interactiveBorder'] },
    interactiveDebounce: { default: () => tippy.defaultProps['interactiveDebounce'] },
    moveTransition: { default: () => tippy.defaultProps['moveTransition'] },
    offset: { default: () => tippy.defaultProps['offset'] },
    onAfterUpdate: { default: () => tippy.defaultProps['onAfterUpdate'] },
    onBeforeUpdate: { default: () => tippy.defaultProps['onBeforeUpdate'] },
    onCreate: { default: () => tippy.defaultProps['onCreate'] },
    onDestroy: { default: () => tippy.defaultProps['onDestroy'] },
    onHidden: { default: () => tippy.defaultProps['onHidden'] },
    onHide: { default: () => tippy.defaultProps['onHide'] },
    onMount: { default: () => tippy.defaultProps['onMount'] },
    onShow: { default: () => tippy.defaultProps['onShow'] },
    onShown: { default: () => tippy.defaultProps['onShown'] },
    onTrigger: { default: () => tippy.defaultProps['onTrigger'] },
    onUntrigger: { default: () => tippy.defaultProps['onUntrigger'] },
    onClickOutside: { default: () => tippy.defaultProps['onClickOutside'] },
    placement: { default: () => tippy.defaultProps['placement'] },
    plugins: { default: () => tippy.defaultProps['plugins'] },
    popperOptions: { default: () => tippy.defaultProps['popperOptions'] },
    render: { default: () => tippy.defaultProps['render'] },
    showOnCreate: { default: () => tippy.defaultProps['showOnCreate'] },
    touch: { default: () => tippy.defaultProps['touch'] },
    trigger: { default: () => tippy.defaultProps['trigger'] },
    triggerTarget: { default: () => tippy.defaultProps['triggerTarget'] },
    animateFill: { default: () => tippy.defaultProps['animateFill'] },
    followCursor: { default: () => tippy.defaultProps['followCursor'] },
    inlinePositioning: { default: () => tippy.defaultProps['inlinePositioning'] },
    sticky: { default: () => tippy.defaultProps['sticky'] },
    allowHTML: { default: () => tippy.defaultProps['allowHTML'] },
    animation: { default: () => tippy.defaultProps['animation'] },
    arrow: { default: () => tippy.defaultProps['arrow'] },
    content: { default: () => tippy.defaultProps['content'] },
    inertia: { default: () => tippy.defaultProps['inertia'] },
    maxWidth: { default: () => tippy.defaultProps['maxWidth'] },
    role: { default: () => tippy.defaultProps['role'] },
    theme: { default: () => tippy.defaultProps['theme'] },
    zIndex: { default: () => tippy.defaultProps['zIndex'] }
  },
  emits: ['state'],
  setup(props, { slots, emit, expose }) {
    const elem = ref<Element>()
    const contentElem = ref<Element>()
    const mounted = ref(false)

    const getOptions = () => {
      let options = { ...props } as TippyOptions;
      for (const prop of ['to', 'tag', 'contentTag', 'contentClass']) {
        if (options.hasOwnProperty(prop)) {
          // @ts-ignore
          delete options[prop];
        }
      }

      return options
    }

    let target: any = elem

    if (props.to) {
      if (typeof Element !== 'undefined' && props.to instanceof Element) {
        target = () => props.to
      } else if (typeof props.to === 'string' || props.to instanceof String) {
        target = () => document.querySelector(props.to as any)
      }
    }

    const tippy = useTippy(target, getOptions())

    onMounted(() => {
      mounted.value = true

      nextTick(() => {
        if (slots.content)
          tippy.setContent(() => contentElem.value)
      })
    })

    watch(tippy.state, () => {
      emit('state', unref(tippy.state))
    }, { immediate: true, deep: true })

    watch(() => props, () => {
      tippy.setProps(getOptions())

      if (slots.content)
        tippy.setContent(() => contentElem.value)
    })

    let exposed = reactive({
      elem,
      contentElem,
      mounted,
      ...tippy
    })

    expose(exposed)

    return () => {
      const slot = slots.default ? slots.default(exposed) : []

      return h(props.tag as string, { ref: elem, 'data-v-tippy': '' }, slots.content ? [
        slot,
        h(
          props.contentTag as string,
          {
            ref: contentElem,
            style: { display: mounted.value ? 'inherit' : 'none' },
            class: props.contentClass
          },
          slots.content(exposed)
        ),
      ] : slot)
    }
  },
})

export default TippyComponent
