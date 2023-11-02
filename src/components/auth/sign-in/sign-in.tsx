import { FC, KeyboardEvent } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { Button, Checkbox, Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'
import { ControlledTextField } from '@/components/ui/controlled-text-field/controlled-text-field.tsx'
import { LoaderLinear } from '@/pages/loader/loader-line.tsx'

const loginSchema = z.object({
  email: z.string().nonempty('Enter email').email({ message: 'invalid email address' }).default(''),
  rememberMe: z.boolean().default(false),
  password: z
    .string()
    .nonempty('Enter password')
    .min(6, 'Minimum 6 characters for password')
    .max(30, 'Maximum 30 characters for password')
    .default(''),
})

type LoginFormSchema = z.infer<typeof loginSchema>

type Props = {
  onSubmit: ({}: any) => void
  isSubmitting: boolean
  error: any
}

export const SignIn: FC<Props> = ({ onSubmit, isSubmitting, error }) => {
  const { control, handleSubmit, setError } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  if (error) {
    if (
      'status' in error &&
      typeof error.data === 'object' &&
      error.data &&
      'message' in error.data
    ) {
      setError('password', { type: 'dark side', message: error.data.message as string })
    }
  }

  const onKeydownHandler =(e: KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === 'Enter') {
      e.preventDefault()
      handleSubmit(onSubmit)()
    }
  }


  return (
    <>
      {isSubmitting && <LoaderLinear />}
      <Card className={s.signIn}>
        <Typography as={'h1'} variant={'large'} className={s.title}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <ControlledTextField name={'email'} control={control} label={'Email'} />
          <ControlledTextField name={'password'} control={control} label={'Password'} onKeyDown={onKeydownHandler}/>
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
          <Button type="submit" disabled={isSubmitting}>
            <Typography>Sign In</Typography>
          </Button>
        </form>
        <Typography className={s.span}>Don&apos;t have an account?</Typography>
        <Button variant={'link'} className={s.buttonSignUp} as={Link} to={'/registration'}>
          Sign Up
        </Button>
      </Card>
    </>
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
