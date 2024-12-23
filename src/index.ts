import tippy, {
  sticky,
  inlinePositioning,
  followCursor,
  animateFill,
  roundArrow,
  hideAll,
} from 'tippy.js'

import Tippy from './components/Tippy'
import TippySingleton from './components/TippySingleton'
import directive from './directive'
import plugin from './plugin'

import { useTippy } from './composables/useTippy'
import { useTippyComponent } from './composables/useTippyComponent'
import { useSingleton } from './composables/useSingleton'

const setDefaultProps = tippy.setDefaultProps

setDefaultProps({
  ignoreAttributes: true,
  plugins: [sticky, inlinePositioning, followCursor, animateFill],
})

export {
  useTippy,
  useTippyComponent,
  roundArrow,
  tippy,
  hideAll,
  useSingleton,
  setDefaultProps,
  Tippy,
  TippySingleton,
  directive,
  plugin,
}

export * from './types'
export default plugin
