<template>
  <div class="grid grid-cols-4 gap-4 ">
    <tippy-singleton move-transition="transform 0.2s ease-out" placement="top">
      <tippy
        v-for="i in 10"
        :key="i"
        class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
      >
        <template #content>
          <div>Working tooltip</div>
        </template>
        Button {{ i }}
      </tippy>
    </tippy-singleton>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
};
</script>