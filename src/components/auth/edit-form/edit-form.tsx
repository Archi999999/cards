import { FC, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import styles from './edit-form.module.scss'

import { Button, TextField, Typography } from '@/components'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import { Card } from '@/components/ui/card/card.tsx'
import { Logout } from '@/svg'
import { Edit2Outline } from '@/svg/edit-2-outline.tsx'

const nameSchema = z.object({
  nickname: z.string().nonempty('enter name').default(''),
})

type nameFormSchema = z.infer<typeof nameSchema>

type EditFormProps = {
  contactInfo?: { name: string; email: string; avatar: string }
}

const EditForm: FC<EditFormProps> = ({}) => {
  const [editInfo, setEditInfo] = useState<boolean>(false)

  const currentName = 'Ivanio'

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<nameFormSchema>({
    resolver: zodResolver(nameSchema),
    defaultValues: { nickname: '' },
  })
  const onSubmit = (data: nameFormSchema) => {
    console.log(data)
    setEditInfo(false)
  }

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
            <Typography variant={'h1'}>{currentName}</Typography>
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
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Controller
            name="nickname"
            control={control}
            render={({ field }) => (
              <TextField
                value={field.name}
                onChange={field.onChange}
                onBlur={field.onBlur}
                label={'Nickname'}
                error={errors.nickname?.message}
              />
            )}
          />
          <Button type="submit" variant={'primary'} fullWidth={true}>
            Save Changes
          </Button>
        </form>
      )}
    </Card>
  )
}

export default EditForm
