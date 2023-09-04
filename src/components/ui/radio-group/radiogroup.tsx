import { FC } from 'react'

import * as label from '@radix-ui/react-label'
import * as RG from '@radix-ui/react-radio-group'

import styles from './radiogroup.module.scss'

import { Typography } from '@/components'
import { OptionType } from '@/components/ui/select/selectSecond.tsx'

type RadioGroupType = {
  options?: OptionType[]
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  required?: boolean
  className?: string
}

export const RadioGroup: FC<RadioGroupType> = ({ options, disabled, onValueChange, className }) => {
  return (
    <form>
      <RG.Root
        className={`${styles.RGRoot} ${className}`}
        defaultValue={`${options ? options[0].value : ''}`}
        onValueChange={onValueChange}
      >
        {options?.map(el => (
          <div key={el.id} className={styles.itemGroup}>
            <RG.Item value={el.value} className={styles.RGItem} id={el.id} disabled={disabled}>
              <RG.Indicator className={styles.RGIndicator} />
            </RG.Item>
            <label.Root
              className={`${styles.label} ${disabled ? styles.disabledLabel : ''}`}
              htmlFor={el.id}
            >
              <Typography variant={'body_2'}>{el.value}</Typography>
            </label.Root>
          </div>
        ))}
      </RG.Root>
    </form>
  )
}
