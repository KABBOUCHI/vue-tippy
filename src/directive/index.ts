import { useTippy } from '../composables'
import { Directive } from 'vue'

const directive: Directive = {
  mounted(el, binding, vnode) {
    const opts = binding.value || {}

    if (vnode.props && vnode.props.onShow) {
      opts.onShow = function (...args: any[]) {
        return vnode.props?.onShow(...args)
      }
    }

    if (vnode.props && vnode.props.onShown) {
      opts.onShown = function (...args: any[]) {
        return vnode.props?.onShown(...args)
      }
    }

    if (vnode.props && vnode.props.onHidden) {
      opts.onHidden = function (...args: any[]) {
        return vnode.props?.onHidden(...args)
      }
    }

    if (vnode.props && vnode.props.onHide) {
      opts.onHide = function (...args: any[]) {
        return vnode.props?.onHide(...args)
      }
    }

    if (vnode.props && vnode.props.onMount) {
      opts.onMount = function (...args: any[]) {
        return vnode.props?.onMount(...args)
      }
    }

    if (el.getAttribute('title') && !opts.content) {
      opts.content = el.getAttribute('title')
      el.removeAttribute('title')
    }

    if (el.getAttribute('content') && !opts.content) {
      opts.content = el.getAttribute('content')
    }

    el.$tippy = useTippy(el, opts)
  },
  unmounted(el) {
    if (el.$tippy) {
      el.$tippy.destroy()
    } else if (el._tippy) {
      el._tippy.destroy()
    }
  },

  updated(el, binding) {
    const opts = binding.value || {}

    if (el.getAttribute('title') && !opts.content) {
      opts.content = el.getAttribute('title')
      el.removeAttribute('title')
    }

    if (el.getAttribute('content') && !opts.content) {
      opts.content = el.getAttribute('content')
    }

    if (el.$tippy) {
      el.$tippy.setProps(opts || {})
    } else if (el._tippy) {
      el._tippy.setProps(opts || {})
    }
  },
}

export default directive
