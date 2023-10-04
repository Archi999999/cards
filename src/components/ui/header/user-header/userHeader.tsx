import { FC } from 'react'

import s from '../header.module.scss'

import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import {
  Dropdown,
  DropdownItem,
  DropdownItemWithIcon,
  Separator,
} from '@/components/ui/dropdown/dropdown.tsx'
import { Typography } from '@/components/ui/typography/typography.tsx'
import { Logout } from '@/svg'
import { PersonOutline } from '@/svg/person-outline.tsx'

type Props = {
  name: string
  avatar: string
}

export const UserHeader: FC<Props> = ({ name, avatar }) => {
  return (
    <Dropdown trigger={<User name={name} avatar={avatar} />}>
      <DropdownItem>
        <Avatar avatar={avatar} />
        <div className={s.headerUserInfo}>
          <Typography variant={'subtitle_2'}>{name}</Typography>
          <Typography variant={'caption'} className={s.headerEmail}>
            emailemail@email
          </Typography>
        </div>
      </DropdownItem>
      <Separator />
      <DropdownItemWithIcon icon={<PersonOutline />} text={'My Profile'} />
      <Separator />
      <DropdownItemWithIcon icon={<Logout />} text={'Sign Out'} />
    </Dropdown>
  )
}

type UserProps = {
  name: string
  avatar: string
}
const User: FC<UserProps> = ({ name, avatar }) => {
  return (
    <div className={s.userHeader}>
      <Typography variant={'subtitle_1'} className={s.headerSpan}>
        {name}
      </Typography>
      <Avatar avatar={avatar} />
    </div>
  )
}

export default UserHeader
