import { h, ref } from 'vue'
import { TippyOptions } from '../types'
import TippyComponent from './../components/Tippy'

export function useTippyComponent(
  opts: TippyOptions = {},
  children?: any
) {
  const instance = ref()

  return {
    instance,
    TippyComponent: h(
      TippyComponent,
      {
        ...opts,
        onVnodeMounted: vnode => {
          //@ts-ignore
          instance.value = vnode.component.ctx
        },
      },
      children
    ),
  }
}
