<template>
  <div>
    <tippy :ref="(v) => instances.push(v.tippy)" v-for="i in 10" :key="i">
      <template #content>
        <div>Working tooltip</div>
      </template>
      <button>Button {{ i }}</button>
    </tippy>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSingleton } from '../../src';
export default {
  name: "App",
  setup() {
    const instances = ref([]);

    useSingleton(() => instances.value.map((i) => i.tippy), {
      moveTransition: "transform 0.2s ease-out",
    });

    return {
      instances,
    };
  },
};
</script>