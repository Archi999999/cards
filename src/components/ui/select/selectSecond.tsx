import { FC } from 'react'

import * as RadixLabel from '@radix-ui/react-label'
import * as RadixSelect from '@radix-ui/react-select'

import styles from './select.module.scss'

import { Typography } from '@/components'

export type OptionType = {
  value: any
  label: any
}
type SelectPropsType = {
  label?: string
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
    <RadixLabel.Root>
      <Typography
        variant={'body_2'}
        as={'label'}
        className={`${styles.label} ${disabled && styles.labelDisabled}`}
      >
        {label}
      </Typography>
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
        >
          <div>
            <RadixSelect.Value placeholder={placeholder} />
            {/*<RadixSelectArrow className={disabled ? styles.iconDisabled : styles.icon} />*/}
          </div>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={styles.content} position={'popper'} sideOffset={-1}>
            <RadixSelect.Viewport>
              {options?.map(el => (
                <RadixSelect.Item key={el.value} value={el.value} className={styles.item}>
                  <RadixSelect.ItemText>{el.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </RadixLabel.Root>
  )
}
