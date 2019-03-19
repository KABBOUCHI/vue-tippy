<template>
  <span>
    <slot name="trigger"></slot>
    <slot name="default"></slot>
    <slot name="content"></slot>
  </span>
</template>

<script>
import tippy from 'tippy.js'
import camelcaseKeys from 'camelcase-keys'

export default {
  props: ['to', 'content', 'isEnabled', 'isVisible'],
  data () {
    return {
      tip: null,
      options: {}
    }
  },
  mounted () {
    this.options = camelcaseKeys(this.$attrs)

    let elm = null

    if (this.to) {
      elm = document.querySelector(`[name='${this.to}']`)
    } else {
      elm = this.$slots.trigger[0].elm
    }

    this.options.content =
      this.content != null
        ? this.content
        : this.$slots.content
        ? this.$slots.content[0].elm
        : this.$el

    this.tip = tippy(elm, this.options)
    this.$emit('onCreate', this.tip)
    if (this.isEnabled === false) {
      this.tip.disable()
    }

    if (this.isManualTrigger && this.isVisible === true) {
      this.tip.show()
    }
  },
  watch: {
    content () {
      this.updateOptions()
    }
  },
  updated () {
    this.updateOptions()
  },
  computed: {
    isManualTrigger () {
      return this.options.trigger === 'manual'
    }
  },
  methods: {
    updateOptions () {
      if (this.tip) {
        this.options.content =
          this.content != null
            ? this.content
            : this.$slots.content
            ? this.$slots.content[0].elm
            : this.$el
        this.tip.set(this.options)
      }
    }
  }
}
</script>
