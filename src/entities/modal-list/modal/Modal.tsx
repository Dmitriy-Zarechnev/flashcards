import { Button, Input, Typography } from '@/shared'

import s from './Modal.module.scss'

import reactImg from '../../tables/assets/React.jpg'

type ModalProps = {
  imgUrl?: string
  title: string
}

export const Modal = ({ imgUrl = reactImg, title }: ModalProps) => {
  return (
    <div className={s.Wrapper}>
      <Typography.Subtitle2>{title}:</Typography.Subtitle2>
      <Input labelTitle={`${title}`} placeholder={'Name'} />
      <img alt={`${title} picture`} className={s.Img} src={imgUrl} />
      <Button img imgId={'imgOutline'} variant={'secondary'}>
        Change Cover
      </Button>
    </div>
  )
}
