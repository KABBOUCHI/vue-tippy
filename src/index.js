import Tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'

const plugin = {
  install(Vue, options) {
    Vue.directive('tippy', {
      inserted: function (el, binding, vnode, oldVnode) {
        new Tippy(el);
      },
      unbind: function (el, binding, vnode) {

      },
      componentUpdated: function (el, binding, vnode) {

      }

    })
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
