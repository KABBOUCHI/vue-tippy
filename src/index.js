import tippy from 'tippy.js/dist/tippy.all'
import './css/themes.css'

const plugin = {
  install (Vue, opts) {
    Vue.component('tippy', {
      template: `
<div>
   <slot name="trigger"></slot>
   <slot name="content"></slot>
</div>
`,
      props: ['isEnabled', 'isVisible'],
      data () {
        return {
          tip: null,
          options: {}
        }
      },
      mounted () {
        this.options = this.$attrs
        this.options.content = this.$attrs.content != undefined ? this.$attrs.content : this.$slots.content[0].elm
        this.tip = tippy.one(this.$slots.trigger[0].elm, this.options)
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
          this.options = this.$attrs
          this.options.content = this.$attrs.content != undefined ? this.$attrs.content : this.$slots.content[0].elm
          this.tip.set(this.options)
        }
      },
      computed: {
        isManualTrigger () {
          return this.options.trigger === 'manual'
        }
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
