const Tippy = require('tippy.js');
const css = require('tippy.js/dist/tippy.css');

if (!Array.prototype.some) {
    Array.prototype.some = function (fun/*, thisArg*/) {
        'use strict';

        if (this == null) {
            throw new TypeError('Array.prototype.some called on null or undefined');
        }

        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisArg, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}
var VueTippy = {
    install: function (Vue) {
        Vue.$tippyInstances = [];
        Vue.$tippyComponents = [];
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

                            if (s && s && s.settings && !s.settings.html) {
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

                if (el.getAttribute('data-html')) {

                    vnode.context.$children.forEach(function ($vm) {
                        if (!Vue.$tippyComponents.some(function (x) {
                                return x._uid === $vm._uid
                            })) {
                            if ($vm.$options.updated === undefined) {
                                $vm.$options.updated = [];
                            }

                            $vm.$options.updated.push(function () {
                                $vm.$tippy.forceUpdateHtml();
                            });

                            Vue.$tippyComponents.push($vm);
                        }
                    })
                } else if (opts.html) {
                    opts.html = document.querySelector(opts.html)
                }

                // if (opts.show && !opts.trigger) {
                //     opts.trigger = 'manual';
                // }

                el.tippy = new Tippy(el, opts);

                Vue.$tippyInstances.push({
                    el: el,
                    tippy: el.tippy
                });

                if (opts.show) {
                    vnode.context.$tippy.showPopper(el);
                }

            },
            unbind: function (el, binding, vnode) {
                vnode.context.$tippy.destroyTippy(el);
            },
            componentUpdated: function (el, binding, vnode) {

                var opts = binding.value || {};
                var oldValue = binding.oldValue || {};

                if (opts.html) return;

                if (el.tippy && ( JSON.stringify(opts) !== JSON.stringify(oldValue) )) {

                    const handlers = (vnode.data && vnode.data.on) || (vnode.componentOptions && vnode.componentOptions.listeners);

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

                    vnode.context.$nextTick(function () {
                        el.tippy.store.forEach(function (s) {

                            var popper = s.popper;

                            var tip = s.tippyInstance;

                            tip.update(popper);

                        });
                    });


                }

                if (el.tippy && opts.show) {
                    vnode.context.$tippy.showPopper(el);
                } else if (el.tippy && !opts.show) {
                    vnode.context.$tippy.hidePopper(el);
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