import { useParams } from 'react-router-dom'

import { useGetDeckByIdQuery } from '@/services'
import { Card, Typography } from '@/shared'

import s from './Learn.module.scss'

export const LearnPage = () => {
  const { deckId } = useParams()
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: deckId || '' })

  return (
    <Card className={s.learn}>
      <Typography.H1>
        Learn <span>{deckByIdData?.name}123</span>
      </Typography.H1>
    </Card>
  )
}
