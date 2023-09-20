import { FC } from 'react'

import { Label as RadixLabel } from '@radix-ui/react-label'
import * as RadixSelect from '@radix-ui/react-select'

import styles from './select.module.scss'

import { Typography } from '@/components'
import { Arrow } from '@/svg/arrow.tsx'

export type OptionType = {
  id: string
  value: string
}
type SelectPropsType = {
  label?: string
  postLabel?: string
  width?: string
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  options?: OptionType[]
  disabled?: boolean
  required?: boolean
  className?: string
}
export const SelectSecond: FC<SelectPropsType> = ({
  label,
  postLabel,
  width,
  placeholder,
  value,
  onValueChange,
  defaultValue,
  options,
  disabled,
  required,
  className,
}) => {
  return (
    <>
      {label && (
        <RadixLabel htmlFor={label || postLabel}>
          <Typography className={`${styles.label} ${disabled && styles.labelDisabled}`}>
            {label}
          </Typography>
        </RadixLabel>
      )}
      <RadixSelect.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
      >
        <RadixSelect.Trigger
          className={`${disabled ? styles.triggerDisabled : styles.trigger} ${className}`}
          asChild
          aria-label={'select'}
          tabIndex={1}
          id={label || postLabel}
          style={{ width: width }}
        >
          <div>
            <RadixSelect.Value placeholder={placeholder} />
            <Arrow className={disabled ? styles.iconDisabled : styles.icon} />
          </div>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={styles.content} position={'popper'} sideOffset={-1}>
            <RadixSelect.Viewport>
              {options?.map(el => (
                <RadixSelect.Item key={el.id} value={el.value} className={styles.item}>
                  <RadixSelect.ItemText>{el.value}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
      {postLabel && (
        <RadixLabel htmlFor={label || postLabel}>
          <Typography className={`${styles.label} ${disabled && styles.labelDisabled}`}>
            {postLabel}
          </Typography>
        </RadixLabel>
      )}
    </>
  )
}
