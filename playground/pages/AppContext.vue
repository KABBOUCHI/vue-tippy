<template>
    <button ref="btn">Hi!</button>
</template>

<script setup lang="ts">
import { ref, h, defineComponent, resolveComponent, inject } from "vue";
import { useTippy } from "../../src";

const btn = ref()

useTippy(btn, {
    interactive: true,
    content: defineComponent({
        setup() {
            const settings = inject("settings") as any

            return () => h("div", {}, [
                JSON.stringify(settings),
                h(resolveComponent("counter")),
            ])
        }
    })
})

</script>