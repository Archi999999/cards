import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { Button, Checkbox, TextField, Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'

const loginSchema = z.object({
  email: z.string().nonempty('Enter email').email({ message: 'invalid email address' }).default(''),
  rememberMe: z.boolean().default(false),
  password: z
    .string()
    .nonempty('Enter password')
    .min(6, 'Minimum 6 characters for password')
    .default(''),
})

type LoginFormSchema = z.infer<typeof loginSchema>

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data)
  }

  return (
    <div className={s.signIn}>
      <Card>
        <Typography as={'h1'} variant={'large'} className={s.title}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className={s.form}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                label={'Email'}
                error={errors?.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                label={'Password'}
                error={errors?.password?.message}
              />
            )}
          />
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={!!field.value}
                onChange={checked => field.onChange(checked)}
                name={field.name}
                label={'Remember Me'}
              />
            )}
          />
          <Link to={'/password-recovery'} className={s.linkRecover}>
            <Typography>Forgot Password?</Typography>
          </Link>
          <Button type="submit">
            <Typography>Sign In</Typography>
          </Button>
        </form>
        <Typography className={s.span}>Don&apos;t have an account?</Typography>
        <Link to={'/registration'} className={s.linkReg}>
          <Button variant={'link'} className={s.buttonSignUp}>
            Sign Up
          </Button>
        </Link>
      </Card>
    </div>
  )
}
