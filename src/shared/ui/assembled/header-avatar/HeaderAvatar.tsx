import * as Avatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './HeaderAvatar.module.scss'

type HeaderAvatarProps = {
  className?: string
  name: string
  noHover?: boolean
  photo?: string
  photoDescription: string
}

export const HeaderAvatar = ({
  className,
  name,
  noHover,
  photo,
  photoDescription,
}: HeaderAvatarProps) => {
  return (
    <Avatar.Root className={clsx(s.rootAvatar, className)}>
      <Avatar.Image alt={photoDescription} src={photo} />
      <Avatar.Fallback className={clsx(s.fallBack, noHover && s.noHover)}>
        {name[0]}
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
