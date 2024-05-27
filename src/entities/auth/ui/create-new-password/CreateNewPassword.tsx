import { FieldValues, useForm } from 'react-hook-form'

import { Button, Card, PasswordInput, Typography } from '@/shared'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './CreateNewPassword.module.scss'

import { schema } from './../validationSchemas'

type CreateNewPasswordProps = {
  onSubmit: (data: FieldValues) => void
}

const validationSchema = schema.createNewPassword

type FormValues = z.infer<typeof validationSchema>

export const CreateNewPassword = ({ onSubmit }: CreateNewPasswordProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  })

  return (
    <Card className={s.createNewPasswordWrapper}>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        {import.meta.env.DEV && <DevTool control={control} />}
        <div className={s.inputWrapper}>
          <Typography.H1 className={s.createNewPasswordHeader}>Create new password</Typography.H1>
          <PasswordInput
            {...register('password')}
            autoComplete={'new-password'}
            error={errors.password?.message}
            label={'password'}
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
