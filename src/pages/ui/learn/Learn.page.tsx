import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetDeckByIdQuery, useGetRandomCardQuery, useSaveGradeCardMutation } from '@/services'
import { BackToDecks, Button, Card, Page, RadioGroup, Typography } from '@/shared'

import s from './Learn.module.scss'
const RadioGroupOptions = [
  {
    id: '1 - Did not know',
    label: 'Did not know',
    value: '1',
  },
  {
    id: '2 - Forgot',
    label: 'Forgot',
    value: '2',
  },
  {
    id: '3 - A lot of thought',
    label: 'A lot of thought',
    value: '3',
  },
  {
    id: '4 - Confused',
    label: 'Confused',
    value: '4',
  },
  {
    id: '5 - Knew the answer',
    label: 'Knew the answer',
    value: '5',
  },
]

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

  const [cardGrade, setCardGrade] = useState(randomCard?.grade.toString() || '1')

  console.log(cardGrade)
  console.log(randomCard?.grade)

  const saveCardGradeHandler = () => {
    saveCardGrade({ id: deckId, ...{ cardId: randomCard?.id, grade: +cardGrade } })
    setIsAnswerShown(false)
  }

  const changeGradeHandler = (value: string) => {
    setCardGrade(value)
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
              <RadioGroup
                onChange={(value: string) => changeGradeHandler(value)}
                options={RadioGroupOptions}
                value={cardGrade}
              />
              <Button fullWidth onClick={saveCardGradeHandler}>
                Next Question
              </Button>
            </>
          )}
        </div>
      </Card>
    </Page>
  )
}
