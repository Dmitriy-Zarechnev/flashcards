import { Button, Card, Input, ModalFooter, Typography } from '@/shared'

import s from './ForgotPassword.module.scss'

export const ForgotPassword = () => {
  return (
    <Card className={s.forgotPasswordWrapper}>
      <form className={s.form}>
        <div className={s.inputWrapper}>
          <Typography.H1 className={s.forgotPasswordHeader}>Forgot your password?</Typography.H1>
          <Input label={'Email'} type={'email'} />
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
