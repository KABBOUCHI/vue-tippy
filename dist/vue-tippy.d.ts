import { Component } from 'vue';
import { ComponentObjectPropsOptions } from 'vue';
import { Content } from 'tippy.js';
import { CreateSingletonProps } from 'tippy.js';
import { DefaultProps } from 'tippy.js';
import { Directive } from 'vue';
import { Instance } from 'tippy.js';
import { Plugin as Plugin_2 } from 'vue';
import { Props } from 'tippy.js';
import { PropType } from 'vue';
import { Ref } from 'vue';
import { roundArrow } from 'tippy.js';
import tippy from 'tippy.js';
import { UnwrapNestedRefs } from 'vue';
import { VNode } from 'vue';

export declare const directive: Directive;

declare const plugin: Plugin_2;
export default plugin;
export { plugin }
export { roundArrow }

export declare const setDefaultProps: (partialProps: Partial<import("tippy.js").DefaultProps>) => void;

export declare const Tippy: import("vue").DefineComponent<{
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
export { tippy }

export declare type TippyComponent = InstanceType<typeof Tippy> & UnwrapNestedRefs<Pick<ReturnType<typeof useTippy>, 'tippy' | 'refresh' | 'refreshContent' | 'setContent' | 'setProps' | 'destroy' | 'hide' | 'show' | 'disable' | 'enable' | 'unmount' | 'mount' | 'state'>>;

export declare type TippyContent = Content | VNode | Component | Ref;

export declare type TippyInstance = Instance | Element | undefined;

export declare type TippyInstances = Ref<TippyInstance>[] | Ref<TippyInstance[]> | (() => TippyInstance[]);

export declare type TippyOptions = Partial<Omit<Props, 'content' | 'triggerTarget' | 'getReferenceClientRect'> & {
    content: TippyContent;
    triggerTarget: TippyTarget;
    getReferenceClientRect: null | (() => DOMRect & any);
}>;

export declare interface TippyPluginOptions {
    directive?: string;
    component?: string;
    componentSingleton?: string;
    defaultProps?: Partial<DefaultProps>;
}

export declare const TippySingleton: import("vue").DefineComponent<ComponentObjectPropsOptions<Record<string, unknown>>, {
    instances: import("vue").Ref<{
        clearDelayTimeouts: () => void;
        destroy: () => void;
        disable: () => void;
        enable: () => void;
        hide: () => void;
        hideWithInteractivity: (event: MouseEvent) => void;
        id: number;
        plugins: {
            name?: string | undefined;
            defaultValue?: any;
            fn: (instance: Instance<any>) => Partial<import("tippy.js").LifecycleHooks<any>>;
        }[];
        popper: import("tippy.js").PopperElement<any>;
        popperInstance: {
            state: {
                elements: {
                    reference: Element | {
                        getBoundingClientRect: () => ClientRect | DOMRect;
                        contextElement?: Element | undefined;
                    };
                    popper: HTMLElement;
                    arrow?: HTMLElement | undefined;
                };
                options: {
                    placement: import("@popperjs/core").Placement;
                    modifiers: any[];
                    strategy: import("@popperjs/core").PositioningStrategy;
                    onFirstUpdate?: ((arg0: Partial<import("@popperjs/core").State>) => void) | undefined;
                };
                placement: import("@popperjs/core").Placement;
                strategy: import("@popperjs/core").PositioningStrategy;
                orderedModifiers: {
                    name: any;
                    enabled: boolean;
                    phase: import("@popperjs/core").ModifierPhases;
                    requires?: string[] | undefined;
                    requiresIfExists?: string[] | undefined;
                    fn: (arg0: import("@popperjs/core").ModifierArguments<any>) => void | import("@popperjs/core").State;
                    effect?: ((arg0: import("@popperjs/core").ModifierArguments<any>) => void | (() => void)) | undefined;
                    options?: Partial<any> | undefined;
                    data?: import("@popperjs/core").Obj | undefined;
                }[];
                rects: {
                    reference: {
                        width: number;
                        height: number;
                        x: number;
                        y: number;
                    };
                    popper: {
                        width: number;
                        height: number;
                        x: number;
                        y: number;
                    };
                };
                scrollParents: {
                    reference: (Element | {
                        innerHeight: number;
                        offsetHeight: number;
                        innerWidth: number;
                        offsetWidth: number;
                        pageXOffset: number;
                        pageYOffset: number;
                        getComputedStyle: typeof getComputedStyle;
                        addEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                        removeEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                        Element: Element;
                        HTMLElement: HTMLElement;
                        Node: Node;
                        toString: () => "[object Window]";
                        devicePixelRatio: number;
                        visualViewport?: {
                            addEventListener: (type: string, listener: EventListener | EventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined) => void;
                            dispatchEvent: (event: Event) => boolean;
                            removeEventListener: (type: string, callback: EventListener | EventListenerObject | null, options?: boolean | EventListenerOptions | undefined) => void;
                            width: number;
                            height: number;
                            offsetLeft: number;
                            offsetTop: number;
                            scale: number;
                        } | undefined;
                        ShadowRoot: ShadowRoot;
                    } | {
                        addEventListener: (type: string, listener: EventListener | EventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined) => void;
                        dispatchEvent: (event: Event) => boolean;
                        removeEventListener: (type: string, callback: EventListener | EventListenerObject | null, options?: boolean | EventListenerOptions | undefined) => void;
                        width: number;
                        height: number;
                        offsetLeft: number;
                        offsetTop: number;
                        scale: number;
                    })[];
                    popper: (Element | {
                        innerHeight: number;
                        offsetHeight: number;
                        innerWidth: number;
                        offsetWidth: number;
                        pageXOffset: number;
                        pageYOffset: number;
                        getComputedStyle: typeof getComputedStyle;
                        addEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                        removeEventListener: (type: any, listener: any, optionsOrUseCapture?: any) => void;
                        Element: Element;
                        HTMLElement: HTMLElement;
                        Node: Node;
                        toString: () => "[object Window]";
                        devicePixelRatio: number;
                        visualViewport?: {
                            addEventListener: (type: string, listener: EventListener | EventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined) => void;
                            dispatchEvent: (event: Event) => boolean;
                            removeEventListener: (type: string, callback: EventListener | EventListenerObject | null, options?: boolean | EventListenerOptions | undefined) => void;
                            width: number;
                            height: number;
                            offsetLeft: number;
                            offsetTop: number;
                            scale: number;
                        } | undefined;
                        ShadowRoot: ShadowRoot;
                    } | {
                        addEventListener: (type: string, listener: EventListener | EventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined) => void;
                        dispatchEvent: (event: Event) => boolean;
                        removeEventListener: (type: string, callback: EventListener | EventListenerObject | null, options?: boolean | EventListenerOptions | undefined) => void;
                        width: number;
                        height: number;
                        offsetLeft: number;
                        offsetTop: number;
                        scale: number;
                    })[];
                };
                styles: {
                    [key: string]: Partial<CSSStyleDeclaration>;
                };
                attributes: {
                    [key: string]: {
                        [key: string]: string | boolean;
                    };
                };
                modifiersData: {
                    [x: string]: any;
                    arrow?: {
                        x?: number | undefined;
                        y?: number | undefined;
                        centerOffset: number;
                    } | undefined;
                    hide?: {
                        isReferenceHidden: boolean;
                        hasPopperEscaped: boolean;
                        referenceClippingOffsets: {
                            top: number;
                            left: number;
                            right: number;
                            bottom: number;
                        };
                        popperEscapeOffsets: {
                            top: number;
                            left: number;
                            right: number;
                            bottom: number;
                        };
                    } | undefined;
                    offset?: {
                        auto?: {
                            y: number;
                            x: number;
                        } | undefined;
                        "auto-start"?: {
                            y: number;
                            x: number;
                        } | undefined;
                        "auto-end"?: {
                            y: number;
                            x: number;
                        } | undefined;
                        top?: {
                            y: number;
                            x: number;
                        } | undefined;
                        bottom?: {
                            y: number;
                            x: number;
                        } | undefined;
                        right?: {
                            y: number;
                            x: number;
                        } | undefined;
                        left?: {
                            y: number;
                            x: number;
                        } | undefined;
                        "top-start"?: {
                            y: number;
                            x: number;
                        } | undefined;
                        "top-end"?: {
                            y: number;
                            x: number;
                        } | undefined;
                        "bottom-start"?: {
                            y: number;
                            x: number;
                        } | undefined;
                        "bottom-end"?: {
                            y: number;
                            x: number;
                        } | undefined;
                        "right-start"?: {
                            y: number;
                            x: number;
                        } | undefined;
                        "right-end"?: {
                            y: number;
                            x: number;
                        } | undefined;
                        "left-start"?: {
                            y: number;
                            x: number;
                        } | undefined;
                        "left-end"?: {
                            y: number;
                            x: number;
                        } | undefined;
                    } | undefined;
                    preventOverflow?: {
                        y: number;
                        x: number;
                    } | undefined;
                    popperOffsets?: {
                        y: number;
                        x: number;
                    } | undefined;
                };
                reset: boolean;
            };
            destroy: () => void;
            forceUpdate: () => void;
            update: () => Promise<Partial<import("@popperjs/core").State>>;
            setOptions: (setOptionsAction: Partial<import("@popperjs/core").OptionsGeneric<any>> | ((prev: Partial<import("@popperjs/core").OptionsGeneric<any>>) => Partial<import("@popperjs/core").OptionsGeneric<any>>)) => Promise<Partial<import("@popperjs/core").State>>;
        } | null;
        props: any;
        reference: import("tippy.js").ReferenceElement<any>;
        setContent: (content: import("tippy.js").Content) => void;
        setProps: (partialProps: Partial<any>) => void;
        show: () => void;
        state: {
            isEnabled: boolean;
            isVisible: boolean;
            isDestroyed: boolean;
            isMounted: boolean;
            isShown: boolean;
        };
        unmount: () => void;
    }[]>;
    singleton: import("vue").Ref<import("tippy.js").CreateSingletonInstance<import("tippy.js").CreateSingletonProps<import("tippy.js").Props>> | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<ComponentObjectPropsOptions<Record<string, unknown>>>>, {}>;

export declare type TippyTarget = Element | Element[] | Ref<Element | undefined> | Ref<Element[] | undefined> | null;

export declare function useSingleton(instances: TippyInstances, optionalProps?: Partial<CreateSingletonProps<Props>>): {
    singleton: import("vue").Ref<import("tippy.js").CreateSingletonInstance<CreateSingletonProps<Props>> | undefined>;
};

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

export declare function useTippyComponent(opts?: TippyOptions, children?: any): {
    instance: import("vue").Ref<TippyComponent | undefined>;
    TippyComponent: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};

export { }
