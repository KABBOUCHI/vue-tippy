<template>
  <div>
    <tippy
      :theme="theme"
      sticky
      :showOnCreate="true"
      :hideOnClick="false"
      interactive
    >
      <button class="text-sm py-2 px-3 bg-gray-900 text-white rounded-lg">
        Theme {{ theme }}
      </button>

      <template #content>
        Hello!

        <button
          @click="toggleTheme"
          class="mt-4 text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
        >
          Toggle Theme - {{ theme }}
        </button>
      </template>
    </tippy>

    <br />

    <button
      @click="toggleTheme"
      class="mt-4 text-sm py-2 px-3 bg-gray-900 text-white rounded-lg"
    >
      Toggle Theme
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light',
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
  },
}
</script>
