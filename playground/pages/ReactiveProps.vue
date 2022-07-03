<template>
  <div class="grid grid-cols-3 gap-4">
    <Tippy :content="content" :hide-on-click="false" arrow>
      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg w-full" @click="content++">Component</button>
    </Tippy>

    <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg" ref="btn" @click="content++">Composition</button>

    <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg" v-tippy="{ content }" @click="content++">Directive</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { Tippy, useTippy } from "../../src";
export default {
  components: {
    Tippy,
  },
  setup() {
    const content = ref(1);
    const btn = ref();

    useTippy(btn, {
      content,
      hideOnClick: false,
    });

    return {
      content,
      btn,
    };
  },
};
</script>
