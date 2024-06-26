import { TippyInstance, TippyInstances } from '../types'
import {
  createSingleton,
  CreateSingletonProps,
  Instance,
  Props,
} from 'tippy.js'
import { onMounted, ref, watch } from 'vue'

export function useSingleton(
  instances: TippyInstances,
  optionalProps?: Partial<CreateSingletonProps<Props>>
) {
  const singleton = ref<ReturnType<typeof createSingleton>>()

  const getTippyInstances = () => {
    const pendingTippyInstances: TippyInstance[] = Array.isArray(instances)
      ? instances.map(i => i.value)
      : typeof instances === 'function'
        ? instances()
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

    return tippyInstances
  }

  onMounted(() => {
    singleton.value = createSingleton(
      getTippyInstances(),
      optionalProps
        ? { allowHTML: true, ...optionalProps }
        : { allowHTML: true }
    )
  })

  watch(
    Array.isArray(instances) ? () => instances.map(i => i.value) : instances,
    () => {
      refresh()
    }
  )

  const refresh = () => {
    singleton.value?.setInstances(getTippyInstances())
  }

  return {
    singleton,
    refresh,
  }
}
