import { FieldValues, useForm } from 'react-hook-form'

import { Button, Card, Input, ModalFooter, Typography } from '@/shared'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './ForgotPassword.module.scss'

import { schema } from './../validationSchemas'

type ForgotPasswordProps = {
  onSubmit: (data: FieldValues) => void
}

const validationSchema = schema.forgotPassword

type FormValues = z.infer<typeof validationSchema>

export const ForgotPassword = ({ onSubmit }: ForgotPasswordProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  })

  return (
    <Card className={s.forgotPasswordWrapper}>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        {import.meta.env.DEV && <DevTool control={control} />}
        <div className={s.inputWrapper}>
          <Typography.H1 className={s.forgotPasswordHeader}>Forgot your password?</Typography.H1>

          <Input
            {...register('email')}
            autoComplete={'email'}
            error={errors.email?.message}
            label={'Email'}
            type={'email'}
          />
          <Typography.Body2 className={s.forgotPasswordText}>
            Enter your email address and we will send you further instructions
          </Typography.Body2>
        </div>
        <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
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
