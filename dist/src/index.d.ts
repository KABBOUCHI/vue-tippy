import tippy, { roundArrow } from 'tippy.js';
import Tippy from './components/Tippy';
import TippySingleton from './components/TippySingleton';
import directive from './directive';
import plugin from './plugin';
import { useTippy } from './composables/useTippy';
import { useTippyComponent } from './composables/useTippyComponent';
import { useSingleton } from './composables/useSingleton';
declare const setDefaultProps: (partialProps: Partial<import("tippy.js").DefaultProps>) => void;
export { useTippy, useTippyComponent, roundArrow, tippy, useSingleton, setDefaultProps, Tippy, TippySingleton, directive, plugin, };
export * from './types';
export default plugin;
//# sourceMappingURL=index.d.ts.map