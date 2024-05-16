import { HeadCellWithArrow } from '@/components/ui/headCellWithArrow'
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
      <IconButtons className={s.IconButtons} id={'el.id'} />
      <Rating className={s.IconButtons} rating={3} />
      <ImgBlock className={s.imgBorder} title={'Name'} url={defImg} />
      <HeadCellWithArrow className={s.HeadCellWithArrow} title={'Name 1'} />
    </div>
  )
}
