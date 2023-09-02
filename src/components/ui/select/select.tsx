import { FC, ForwardedRef, forwardRef, ReactNode, useState } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import './select.scss'

type SelectProps = {}

export const Select: FC<SelectProps> = () => {
  const [selectedValue, setSelectedValue] = useState<string>('')
  const handleChange = (newValue: string) => {
    setSelectedValue(newValue)
  }

  return (
    <RadixSelect.Root value={selectedValue} onValueChange={handleChange}>
      <RadixSelect.Trigger className="SelectTrigger">
        <RadixSelect.Value placeholder="Select selects"></RadixSelect.Value>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="SelectContent" position={'popper'}>
          <RadixSelect.Viewport>
            <SelectItem value={'Sbox1'}> Sbox1 </SelectItem>
            <SelectItem value={'Sbox2'}> Sbox2 </SelectItem>
            <SelectItem value={'Sbox3'}> Sbox3 </SelectItem>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

type SelectItemType = {
  children?: ReactNode
  className?: string
  value: string
  ref?: ForwardedRef<HTMLDivElement>
}

const SelectItem: FC<SelectItemType> = forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item {...props} ref={forwardedRef}>
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)
