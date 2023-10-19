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
      <DropdownMenu.Trigger className={styles.trigger} aria-label={'Customise options'}>
        {trigger}
      </DropdownMenu.Trigger>
      {open && (
        <DropdownMenu.Portal forceMount>
          <DropdownMenu.Content
            side={'bottom'}
            sideOffset={8}
            align={'end'}
            alignOffset={-5}
            className={styles.dropdownMenuContent}
          >
            {children}
            <DropdownMenu.Arrow className={styles.arrowBox} width={16} height={8} asChild>
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
  onClick?: () => void
}
export const DropdownItem: FC<DropdownItemProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.buttonDropDownMenu}>
      <DropdownMenu.Item className={styles.dropdownMenuItem}>{children}</DropdownMenu.Item>
    </button>
  )
}

type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'button'>
export const DropdownItemWithIcon: FC<DropdownItemWithIconProps> = ({ text, icon, ...rest }) => {
  return (
    <button className={styles.buttonDropDownMenu} onClick={rest.onClick}>
      <DropdownMenu.Item className={styles.dropdownMenuItem}>
        {icon}
        <Typography variant={'caption'}>{text}</Typography>
      </DropdownMenu.Item>
    </button>
  )
}

export const Separator = () => {
  return <DropdownMenu.Separator className={styles.dropdownMenuSeparator} />
}
