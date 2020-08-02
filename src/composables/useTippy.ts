import tippy, { Instance, Props, Content } from 'tippy.js'
import {
  ref,
  onMounted,
  Ref,
  isRef,
  isReactive,
  isVNode,
  render,
  watch,
  VNode,
  h,
} from 'vue'
import { TippyOptions, TippyContent } from '../types'

export function useTippy(
  el: Element | Ref<Element> | Ref<Element | undefined>,
  opts: TippyOptions = {}
) {
  const instance = ref<Instance>()

  let container: Element | null = null

  const getContainer = () => {
    if (container) return container
    container = document.createElement('fragment')
    return container
  }

  const getContent = (content: TippyContent): Content => {
    let newContent: Content

    let unwrappedContent: Content | VNode | { render: Function } = isRef(
      content
    )
      ? content.value
      : content

    if (isVNode(unwrappedContent)) {
      render(unwrappedContent, getContainer())
      newContent = () => getContainer()
    } else if (typeof unwrappedContent === 'object') {
      render(h(unwrappedContent), getContainer())
      newContent = () => getContainer()
    } else {
      newContent = unwrappedContent
    }

    return newContent
  }

  const getProps = (opts: TippyOptions): Partial<Props> => {
    let options: any = {}

    if (isRef(opts)) {
      options = opts.value
    } else if (isReactive(opts)) {
      options = { ...opts }
    } else {
      options = { ...opts }
    }

    if (options.content) options.content = getContent(options.content)

    return options as Props
  }

  const refresh = () => {
    if (!instance.value) return

    instance.value.setProps(getProps(opts))
  }

  onMounted(() => {
    if (!el) return

    let target = isRef(el) ? el.value : el

    target && (instance.value = tippy(target, getProps(opts)))
  })

  let watchSource: any = null

  if (isRef(opts) || isReactive(opts)) {
    watchSource = opts
  } else if (isRef(opts.content)) {
    watchSource = opts.content
  }

  if (watchSource) {
    watch(watchSource, refresh, { immediate: false })
  }

  return {
    tippy: instance,
    refresh,
  }
}
