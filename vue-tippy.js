const Tippy = require('tippy.js');
const css = require('tippy.js/dist/tippy.css');

var VueTippy = {
    install: function (Vue) {
        Vue.directive('tippy', {
            bind: function (el, binding, vnode) {
                const instance = new Tippy(el, {
                    shown: function () {
                        const handlers = (vnode.data && vnode.data.on) ||
                            (vnode.componentOptions && vnode.componentOptions.listeners);

                        if (handlers && handlers["shown"]) {
                            handlers["shown"].fns();
                        }
                    },
                    wait: function (show, event) {
                        // Change your app model to be rendered by the UI library/framework

                        // Queue show to run once rendering is complete
                        setTimeout(function () {
                            // update(popper) content

                            const popper = instance.getPopperElement(el);

                            instance.update(popper);

                            show()
                        }, 0)
                    }
                });
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