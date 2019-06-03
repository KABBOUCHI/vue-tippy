import './polyfill.js'

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

      if (opts.html) {
        var selector = opts.html
        if (opts.reactive || !(typeof selector === 'string')) {
          opts.html = selector instanceof Element ? selector : (selector instanceof Vue ? selector.$el : document.querySelector(selector))
        } else {
          const htmlElement = document.querySelector(opts.html)
          if (htmlElement) {
            if (htmlElement._tipppyReferences) {
              htmlElement._tipppyReferences.push(el)
            } else {
              htmlElement._tipppyReferences = [el]
            }
          } else {
            console.error(`[VueTippy] Selector ${opts.html} not found`)
            return
          }
        }
      }

      if (opts.html || el.getAttribute('data-tippy-html')) {
        opts.dynamicTitle = false
      }

      if (el.getAttribute('data-tippy-html')) {
        const htmlEl = document.querySelector(el.getAttribute('data-tippy-html'))
        if (htmlEl) {
          if (htmlEl._tipppyReferences) {
            htmlEl._tipppyReferences.push(el)
          } else {
            htmlEl._tipppyReferences = [el]
          }
        } else {
          console.error(`[VueTippy] Selector '${el.getAttribute('data-tippy-html')}' not found`, el)
          return
        }
      }

      new Tippy(el, opts)

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
        const oldOpts = binding.oldValue || {}

        if (el._tippy && (JSON.stringify(opts) !== JSON.stringify(oldOpts))) {
          Vue.nextTick(() => {
            createTippy(el, binding, vnode)
          })
        }

        if (el._tippy && el._tippy.popperInstance && opts.show) {
          el._tippy.show()
        } else if (el._tippy && el._tippy.popperInstance && !opts.show && opts.trigger === 'manual') {
          el._tippy.hide()
        }
      }
    })

    Vue.component('tippy', {
      render (createElement) { return createElement('div', this.$slots.default) },
      props: {
        to: {
          type: String,
          required: true
        },
        placement: {
          type: String,
          default: 'top'
        },
        theme: {
          type: String,
          default: 'light'
        },
        interactive: {
          type: [Boolean, String],
          default: false
        },
        arrow: {
          type: [Boolean, String],
          default: false
        },
        arrowType: {
          type: String,
          default: 'sharp'
        },
        arrowTransform: {
          type: String,
          default: ''
        },
        trigger: {
          type: String,
          default: 'mouseenter focus'
        },
        interactiveBorder: {
          type: Number,
          default: 2
        },
        animation: {
          type: String,
          default: 'shift-away'
        },
        animationFill: {
          type: [Boolean, String],
          default: true
        },
        distance: {
          type: Number,
          default: 10
        },

        delay: {
          type: [Number, Array],
          default: () => [0, 20]
        },
        duration: {
          type: [Number, Array],
          default: () => [325, 275]
        },

        offset: {
          type: Number,
          default: 0
        },
        followCursor: {
          type: [Boolean, String],
          default: false
        },
        sticky: {
          type: [Boolean, String],
          default: false
        },
        size: {
          type: String,
          default: 'regular'
        },
        watchProps: {
          type: [Boolean, String],
          default: false
        }
      },
      watch: {
        '$props': {
          deep: true,
          handler (val, oldVal) {
            document
                            .querySelectorAll(`[name=${this.to}]`)
                            .forEach(elem => {
                              if (!this.watchProps) return

                              elem._tippy && elem._tippy.destroy()
                              const value = Object.assign({ reactive: true, html: this.$el }, this.$props)
                              createTippy(elem, { value }, this.$vnode)
                            })
          }
        }
      },
      mounted: function () {
        document
                    .querySelectorAll(`[name=${this.to}]`)
                    .forEach(elem => {
                      const value = Object.assign({ reactive: true, html: this.$el }, this.$props)
                      createTippy(elem, { value }, this.$vnode)
                    })
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
