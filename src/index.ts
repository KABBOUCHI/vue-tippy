import tippy, {
  sticky,
  inlinePositioning,
  followCursor,
  animateFill,
} from 'tippy.js'
import Tippy from './components/Tippy'
import { useTippy } from './composables/useTippy'
import 'tippy.js/dist/tippy.css'

const setDefaultProps = tippy.setDefaultProps

setDefaultProps({
  plugins: [sticky, inlinePositioning, followCursor, animateFill],
})

export { useTippy, tippy, setDefaultProps, Tippy }
export * from './types'
