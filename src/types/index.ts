import { Props, Content } from 'tippy.js'
import { VNode, Ref } from 'vue'

export declare type TippyContent = Content | VNode | Ref

export declare type TippyOptions = Partial<
  Omit<Props, 'content'> & {
    content: TippyContent
  }
>
