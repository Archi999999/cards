import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'

import { Button, TextField } from '@/components'
import { Checkbox } from '@/components/ui/checkbox'

const loginSchema = z.object({
  email: z.string().nonempty('Field is required').email({ message: 'invalid email address' }),
  password: z.string().min(6, 'Minimum 6 characters for password'),
  rememberMe: z.boolean().default(false),
})

type LoginFormSchema = z.infer<typeof loginSchema>

export const LoginForm = () => {
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="email"
        control={control}
        // rules={{ required: 'Email is required', validate: validateEmail }}
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
      <Controller
        name="password"
        control={control}
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
            checked={!!field.value}
            onChange={checked => field.onChange(checked)}
            name={field.name}
            label={'Remember Me'}
          />
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
