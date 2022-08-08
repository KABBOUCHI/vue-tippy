import { UnwrapNestedRefs, PropType } from 'vue';
import { TippyOptions } from '../types';
import { useTippy } from '../composables';
declare module '@vue/runtime-core' {
    interface ComponentCustomProps extends TippyOptions {
        to: string | Element;
        tag: string;
        contentTag: string;
        contentClass: string;
    }
    interface ComponentCustomProperties extends UnwrapNestedRefs<ReturnType<typeof useTippy>> {
    }
}
declare const TippyComponent: import("vue").DefineComponent<{
    to: {
        type: PropType<string | Element>;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    contentTag: {
        type: StringConstructor;
        default: string;
    };
    contentClass: {
        type: StringConstructor;
        default: null;
    };
    appendTo: {
        default: () => Element | "parent" | ((ref: Element) => Element);
    };
    aria: {
        default: () => {
            content?: "auto" | "describedby" | "labelledby" | null | undefined;
            expanded?: boolean | "auto" | undefined;
        };
    };
    delay: {
        default: () => number | [number, number];
    };
    duration: {
        default: () => number | [number, number];
    };
    getReferenceClientRect: {
        default: () => import("tippy.js").GetReferenceClientRect | null;
    };
    hideOnClick: {
        type: (StringConstructor | BooleanConstructor)[];
        default: () => boolean | "toggle";
    };
    ignoreAttributes: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    interactive: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    interactiveBorder: {
        default: () => number;
    };
    interactiveDebounce: {
        default: () => number;
    };
    moveTransition: {
        default: () => string;
    };
    offset: {
        default: () => [number, number] | (({ placement, popper, reference, }: {
            placement: import("@popperjs/core").Placement;
            popper: import("@popperjs/core").Rect;
            reference: import("@popperjs/core").Rect;
        }) => [number, number]);
    };
    onAfterUpdate: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>, partialProps: Partial<import("tippy.js").Props>) => void;
    };
    onBeforeUpdate: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>, partialProps: Partial<import("tippy.js").Props>) => void;
    };
    onCreate: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    };
    onDestroy: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    };
    onHidden: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    };
    onHide: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => false | void;
    };
    onMount: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    };
    onShow: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => false | void;
    };
    onShown: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    };
    onTrigger: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>, event: Event) => void;
    };
    onUntrigger: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>, event: Event) => void;
    };
    onClickOutside: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>, event: Event) => void;
    };
    placement: {
        default: () => import("@popperjs/core").Placement;
    };
    plugins: {
        default: () => import("tippy.js").Plugin<unknown>[];
    };
    popperOptions: {
        default: () => Partial<import("@popperjs/core").Options>;
    };
    render: {
        default: () => ((instance: import("tippy.js").Instance<import("tippy.js").Props>) => {
            popper: import("tippy.js").PopperElement<import("tippy.js").Props>;
            onUpdate?: ((prevProps: import("tippy.js").Props, nextProps: import("tippy.js").Props) => void) | undefined;
        }) | null;
    };
    showOnCreate: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    touch: {
        type: (StringConstructor | BooleanConstructor | ArrayConstructor)[];
        default: () => boolean | "hold" | ["hold", number];
    };
    trigger: {
        default: () => string;
    };
    triggerTarget: {
        default: () => Element | Element[] | null;
    };
    animateFill: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    followCursor: {
        type: (StringConstructor | BooleanConstructor)[];
        default: () => boolean | "horizontal" | "vertical" | "initial";
    };
    inlinePositioning: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    sticky: {
        type: (StringConstructor | BooleanConstructor)[];
        default: () => boolean | "reference" | "popper";
    };
    allowHTML: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    animation: {
        default: () => string | boolean;
    };
    arrow: {
        default: () => string | boolean | DocumentFragment | SVGElement;
    };
    content: {
        default: () => import("tippy.js").Content;
    };
    inertia: {
        default: () => boolean;
    };
    maxWidth: {
        default: () => string | number;
    };
    role: {
        default: () => string;
    };
    theme: {
        default: () => string;
    };
    zIndex: {
        default: () => number;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "state"[], "state", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    to: {
        type: PropType<string | Element>;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    contentTag: {
        type: StringConstructor;
        default: string;
    };
    contentClass: {
        type: StringConstructor;
        default: null;
    };
    appendTo: {
        default: () => Element | "parent" | ((ref: Element) => Element);
    };
    aria: {
        default: () => {
            content?: "auto" | "describedby" | "labelledby" | null | undefined;
            expanded?: boolean | "auto" | undefined;
        };
    };
    delay: {
        default: () => number | [number, number];
    };
    duration: {
        default: () => number | [number, number];
    };
    getReferenceClientRect: {
        default: () => import("tippy.js").GetReferenceClientRect | null;
    };
    hideOnClick: {
        type: (StringConstructor | BooleanConstructor)[];
        default: () => boolean | "toggle";
    };
    ignoreAttributes: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    interactive: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    interactiveBorder: {
        default: () => number;
    };
    interactiveDebounce: {
        default: () => number;
    };
    moveTransition: {
        default: () => string;
    };
    offset: {
        default: () => [number, number] | (({ placement, popper, reference, }: {
            placement: import("@popperjs/core").Placement;
            popper: import("@popperjs/core").Rect;
            reference: import("@popperjs/core").Rect;
        }) => [number, number]);
    };
    onAfterUpdate: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>, partialProps: Partial<import("tippy.js").Props>) => void;
    };
    onBeforeUpdate: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>, partialProps: Partial<import("tippy.js").Props>) => void;
    };
    onCreate: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    };
    onDestroy: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    };
    onHidden: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    };
    onHide: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => false | void;
    };
    onMount: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    };
    onShow: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => false | void;
    };
    onShown: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    };
    onTrigger: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>, event: Event) => void;
    };
    onUntrigger: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>, event: Event) => void;
    };
    onClickOutside: {
        default: () => (instance: import("tippy.js").Instance<import("tippy.js").Props>, event: Event) => void;
    };
    placement: {
        default: () => import("@popperjs/core").Placement;
    };
    plugins: {
        default: () => import("tippy.js").Plugin<unknown>[];
    };
    popperOptions: {
        default: () => Partial<import("@popperjs/core").Options>;
    };
    render: {
        default: () => ((instance: import("tippy.js").Instance<import("tippy.js").Props>) => {
            popper: import("tippy.js").PopperElement<import("tippy.js").Props>;
            onUpdate?: ((prevProps: import("tippy.js").Props, nextProps: import("tippy.js").Props) => void) | undefined;
        }) | null;
    };
    showOnCreate: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    touch: {
        type: (StringConstructor | BooleanConstructor | ArrayConstructor)[];
        default: () => boolean | "hold" | ["hold", number];
    };
    trigger: {
        default: () => string;
    };
    triggerTarget: {
        default: () => Element | Element[] | null;
    };
    animateFill: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    followCursor: {
        type: (StringConstructor | BooleanConstructor)[];
        default: () => boolean | "horizontal" | "vertical" | "initial";
    };
    inlinePositioning: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    sticky: {
        type: (StringConstructor | BooleanConstructor)[];
        default: () => boolean | "reference" | "popper";
    };
    allowHTML: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    animation: {
        default: () => string | boolean;
    };
    arrow: {
        default: () => string | boolean | DocumentFragment | SVGElement;
    };
    content: {
        default: () => import("tippy.js").Content;
    };
    inertia: {
        default: () => boolean;
    };
    maxWidth: {
        default: () => string | number;
    };
    role: {
        default: () => string;
    };
    theme: {
        default: () => string;
    };
    zIndex: {
        default: () => number;
    };
}>> & {
    onState?: ((...args: any[]) => any) | undefined;
}, {
    content: import("tippy.js").Content;
    triggerTarget: Element | Element[];
    getReferenceClientRect: import("tippy.js").GetReferenceClientRect;
    animateFill: boolean;
    appendTo: Element | "parent" | ((ref: Element) => Element);
    aria: {
        content?: "auto" | "describedby" | "labelledby" | null | undefined;
        expanded?: boolean | "auto" | undefined;
    };
    delay: number | [number, number];
    duration: number | [number, number];
    followCursor: string | boolean;
    hideOnClick: string | boolean;
    ignoreAttributes: boolean;
    inlinePositioning: boolean;
    interactive: boolean;
    interactiveBorder: number;
    interactiveDebounce: number;
    moveTransition: string;
    offset: [number, number] | (({ placement, popper, reference, }: {
        placement: import("@popperjs/core").Placement;
        popper: import("@popperjs/core").Rect;
        reference: import("@popperjs/core").Rect;
    }) => [number, number]);
    placement: import("@popperjs/core").Placement;
    plugins: import("tippy.js").Plugin<unknown>[];
    popperOptions: Partial<import("@popperjs/core").Options>;
    render: (instance: import("tippy.js").Instance<import("tippy.js").Props>) => {
        popper: import("tippy.js").PopperElement<import("tippy.js").Props>;
        onUpdate?: ((prevProps: import("tippy.js").Props, nextProps: import("tippy.js").Props) => void) | undefined;
    };
    showOnCreate: boolean;
    sticky: string | boolean;
    touch: string | boolean | unknown[];
    trigger: string;
    onAfterUpdate: (instance: import("tippy.js").Instance<import("tippy.js").Props>, partialProps: Partial<import("tippy.js").Props>) => void;
    onBeforeUpdate: (instance: import("tippy.js").Instance<import("tippy.js").Props>, partialProps: Partial<import("tippy.js").Props>) => void;
    onCreate: (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    onDestroy: (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    onHidden: (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    onHide: (instance: import("tippy.js").Instance<import("tippy.js").Props>) => false | void;
    onMount: (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    onShow: (instance: import("tippy.js").Instance<import("tippy.js").Props>) => false | void;
    onShown: (instance: import("tippy.js").Instance<import("tippy.js").Props>) => void;
    onTrigger: (instance: import("tippy.js").Instance<import("tippy.js").Props>, event: Event) => void;
    onUntrigger: (instance: import("tippy.js").Instance<import("tippy.js").Props>, event: Event) => void;
    onClickOutside: (instance: import("tippy.js").Instance<import("tippy.js").Props>, event: Event) => void;
    allowHTML: boolean;
    animation: string | boolean;
    arrow: string | boolean | DocumentFragment | SVGElement;
    inertia: boolean;
    maxWidth: string | number;
    role: string;
    theme: string;
    zIndex: number;
    tag: string;
    contentTag: string;
    contentClass: string;
}>;
export default TippyComponent;
//# sourceMappingURL=Tippy.d.ts.map