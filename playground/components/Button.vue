<template>
  <button type="button" class="inline-flex text-sm py-2 px-3 bg-gray-900 text-white rounded-lg">
    <ui-icon class="mr-2"></ui-icon>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "UiButton",
};
</script>