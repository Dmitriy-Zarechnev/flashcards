import { Button, DropdownProfile, Typography } from '@/shared'

import s from './PageHeader.module.scss'

import profileImage from '../dropdown-profile/stories/Dropdown.webp'
import logo from './logo_2.png'

const profile = {
  email: 'SuperIvan@gmail.com',
  name: 'Ivan',
  photo: profileImage,
  photoDescription: 'Photo of Ivan',
}

type PageHeaderProps = {
  isSingUp: boolean
}

export const PageHeader = ({ isSingUp }: PageHeaderProps) => {
  return (
    <div className={s.headerWrapper}>
      <img alt={'Project Picture'} className={s.img} src={logo} />
      {isSingUp ? (
        <div className={s.profileInfo}>
          <Typography.Subtitle1>{profile.name}</Typography.Subtitle1>
          <DropdownProfile
            email={profile.email}
            name={profile.name}
            photo={profile.photo}
            photoDescription={profile.photoDescription}
          />
        </div>
      ) : (
        <Button variant={'secondary'}>Sing In</Button>
      )}
    </div>
  )
}
