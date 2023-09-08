import { ComponentPropsWithoutRef, FC, ReactNode, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import styles from './dropdown.module.scss'

import { Typography } from '@/components'

type DropdownProps = {
  children?: ReactNode
  trigger?: ReactNode
  className?: string
}
export const Dropdown: FC<DropdownProps> = ({ children, trigger }) => {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      {open && (
        <DropdownMenu.Portal>
          <DropdownMenu.Content className={styles.dropdownMenuContent}>
            {children}
            <DropdownMenu.Arrow className={styles.arrowBox} asChild>
              <div className={styles.arrow} />
            </DropdownMenu.Arrow>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      )}
    </DropdownMenu.Root>
  )
}

type DropdownItemProps = {
  children: ReactNode
}
export const DropdownItem: FC<DropdownItemProps> = ({ children }) => {
  return <DropdownMenu.Item className={styles.dropdownMenuItem}>{children}</DropdownMenu.Item>
}

type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>
export const DropdownItemWithIcon: FC<DropdownItemWithIconProps> = ({ text, icon }) => {
  return (
    <DropdownMenu.Item className={styles.dropdownMenuItem}>
      <div>{icon}</div>
      <Typography variant={'caption'}>{text}</Typography>
    </DropdownMenu.Item>
  )
}
