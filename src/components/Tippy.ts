import { defineComponent, ref, h, ComponentObjectPropsOptions } from 'vue'
import { TippyOptions } from '../types'
import { useTippy } from '../composables'
import tippy, { DefaultProps } from 'tippy.js'

declare module '@vue/runtime-core' {
  interface ComponentCustomProps extends TippyOptions {}
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
        console.log(tippy.defaultProps[prop as keyof DefaultProps])

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

console.log(props)

export default defineComponent({
  props,
  setup(props) {
    const elem = ref<Element>()
    return { elem, ...useTippy(elem, props) }
  },
  render() {
    let slot = this.$slots.default ? this.$slots.default() : []

    return h('span', { ref: 'elem' }, slot)
  },
})
