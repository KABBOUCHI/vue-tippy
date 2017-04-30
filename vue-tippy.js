//noinspection JSUnresolvedFunction
const Tippy = require('tippy.js');

var VueTippy = {
    install: function (Vue) {
        Vue.directive('tippy', {
            bind: function (el, binding,vnode) {
                new Tippy(el, {
                    shown: function () {
                        var handlers = (vnode.data && vnode.data.on) ||
                            (vnode.componentOptions && vnode.componentOptions.listeners);

                        if (handlers && handlers["shown"]) {
                            handlers["shown"].fns();
                        }
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