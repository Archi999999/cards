import { useState } from 'react'

import styles from './edit-form.module.scss'

import { Button, Typography } from '@/components'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import { Card } from '@/components/ui/card/card.tsx'
import { Logout } from '@/svg'
import { Edit2Outline } from '@/svg/edit-2-outline.tsx'

const EditForm = () => {
  const [editInfo, setEditInfo] = useState<boolean>(false)

  return (
    <Card>
      <div className={styles.information}>
        <Typography as={'h1'} variant={'large'}>
          Personal Information
        </Typography>
        <div className={styles.photo}>
          <Avatar className={styles.avatar} />
          <button className={styles.buttonEditPhoto} onClick={() => {}}>
            <Edit2Outline color={'white'} />
          </button>
        </div>
      </div>

      {!editInfo ? (
        <div className={styles.editInfo}>
          <div className={styles.editBlock}>
            <Typography variant={'h1'}>Ivan</Typography>
            <button
              onClick={() => {
                setEditInfo(true)
              }}
            >
              <Edit2Outline color={'white'} />
            </button>
          </div>
          <Typography variant={'body_2'} className={styles.email}>
            j&johnson@gmail.com
          </Typography>

          <Button variant={'secondary'} onClick={() => {}}>
            <Logout />
            <Typography variant={'subtitle_2'}>Logout</Typography>
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </Card>
  )
}

export default EditForm
