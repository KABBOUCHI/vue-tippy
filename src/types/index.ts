import Tippy from '../components/Tippy'
import { useTippy } from '../composables'
import { Props, Content, DefaultProps, Instance } from 'tippy.js'
import { VNode, Ref, Component, UnwrapNestedRefs } from 'vue'

export declare type TippyContent = Content | VNode | Component | Ref
export declare type TippyTarget =
  | Element
  | Element[]
  | Ref<Element | undefined>
  | Ref<Element[] | undefined>
  | null

export declare type TippyOptions = Partial<
  Omit<Props, 'content' | 'triggerTarget' | 'getReferenceClientRect'> & {
    content: TippyContent
    triggerTarget: TippyTarget
    getReferenceClientRect: null | (() => DOMRect & any)
  }
>

export declare type TippyComponent = InstanceType<typeof Tippy> & UnwrapNestedRefs<
  Pick<
    ReturnType<typeof useTippy>,
    'tippy' | 'refresh' | 'refreshContent' | 'setContent' | 'setProps' | 'destroy' | 'hide' | 'show' | 'disable' | 'enable' | 'unmount' | 'mount' | 'state'
  >
>

export interface TippyPluginOptions {
  directive?: string
  component?: string
  componentSingleton?: string
  defaultProps?: Partial<DefaultProps>
}

export type TippyInstance = Instance | Element | undefined
export type TippyInstances = Ref<TippyInstance>[] | Ref<TippyInstance[]> | (() => TippyInstance[])
