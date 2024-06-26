import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './ForgotPassword.module.scss'

import { TextField } from '../../_components'
import { ForgotPasswordFormValues, authSchemes } from '../../validationSchemes'
import { ModalFooter } from '../_components'

type ForgotPasswordProps = {
  onSubmit: (data: ForgotPasswordFormValues) => void
}

export const ForgotPassword = ({ onSubmit }: ForgotPasswordProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(authSchemes.forgotPassword),
  })

  return (
    <Card className={s.forgotPasswordWrapper}>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputWrapper}>
          <Typography.H1 className={s.forgotPasswordHeader}>Forgot your password?</Typography.H1>
          <TextField
            autoComplete={'email'}
            control={control}
            label={'Email'}
            name={'email'}
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
        linkPath={'/sign-in'}
      />
    </Card>
  )
}
