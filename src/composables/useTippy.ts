import tippy, { Instance, Props, Content } from 'tippy.js'
import { ref, onMounted, Ref, isRef, isVNode, render, watch } from 'vue'
import { TippyOptions } from '../types'

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

  onMounted(() => {
    if (!el) return

    let target = isRef(el) ? el.value : el
    let options = { ...opts }

    if (isRef(options.content)) {
      options.content = options.content.value
    }

    if (isVNode(options.content)) {
      render(options.content, getContainer())

      options.content = () => getContainer()
    }
    target && (instance.value = tippy(target, options as Props))
  })

  if (isRef(opts.content)) {
    watch(
      opts.content,
      () => {
        if (!instance.value) return

        let content = opts.content

        if (isRef(opts.content)) {
          content = opts.content.value
        }

        if (isVNode(content)) {
          render(content, getContainer())

          content = () => getContainer()
        }
        instance.value.setContent(content as Content)
      },
      { immediate: false }
    )
  }

  return {
    tippy: instance,
  }
}
