import tippy, {
  sticky,
  inlinePositioning,
  followCursor,
  animateFill,
} from 'tippy.js'

import Tippy from './components/Tippy'
import directive from './directive'
import plugin from './plugin'

import { useTippy } from './composables/useTippy'
import 'tippy.js/dist/tippy.css'

const setDefaultProps = tippy.setDefaultProps

setDefaultProps({
  plugins: [sticky, inlinePositioning, followCursor, animateFill],
})

export { useTippy, tippy, setDefaultProps, Tippy, directive }

export * from './types'
export default plugin
