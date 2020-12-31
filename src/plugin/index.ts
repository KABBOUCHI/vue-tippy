import TippyComponent from '../components/Tippy'
import directive from '../directive'
import { Plugin } from 'vue-demi'
import tippy from 'tippy.js'
import { TippyPluginOptions } from '../types'

const plugin: Plugin = {
  install(app, options: TippyPluginOptions = {}) {
    tippy.setDefaultProps(options.defaultProps || {})

    app.directive(options.directive || 'tippy', directive)
    app.component(options.component || 'tippy', TippyComponent)
  },
}

export default plugin
