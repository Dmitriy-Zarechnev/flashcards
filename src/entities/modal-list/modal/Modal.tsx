import { ComponentPropsWithoutRef } from 'react'

import { Button, Input, Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './Modal.module.scss'

import reactImg from '../../tables/assets/React.jpg'

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
      <Button img imgId={'imgOutline'} variant={'secondary'}>
        {buttonTitle}
      </Button>
    </div>
  )
}
