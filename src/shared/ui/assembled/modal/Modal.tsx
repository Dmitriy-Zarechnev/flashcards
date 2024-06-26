import { ComponentPropsWithoutRef } from 'react'

import { Button, Icon, Input, Typography, cardDefaultCover } from '@/shared'
import { clsx } from 'clsx'

import s from './Modal.module.scss'

type ModalProps = {
  buttonTitle: string
  imgUrl?: string
  title: string
} & ComponentPropsWithoutRef<'div'>

export const Modal = ({ buttonTitle, className, imgUrl = cardDefaultCover, title }: ModalProps) => {
  return (
    <div className={clsx(s.Wrapper, className)}>
      <Typography.Subtitle2>{title}:</Typography.Subtitle2>
      <Input label={`${title}`} placeholder={`Write ${title}`} />
      <img alt={`${title} picture`} className={s.Img} src={imgUrl} />
      <Button variant={'secondary'}>
        <Icon height={'16px'} iconId={'imgOutline'} width={'16px'} />
        {buttonTitle}
      </Button>
    </div>
  )
}
