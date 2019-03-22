<template>
  <div class="rounded overflow-hidden bg-white text-center mt-2">
    <div v-if="$slots.demo" class="p-4">
      <slot name="demo"></slot>
    </div>
    <div v-if="$slots.code">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lang"]
};
</script>

<style scoped>
pre {
  margin: 0 !important;
}
</style>



