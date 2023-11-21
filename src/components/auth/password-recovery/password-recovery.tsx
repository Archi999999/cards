import s from './password-recovery.module.scss'
import { z, ZodError } from 'zod'

import { FormEvent, useState } from 'react'
import { Button, TextField, Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoverPasswordMutation } from '@/services/auth/auth.ts'

export const PasswordRecovery = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [sendEmail] = useRecoverPasswordMutation()
  const navigate = useNavigate()

  const Email = z.string().nonempty('field is required').email()
  const onSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mailHtml =
      '<h1>Здравствуйте!</h1><br/>' +
      '<h3>Вы получили это письмо, потому что запросили сброс пароля для вашей учетной записи. Если вы не запрашивали сброс пароля, проигнорируйте это письмо. Чтобы сбросить пароль, пожалуйста, перейдите по следующей ссылке:</h3>' +
      '<a href=https://cards-lac-project.vercel.app/change-password/##token##>Сброс пароля</a>' +
      '<h3>Пожалуйста, обратите внимание, что ссылка будет действительна в течение ограниченного времени.</h3>'

    try {
      Email.parse(email)
      sendEmail({ email, html: mailHtml })
        .unwrap()
        .then(() => navigate('/check-email'))
        .catch(e => {
          setEmailError(e.error.data.message)
        })
    } catch (e) {
      if (e instanceof ZodError) {
        setEmailError(e.errors[0]?.message)
      } else {
        setEmailError('Unknown error')
      }
    }
  }

  // try {
  //   Email.parse(email)
  //   const res = await sendEmail({email})
  //
  //   // @ts-ignore
  //   if (res.hasOwnProperty('error') && res.error.data.statusCode === 404 ){
  //     // @ts-ignore
  //     setEmailError(res.error.data.message)
  //     return
  //   }
  //   navigate('/check-email')
  // } catch (error: any) {
  //   if (error instanceof ZodError){
  //     setEmailError(error.errors[0]?.message)
  //   } else {
  //     setEmailError('Unknown error')
  //   }
  // }

  const changeHandler = (email: string) => {
    setEmailError('')
    setEmail(email)
  }

  return (
    <Card>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={onSendEmail}>
        <TextField label={'Email'} onValueChange={changeHandler} value={email} error={emailError} />
        <Typography className={s.textInfo}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button>Send Instructions</Button>
      </form>
      <div className={s.reminder}>
        <Typography className={s.textReminder}>Did you remember your password?</Typography>
        <Button variant={'link'} as={Link} to={'/login'} className={s.button}>
          Try logging in
        </Button>
      </div>
    </Card>
  )
}
