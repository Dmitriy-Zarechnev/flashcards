import { FieldValues, useForm } from 'react-hook-form'

import { Button, Card, Input, ModalFooter, Typography } from '@/shared'
import { PasswordInput } from '@/shared/ui/default/password-Input'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SingUp.module.scss'

type SingUpProps = {
  onSubmit: (data: FieldValues) => void
}

const loginSchema = z
  .object({
    confirmPassword: z.string().trim(),
    email: z.string().trim().email({ message: 'Email is required' }),
    password: z.string().min(3, { message: 'Password should be 3 or more characters long' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof loginSchema>

export const SingUp = ({ onSubmit }: SingUpProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.singUpWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {import.meta.env.DEV && <DevTool control={control} />}
        <div className={s.inputsWrapper}>
          <Typography.H1 className={s.singUpHeader}>Sing Up</Typography.H1>
          <Input
            {...register('email')}
            autoComplete={'email'}
            error={errors.email?.message}
            label={'email'}
            type={'email'}
          />
          <PasswordInput
            {...register('password')}
            autoComplete={'new-password'}
            error={errors.password?.message}
            label={'password'}
          />
          <PasswordInput
            {...register('confirmPassword')}
            autoComplete={'new-password'}
            error={errors.confirmPassword?.message}
            label={'confirmPassword'}
          />
        </div>
        <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
          Sing Up
        </Button>
      </form>
      <ModalFooter buttonChildren={'Sing In'} footerText={'Already have an account?'} />
    </Card>
  )
}
