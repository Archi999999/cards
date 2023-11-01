import { FC } from 'react'

import styles from './card-modal.module.scss'

import { Button, Typography } from '@/components'
type Props = {
  type: 'Question' | 'Answer'
  image?: string
}
export const AddImageField: FC<Props> = ({ type, image }) => {
  return (
    <div className={styles.imageField}>
      <div>
        {image ? (
          <img src={image} alt={image} />
        ) : (
          <Typography variant={'subtitle_1'}>No Image</Typography>
        )}
      </div>
      <div>
        <Typography variant={'subtitle_1'}>Image {type}</Typography>
        <Button variant={'secondary'}>Change cover</Button>
      </div>
    </div>
  )
}
