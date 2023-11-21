import { FC, KeyboardEvent } from 'react'

import { Controller } from 'react-hook-form'

import { TextField } from '@/components'

type Props = {
  name: 'text' | 'password' | 'email'
  control: any
  label: string
  onValueChange?: (value: string) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}
export const ControlledTextField: FC<Props> = ({ name, control, label, onKeyDown }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={field.name}
          label={label}
          error={error?.message}
          onKeyDown={onKeyDown}
        />
      )}
    />
  )
}
