<template>
  <span>
    <slot name="trigger"></slot>
    <slot name="content"></slot>
  </span>
</template>

<script>
import tippy from 'tippy.js'
import camelcaseKeys from 'camelcase-keys'

export default {
  props: ['isEnabled', 'isVisible'],
  data () {
    return {
      tip: null,
      options: {}
    }
  },
  mounted () {
    this.options = camelcaseKeys(this.$attrs)

    this.options.content =
      this.$attrs.content != undefined
        ? this.$attrs.content
        : this.$slots.content[0].elm

    this.tip = tippy(this.$slots.trigger[0].elm, this.options)
    this.$emit('onCreate', this.tip)
    if (this.isEnabled === false) {
      this.tip.disable()
    }

    if (this.isManualTrigger && this.isVisible === true) {
      this.tip.show()
    }
  },
  updated () {
    if (this.tip) {
      this.options = camelcaseKeys(this.$attrs)

      this.options.content =
        this.$attrs.content != undefined
          ? this.$attrs.content
          : this.$slots.content[0].elm
      this.tip.set(this.options)
    }
  },
  computed: {
    isManualTrigger () {
      return this.options.trigger === 'manual'
    }
  }
}
</script>
