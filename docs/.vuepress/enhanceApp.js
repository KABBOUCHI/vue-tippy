import VueTippyV4, { TippyComponent } from '../../src/index-nostyles'

import "tippy.js/index.css"
import "tippy.js/themes/google.css"
import "tippy.js/themes/light-border.css"

import VueCompositionApi from '@vue/composition-api';
export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {

    Vue.use(VueCompositionApi);

    if (typeof window !== 'undefined') {
        window.Vue = Vue;

    }

    if (typeof VueTippy !== 'undefined') {
        Vue.use(VueTippy.default)
    }


    Vue.mixin({
        data() {
            return {
                message: 'Hello Vue!',
                timer: 0,
                counter: 0,
                tippyTheme: 'light',
                interval: null
            }
        },
        created() {
            this.interval = setInterval(() => {
                this.timer++;
            }, 1000);

            if (typeof window !== 'undefined') {
                document.addEventListener('keydown', (e) => {
                    if (e.key === 't') {
                        this.tippyTheme = this.tippyTheme == 'light' ? 'dark' : 'light';
                    }
                });
            }

        },
        destroyed() {
            if (this.interval)
                clearInterval(this.interval)
        },
        methods: {
            onShow() {
                alert('onShow');

            },
            onShown() {
                alert('onShown');

            },
            onHide() {
                alert('onHide');

            },
            onHidden() {
                alert('onHidden');
            },
            onTippyInit(tippy) {
                console.log('[onTippyInit]', tippy);
            },
            alert(msg) {
                alert(msg);
                console.log(msg);
            }
        }
    })

    Vue.use(VueTippyV4, {
        directive: 'tippy-v4',
    })

    Vue.component('tippy-v4', TippyComponent)
}