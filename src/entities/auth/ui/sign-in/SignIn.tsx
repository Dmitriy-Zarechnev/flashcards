import { FieldValues, useForm } from 'react-hook-form'

import { schema } from '@/entities/auth/ui/validationSchemas'
import {
  Button,
  Card,
  ControlledCheckbox,
  ModalFooter,
  PasswordField,
  TextField,
  Typography,
} from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignIn.module.scss'

type SingInProps = {
  onSubmit: (data: FieldValues) => void
}

const validationSchema = schema.signIn

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
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Typography.H1>Sing In</Typography.H1>
        <TextField
          autoComplete={'email'}
          control={control}
          label={'Email'}
          name={'email'}
          type={'email'}
        />
        <PasswordField
          autoComplete={'password'}
          control={control}
          label={'Password'}
          name={'password'}
        />
        <ControlledCheckbox control={control} name={'rememberMe'}>
          Remember me
        </ControlledCheckbox>
        <div className={s.forgotPasswordBox}>
          <Typography.Body2 as={'a'} href={'#'}>
            Forgot Password?
          </Typography.Body2>
        </div>
        <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
          Sing Up
        </Button>
      </form>
      <ModalFooter buttonChildren={'Sing Up'} footerText={"Don't have an account?"} />
    </Card>
  )
}
