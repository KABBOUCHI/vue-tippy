import Tippy from 'tippy.js/dist/tippy.standalone'
import 'tippy.js/dist/tippy.css'
import './css/themes.css'

window.Tippy = Tippy
const plugin = {
  install (Vue, options) {
    Vue.directive('tippy-html', {
      componentUpdated (el) {
        const els = el._tipppyReferences
        if (els && els.length > 0) {
          Vue.nextTick(() => {
            els.forEach((et) => {
              if (et._tippy) {
                const content = et._tippy.popper.querySelector('.tippy-content')
                content.innerHTML = el.innerHTML
              }
            })
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

      if (handlers && handlers['show']) {
        opts.onShow = function () {
          handlers['show'].fns()
        }
      }

      if (handlers && handlers['shown']) {
        opts.onShown = function () {
          handlers['shown'].fns()
        }
      }
      if (handlers && handlers['hidden']) {
        opts.onHidden = function () {
          handlers['hidden'].fns()
        }
      }

      if (handlers && handlers['hide']) {
        opts.onHide = function () {
          handlers['hide'].fns()
        }
      }

      if (opts.html) {
        if (opts.reactive) {
          opts.html = document.querySelector(opts.html)
        } else {
          if (document.querySelector(opts.html)._tipppyReferences) {
            document.querySelector(opts.html)._tipppyReferences.push(el)
          } else {
            document.querySelector(opts.html)._tipppyReferences = [el]
          }
        }
      }

      new Tippy(el, opts)

      if (el.getAttribute('data-tippy-html')) {
        if (document.querySelector(el.getAttribute('data-tippy-html'))._tipppyReferences) {
          document.querySelector(el.getAttribute('data-tippy-html'))._tipppyReferences.push(el)
        } else {
          document.querySelector(el.getAttribute('data-tippy-html'))._tipppyReferences = [el]
        }
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
        el._tippy && el._tippy.destroy()
      },
      componentUpdated (el, binding, vnode) {
        const opts = binding.value || {}
        const oldOpts = binding.oldValue || {}

        if (el._tippy && (JSON.stringify(opts) !== JSON.stringify(oldOpts))) {
          createTippy(el, binding, vnode)
        }

        if (el._tippy && opts.show) {
          el._tippy.show()
        } else if (el._tippy && !opts.show && opts.trigger === 'manual') {
          el._tippy.hide()
        }
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
