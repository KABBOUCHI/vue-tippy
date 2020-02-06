import tippy from "tippy.js"
import { isRef, onMounted, ref, onUnmounted, watch, toRefs } from "@vue/composition-api";


export function useTippy(el, opts = {}) {

    const instance = ref(null)

    let onMountCbs = [];

    const onMount = (cb) => {
        onMountCbs.push(cb);
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

        if (isRef(opts.content)) {
            opts.content = opts.content.value;
        }

        init(element, opts);
    });

    onUnmounted(() => {
        if (instance.value) {
            instance.value.destroy()
        }
    })

    watch(Object.values(toRefs(opts)),() => {
      if(instance.value){
          instance.value.set(opts)
      }
    }, { layz : true})

    return {
        onMount,
        tippy: instance
    }
}