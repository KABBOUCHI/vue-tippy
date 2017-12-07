import Tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import './css/themes.css'

window.Tippy = Tippy
const plugin = {
  install (Vue, options) {
    Vue.directive('tippy-html', {
      componentUpdated (el) {
        const t = el._tipppyReference._tippy
        if (t) {
          Vue.nextTick(() => {
            const content = t.popper.querySelector('.tippy-content')
            content.innerHTML = el.innerHTML
          })
        }
      },
      unbind (el) {
        delete el._tipppyReference
      }
    })

    function createTippy (el, binding, vnode) {
      const handlers = (vnode.data && vnode.data.on) ||
        (vnode.componentOptions && vnode.componentOptions.listeners)

      let opts = binding.value || {}

      opts = Object.assign({ dynamicTitle: true, reactive: false, showOnLoad: false }, options, opts)

      opts.onShow = function () {
        if (handlers && handlers['show']) {
          handlers['show'].fns()
        }
      }
      opts.onShown = function () {
        if (handlers && handlers['shown']) {
          handlers['shown'].fns()
        }
      }
      opts.onHidden = function () {
        if (handlers && handlers['hidden']) {
          handlers['hidden'].fns()
        }
      }
      opts.onHide = function () {
        if (handlers && handlers['hide']) {
          handlers['hide'].fns()
        }
      }

      if (opts.html) {
        if (opts.reactive) {
          opts.html = document.querySelector(opts.html)
        } else {
          document.querySelector(opts.html)._tipppyReference = el
        }
      }

      new Tippy(el, opts)

      if (el.getAttribute('data-tippy-html')) {
        document.querySelector(el.getAttribute('data-tippy-html'))._tipppyReference = el
      }

      if (opts.showOnLoad) {
        el._tippy.show()
      }
    }

    Vue.directive('tippy', {
      inserted (el, binding, vnode) {
        createTippy(el, binding, vnode)
      },
      unbind (el) {
        el._tippy.destroy()
      },
      componentUpdated (el, binding, vnode) {
        const opts = binding.value || {}
        const oldOpts = binding.oldValue || {}

        if (el._tippy && (JSON.stringify(opts) !== JSON.stringify(oldOpts))) {
          createTippy(el, binding, vnode)
        }
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
