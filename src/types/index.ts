import { Props, Content } from 'tippy.js'
import { VNode, Ref, Component } from 'vue'

export declare type TippyContent = Content | VNode | Component | Ref

export declare type TippyOptions = Partial<
  Omit<Props, 'content'> & {
    content: TippyContent
  }
>
