<template>
  <div>
    <div
      v-for="(item, i) in items"
      :key="i"
      class="mt-3 flex"
    >
      <span
        :class="`list-${type}`"
        class="mt-px mr-3 flex-shrink-0"
      >
        <component
          :is="iconName"
          class="h-6 w-6"
        />
      </span>
      <div v-html="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'info', 'success', 'warning', 'danger'].includes(value)
      }
    }
  },
  computed: {
    iconName() {
      return this.icon || ({
        primary: 'IconBadgeCheck',
        info: 'IconInformationCircle',
        success: 'IconCheckCircle',
        warning: 'IconExclamationCircle',
        danger: 'IconXCircle'
      })[this.type]
    }
  }
}
</script>

<style>
/* Primary */
.list-primary {
  @apply text-primary-500 dark:text-primary-400;
}
/* Info */
.list-info {
  @apply text-blue-500 dark:text-blue-400;
}
/* Success */
.list-success {
  @apply text-green-500 dark:text-green-400;
}
/* Warning */
.list-warning {
  @apply text-yellow-500 dark:text-yellow-400;
}
/* Danger */
.list-danger {
  @apply text-red-500 dark:text-red-400;
}
</style>
