import { FC } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import { Typography } from '@/components'
import { CheckedIcon } from '@/svg/checked-icon.tsx'
import { UncheckedIcon } from '@/svg/unchecked-icon.tsx'

type Props = {
  checked: boolean
  name?: string
  onChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
  // id?: string
  label?: string
}

export const Checkbox: FC<Props> = ({ checked, name, disabled, label, className, onChange }) => (
  <div className={`${s.checkbox}  ${className}`}>
    <RadixCheckbox.Root
      checked={checked}
      name={name}
      onCheckedChange={checked => onChange(!!checked)}
      className={s.buttonCheckbox}
      disabled={disabled}
      id={label}
    >
      {checked ? <CheckedIcon /> : <UncheckedIcon />}
      {/*<RadixCheckbox.Indicator />*/}
    </RadixCheckbox.Root>
    <label htmlFor={label}>
      <Typography>{label}</Typography>
    </label>
  </div>
)
