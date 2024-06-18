import * as Avatar from '@radix-ui/react-avatar'

import s from './HeaderAvatar.module.scss'

type HeaderAvatarProps = {
  name: string
  photo?: string
  photoDescription: string
}

export const HeaderAvatar = ({ name, photo, photoDescription }: HeaderAvatarProps) => {
  return (
    <Avatar.Root className={s.rootAvatar}>
      <Avatar.Image alt={photoDescription} src={photo} />
      <Avatar.Fallback className={s.fallBack}>{name[0]}</Avatar.Fallback>
    </Avatar.Root>
  )
}
