import tippy, {
  sticky,
  inlinePositioning,
  followCursor,
  animateFill,
  roundArrow,
} from 'tippy.js'

import Tippy from './components/Tippy'
import directive from './directive'
import plugin from './plugin'

import { useTippy } from './composables/useTippy'
import { useSingleton } from './composables/useSingleton'

import 'tippy.js/dist/tippy.css'

const setDefaultProps = tippy.setDefaultProps

setDefaultProps({
  ignoreAttributes: true,
  plugins: [sticky, inlinePositioning, followCursor, animateFill],
})

export {
  useTippy,
  roundArrow,
  tippy,
  useSingleton,
  setDefaultProps,
  Tippy,
  directive,
  plugin,
}

export * from './types'
export default plugin
