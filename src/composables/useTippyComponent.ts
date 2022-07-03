import { h, ref } from 'vue'
import { TippyComponent, TippyOptions } from '../types'
import Tippy from './../components/Tippy'

export function useTippyComponent(
  opts: TippyOptions = {},
  children?: any
) {
  const instance = ref<TippyComponent>()

  return {
    instance,
    TippyComponent: h(
      Tippy,
      {
        ...opts as any,
        onVnodeMounted: (vnode:any) => {
          //@ts-ignore
          instance.value = vnode.component.ctx
        },
      },
      children
    ),
  }
}
