import { Link, useParams } from 'react-router-dom'

import { Button, Card, Icon, PATH, Page, Typography } from '@/shared'

import s from './CheckEmail.module.scss'

export const CheckEmailPage = () => {
  // ----- Достали email из url-а -----
  const params = useParams()
  const email = params.email ?? ''

  return (
    <Page mt={'100px'}>
      <Card className={s.checkEmailWrapper}>
        <div className={s.pictureWrapper}>
          <Typography.H1 className={s.checkEmailHeader}>Check Email</Typography.H1>
          <Icon height={'96px'} iconId={'emailEnvelope'} viewBox={'0 0 96 96'} width={'96px'} />
          <Typography.Body2 className={s.checkEmailText}>
            We’ve sent an Email with instructions to {email}
          </Typography.Body2>
        </div>
        <Button as={Link} fullWidth to={PATH.SIGNIN} variant={'primary'}>
          Back to Sign In
        </Button>
      </Card>
    </Page>
  )
}
