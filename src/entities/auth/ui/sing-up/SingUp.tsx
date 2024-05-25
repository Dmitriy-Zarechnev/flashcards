import { Button, Card, Input, ModalFooter, Typography } from '@/shared'
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
      <ModalFooter buttonChildren={'Sing In'} footerText={'Already have an account?'} />
    </Card>
  )
}
