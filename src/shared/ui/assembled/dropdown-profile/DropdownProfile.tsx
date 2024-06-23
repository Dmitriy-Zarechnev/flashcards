import { NavLink } from 'react-router-dom'

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
  return (
    <Dropdown.Root
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
        <NavLink className={s.iconTextLink} to={PATH.PROFILE}>
          <Icon iconId={'personOutline'} />
          <Typography.Caption>My profile</Typography.Caption>
        </NavLink>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item onClick={logout}>
        {/* убрал тут NavLink => перенаправление уже есть в функции onClick={logout} */}
        <div className={s.iconTextLink}>
          <Icon iconId={'logOut'} />
          <Typography.Caption>Sign out</Typography.Caption>
        </div>
      </Dropdown.Item>
    </Dropdown.Root>
  )
}
