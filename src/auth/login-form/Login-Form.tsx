import { useController, useForm } from 'react-hook-form'

import { Button, Checkbox, Input } from '@/shared'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  console.log('errors: ', errors)

  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', {
          pattern: { message: 'Invalid email', value: emailRegex },
          required: 'Email is required',
        })}
        error={errors.email?.message}
        label={'email'}
        type={'email'}
      />
      <Input
        {...register('password', {
          minLength: { message: 'Password has to be at least 3 characters long', value: 3 },
          required: 'Password is required',
        })}
        error={errors.password?.message}
        label={'password'}
        type={'password'}
      />
      <Checkbox checked={value} onChange={onChange}>
        rememberMe
      </Checkbox>
      <Button type={'submit'} variant={'primary'}>
        Submit
      </Button>
    </form>
  )
}
