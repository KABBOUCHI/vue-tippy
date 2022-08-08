import { Instance } from 'tippy.js';
import { ComponentObjectPropsOptions } from 'vue';
import { TippyOptions } from '../types';
declare module '@vue/runtime-core' {
    interface ComponentCustomProps extends TippyOptions {
    }
}
declare const TippySingleton: import("vue").DefineComponent<ComponentObjectPropsOptions<Record<string, unknown>>, {
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
export default TippySingleton;
//# sourceMappingURL=TippySingleton.d.ts.map