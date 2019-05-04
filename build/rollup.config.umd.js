import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-tippy',
    file: 'dist/vue-tippy.umd.js',
    format: 'umd',
  },
})

export default config
