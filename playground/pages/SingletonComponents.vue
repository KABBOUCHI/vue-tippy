<template>
    <div class="space-y-5">
        <div class="grid grid-cols-4 gap-4">
            <tippy-singleton
                move-transition="transform 0.2s ease-out"
                placement="top"
            >
                <tippy
                    v-for="i in count"
                    :key="i"
                    class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
                    tag="button"
                >
                    <template #content>
                        <div>Working tooltip</div>
                    </template>
                    Button {{ i }}
                </tippy>
            </tippy-singleton>
        </div>

        <hr />

        <div class="grid grid-cols-4 gap-4">
            <button
                ref="tippyRefs"
                v-tippy="`Tooltip ${i}`"
                v-for="i in count"
                :key="i"
                class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
            >
                Button {{ i }}
            </button>
        </div>

        <hr />

        <div class="flex items-center w-full">
            <button
                class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
                @click="count++"
            >
                Add buttons
            </button>
        </div>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useSingleton } from '../../src'

export default {
    name: 'App',
    setup() {
        const tippyRefs = ref([])

        useSingleton(tippyRefs, {
            moveTransition: 'transform 0.2s ease-out',
            delay: [250, 50],
            placement: 'bottom',
        })

        watch(tippyRefs, () => {
            console.log('tippyRefs', tippyRefs.value)
        })

        return {
            tippyRefs,
            log: console.log,
        }
    },
    data() {
        return {
            count: 10,
        }
    },
}
</script>
