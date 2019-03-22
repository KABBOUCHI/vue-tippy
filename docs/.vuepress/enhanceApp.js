import VueTippyV4, { TippyComponent } from '../../src'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    window.Vue = Vue;

    Vue.use(VueTippyV4, {
        directive: 'tippy-v4',
    })

    Vue.component('tippy-v4', TippyComponent)
}