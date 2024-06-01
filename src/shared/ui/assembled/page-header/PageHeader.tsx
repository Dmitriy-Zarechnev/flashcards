import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Button, DropdownProfile, Typography } from '@/shared'

import s from './PageHeader.module.scss'

import profileImage from '../dropdown-profile/stories/Dropdown.webp'
import logo from './Logo.png'

const profile = {
  email: 'SuperIvan@gmail.com',
  name: 'Ivan',
  photo: profileImage,
  photoDescription: 'Photo of Ivan',
}

type PageHeaderProps = {
  isSingUp: boolean
} & ComponentPropsWithoutRef<'header'>

export const PageHeader = forwardRef<ElementRef<'header'>, PageHeaderProps>(({ isSingUp }, ref) => {
  return (
    <header ref={ref}>
      <div className={s.wrapper}>
        <img alt={'Project Picture'} className={s.projectPicture} src={logo} />
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
    </header>
  )
})
