import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetDeckByIdQuery, useGetRandomCardQuery, useSaveGradeCardMutation } from '@/services'
import { BackToDecks, Button, Card, Page, Typography } from '@/shared'

import s from './Learn.module.scss'

export const LearnPage = () => {
  const [isAnswerShown, setIsAnswerShown] = useState(false)

  const showAnswerHandler = () => {
    setIsAnswerShown(true)
  }

  const params = useParams()
  const deckId = params.deckId ?? ''
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: deckId || '' })

  const { data: randomCard } = useGetRandomCardQuery({ id: deckId || '' })

  const [saveCardGrade] = useSaveGradeCardMutation()

  const saveCardGradeHandler = (grade: number) => {
    saveCardGrade({ id: deckId, ...{ cardId: randomCard?.id, grade } })
  }

  return (
    <Page>
      <BackToDecks iconId={'arrowBackOutline'} title={'Back to previous list'} />
      <Card className={s.learn}>
        <Typography.H1>
          Learn <span>{deckByIdData?.name}123</span>
        </Typography.H1>
        <div className={s.questionWrapper}>
          <Typography.Subtitle1>
            Question: <Typography.Body2>{randomCard?.question}</Typography.Body2>
          </Typography.Subtitle1>
          {randomCard?.questionImg && (
            <img alt={'question picture'} src={randomCard?.questionImg} />
          )}
          <Typography.Body2>Counts of attempts: {randomCard?.shots}</Typography.Body2>

          {!isAnswerShown && (
            <Button fullWidth onClick={showAnswerHandler}>
              Show Answer
            </Button>
          )}
          {isAnswerShown && (
            <>
              <Typography.Subtitle1>
                Answer: <Typography.Body2>{randomCard?.answer}</Typography.Body2>
              </Typography.Subtitle1>
              {randomCard?.answerImg && <img alt={'answer picture'} src={randomCard?.answerImg} />}
              <Button fullWidth onClick={() => saveCardGradeHandler(5)}>
                Next Question
              </Button>
            </>
          )}
        </div>
      </Card>
    </Page>
  )
}
