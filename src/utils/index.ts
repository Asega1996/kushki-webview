/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    always,
    any,
    append,
    complement,
    compose,
    concat,
    contains,
    curry,
    defaultTo,
    either,
    equals,
    filter,
    find,
    flip,
    gt,
    head,
    identity,
    ifElse,
    includes,
    is,
    isEmpty,
    isNil,
    join,
    keys,
    map,
    merge,
    of,
    pathSatisfies,
    pick,
    pipe,
    props,
    tail,
    toLower,
    toUpper,
    unless,
    values,
    where,
    whereEq,
    without,
  } from 'ramda'
  
  // isIOS :: A -> Bool
  
  export const isEmptyOrNull = either(isEmpty, isNil)
  
  export const notEmpty = complement(isEmptyOrNull)
  
  export const hasData = pathSatisfies(notEmpty, ['data'])
  
  export const addPrefixTo = (prefix: string) => (action: string): string => concat(prefix, action)
  
  export const stateMerge = flip(merge)
  
  // hexToRGBA :: (String , Number ) --> String
  export const hexToRGBA = (hex: string, opacity = 1): string => {
    let c: any
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('')
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]]
      }
      c = parseInt(`0x${c.join('')}`)
  
      return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`
    }
    throw new Error('Bad Hex')
  }
  
  // toggleInList :: (a -> Boolean) -> Array -> Array
  export const toggleInList = (elto: any) =>
    pipe(ifElse(contains(elto), without([elto]), append(elto)))
  
  const getNamespace = (options: { namespace: string; prefix: string }) =>
    props(['prefix', 'namespace'])(options)
  
  export const withNamespace = curry((text, options) =>
    pipe(getNamespace, concat([text]), join(''))(options)
  )
  
  /* Local functions */
  const predicate = (query: string) => where({ label: includes(query) })
  
  const processSearch = (query: string) =>
    pipe(filter(predicate(query)) as any, (val: any) => Promise.resolve(val))
  
  export const search = curry(processSearch)
  
  const pickData = <T extends Record<string, unknown>, P extends Record<string, unknown>>(
    store: T,
    formValues: P
  ) => pipe((p: any) => pick(p, store))(keys(formValues))
  
  export const pickStoreData = curry(pickData)
  
  export const safeHead = compose<any, any, any>(head, defaultTo([]))
  
  export const pluralize = (input: number) => (cadena: string) =>
    input > 1 ? concat(cadena, 's') : cadena
  
  const hasEstacion = (IdEstacion: string) => pipe(find(whereEq({ IdEstacion })), isNil)
  
  export const toggleEstimacionInList = curry((value, list) =>
    pipe(ifElse(hasEstacion(value.IdEstacion), append(value), without([value])))(list)
  )
  
  // toggleListItem :: Obj --> [] --> []
  export const toggleListItem = curry((value, list) =>
    ifElse(includes(value), without([value]), append(value))(list)
  )
  
  // wrapInArray :: Obj|Array --> []
  export const wrapInArray = unless(is(Array), of)
  
  export const anyNegative = pipe<any, any, any, any>(
    wrapInArray,
    map(pipe<any, any, any>(values, includes(-1))),
  
    any(equals(true))
  )
  // fgt :: a → a → Boolean
  export const fgt = flip(gt)
  
  export const defaultToErrorMessage = (text: string, error: string) => {
    return ifElse(isEmptyOrNull, always(error), identity)(text)
  }
  
  export const capitalize = (text: any) => toUpper(head(text)) + toLower(tail(text))
  