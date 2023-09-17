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
    <Card className={s.signIn}>
      <Typography as={'h1'} variant={'large'} className={s.title}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <Typography as={Link} to={'/password-recovery'} className={s.linkRecover}>
          Forgot Password?
        </Typography>
        <Button type="submit">
          <Typography>Sign In</Typography>
        </Button>
      </form>
      <Typography className={s.span}>Don&apos;t have an account?</Typography>
      <Button variant={'link'} className={s.buttonSignUp} as={Link} to={'/registration'}>
        Sign Up
      </Button>
    </Card>
  )
}

//
// import { useController, useForm } from 'react-hook-form';
//
// const MyInput = ({ field }) => {
//   return <input value={field.value} onChange={field.onChange} />;
// };
//
// const MyForm = () => {
//   const { control, handleSubmit } = useForm();
//
//   const { field } = useController({
//     name: 'myField',
//     control,
//     defaultValue: '',
//     rules: { required: true },
//   });
//
//   const onSubmit = (data) => {
//     console.log(data);
//   };
//
//   return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <MyInput field={field} />
//         <button type="submit">Submit</button>
//       </form>
//   );
// };
