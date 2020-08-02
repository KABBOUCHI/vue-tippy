import tippy from 'tippy.js'
import Tippy from './components/Tippy'
import { useTippy } from './composables/useTippy'
import { TippyOptions } from './types'
import 'tippy.js/dist/tippy.css'

const setDefaultProps = tippy.setDefaultProps

export { useTippy, tippy, setDefaultProps, Tippy }
export { TippyOptions }
