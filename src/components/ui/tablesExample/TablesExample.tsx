import { IconButtons } from '@/components/ui/iconButtons'
import { ImgBlock } from '@/components/ui/imgBlock'
import { Rating } from '@/components/ui/rating'
import { Typography } from '@/components/ui/typography'

import s from './TablesExample.module.scss'

import defImg from '../../../assets/defaultPicture.jpg'

export const TablesExample = () => {
  return (
    <div className={s.wrapper}>
      <Typography.Subtitle2 className={s.header}>Name 1</Typography.Subtitle2>
      <Typography.Subtitle2 className={s.subHeader}>Name 1</Typography.Subtitle2>
      <div className={s.IconButtons}>
        <IconButtons id={'el.id'} />
      </div>
      <div className={s.IconButtons}>
        <Rating rating={3} />
      </div>
      <ImgBlock className={s.imgBorder} title={'Name'} url={defImg} />
    </div>
  )
}
