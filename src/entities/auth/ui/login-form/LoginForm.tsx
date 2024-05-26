import { useForm } from 'react-hook-form'

import {
  Button,
  ControlledCheckbox,
  ControlledRadioGroup,
  ControlledSelect,
  PasswordField,
  TextField,
} from '@/shared'
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

const radioOptions = [
  { id: '1', label: 'RadioGroup 1', value: 'item 1' },
  { id: '2', label: 'RadioGroup 2', value: 'item 2' },
  { id: '3', label: 'RadioGroup 3', value: 'item 3' },
]

export const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().trim().email('Invalid email address'),
    password: z.string().min(3, { message: 'Password should be 3 or more characters long' }),
    radioValue: z.any(),
    rememberMe: z.boolean().default(false),
    select: z.any(),
  })

  type FormValues = z.infer<typeof loginSchema>
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      radioValue: '',
      rememberMe: false,
      select: 1,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      {import.meta.env.DEV && <DevTool control={control} />}
      <TextField control={control} label={'Email'} name={'email'} type={'email'} />
      <PasswordField control={control} label={'Password'} name={'password'} />

      <ControlledCheckbox control={control} name={'rememberMe'}>
        remember me
      </ControlledCheckbox>

      <ControlledSelect control={control} name={'select'} options={options} />

      <ControlledRadioGroup control={control} name={'radioValue'} options={radioOptions} />

      <Button type={'submit'} variant={'primary'}>
        Submit
      </Button>
    </form>
  )
}
