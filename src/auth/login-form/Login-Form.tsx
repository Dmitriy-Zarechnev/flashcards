import { useController, useForm } from 'react-hook-form'

import { Button, Checkbox, Input } from '@/shared'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} label={'email'} />
      <Input {...register('password')} label={'password'} />
      <Checkbox checked={value} onChange={onChange}>
        rememberMe
      </Checkbox>
      <Button type={'submit'} variant={'primary'}>
        Submit
      </Button>
    </form>
  )
}
