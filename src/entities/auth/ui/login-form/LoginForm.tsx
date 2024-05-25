import { useForm } from 'react-hook-form'

import { Button, ControlledCheckbox, ControlledSelect, Input } from '@/shared'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type OptionsType =
  | { label: number; value: number }
  | { label: number; value: string }
  | { label: string; value: number }
  | { label: string; value: string }

const options: OptionsType[] = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
  { label: 'three', value: 3 },
  { label: 'four', value: 4 },
  { label: 'five', value: 5 },
]

export const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().trim().email('Email is required'),
    password: z.string().min(3, { message: 'Password should be 3 or more characters long' }),
    rememberMe: z.boolean().default(false),
    select: z.any(),
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {import.meta.env.DEV && <DevTool control={control} />}
      <Input {...register('email')} error={errors.email?.message} label={'email'} type={'email'} />
      <Input
        {...register('password')}
        error={errors.password?.message}
        label={'password'}
        type={'password'}
      />
      <ControlledCheckbox control={control} name={'rememberMe'}>
        remember me
      </ControlledCheckbox>
      <ControlledSelect control={control} name={'select'} options={options} />
      <Button type={'submit'} variant={'primary'}>
        Submit
      </Button>
    </form>
  )
}