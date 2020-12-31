<template>
  <button @click="count++">{{ count }}</button>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

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
