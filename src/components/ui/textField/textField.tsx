import { ComponentPropsWithoutRef, FC } from 'react'

import s from './textField.module.scss'

import Icon from '@/components/ui/icon/icon.tsx'

export type TextFieldProps = {
  variant?: 'input' | 'inputWithIcon' | 'search'
  className?: string
  error?: boolean
  name?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField: FC<TextFieldProps> = props => {
  const { variant = 'input', name, error, className, ...rest } = props

  return (
    <div>
      <span>{name}</span>
      <div>
        <input
          //type={variant === 'password' ? 'password' : 'text'}
          className={`${s[variant]} ${error ? s.error : ''} ${className}`}
          placeholder={'Input'}
          {...rest}
        />

        <Icon id={'calendar-outline'} />
      </div>
    </div>
  )
}
