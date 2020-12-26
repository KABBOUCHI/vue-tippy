import { TippyInstance, TippyInstances } from 'src/types'
import {
  createSingleton,
  CreateSingletonProps,
  Instance,
  Props,
} from 'tippy.js'
import { onMounted, ref } from 'vue'

export function useSingleton(
  instances: TippyInstances,
  optionalProps?: Partial<CreateSingletonProps<Props>>
) {
  const singleton = ref<ReturnType<typeof createSingleton>>()

  onMounted(() => {
    const pendingTippyInstances: TippyInstance[] = Array.isArray(instances)
      ? instances.map(i => i.value)
      : instances.value

    const tippyInstances: Instance<any>[] = pendingTippyInstances
      .map((instance: TippyInstance) => {
        if (instance instanceof Element) {
          //@ts-ignore
          return instance._tippy
        }
        return instance
      })
      .filter(Boolean)

    singleton.value = createSingleton(tippyInstances, optionalProps)
  })

  return {
    singleton,
  }
}
