const Tippy = require('tippy.js');
const css = require('tippy.js/dist/tippy.css');

var VueTippy = {
    install: function (Vue) {
        Vue.$tippyInstances = [];
        Vue.prototype.$tippy = {

            getInstance: function (el) {
                return Vue.$tippyInstances.find(function ($instance) {
                    return $instance.el === el;
                });
            },
            getTippyPopper: function (tippy) {
                return tippy.getPopperElement(tippy.selector)
            },
            showPopper: function (el) {
                var tippy = this.getTippy(el);
                tippy.show(this.getTippyPopper(tippy));
            },
            hidePopper: function (el) {
                var tippy = this.getTippy(el);
                tippy.hide(this.getTippyPopper(tippy));
            },
            destroyTippy: function (el) {
                var i = this.getInstance(el);
                var t = this.getTippy(el);
                t.destroy(this.getTippyPopper(t));
                var index = Vue.$tippyInstances.indexOf(i);
                if (index > -1)
                    Vue.$tippyInstances.splice(index, 1);

            },
            getTippy: function (el) {
                return this.getInstance(el).tippy;
            },
            update: function (el) {

                this.instance = this.getInstance(el);

                if (this.instance) {
                    this.instance.tippy.update(this.instance.tippy.getPopperElement(this.instance.tippy.selector))
                }

            },
            forceUpdateHtml: function () {
                Vue.$tippyInstances.forEach(function (instance) {

                    if (instance.tippy && instance.tippy && instance.tippy.store) {
                        instance.tippy.store.forEach(function (s) {

                            if (s && s && s.settings && s.settings.html) {
                                Vue.nextTick(function () {
                                    s.tippyInstance.update(s.popper);
                                });
                            }

                        });
                    }

                });
            }

        };

        Vue.directive('tippy', {
            inserted: function (el, binding, vnode, oldVnode) {

                const handlers = (vnode.data && vnode.data.on) ||
                    (vnode.componentOptions && vnode.componentOptions.listeners);

                var opts = binding.value || {};

                opts.onShow = function () {

                    if (handlers && handlers["show"]) {
                        handlers["show"].fns();
                    }
                };
                opts.onShown = function () {

                    if (handlers && handlers["shown"]) {
                        handlers["shown"].fns();
                    }
                };
                opts.onHidden = function () {
                    if (handlers && handlers["hidden"]) {
                        handlers["hidden"].fns();
                    }
                };
                opts.onHide = function () {
                    if (handlers && handlers["hide"]) {
                        handlers["hide"].fns();
                    }
                };


                el.tippy = new Tippy(el, opts);
                Vue.$tippyInstances.push({
                    el: el,
                    tippy: el.tippy,

                })

            },
            unbind: function (el, binding, vnode) {
                vnode.context.$tippy.destroyTippy(el);
            },
            componentUpdated: function (el, binding,vnode) {

                var opts = binding.value || {};
                var oldValue = binding.oldValue || {};

                if (el.tippy && ( JSON.stringify(opts) !== JSON.stringify(oldValue) )) {

                    const handlers = (vnode.data && vnode.data.on) ||  (vnode.componentOptions && vnode.componentOptions.listeners);

                    vnode.context.$tippy.destroyTippy(el);
                    opts.onShow = function () {

                        if (handlers && handlers["show"]) {
                            handlers["show"].fns();
                        }
                    };
                    opts.onShown = function () {

                        if (handlers && handlers["shown"]) {
                            handlers["shown"].fns();
                        }
                    };
                    opts.onHidden = function () {
                        if (handlers && handlers["hidden"]) {
                            handlers["hidden"].fns();
                        }
                    };
                    opts.onHide = function () {
                        if (handlers && handlers["hide"]) {
                            handlers["hide"].fns();
                        }
                    };

                    el.tippy = new Tippy(el, opts);
                    Vue.$tippyInstances.push({
                        el: el,
                        tippy: el.tippy,

                    })
                }
                else if (el.tippy && (el.getAttribute('title') || el.getAttribute('data-html'))) {

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