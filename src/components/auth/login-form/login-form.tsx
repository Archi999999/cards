// import { useController, useForm } from 'react-hook-form'
//
// import { TextField, Button, Checkbox } from '@/components'
//
// type FormValues = {
//   email: string
//   password: string
//   rememberMe: boolean
// }
//
// export const LoginForm = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>()
//
//   const onSubmit = (data: FormValues) => {
//     console.log(data)
//     console.log(errors)
//   }
//
//   const minLength = 3
//
//   const {
//     field: { value, onChange },
//   } = useController({
//     name: 'rememberMe',
//     control,
//     defaultValue: false,
//   })
//
//   const {
//     field: { value: emailValue, onChange: onChangeEmail },
//   } = useController({
//     name: 'email',
//     control,
//     defaultValue: '',
//     rules: { required: 'Email is required' },
//   })
//
//   const {
//     field: { value: passwordValue, onChange: onChangePassword },
//   } = useController({
//     name: 'password',
//     control,
//     defaultValue: '',
//     rules: {
//       required: 'Enter Password',
//       min: { value: minLength, message: 'Password is too short' },
//     },
//     // validate: {
//     //   onBlur: true}
//   })
//
//   // fieldState: { invalid: emailInvalid, error: emailError },
//   return (
//     <form onSubmit={handleSubmit(onSubmit)} noValidate>
//       <TextField value={emailValue} onChange={onChangeEmail} name={'email'} />
//       {errors.email && <span>{errors.email.message}</span>}
//       <TextField
//         value={passwordValue}
//         onChange={onChangePassword}
//         name={'password'}
//         // minLength={minLength}
//       />
//       {errors.password && <span>{errors.password.message}</span>}
//       <Checkbox onCheckedChange={onChange} checked={value} name={'rememberMe'} />
//       <Button type="submit">Submit</Button>
//     </form>
//   )
// }

import { useForm, Controller } from 'react-hook-form'

import { TextField, Button, Checkbox } from '@/components'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onBlur',
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const minLength = 3
  const validateEmail = (value: string): string | undefined => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(value)

    return isValid ? undefined : 'Email is incorrect'
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="email"
        control={control}
        rules={{ required: 'Email is required', validate: validateEmail }}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            error={errors?.email?.message}
          />
        )}
      />
      {/*{errors.email && <span>{errors.email.message}</span>}*/}
      <Controller
        name="password"
        control={control}
        rules={{
          required: 'Enter Password',
          minLength: {
            value: minLength,
            message: 'Password is too short',
          },
        }}
        render={({ field }) => (
          <TextField
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            error={errors?.password?.message}
          />
        )}
      />
      {/*{errors.password && <span>{errors.password.message}</span>}*/}
      <Controller
        name="rememberMe"
        control={control}
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.checked)}
            name={field.name}
          />
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
