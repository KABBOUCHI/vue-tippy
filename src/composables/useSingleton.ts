import {
  createSingleton,
  CreateSingletonProps,
  Instance,
  Props,
} from 'tippy.js'
import { onMounted, ref, Ref } from 'vue'

export function useSingleton(
  instances: Ref<Instance | undefined>[],
  optionalProps?: Partial<CreateSingletonProps<Props>>
) {
  const singleton = ref<ReturnType<typeof createSingleton>>()

  onMounted(() => {
    singleton.value = createSingleton(
      instances.map(instance => instance.value!),
      optionalProps
    )
  })

  return {
    singleton,
  }
}
