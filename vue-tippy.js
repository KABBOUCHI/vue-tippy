const Tippy = require('tippy.js');
const css = require('tippy.js/dist/tippy.css');

var VueTippy = {
    install: function (Vue) {
        Vue.prototype.$tippy = {

            update: function (el) {
                var instance = Tippy(el);
                instance.update(instance.getPopperElement(instance.selector))
            }

        };

        Vue.directive('tippy', {
            inserted: function (el, binding, vnode, oldVnode) {
                el.tippy = new Tippy(el, {
                    onShown: function () {


                        const handlers = (vnode.data && vnode.data.on) ||
                            (vnode.componentOptions && vnode.componentOptions.listeners);

                        if (handlers && handlers["shown"]) {
                            handlers["shown"].fns();
                        }
                    },
                });
            },
            componentUpdated: function (el) {

                if (el.tippy && (el.getAttribute('title') || el.getAttribute('data-html'))) {

                    const popper = el.tippy.getPopperElement(el);

                    el.tippy.update(popper);

                }

            }

        })
    }
};

if (typeof exports == "object") {
    module.exports = VueTippy
} else if (typeof define == "function" && define.amd) {
    define([], function () {
        return VueTippy
    })
}