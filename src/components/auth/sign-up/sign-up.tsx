import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sign-up.module.scss'

import { Button, TextField, Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'
import { ControlledTextField } from '@/components/ui/controlled-text-field/controlled-text-field.tsx'
import { useRegistrationMutation } from '@/services/auth/auth.ts'

const loginSchema = z
  .object({
    email: z
      .string()
      .nonempty('Enter email')
      .email({ message: 'invalid email address' })
      .default(''),
    password: z
      .string()
      .nonempty('Enter password')
      .min(6, 'Minimum 6 characters for password')
      .max(30, 'Maximum 30 characters for password')
      .default(''),
    confirmPassword: z.string().nonempty('Confirm password').default(''),
  })
  .refine(({ confirmPassword, password }) => confirmPassword === password, {
    message: 'The passwords did not match',
    path: ['confirmPassword'],
  })

type LoginFormSchema = z.infer<typeof loginSchema>

type Props = {
  onSubmit: ({}: any) => void
}

export const SignUp: FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    setError,
    // formState: { errors },
  } = useForm<LoginFormSchema>({ resolver: zodResolver(loginSchema) })

  const [, { error }] = useRegistrationMutation()

  if (error) {
    if (
      'status' in error &&
      typeof error.data === 'object' &&
      error.data &&
      'errorMessages' in error.data &&
      Array.isArray(error.data.errorMessages)
    ) {
      setError('confirmPassword', {
        type: 'dark side',
        message: error.data.errorMessages[0] as string,
      })
    }
  }

  return (
    <Card className={s.signUp}>
      <Typography as={'h1'} variant={'large'} className={s.title}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <ControlledTextField name={'email'} control={control} label={'Email'} />
        <ControlledTextField name={'password'} control={control} label={'Password'} />
        {/*  <ControlledTextField name={'confirmPassword'} control={control} label={'Confirm password'}/>*/}
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              name="password"
              // error={errors?.confirmPassword?.message}
              label={'Confirm password'}
              className={s.confirmPassword}
            />
          )}
        />

        <Button type="submit">
          <Typography>Sign Up</Typography>
        </Button>
      </form>
      <Typography className={s.span}>Already have an account?</Typography>
      <Button variant={'link'} className={s.buttonSignIn} as={Link} to={'/login'}>
        Sign In
      </Button>
    </Card>
  )
}
