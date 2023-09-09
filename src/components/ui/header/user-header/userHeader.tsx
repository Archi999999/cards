import s from '../header.module.scss'

import ava from './images/avatar.jpg'

import { Dropdown, DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropdown/dropdown.tsx'
import { Typography } from '@/components/ui/typography/typography.tsx'
import { Logout } from '@/svg'
import { PersonOutline } from '@/svg/person-outline.tsx'

export const UserHeader = () => {
  const name = 'Ivan'

  return (
    <Dropdown
      trigger={
        <div className={s.userHeader}>
          <Typography variant={'subtitle_1'} className={s.headerSpan}>
            {name}
          </Typography>
          <div style={{ width: '36px', height: '36px', backgroundColor: ava, borderRadius: '50%' }}>
            <img style={{ width: 'inherit', borderRadius: '50%' }} src={ava} />
          </div>
        </div>
      }
    >
      <DropdownItem>
        <div style={{ width: '36px', height: '36px', backgroundColor: ava, borderRadius: '50%' }}>
          <img style={{ width: 'inherit', borderRadius: '50%' }} src={ava} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '2px' }}>
          <Typography variant={'subtitle_2'} className={s.headerSpan}>
            {name}
          </Typography>
          <Typography variant={'caption'} className={s.headerSpan}>
            email
          </Typography>
        </div>
      </DropdownItem>
      <DropdownItemWithIcon icon={<PersonOutline />} text={'My Profile'} />
      <DropdownItemWithIcon icon={<Logout />} text={'Sign Out'} />
    </Dropdown>
  )
}
