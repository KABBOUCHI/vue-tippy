import VueTippyV4, { TippyComponent } from '../../src'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    window.Vue = Vue;

    Vue.mixin({
        data() {
            return {
                message: 'Hello Vue!',
                timer: 0,
                counter: 0,
                tippyTheme: 'light'
            }
        },
        created() {
            setInterval(() => {
                this.timer++;
            }, 1000);

            document.addEventListener('keydown', (e) => {
                if (e.key === 't') {
                    this.tippyTheme = this.tippyTheme == 'light' ? 'dark' : 'light';
                }
            });
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
            }
        }
    })

    Vue.use(VueTippyV4, {
        directive: 'tippy-v4',
    })

    Vue.component('tippy-v4', TippyComponent)
}