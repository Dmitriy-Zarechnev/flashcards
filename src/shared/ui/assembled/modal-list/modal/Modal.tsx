import { ComponentPropsWithoutRef } from 'react'

import { Button, Icon, Input, Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './Modal.module.scss'

import reactImg from './defaultDeckImg.jpg'

type ModalProps = {
  buttonTitle: string
  imgUrl?: string
  title: string
} & ComponentPropsWithoutRef<'div'>

export const Modal = ({ buttonTitle, className, imgUrl = reactImg, title }: ModalProps) => {
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
