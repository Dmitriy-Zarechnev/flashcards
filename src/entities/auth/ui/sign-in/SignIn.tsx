import { useForm } from 'react-hook-form'

import { authSchemes } from '@/entities/validationSchemes'
import {
  Button,
  Card,
  ControlledCheckbox,
  ModalFooter,
  PasswordInput,
  TextField,
  Typography,
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignIn.module.scss'

type SingInProps = {
  onSubmit: (data: FormValues) => void
}

const validationSchema = authSchemes.signIn

type FormValues = z.infer<typeof validationSchema>

export const SignIn = ({ onSubmit }: SingInProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(validationSchema),
  })

  return (
    <Card className={s.signIn}>
      <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputsWrapper}>
          <Typography.H1>Sing In</Typography.H1>
          <TextField
            autoComplete={'email'}
            control={control}
            label={'Email'}
            name={'email'}
            type={'email'}
          />
          <PasswordInput
            autoComplete={'password'}
            control={control}
            label={'Password'}
            name={'password'}
          />
          <ControlledCheckbox control={control} name={'rememberMe'}>
            Remember me
          </ControlledCheckbox>

          <Typography.Body2 as={'a'} className={s.forgotPasswordBox} href={'#'}>
            Forgot Password?
          </Typography.Body2>
        </div>
        <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
          Sing In
        </Button>
      </form>
      <ModalFooter buttonChildren={'Sing Up'} footerText={"Don't have an account?"} />
    </Card>
  )
}
