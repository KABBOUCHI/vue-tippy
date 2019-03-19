import tippy from 'tippy.js'
import 'tippy.js/index.css'

const plugin = {
  install (Vue, options) {
    window.tippy = tippy
    tippy.setDefaults(options || {})
    Vue.component('tippy', require('./components/Tippy.vue'))

    function createTippy (el, binding, vnode) {
      const handlers = (vnode.data && vnode.data.on) ||
        (vnode.componentOptions && vnode.componentOptions.listeners)

      let opts = binding.value || {}

      opts = Object.assign({}, options, opts)

      if (handlers && handlers['show']) {
        opts.onShow = function () {
          handlers['show'].fns(el, vnode)
        }
      }

      if (handlers && handlers['shown']) {
        opts.onShown = function () {
          handlers['shown'].fns(el, vnode)
        }
      }
      if (handlers && handlers['hidden']) {
        opts.onHidden = function () {
          handlers['hidden'].fns(el, vnode)
        }
      }

      if (handlers && handlers['hide']) {
        opts.onHide = function () {
          handlers['hide'].fns(el, vnode)
        }
      }

      if (el.getAttribute('title') && !opts.content) {
        opts.content = el.getAttribute('title')
      }

      if (el.getAttribute('content') && !opts.content) {
        opts.content = el.getAttribute('content')
      }

      tippy(el, opts)

      if (opts.showOnLoad) {
        el._tippy.show()
      }

      Vue.nextTick(() => {
        if (handlers && handlers['init']) {
          handlers['init'].fns(el._tippy, el)
        }
      })
    }

    Vue.directive('tippy', {
      inserted (el, binding, vnode) {
        Vue.nextTick(() => {
          createTippy(el, binding, vnode)
        })
      },
      unbind (el) {
        el._tippy && el._tippy.destroy()
      },
      componentUpdated (el, binding, vnode) {
        const opts = binding.value || {}

        if (el.getAttribute('title') && !opts.content) {
          opts.content = el.getAttribute('title')
        }

        if (el.getAttribute('content') && !opts.content) {
          opts.content = el.getAttribute('content')
        }

        el._tippy.set(opts)
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
