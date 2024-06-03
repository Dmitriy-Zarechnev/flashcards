import { useForm } from 'react-hook-form'

import { Button, Card, ModalFooter, PasswordInput, TextField, Typography } from '@/shared'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SingUp.module.scss'

import { authSchemes } from '../../../validationSchemes'

type SingUpProps = {
  onSubmit: (data: FormValues) => void
}

const validationSchema = authSchemes.signUp

type FormValues = z.infer<typeof validationSchema>

export const SingUp = ({ onSubmit }: SingUpProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(validationSchema),
  })

  return (
    <Card className={s.singUpWrapper}>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        {import.meta.env.DEV && <DevTool control={control} />}
        <div className={s.inputsWrapper}>
          <Typography.H1 className={s.singUpHeader}>Sing Up</Typography.H1>
          <TextField
            autoComplete={'email'}
            control={control}
            label={'Email'}
            name={'email'}
            type={'email'}
          />
          <PasswordInput
            autoComplete={'new-password'}
            control={control}
            label={'Password'}
            name={'password'}
          />
          <PasswordInput
            autoComplete={'new-password'}
            control={control}
            label={'confirmPassword'}
            name={'confirmPassword'}
            placeholder={'Confirm Password'}
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
