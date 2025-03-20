import { isRef, unref } from 'vue'
import { MaybeRefOrGetter } from '../types'

export const isComponentInstance = (value: any): value is { $el: any } => {
  return value instanceof Object && '$' in value && '$el' in value
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'


export function toValue<T>(source: MaybeRefOrGetter<T>): T {
  if (isRef(source)) {
    return unref(source)
  }

  if (isFunction(source)) {
    return source()
  }

  return source;
}