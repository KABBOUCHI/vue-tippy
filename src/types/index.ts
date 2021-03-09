import Tippy from '../components/Tippy'
import { Props, Content, DefaultProps, Instance } from 'tippy.js'
import { VNode, Ref, Component } from 'vue'

export declare type TippyContent = Content | VNode | Component | Ref
export declare type TippyTarget =
  | Element
  | Element[]
  | Ref<Element | undefined>
  | Ref<Element[] | undefined>
  | null

export declare type TippyOptions = Partial<
  Omit<Props, 'content' | 'triggerTarget'> & {
    content: TippyContent
    triggerTarget: TippyTarget
  }
>

export declare type TippyComponent = InstanceType<typeof Tippy>

export interface TippyPluginOptions {
  directive?: string
  component?: string
  componentSingleton?: string
  defaultProps?: Partial<DefaultProps>
}

export type TippyInstance = Instance | Element | undefined
export type TippyInstances = Ref<TippyInstance>[] | Ref<TippyInstance[]> | (() => TippyInstance[])
