import { ChangeEvent, ComponentPropsWithoutRef, FC, useState } from 'react'

import s from './textField.module.scss'

import { Typography } from '@/components'
import { EyeOffOutline, EyeOutline, Search } from '@/svg'

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
      ...rest
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
    <div className={`${s.textField} ${className}`}>
      <label className={s.label} htmlFor={label}>
        <Typography>{label}</Typography>
      </label>
      <div className={`${s.textFieldInput} ${error ? s.fieldError : ''}`}>
        {variant === 'search' && <Search className={s.searchIcon} />}
        <input
          type={!isVisible ? name : 'input'}
          name={name}
          className={`${s[variant]} ${error ? s.error : ''} ${s.input}`}
          placeholder={variant === 'search' ? 'Input search' : placeholder}
          onChange={onchangeHandler}
          required={props.required}
          minLength={props.minLength}
          id={label}
          value={props.value}
          {...rest}
        />
        {name === 'password' &&
          (!isVisible ? <EyeOutline onClick={onVisible} /> : <EyeOffOutline onClick={onVisible} />)}
      </div>
      {error && (
        <span className={s.errorSpan} style={{ visibility: !error ? 'hidden' : 'visible' }}>
          <Typography variant={'caption'}>{error}</Typography>
        </span>
      )}
    </div>
  )
}
