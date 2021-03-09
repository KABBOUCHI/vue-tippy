import TippyComponent from '../components/Tippy'
import TippySingletonComponent from '../components/TippySingleton'
import directive from '../directive'
import { Plugin } from 'vue'
import tippy from 'tippy.js'
import { TippyPluginOptions } from '../types'

const plugin: Plugin = {
  install(app, options: TippyPluginOptions = {}) {
    tippy.setDefaultProps(options.defaultProps || {})

    app.directive(options.directive || 'tippy', directive)
    app.component(options.component || 'tippy', TippyComponent)
    app.component(options.componentSingleton || 'tippy-singleton', TippySingletonComponent)
  },
}

export default plugin
