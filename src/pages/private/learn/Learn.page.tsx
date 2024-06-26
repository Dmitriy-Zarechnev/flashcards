import { useMemo, useState } from 'react'

import { BackToDecks } from '@/pages/private/_components/back-to-decks/BackToDecks'
import { useIdFromParams } from '@/pages/private/_hooks/useIdFromParams'
import { useGetDeckByIdQuery, useGetRandomCardQuery, useSaveGradeCardMutation } from '@/services'
import { Button, Card, LineLoader, Page, RadioGroup, Typography } from '@/shared'

import s from './Learn.module.scss'

export const LearnPage = () => {
  // Options для Radio Grade
  const RadioGroupOptions = useMemo(
    () => [
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
    ],
    []
  )

  // State для отображения и скрытия блока с ответом
  const [isAnswerShown, setIsAnswerShown] = useState(false)

  // ----- Достали deck id из url-а -----
  const { deckId } = useIdFromParams()

  // ----- Запросили deck по id чтобы получить name -----
  const { data: deckByIdData } = useGetDeckByIdQuery({ id: deckId || '' })

  // ----- Запросили случайную карточку -----
  const {
    data: randomCard,
    isLoading: isGetRandomCardLoading,
    refetch,
  } = useGetRandomCardQuery({ id: deckId || '' })

  // ----- Запрос на изменение grade карточки -----
  const [saveCardGrade, { isLoading: isSaveCardGradeLoading }] = useSaveGradeCardMutation()

  // State для изменения grade карточки
  const [cardGrade, setCardGrade] = useState(randomCard?.grade.toString() || '')

  // функция для отправки grade и запроса новой карточки
  async function saveCardGradeHandler() {
    // Отправили новый grade карточки
    await saveCardGrade({
      id: deckId,
      ...{ cardId: randomCard?.id, grade: +cardGrade },
    })

    // Запросили новую случайную карточку
    await refetch()

    // Удалили локальный grade
    setCardGrade('')

    // Убрали блок с ответом
    setIsAnswerShown(false)
  }

  // ----- Показывать Loader -----
  const isShowLineLoader = isGetRandomCardLoading || isSaveCardGradeLoading

  return (
    <>
      {isShowLineLoader && <LineLoader />}
      <Page>
        <BackToDecks title={'Back to Decks List'} />
        <Card className={s.learn}>
          <Typography.H1>
            Learn <span>{deckByIdData?.name}123</span>
          </Typography.H1>
          <div className={s.questionWrapper}>
            <Typography.Subtitle1>Question: {randomCard?.question}</Typography.Subtitle1>
            {randomCard?.questionImg && (
              <img alt={'question picture'} className={s.learnImg} src={randomCard?.questionImg} />
            )}
            <Typography.Body2>Counts of attempts: {randomCard?.shots}</Typography.Body2>

            {!isAnswerShown && (
              <Button fullWidth onClick={() => setIsAnswerShown(true)}>
                Show Answer
              </Button>
            )}
            {isAnswerShown && (
              <>
                <Typography.Subtitle1>Answer: {randomCard?.answer}</Typography.Subtitle1>
                {randomCard?.answerImg && (
                  <img alt={'answer picture'} className={s.learnImg} src={randomCard?.answerImg} />
                )}
                <Typography.Subtitle1>Rate yourself:</Typography.Subtitle1>
                <RadioGroup
                  onValueChange={setCardGrade}
                  options={RadioGroupOptions}
                  value={cardGrade || randomCard?.grade.toString()}
                />
                <Button fullWidth onClick={saveCardGradeHandler}>
                  Next Question
                </Button>
              </>
            )}
          </div>
        </Card>
      </Page>
    </>
  )
}
