import tippy from 'tippy.js'

import TippyComponent from './components/Tippy.vue'

var tippyDirective = 'tippy'

const plugin = {
  install(Vue, options = {}) {
    tippyDirective = options.directive || 'tippy'

    tippy.setDefaults(options || {})

    function createTippy(el, binding, vnode) {
      const handlers = (vnode.data && vnode.data.on) ||
        (vnode.componentOptions && vnode.componentOptions.listeners)

      let opts = binding.value || {}
      let modifiers = Object.keys(binding.modifiers || {});

      opts = Object.assign({}, options, opts)

      if (modifiers.length) {
        opts.placement = opts.placement || modifiers[0];
      }

      if (handlers && handlers['show']) {
        opts.onShow = function (...args) {
          return handlers['show'].fns(...args)
        }
      }

      if (handlers && handlers['shown']) {
        opts.onShown = function (...args) {
          handlers['shown'].fns(...args)
        }
      }
      if (handlers && handlers['hidden']) {
        opts.onHidden = function (...args) {
          handlers['hidden'].fns(...args)
        }
      }

      if (handlers && handlers['hide']) {
        opts.onHide = function (...args) {
          return handlers['hide'].fns(...args)
        }
      }

      if (handlers && handlers['mount']) {
        opts.onMount = function (...args) {
          handlers['mount'].fns(...args)
        }
      }

      if (el.getAttribute('title') && !opts.content) {
        opts.content = el.getAttribute('title')
        el.removeAttribute('title')
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

    Vue.directive(tippyDirective, {
      inserted(el, binding, vnode) {
        Vue.nextTick(() => {
          createTippy(el, binding, vnode)
        })
      },
      unbind(el) {
        el._tippy && el._tippy.destroy()
      },
      componentUpdated(el, binding, vnode) {
        if (el._tippy) {
          const opts = binding.value || {}

          if (el.getAttribute('title') && !opts.content) {
            opts.content = el.getAttribute('title')
            el.removeAttribute('title')
          }

          if (el.getAttribute('content') && !opts.content) {
            opts.content = el.getAttribute('content')
          }

          el._tippy.set(opts)
        }
      },
    })
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
  window.Vue.component('tippy', TippyComponent)
}

export default plugin
export {
  TippyComponent,
  tippy,
}