import tippy, { Instance, Props, Content } from 'tippy.js'
import {
  ref,
  onMounted,
  isRef,
  isReactive,
  isVNode,
  watch,
  VNode,
  h,
  onUnmounted,
  getCurrentInstance,
  createApp,
  shallowRef,
  App,
} from 'vue'
import { TippyOptions, TippyContent, MaybeRef, MaybeRefOrGetter } from '../types'
import { isObject, isString, toValue, isComponentInstance } from '../utils'

tippy.setDefaultProps({
  //@ts-ignore
  onShow: instance => {
    if (!instance.props.content) return false
  },
})

type TippyElement = Element | any //  TODO: use ComponentPublicInstance

export function useTippy(
  el: MaybeRefOrGetter<TippyElement>,
  opts: TippyOptions | MaybeRef<string> = {},
  settings: {
    mount: boolean,
    appName: string,
  } = { mount: true, appName: 'Tippy' }
) {
  settings = Object.assign({ mount: true, appName: 'Tippy' }, settings);

  const vm = getCurrentInstance()
  const instance = ref<Instance>()
  const state = ref({
    isEnabled: false,
    isVisible: false,
    isDestroyed: false,
    isMounted: false,
    isShown: false,
  })
  const headlessApp = shallowRef<App>()

  let container: any = null

  const getContainer = () => {
    if (container) return container
    container = document.createDocumentFragment()
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
      if (!headlessApp.value) {
        headlessApp.value = createApp({
          name: settings.appName,
          setup: () => {
            return () => isRef(content) ? content.value : content
          },
        })

        if (vm) {
          Object.assign(headlessApp.value._context, vm.appContext)
        }

        headlessApp.value.mount(getContainer())
      }
      newContent = () => getContainer()
    } else if (typeof unwrappedContent === 'object') {
      if (!headlessApp.value) {
        headlessApp.value = createApp({
          name: settings.appName,
          setup: () => {
            return () => h(isRef(content) ? content.value : content as any)
          },
        })

        if (vm) {
          Object.assign(headlessApp.value._context, vm.appContext)
        }

        headlessApp.value.mount(getContainer())
      }

      newContent = () => getContainer()
    } else {
      newContent = unwrappedContent
    }

    return newContent!
  }

  const getProps = (opts: TippyOptions | MaybeRef<string>): Partial<Props> => {
    const value = toValue(opts);

    let options: any = {}

    if (isString(value)) {
      options = { content: value }
    } else {
      options = { ...value }
    }

    if (options.content) {
      options.content = getContent(options.content)
    }

    if (options.triggerTarget) {
      options.triggerTarget = isRef(options.triggerTarget)
        ? options.triggerTarget.value
        : options.triggerTarget
    }

    if (!options.plugins || !Array.isArray(options.plugins)) {
      options.plugins = []
    }

    options.plugins = options.plugins.filter((plugin: any) => plugin.name !== 'vueTippyReactiveState');

    options.plugins.push({
      name: 'vueTippyReactiveState',
      fn: () => {
        return {
          onCreate() {
            state.value.isEnabled = true
          },
          onMount() {
            state.value.isMounted = true
          },
          onShow() {
            state.value.isMounted = true
            state.value.isVisible = true
          },
          onShown() {
            state.value.isShown = true
          },
          onHide() {
            state.value.isMounted = false
            state.value.isVisible = false
          },
          onHidden() {
            state.value.isShown = false
          },
          onUnmounted() {
            state.value.isMounted = false
          },
          onDestroy() {
            state.value.isDestroyed = true
          },
        }
      }
    })

    return options as Props
  }

  const getOptsContent = () => {
    const value = toValue(opts)

    if (isString(value)) {
      return value
    }

    return value?.content
  }

  const refresh = () => {
    if (!instance.value) return

    if (isObject(toValue(opts))) {
      instance.value.setProps(getProps(opts))
    } else {
      refreshContent()
    }
  }

  const refreshContent = () => {
    if (!instance.value) return

    const content = getOptsContent()

    if (!content) return

    instance.value.setContent(getContent(content))
  }

  const setContent = (value: TippyContent) => {
    instance.value?.setContent(getContent(value))
  }

  const setProps = (value: TippyOptions | MaybeRef<string>) => {
    instance.value?.setProps(getProps(value))
  }

  const destroy = () => {
    if (instance.value) {
      try {
        //@ts-ignore
        // delete instance.value.reference.$tippy
      } catch (error) { }

      instance.value.destroy()
      instance.value = undefined
    }
    container = null
    headlessApp.value?.unmount()
    headlessApp.value = undefined
  }

  const show = () => {
    instance.value?.show()
  }

  const hide = () => {
    instance.value?.hide()
  }

  const disable = () => {
    instance.value?.disable()
    state.value.isEnabled = false;
  }

  const enable = () => {
    instance.value?.enable()
    state.value.isEnabled = true;
  }

  const unmount = () => {
    instance.value?.unmount()
  }

  const mount = () => {
    if (!el) return

    let target = isRef(el) ? el.value : el

    if (typeof target === 'function') target = target()

    if (isComponentInstance(target)) {
      target = target.$el as Element
    }

    if (target) {
      //@ts-ignore
      instance.value = tippy(target, getProps(opts))
      //@ts-ignore
      target.$tippy = response
    }
  }

  const response = {
    tippy: instance,
    refresh,
    refreshContent,
    setContent,
    setProps,
    destroy,
    hide,
    show,
    disable,
    enable,
    unmount,
    mount,
    state,
  }

  if (settings.mount) {
    if (vm) {
      if (vm.isMounted) {
        mount()
      } else {
        onMounted(mount)
      }
    } else {
      mount()
    }
  }

  if (vm) {
    onUnmounted(() => {
      destroy()
    })
  }

  if ((isRef(opts) || isReactive(opts)) && !isString(opts)) {
    watch(opts, refresh, { immediate: false })
  } else if (isObject(opts) && isRef(opts.content)) {
    watch(opts.content, refreshContent, { immediate: false })
  }

  return response
}
