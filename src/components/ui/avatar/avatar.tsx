import { FC } from 'react'

import styles from './avatar.module.scss'

import ava from '@/components/ui/header/user-header/images/avatar.jpg'

type AvatarProps = {
  avatar?: string
}
export const Avatar: FC<AvatarProps> = ({ avatar }) => {
  return (
    <div className={styles.avatar}>
      <img src={avatar ? avatar : ava} alt={'avatar'} />
    </div>
  )
}
