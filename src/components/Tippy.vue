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
import defaultProps, { booleanProps } from '../props'
import pickBy from 'lodash.pickby'
import mapValues from 'lodash.mapvalues'

export default {
  props: ['to', 'content', 'isEnabled', 'isVisible'],
  data () {
    return {
      tip: null,
      options: {}
    }
  },
  mounted () {
    let elm = null

    if (this.to) {
      elm = document.querySelector(`[name='${this.to}']`)
    } else {
      elm = this.$slots.trigger[0].elm
    }

    this.tip = tippy(elm, this.getOptions())

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
      if (this.tip) {
        this.tip.set(this.getOptions())
      }
    }
  },
  updated () {
    if (this.tip && !this.content) {
      this.tip.set(this.getOptions())
    }
  },
  computed: {
    isManualTrigger () {
      return this.options.trigger === 'manual'
    }
  },
  methods: {
    tippy () {
      return this.tip
    },
    getOptions () {
      this.options = camelcaseKeys(this.$attrs)

      this.options = pickBy(this.options, (value, key) => {
        return defaultProps.hasOwnProperty(key)
      })

      this.options = mapValues(this.options, (value, key) => {
        if (booleanProps.hasOwnProperty(key)) {
          if (value === '') return true

          return value === 'false' ? false : value
        }
        return value
      })

      console.log(this.options)

      if (!this.options.onShow) {
        this.options.onShow = (...args) => {
          this.$emit('show', ...args)
        }
      }

      if (!this.options.onShown) {
        this.options.onShown = (...args) => {
          this.$emit('shown', ...args)
        }
      }

      if (!this.options.onHidden) {
        this.options.onHidden = (...args) => {
          this.$emit('hidden', ...args)
        }
      }

      if (!this.options.onHide) {
        this.options.onHide = (...args) => {
          this.$emit('hide', ...args)
        }
      }

      if (!this.options.onMount) {
        this.options.onMount = (...args) => {
          this.$emit('mount', ...args)
        }
      }

      this.options.content =
        this.content != null
          ? this.content
          : this.$slots.content
          ? this.$slots.content[0].elm
          : this.$el

      return this.options
    }
  }
}
</script>
