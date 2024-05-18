import { HeadCellWithArrow } from '@/entities/tables/head-cell-with-arrow'
import { IconButtons } from '@/entities/tables/icon-buttons'
import { ImgBlock } from '@/entities/tables/image-block'
import { Rating, Typography } from '@/shared'

import s from './TableShort.module.scss'

import defImg from '../assets/defaultPicture.jpg'

export const TableShort = () => {
  return (
    <div className={s.wrapper}>
      <Typography.Subtitle2 className={s.header}>Name 1</Typography.Subtitle2>
      <Typography.Subtitle2 className={s.subHeader}>Name 1</Typography.Subtitle2>
      <IconButtons className={s.IconButtons} id={'el.id'} />
      <Rating className={s.IconButtons} rating={3} />
      <ImgBlock className={s.imgBorder} title={'Name'} url={defImg} />
      <HeadCellWithArrow className={s.HeadCellWithArrow} title={'Name 1'} />
    </div>
  )
}