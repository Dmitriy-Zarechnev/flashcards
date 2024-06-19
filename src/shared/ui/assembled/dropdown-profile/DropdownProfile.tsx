import { Dropdown, HeaderAvatar, Icon, Typography } from '@/shared'

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
      // trigger={<img alt={photoDescription} src={photo} />}
    >
      <div className={s.profileItem}>
        {/*<img alt={photoDescription} src={photo} />*/}
        <HeaderAvatar name={name} photo={photo} photoDescription={photoDescription} />
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
