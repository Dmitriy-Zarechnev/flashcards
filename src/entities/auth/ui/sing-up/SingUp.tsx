import { Button, Card, Input, Typography } from '@/shared'
import { PasswordInput } from '@/shared/ui/default/password-Input'

import s from './SingUp.module.scss'

export const SingUp = () => {
  return (
    <Card className={s.singUpWrapper}>
      <form className={s.form}>
        <div className={s.inputsWrapper}>
          <Typography.H1 className={s.singUpHeader}>Sing Up</Typography.H1>
          <Input label={'Email'} type={'email'} />
          <PasswordInput label={'Password'} />
          <PasswordInput label={'Confirm Password'} />
        </div>
        <Button fullWidth type={'submit'} variant={'primary'}>
          Sing Up
        </Button>
      </form>
      <div className={s.footerWrapper}>
        <Typography.Subtitle2>Already have an account?</Typography.Subtitle2>
        <Button className={s.linkButton} variant={'secondary'}>
          Sing In
        </Button>
      </div>
    </Card>
  )
}
