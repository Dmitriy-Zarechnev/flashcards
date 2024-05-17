import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import s from './AnswerQuestionModal.module.scss'

import reactImg from '../../../assets/React.jpg'

type AnswerQuestionModalProps = {
  imgUrl?: string
  title: string
}

export const AnswerQuestionModal = ({ imgUrl = reactImg, title }: AnswerQuestionModalProps) => {
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
