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
    <>
      <div className={s.textField}>
        <span>{name}</span>
        <div className={s.textFieldInput}>
          <input
            type={variant === 'inputWithIcon' ? 'password' : 'text'}
            className={`${s[variant]} ${error ? s.error : ''} ${className}`}
            placeholder={'Input'}
            {...rest}
          />
          {variant === 'inputWithIcon' && (
            <div className={s.textFieldIcon}>
              <Icon id={'eye-outline'} />
            </div>
          )}
        </div>
      </div>
      {error && <span className={s.errorSpan}>Error!</span>}
    </>
  )
}
