import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'vue-tipy',
    file: 'dist/vue-tippy.esm.js',
    format: 'es',
  },
  external: [
  ],
})

export default config
