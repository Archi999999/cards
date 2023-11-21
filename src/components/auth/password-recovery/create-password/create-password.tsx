import { Card } from '@/components/ui/card/card.tsx'
import { Button, TextField, Typography } from '@/components'
import s from './create-password.module.scss'
import { useResetPasswordMutation } from '@/services/auth/auth.ts'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

export const CreatePassword = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [resetPassword] = useResetPasswordMutation()
  const { token } = useParams()

  const onClickHandler = () => {
    if (password.length < 6) {
      setError('password must be longer than or equal to 6 characters')
      return
    }
    token &&
      resetPassword({ token, password })
        .unwrap()
        .then(() => {
          navigate('/login')
        })
        .catch(e => {
          setError(e.data.message)
        })
  }

  const onChangeHandler = (value: string) => {
    setError('')
    setPassword(value)
  }

  return (
    <Card>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Create new password
      </Typography>
      <TextField
        autoFocus
        variant={'input'}
        name={'password'}
        label={'Password'}
        value={password}
        onValueChange={onChangeHandler}
        error={error}
      />
      <Typography as={'span'} className={s.text}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button className={s.button} onClick={onClickHandler}>
        Create new password
      </Button>
    </Card>
  )
}
