<template>
  <div>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    initialValue: {
      default: 0,
    },
  },
  data() {
    return {
      count: this.initialValue,
    }
  },
})
</script>
