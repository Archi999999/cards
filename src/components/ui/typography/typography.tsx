import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body_1'
    | 'subtitle_1'
    | 'body_2'
    | 'subtitle_2'
    | 'caption'
    | 'overline'
    | 'link_1'
    | 'link_2'
  className?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { variant = 'body_2', fullWidth, className, as: Component = 'p', ...rest } = props

  return <Component className={`${s[variant as keyof typeof s]} ${className}`} {...rest} />
}
