import tippy, { Instance, Props } from 'tippy.js'
import { ref, onMounted, Ref, isRef } from 'vue'

export function useTippy(
  el: Element | Ref<Element> | Ref<Element | undefined>,
  opts: Partial<Props> = {}
) {
  const instance = ref<Instance>()

  onMounted(() => {
    if (!el) return

    let target = isRef(el) ? el.value : el

    target && (instance.value = tippy(target, opts))
  })

  return {
    tippy: instance,
  }
}
