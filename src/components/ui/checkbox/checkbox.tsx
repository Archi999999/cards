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
  id?: string
}

export const Checkbox: FC<Props> = ({ checked, name, disabled, id, onChange }) => (
  <div className={s.checkbox}>
    <RadixCheckbox.Root
      checked={checked}
      name={name}
      onCheckedChange={checked => onChange(!!checked)}
      className={s.buttonCheckbox}
      disabled={disabled}
      id={id}
    >
      {checked ? <CheckedIcon /> : <UncheckedIcon />}
      {/*<RadixCheckbox.Indicator />*/}
    </RadixCheckbox.Root>
    <label htmlFor={id}>
      <Typography>{name}</Typography>
    </label>
  </div>
)

// export const Checkbox = (props: any) => {
//   return <input type={'checkbox'} onChange={props.onCheckedChange} />
// }
