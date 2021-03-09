import tippy, {
  sticky,
  inlinePositioning,
  followCursor,
  animateFill,
  roundArrow,
} from 'tippy.js'

import Tippy from './components/Tippy'
import TippySingleton from './components/TippySingleton'
import directive from './directive'
import plugin from './plugin'

import { useTippy } from './composables/useTippy'
import { useSingleton } from './composables/useSingleton'

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
  TippySingleton,
  directive,
  plugin,
}

export * from './types'
export default plugin
