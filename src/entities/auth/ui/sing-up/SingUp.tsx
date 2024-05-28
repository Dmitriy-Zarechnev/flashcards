import { FieldValues, useForm } from 'react-hook-form'

import { Button, Card, ModalFooter, PasswordField, TextField, Typography } from '@/shared'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SingUp.module.scss'

import { schema } from './../validationSchemas'

type SingUpProps = {
  onSubmit: (data: FieldValues) => void
}

const validationSchema = schema.signUp

type FormValues = z.infer<typeof validationSchema>

export const SingUp = ({ onSubmit }: SingUpProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
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

          {/*<Input*/}
          {/*  {...register('email')}*/}
          {/*  autoComplete={'email'}*/}
          {/*  error={errors.email?.message}*/}
          {/*  label={'Email'}*/}
          {/*  type={'email'}*/}
          {/*/>*/}
          <PasswordField
            autoComplete={'new-password'}
            control={control}
            label={'Password'}
            name={'password'}
          />
          {/*<PasswordInput*/}
          {/*  {...register('password')}*/}
          {/*  autoComplete={'new-password'}*/}
          {/*  error={errors.password?.message}*/}
          {/*  label={'Password'}*/}
          {/*/>*/}

          <PasswordField
            autoComplete={'new-password'}
            control={control}
            label={'confirmPassword'}
            name={'confirmPassword'}
            placeholder={'Confirm Password'}
          />
          {/*<PasswordInput*/}
          {/*  {...register('confirmPassword')}*/}
          {/*  autoComplete={'new-password'}*/}
          {/*  error={errors.confirmPassword?.message}*/}
          {/*  label={'confirmPassword'}*/}
          {/*  placeholder={'Confirm Password'}*/}
          {/*/>*/}
        </div>
        <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
          Sing Up
        </Button>
      </form>
      <ModalFooter buttonChildren={'Sing In'} footerText={'Already have an account?'} />
    </Card>
  )
}
