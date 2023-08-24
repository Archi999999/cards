import { ComponentPropsWithoutRef, FC } from 'react'

import s from './textField.module.scss'

export type TextFieldProps = {
  variant?: 'input' | 'inputWithIcon' | 'search'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField: FC<TextFieldProps> = props => {
  const { variant = 'input', fullWidth, className, ...rest } = props

  return (
    <input
      //type={variant === 'password' ? 'password' : 'text'}
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    />
  )
}
