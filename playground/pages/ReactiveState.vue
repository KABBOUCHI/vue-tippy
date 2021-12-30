<template>
  <pre class="bg-gray-200 rounded-lg p-4 mb-2">{{ state }} </pre>

  <tippy @state="onStateChange">
    <template #default="{ state }">
      <button
        :class="state.isShown ? 'bg-gray-500' : 'bg-gray-200'"
        class="
          text-gray-400
          select-none
          cursor-pointer
          p-2
          rounded-md
          hover:bg-gray-50
        "
      >
        Trigger tippy
      </button>
    </template>
    <template #content> Tippy content </template>
  </tippy>

  <br>
  <br>
  <br>

  <tippy>
    <template #default="{ state }">
      <button
        :class="state.isShown ? 'bg-gray-500' : 'bg-gray-200'"
        class="
          text-gray-400
          select-none
          cursor-pointer
          p-2
          rounded-md
          hover:bg-gray-50
        "
      >
        Trigger tippy
      </button>
    </template>
    <template #content> Tippy content </template>
  </tippy>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      state: {},
    }
  },
  methods: {
    onStateChange(state) {
      this.state = state
    },
  },
}
</script>
