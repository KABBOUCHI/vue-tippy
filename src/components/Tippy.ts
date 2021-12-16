import { defineComponent, ref, h, ComponentObjectPropsOptions, onMounted } from 'vue'
import { TippyOptions } from '../types'
import { useTippy } from '../composables'
import tippy, { DefaultProps } from 'tippy.js'

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
      type: Boolean,
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
  setup(props, { slots }) {
    const elem = ref<Element>()
    const contentElem = ref<Element>()

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
      if (slots.content)
        tippy.setContent(() => contentElem.value)
    })

    return { elem, contentElem, ...tippy }
  },
  render() {
    let slot = this.$slots.default ? this.$slots.default(this) : []
    return h(this.tag, { ref: 'elem', 'data-v-tippy': '' }, this.$slots.content ? [
      slot,
      h(this.contentTag, { ref: 'contentElem', class: this.contentClass }, this.$slots.content(this))
    ] : slot)
  },
})

export default TippyComponent
