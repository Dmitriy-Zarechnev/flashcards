import { FieldValues, useForm } from 'react-hook-form'

import { Button, Card, Input, ModalFooter, Typography } from '@/shared'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './ForgotPassword.module.scss'

type ForgotPasswordProps = {
  onSubmit: (data: FieldValues) => void
}

const loginSchema = z.object({
  email: z.string().trim().email({ message: 'Email is required' }),
})

type FormValues = z.infer<typeof loginSchema>

export const ForgotPassword = ({ onSubmit }: ForgotPasswordProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.forgotPasswordWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {import.meta.env.DEV && <DevTool control={control} />}
        <div className={s.inputWrapper}>
          <Typography.H1 className={s.forgotPasswordHeader}>Forgot your password?</Typography.H1>
          <Input
            {...register('email')}
            error={errors.email?.message}
            label={'email'}
            type={'email'}
          />
          <Typography.Body2 className={s.forgotPasswordText}>
            Enter your email address and we will send you further instructions
          </Typography.Body2>
        </div>
        <Button fullWidth type={'submit'} variant={'primary'}>
          Send Instructions
        </Button>
      </form>
      <ModalFooter
        buttonChildren={'Try logging in'}
        footerText={'Did you remember your password?'}
      />
    </Card>
  )
}
