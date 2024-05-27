import { Button, Card, Icon, Typography } from '@/shared'

import s from './CheckEmail.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.checkEmailWrapper}>
      <form className={s.form} noValidate>
        <div className={s.pictureWrapper}>
          <Typography.H1 className={s.checkEmailHeader}>Check Email</Typography.H1>
          <Icon height={'96px'} iconId={'emailEnvelope'} viewBox={'0 0 96 96'} width={'96px'} />
          <Typography.Body2 className={s.checkEmailText}>
            We’ve sent an Email with instructions to example@mail.com
          </Typography.Body2>
        </div>
        <Button fullWidth type={'submit'} variant={'primary'}>
          Back to Sign In
        </Button>
      </form>
    </Card>
  )
}
