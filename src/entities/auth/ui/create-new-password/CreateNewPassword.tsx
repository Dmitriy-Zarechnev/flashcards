import { Button, Card, PasswordInput, Typography } from '@/shared'

import s from './CreateNewPassword.module.scss'

export const CreateNewPassword = () => {
  return (
    <Card className={s.createNewPasswordWrapper}>
      <form className={s.form}>
        <div className={s.inputWrapper}>
          <Typography.H1 className={s.createNewPasswordHeader}>Create new password</Typography.H1>
          <PasswordInput label={'Password'} />
          <Typography.Body2 className={s.createNewPasswordText}>
            Create new password and we will send you further instructions to email
          </Typography.Body2>
        </div>
        <Button fullWidth type={'submit'} variant={'primary'}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
