import { useForm } from 'react-hook-form'

import { Button, Card, PasswordInput, Typography } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './CreateNewPassword.module.scss'

import { authSchemes } from '../../../validationSchemes'

type CreateNewPasswordProps = {
  onSubmit: (data: FormValues) => void
}

const validationSchema = authSchemes.createNewPassword

type FormValues = z.infer<typeof validationSchema>

export const CreateNewPassword = ({ onSubmit }: CreateNewPasswordProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  })

  return (
    <Card className={s.createNewPasswordWrapper}>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputWrapper}>
          <Typography.H1 className={s.createNewPasswordHeader}>Create new password</Typography.H1>
          <PasswordInput
            autoComplete={'new-password'}
            control={control}
            label={'Password'}
            name={'password'}
          />
          <Typography.Body2 className={s.createNewPasswordText}>
            Create new password and we will send you further instructions to email
          </Typography.Body2>
        </div>
        <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
