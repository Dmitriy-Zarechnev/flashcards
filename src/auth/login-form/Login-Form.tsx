import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/auth/controlled/controlled-checkbox/Controlled-Checkbox'
import { Button, Input } from '@/shared'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(3, { message: 'Password should be 3 or more characters long' }),
    rememberMe: z.boolean().default(false),
  })

  type FormValues = z.infer<typeof loginSchema>
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  console.log('errors: ', errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Input {...register('email')} error={errors.email?.message} label={'email'} type={'email'} />
      <Input
        {...register('password')}
        error={errors.password?.message}
        label={'password'}
        type={'password'}
      />
      <ControlledCheckbox control={control} name={'rememberMe'}>
        rememberMe
      </ControlledCheckbox>
      <Button type={'submit'} variant={'primary'}>
        Submit
      </Button>
    </form>
  )
}
