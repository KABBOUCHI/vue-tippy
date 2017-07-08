const Tippy = require('tippy.js');
const css = require('tippy.js/dist/tippy.css');

var VueTippy = {
    install: function (Vue) {
        Vue.$tippyInstances = [];
        Vue.prototype.$tippy = {

            update: function (el) {
                this.instance = Vue.$tippyInstances.find(function ($instance) {
                    return $instance.el == el;
                });
                if (this.instance) {
                    this.instance.tippy.update(this.instance.tippy.getPopperElement(this.instance.tippy.selector))
                }

            },
            forceUpdateHtml: function () {
                Vue.$tippyInstances.forEach(function (instance) {

                    instance.tippy.store.forEach(function (s) {

                        if (s.settings.html) {
                            Vue.nextTick(function () {
                                s.tippyInstance.update(s.popper);
                            });
                        }

                    });

                });
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
                Vue.$tippyInstances.push({
                    el: el,
                    tippy: el.tippy,

                })

            },
            componentUpdated: function (el) {

                if (el.tippy && (el.getAttribute('title') || el.getAttribute('data-html'))) {

                    el.tippy.store.forEach(function (s) {

                        var popper = s.popper;

                        var tip = s.tippyInstance;

                        tip.update(popper);

                    });

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