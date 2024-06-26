import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import * as Avatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './HeaderAvatar.module.scss'

type HeaderAvatarProps = {
  name?: string
  noHover?: boolean
  photo?: string
  photoDescription: string
  textStyle?: CSSProperties
} & ComponentPropsWithoutRef<typeof Avatar.Root>

export const HeaderAvatar = ({
  className,
  name,
  noHover,
  photo,
  photoDescription,
  style,
  textStyle,
}: HeaderAvatarProps) => {
  return (
    <Avatar.Root className={clsx(s.rootAvatar, className)} style={style}>
      <Avatar.Image
        alt={photoDescription}
        className={clsx(s.avatarImg, noHover && s.noHover)}
        src={photo}
      />
      <Avatar.Fallback
        className={clsx(s.avatarImg, s.fallBack, noHover && s.noHover)}
        style={textStyle}
      >
        {name?.[0]}
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
