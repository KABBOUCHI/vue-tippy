import { defineComponent, ref, h, PropType } from 'vue'
import { Content } from 'tippy.js'
import { useTippy } from '../composables'

export default defineComponent({
  props: {
    content: Object as PropType<Content>,
  },
  setup(props) {
    const elem = ref<Element>()

    useTippy(elem, props)

    return { elem }
  },
  render() {
    let slot = this.$slots.default ? this.$slots.default() : []

    return h('span', { ref: 'elem' }, slot)
  },
})
