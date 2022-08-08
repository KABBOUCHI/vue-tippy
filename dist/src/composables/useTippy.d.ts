import { Instance, Props } from 'tippy.js';
import { Ref } from 'vue';
import { TippyOptions, TippyContent } from '../types';
export declare function useTippy(el: Element | (() => Element) | Ref<Element> | Ref<Element | undefined>, opts?: TippyOptions, settings?: {
    mount: boolean;
}): {
    tippy: Ref<Instance<Props> | undefined>;
    refresh: () => void;
    refreshContent: () => void;
    setContent: (value: TippyContent) => void;
    setProps: (value: TippyOptions) => void;
    destroy: () => void;
    hide: () => void;
    show: () => void;
    disable: () => void;
    enable: () => void;
    unmount: () => void;
    mount: () => void;
    state: Ref<{
        isEnabled: boolean;
        isVisible: boolean;
        isDestroyed: boolean;
        isMounted: boolean;
        isShown: boolean;
    }>;
};
//# sourceMappingURL=useTippy.d.ts.map