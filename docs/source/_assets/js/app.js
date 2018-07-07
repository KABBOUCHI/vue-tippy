// const anchorJS = require('anchor-js')
const Prism = require('./prism')
import VueTippy from '../../../../src/index';

// window.anchors = new anchorJS()
window.Vue = require('vue')
window.Vue.use(VueTippy, { animation : 'fade'});

Vue.component('responsive-code-sample', require('./components/ResponsiveCodeSample.vue'))

const app = new Vue({
    el: '#app',
    data : {
       message : 'Hello Vue!',
       timer : 0,
       counter : 0,
    },
    created () {
        setInterval(() => {
            this.timer++;
        },1000);
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
        onTippyInit(tippy)
        {
            console.log('[onTippyInit]', tippy);
        }
    }
})

Prism.highlightAll()
// anchors.options = {placement: 'left', class: 'text-grey-dark'}
// anchors.add()
