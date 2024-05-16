import s from './DropdownProfile.module.scss'

import { Dropdown } from './../dropdown'
import { Icon } from './../icon'
import { Typography } from './../typography'

type DropdownProfileProps = {
  email: string
  name: string
  photo: string
  photoDescription: string
}

export const DropdownProfile = ({ email, name, photo, photoDescription }: DropdownProfileProps) => {
  return (
    <Dropdown.Root
      trigger={<img alt={photoDescription} src={photo} />}
      triggerClassName={s.trigger}
    >
      <div className={s.profileItem}>
        <img alt={photoDescription} src={photo} />
        <div>
          <Typography.Subtitle2>{name}</Typography.Subtitle2>
          <Typography.Caption>{email}</Typography.Caption>
        </div>
      </div>
      <Dropdown.Separator />
      <Dropdown.Item>
        <Icon iconId={'personOutline'} />
        <Typography.Caption>My profile</Typography.Caption>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>
        <Icon iconId={'logOut'} />
        <Typography.Caption>Sign out</Typography.Caption>
      </Dropdown.Item>
    </Dropdown.Root>
  )
}
