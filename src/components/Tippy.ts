import { defineComponent, ref, h, UnwrapNestedRefs, onMounted, nextTick, watch, unref, reactive, PropType } from 'vue'
import { TippyOptions } from '../types'
import { useTippy } from '../composables'
import tippy from 'tippy.js'

declare module 'vue' {
  interface ComponentCustomProps extends TippyOptions {
    to: string | Element
    tag: string
    contentTag: string
    contentClass: string
  }
  interface ComponentCustomProperties extends UnwrapNestedRefs<ReturnType<typeof useTippy>> { }
}

function toValue(r: any): any {
  return typeof r === 'function'
    ? (r as any)()
    : unref(r)
}
function unrefElement(elRef: any): any {
  const plain = toValue(elRef)
  return (plain as any)?.$el ?? plain
}

const TippyComponent = defineComponent({
  props: {
    to: {
      type: [String, Function] as PropType<string | Element>,
    },
    tag: {
      type: [String, Object],
      default: 'span'
    },
    contentTag: {
      type: [String, Object],
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
    hideOnClick: { type: [Boolean, String], default: () => tippy.defaultProps['hideOnClick'] },
    ignoreAttributes: { type: Boolean, default: () => tippy.defaultProps['ignoreAttributes'] },
    interactive: { type: Boolean, default: () => tippy.defaultProps['interactive'] },
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
    showOnCreate: { type: Boolean, default: () => tippy.defaultProps['showOnCreate'] },
    touch: { type: [Boolean, String, Array], default: () => tippy.defaultProps['touch'] },
    trigger: { default: () => tippy.defaultProps['trigger'] },
    triggerTarget: { default: () => tippy.defaultProps['triggerTarget'] },
    animateFill: { type: Boolean, default: () => tippy.defaultProps['animateFill'] },
    followCursor: { type: [Boolean, String], default: () => tippy.defaultProps['followCursor'] },
    inlinePositioning: { type: Boolean, default: () => tippy.defaultProps['inlinePositioning'] },
    sticky: { type: [Boolean, String], default: () => tippy.defaultProps['sticky'] },
    allowHTML: { type: Boolean, default: () => tippy.defaultProps['allowHTML'] },
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
    const findParentHelper = ref<HTMLElement>()
    const contentElem = ref<Element>()
    const mounted = ref(false)

    const getOptions = () => {
      let options = { ...props } as any as TippyOptions;
      for (const prop of ['to', 'tag', 'contentTag', 'contentClass']) {
        if (options.hasOwnProperty(prop)) {
          // @ts-ignore
          delete options[prop];
        }
      }

      return options
    }

    let target: any = () => unrefElement(elem)

    if (props.to) {
      if (typeof Element !== 'undefined' && props.to instanceof Element) {
        target = () => props.to
      } else if (props.to === 'parent') {
        target = () => {
          let el = elem.value
          if (!el) {
            el = elem.value = findParentHelper.value!.parentElement as HTMLElement
          }
          return el
        }
      } else if (typeof props.to === 'string' || props.to instanceof String) {
        target = () => document.querySelector(props.to as any)
      }
    }

    const tippy = useTippy(target, getOptions())
    let contentSlot = slots.content
    if (!contentSlot && props.to === 'parent') {
      contentSlot = slots.default
    }

    onMounted(() => {
      mounted.value = true

      nextTick(() => {
        if (contentSlot) 
          tippy.setContent(() => contentElem.value)
      })
    })

    watch(tippy.state, () => {
      emit('state', unref(tippy.state))
    }, { immediate: true, deep: true })

    watch(() => props, () => {
      tippy.setProps(getOptions())

      if (contentSlot)
        tippy.setContent(() => contentElem.value)
    }, { deep: true })

    let exposed = reactive({
      elem,
      contentElem,
      mounted,
      ...tippy
    })

    expose(exposed)

    return () => {
      const contentTag = typeof props.contentTag === 'string' ? props.contentTag as string : props.contentTag
      const content = contentSlot
        ? h(
            contentTag,
            {
              ref: contentElem,
              style: { display: mounted.value ? 'inherit' : 'none' },
              class: props.contentClass,
            },
            contentSlot(exposed)
          )
        : null

      if (props.to === 'parent') {
        const result = []
        if (!elem.value) {
          const findParentHelperNode = h('span', {
            ref: findParentHelper,
            'data-v-tippy': '',
            style: { display: 'none' },
          })
          result.push(findParentHelperNode)
        }
        if (content) {
          result.push(content)
        }

        return result
      }

      const slot = slots.default ? slots.default(exposed) : []
      if (!props.tag) {
        const trigger = h(slot[0] as any, {
          ref: elem, 'data-v-tippy': ''
        });

        return content ? [trigger, content] : trigger
      }

      const tag = typeof props.tag === 'string' ? props.tag as string : props.tag

      return h(
        tag,
        { ref: elem, 'data-v-tippy': '' },
        content ? [slot, content] : slot
      )
    }
  },
})

export default TippyComponent
