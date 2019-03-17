import tippy from 'tippy.js'
import 'tippy.js/index.css'

const plugin = {
  install (Vue, opts) {
    window.tippy = tippy
    tippy.setDefaults(opts || {})
    Vue.component('tippy', require('./components/Tippy.vue'))
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
