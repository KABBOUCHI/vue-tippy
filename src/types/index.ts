import { Props, Content } from 'tippy.js'
import { VNode, Ref } from 'vue'

export declare type TippyOptions = Partial<
  Omit<Props, 'content'> & {
    content: Content | VNode | Ref
  }
>
