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
      data () {
        return {
          tip: null,
          options: {}
        }
      },
      mounted () {
        var options = this.$attrs
        options.content = this.$attrs.content != undefined ? this.$attrs.content : this.$slots.content[0].elm
        this.tip = tippy.one(this.$slots.trigger[0].elm, options)
      },
      updated () {
        if (this.tip) {
          var options = this.$attrs
          options.content = this.$attrs.content != undefined ? this.$attrs.content : this.$slots.content[0].elm
          this.tip.set(options)
        }
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
