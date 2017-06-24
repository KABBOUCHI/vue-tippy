const Tippy = require('tippy.js');
const css = require('tippy.js/dist/tippy.css');
if (window.Vue) {
    window.Vue.prototype.$tippy = {

        update: function (el) {
            var instance = Tippy(el);
            instance.update(instance.getPopperElement(instance.selector))
        }

    };
}
var VueTippy = {
    install: function (Vue) {
        Vue.directive('tippy', {
            bind: function (el, binding, vnode) {
               var instance = new Tippy(el, {
                    shown: function () {
                        el.setAttribute('title', this.title);
                        el.setAttribute('data-original-title', this.title);
                        const handlers = (vnode.data && vnode.data.on) ||
                            (vnode.componentOptions && vnode.componentOptions.listeners);

                        if (handlers && handlers["shown"]) {
                            handlers["shown"].fns();
                        }
                    },
                });
                this.tpy = instance;
            },
            update: function (el) {

                if(el.getAttribute('title') || el.getAttribute('data-html'))
                {
                    const popper = this.tpy.getPopperElement(el);
                    el.setAttribute('data-original-title', el.getAttribute('title'));
                    this.tpy.update(popper);
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