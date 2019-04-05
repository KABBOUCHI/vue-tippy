<template>
  <div class="rounded overflow-hidden text-center rounded-b-lg border bg-grey-lightest my-6">
    <div v-if="$slots.demo" class="p-4">
      <slot name="demo"></slot>
    </div>
    <div v-if="$slots.code" class="borner-t-none">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lang"]
};
</script>

<style lang="scss" scoped>
pre {
  margin: 0 !important;
}
</style>



