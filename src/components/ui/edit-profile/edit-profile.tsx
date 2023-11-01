import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'

import s from './edit-profile.module.scss'

import { Button, TextField, Typography } from '@/components'
import { Avatar } from '@/components/ui/avatar/avatar.tsx'
import { Card } from '@/components/ui/card/card.tsx'
import { useLogoutMutation, useMeQuery, useUpdateMeMutation } from '@/services/auth/auth.ts'
import { Logout } from '@/svg'
import { Edit2Outline } from '@/svg/edit-2-outline.tsx'

export const EditProfile = () => {
  const { data } = useMeQuery()
  const { name, email, avatar } = data || {}
  const [logout] = useLogoutMutation()
  const [showInput, setShowInput] = useState(false)
  const [newName, setNewName] = useState<string>(name!)
  const inputRef = useRef<HTMLInputElement>(null)
  // const [inputFile, setInputFile] = useState(avatar)

  const [updateMe] = useUpdateMeMutation()

  function renameHandler() {
    if (newName === name) {
      setShowInput(false)

      return
    }
    updateMe({ name: newName! })
    setShowInput(false)
  }

  const selectFileHandler = () => {
    inputRef && inputRef.current?.click()
  }

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const image = e.target.files[0]
      const formData = new FormData()

      formData.append('avatar', image)
      updateMe(formData)
      // setInputFile(URL.createObjectURL(image))
    }
  }

  const dontRename = () => {
    setShowInput(false)
    setNewName(name!)
  }

  const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') dontRename()
    if (event.key === 'Enter') renameHandler()
  }

  return (
    <Card className={s.profile}>
      <Typography variant={'large'} className={s.title}>
        Personal Information
      </Typography>
      <div className={s.avatarBlock}>
        <Avatar className={s.avatar} avatar={avatar!} />
        <button className={`${s.buttonEdit} ${s.buttonEditImage}`} onClick={selectFileHandler}>
          <Edit2Outline color={'white'} />
        </button>
        <input
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          onChange={uploadHandler}
          accept="*/image, .png, .img, .jpg"
        />
      </div>
      {!showInput ? (
        <>
          <div className={s.nameBlock}>
            <Typography variant={'h1'}>{name}</Typography>
            <button className={s.buttonEdit} onClick={() => setShowInput(true)}>
              <Edit2Outline color={'white'} />
            </button>
          </div>
          <Typography className={s.email}>{email}</Typography>
          <Button variant={'secondary'} className={s.logoutButton} onClick={() => logout()}>
            <Logout />
            Logout
          </Button>
        </>
      ) : (
        <div>
          <TextField
            onValueChange={setNewName}
            value={newName}
            label={'Nickname'}
            className={s.textField}
            autoFocus
            onKeyDown={keyDownHandler}
          />
          <Button fullWidth className={s.buttonSaveName} onClick={renameHandler}>
            Save Changes
          </Button>
        </div>
      )}
    </Card>
  )
}
