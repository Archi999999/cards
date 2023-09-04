import { ChangeEvent, ComponentPropsWithoutRef, FC, useState } from 'react'

import s from './textField.module.scss'

import { Typography } from '@/components'
import { EyeOffOutline, EyeOutline } from '@/svg'

export type TextFieldProps = {
  variant?: 'input' | 'inputWithIcon' | 'search'
  className?: string
  error?: string
  placeholder?: string
  label?: string
  name?: 'password' | 'email' | 'text'
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField: FC<TextFieldProps> = props => {
  const {
    variant = 'input',
    name,
    error,
    className,
    placeholder,
    label,
    onValueChange,
    onChange,
  } = props
  const [isVisible, setIsVisible] = useState(false)
  const onVisible = () => {
    setIsVisible(prevState => !prevState)
  }

  const onchangeHandler = function (e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e)
    onValueChange?.(e.target.value)
  }

  return (
    <div className={s.textField}>
      <label className={s.label} htmlFor={label}>
        <Typography>{label}</Typography>
      </label>
      <div className={s.textFieldInput}>
        <input
          type={!isVisible ? name : 'input'}
          name={name}
          className={`${s[variant]} ${error ? s.error : ''} ${className} ${s.input}`}
          placeholder={placeholder}
          onChange={onchangeHandler}
          required={props.required}
          minLength={props.minLength}
          id={label}
        />
        {name === 'password' &&
          (!isVisible ? <EyeOutline onClick={onVisible} /> : <EyeOffOutline onClick={onVisible} />)}
      </div>
      <span className={s.errorSpan} style={{ visibility: !error ? 'hidden' : 'visible' }}>
        <Typography variant={'caption'}>{error}!</Typography>
      </span>
    </div>
  )
}
