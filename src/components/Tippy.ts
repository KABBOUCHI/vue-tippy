import { defineComponent, ref, h, ComponentObjectPropsOptions, onMounted, nextTick, watch, unref } from 'vue'
import { TippyOptions } from '../types'
import { useTippy } from '../composables'
import tippy, { DefaultProps } from 'tippy.js'
//@ts-ignore
import { deepUnref } from 'vue-deepunref';
declare module '@vue/runtime-core' {
  interface ComponentCustomProps extends TippyOptions { }
}

// const pluginProps = [
//   'animateFill',
//   'followCursor',
//   'inlinePositioning',
//   'sticky',
// ]
const booleanProps = [
  'a11y',
  'allowHTML',
  'arrow',
  'flip',
  'flipOnUpdate',
  'hideOnClick',
  'ignoreAttributes',
  'inertia',
  'interactive',
  'lazy',
  'multiple',
  'showOnInit',
  'touch',
  'touchHold',
]

let props: ComponentObjectPropsOptions = {}

Object.keys(tippy.defaultProps).forEach((prop: string) => {
  if (booleanProps.includes(prop)) {
    props[prop] = {
      type: prop === 'arrow' ? [String, Boolean, SVGElement, DocumentFragment] : Boolean,
      default: function () {
        return tippy.defaultProps[prop as keyof DefaultProps] as Boolean
      },
    }
  } else {
    props[prop] = {
      default: function () {
        return tippy.defaultProps[prop as keyof DefaultProps]
      },
    }
  }
})

props['to'] = {}

props['tag'] = {
  default: 'span'
}

props['contentTag'] = {
  default: 'span'
}

props['contentClass'] = {
  default: null
}

const TippyComponent = defineComponent({
  props,
  emits: ['state'],
  setup(props, { slots, emit, expose }) {
    const elem = ref<Element>()
    const contentElem = ref<Element>()
    const mounted = ref(false)

    let options = { ...props } as TippyOptions;

    for (const prop of ['to', 'tag', 'contentTag', 'contentClass']) {
      if (options.hasOwnProperty(prop)) {
        // @ts-ignore
        delete options[prop];
      }
    }

    let target: any = elem

    if (props.to) {
      if (typeof Element !== 'undefined' && props.to instanceof Element) {
        target = () => props.to
      } else if (typeof props.to === 'string' || props.to instanceof String) {
        target = () => document.querySelector(props.to)
      }
    }

    const tippy = useTippy(target, options)

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

    watch(props, () => {
      tippy.setProps(props)
    })

    let exposed = {
      elem,
      contentElem,
      mounted,
      ...tippy
    }

    expose(exposed)

    return () => {

      let exposedUnref = deepUnref(exposed)

      const slot = slots.default ? slots.default(exposedUnref) : []

      return h(props.tag, { ref: elem, 'data-v-tippy': '' }, slots.content ? [
        slot,
        h(
          props.contentTag,
          {
            ref: contentElem,
            style: { display: mounted.value ? 'inherit' : 'none' },
            class: props.contentClass
          },
          slots.content(exposedUnref)
        ),
      ] : slot)
    }
  },
})

export default TippyComponent
