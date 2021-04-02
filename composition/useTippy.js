import tippy from 'tippy.js'
import {
  isRef,
  reactive,
  isReactive,
  onMounted,
  ref,
  onUnmounted,
  watch,
} from '@vue/composition-api'

const array_wrap = (val) => (Array.isArray(val) ? val : [val])

export function useTippy (el, opts = {}, settings = { mount: true }) {
  const instance = ref(null)

  let onMountCbs = []
  let onUnmountCbs = []

  const onMount = (cb) => {
    onMountCbs.push(cb)
  }

  const onUnmount = (cb) => {
    onUnmountCbs.push(cb)
  }

  const init = (e, o) => {
    instance.value = tippy(e, o)
    onMountCbs.forEach((cb) => cb(instance.value))
  }
  const mount = () => {
    let element = el

    if (isRef(el)) {
      element = el.value
    }

    if (Array.isArray(el)) {
      element = el.map((e) => (isRef(e) ? e.value : e))
    }

    if (!element) {
      return
    }

    if (element._isVue) {
      element = element.$el
    }

    if (isRef(opts.content)) {
      watch(
        opts.content,
        function (val) {
          if (instance.value) {
            array_wrap(instance.value).forEach((t) => t.setContent(val))
          }
        },
        { immediate: false }
      )
    }
    init(element, reactive(opts))
  }

  const unmount = () => {
    if (instance.value) {
      instance.value.destroy()
    }
  }

  if (settings.mount) {
    onMounted(mount)
  }

  onUnmounted(() => {
    if (instance.value) {
      array_wrap(instance.value).forEach((t) => t.destroy())
    }

    onUnmountCbs.forEach((cb) => cb())
  })

  if (isReactive(opts) || isRef(opts)) {
    const watchSource = isReactive(opts) ? () => opts : opts
    watch(
      watchSource,
      (val) => {
        if (instance.value) {
          array_wrap(instance.value).forEach((t) => t.set(val))
        }
      },
      { immediate: false, deep: true }
    )
  }

  return {
    mount,
    unmount,
    onMount,
    onUnmount,
    tippy: instance,
  }
}
