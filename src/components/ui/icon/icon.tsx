import { FC } from 'react'

import Icons from '../../../svg/icons-sprite.svg'

import s from './icon.module.scss'

type Props = {
  id: string
}

const Icon: FC<Props> = ({ id }) => {
  return (
    <svg className={s.icon}>
      <use xlinkHref={`${Icons}#${id}`} />
    </svg>
  )
}

export default Icon
