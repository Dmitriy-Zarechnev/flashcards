import { InfoPanel } from '@/entities/auth/ui/edit-profile/InfoPannel/InfoPannel'
import { Card, IconButton, Typography } from '@/shared'

import s from './EditProfile.module.scss'

import image from './catAvatar.webp'

export const EditProfile = () => {
  function foo() {
    console.log('💚💚💚')
  }

  return (
    <Card className={s.editProfile}>
      <Typography.H1>Personal Information</Typography.H1>
      <div className={s.imageContainer}>
        <img alt={'#'} src={image} />
        <IconButton iconId={'editOutline'} onClick={foo} />
      </div>
      <InfoPanel email={'j&johnson@gmail.com'} name={'Ivan'} onClick={foo} />
    </Card>
  )
}
