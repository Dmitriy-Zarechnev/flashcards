import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Dropdown, HeaderAvatar, Icon, PATH, Typography } from '@/shared'

import s from './DropdownProfile.module.scss'

type DropdownProfileProps = {
  email: string
  logout: () => void
  name: string
  photo?: string
  photoDescription: string
}

export const DropdownProfile = ({
  email,
  logout,
  name,
  photo,
  photoDescription,
}: DropdownProfileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dropdown.Root
      onOpenChange={() => setIsOpen(!isOpen)}
      open={isOpen}
      style={{ height: '36px', width: '36px' }}
      trigger={<HeaderAvatar name={name} photo={photo} photoDescription={photoDescription} />}
    >
      <div className={s.profileItem}>
        <HeaderAvatar name={name} noHover photo={photo} photoDescription={photoDescription} />
        <div>
          <Typography.Subtitle2>{name}</Typography.Subtitle2>
          <Typography.Caption>{email}</Typography.Caption>
        </div>
      </div>
      <Dropdown.Separator />
      <Dropdown.Item>
        <Link className={s.iconTextLink} onClick={() => setIsOpen(false)} to={PATH.PROFILE}>
          <Icon iconId={'personOutline'} />
          <Typography.Caption>My profile</Typography.Caption>
        </Link>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item onClick={logout}>
        <Link className={s.iconTextLink} to={PATH.SIGNIN}>
          <Icon iconId={'logOut'} />
          <Typography.Caption>Sign out</Typography.Caption>
        </Link>
      </Dropdown.Item>
    </Dropdown.Root>
  )
}
