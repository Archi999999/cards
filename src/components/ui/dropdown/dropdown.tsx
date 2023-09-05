import { FC } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import styles from './dropdown.module.scss'

type DropdownType = {}
export const Dropdown: FC<DropdownType> = ({}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className={styles.buttonIcon}>hello</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.dropdownMenuContent}>
          <DropdownMenu.Item className={styles.dropdownMenuItem}>
            Карточка пользователя
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.dropdownMenuSeparator} />
          <DropdownMenu.Item className={styles.dropdownMenuItem}>My Profile</DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.dropdownMenuSeparator} />
          <DropdownMenu.Item className={styles.dropdownMenuItem}>Sign Out</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
