import { useForm } from 'react-hook-form'

import { Button, Card, Typography } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './SignUp.module.scss'

import { PasswordInput, TextField } from '../../_components'
import { SignUpFormValues, authSchemes } from '../../validationSchemes'
import { ModalFooter } from '../_components'

type SingUpProps = {
  onSubmit: (data: SignUpFormValues) => void
}

export const SignUp = ({ onSubmit }: SingUpProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<SignUpFormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(authSchemes.signUp),
  })

  return (
    <Card className={s.singUpWrapper}>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
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
      <ModalFooter
        buttonChildren={'Sing In'}
        footerText={'Already have an account?'}
        linkPath={'/sign-in'}
      />
    </Card>
  )
}
