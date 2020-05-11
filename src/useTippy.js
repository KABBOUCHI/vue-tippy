import tippy from "tippy.js"
import { h, isRef, onMounted, ref, onUnmounted, watch, toRefs, onUpdated } from "@vue/composition-api";


const array_wrap = (val) => Array.isArray(val) ? val : [val];


export function useTippy(el, opts = {}) {

    const instance = ref(null)

    let onMountCbs = [];
    let onUnmountCbs = [];

    const onMount = (cb) => {
        onMountCbs.push(cb);
    }

    const onUnmount = (cb) => {
        onUnmountCbs.push(cb);
    }

    const init = (e, o) => {
        instance.value = tippy(e, o);
        onMountCbs.forEach(cb => cb(instance.value))
    }

    onMounted(() => {
        let element = el;

        if (isRef(el)) {
            element = el.value
        }

        if (Array.isArray(el)) {
            element = el.map((e) => isRef(e) ? e.value : e)
        }

        if (isRef(opts.content)) {

            watch(opts.content, function (val) {
                opts.content = val;
                if (instance.value) {
                    array_wrap(instance.value).forEach((t) => t.setContent(val));
                }
            })

        }
        init(element, opts);
    });

    onUnmounted(() => {
        if (instance.value) {
            array_wrap(instance.value).forEach((t) => t.destroy());
        }

        onUnmountCbs.forEach(cb => cb())
    })

    watch(() => opts, () => {
        if (instance.value) {
            array_wrap(instance.value).forEach((t) => t.set(opts));
        }
    }, { layz: true, deep: true })

    return {
        onMount,
        onUnmount,
        tippy: instance
    }
}