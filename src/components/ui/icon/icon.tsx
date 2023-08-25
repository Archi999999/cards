import { FC } from 'react'

import Icons from '../../../svg/icons-sprite.svg'

import s from './icon.module.scss'

type Props = {
  id: string
  width?: string
  height?: string
}

const Icon: FC<Props> = ({ id, width, height }) => {
  return (
    <svg className={s.icon} style={{ width: width, height: height }}>
      <use xlinkHref={`${Icons}#${id}`} />
    </svg>
  )
}

export default Icon
