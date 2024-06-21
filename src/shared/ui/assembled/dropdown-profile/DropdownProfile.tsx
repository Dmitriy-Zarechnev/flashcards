import { NavLink } from 'react-router-dom'

import { Dropdown, HeaderAvatar, Icon, Typography } from '@/shared'
import { PATH } from '@/shared/utils/routerVariables'

import s from './DropdownProfile.module.scss'

type DropdownProfileProps = {
  email: string
  name: string
  photo?: string
  photoDescription: string
}

export const DropdownProfile = ({ email, name, photo, photoDescription }: DropdownProfileProps) => {
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
      <Dropdown.Item>
        <NavLink className={s.iconTextLink} to={PATH.SINGOUT}>
          <Icon iconId={'logOut'} />
          <Typography.Caption>Sign out</Typography.Caption>
        </NavLink>
      </Dropdown.Item>
    </Dropdown.Root>
  )
}
