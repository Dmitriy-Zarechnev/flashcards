import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { CardFormValues } from '@/entities'
import { PictureInput } from '@/entities/modals/ui/picture-input'
import { modalSchemes } from '@/entities/validationSchemes'
import { Button, CardData, Select, TextField, cardDefaultCover } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CardModalForm.module.scss'

type CardModalFormProps = {
  btnTitle: string
  cardData?: CardData
  closeModal?: () => void
  onSubmit?: (data: CardFormValues) => Promise<any>
  setBlocked?: (blocked: boolean) => void
}

type selectValuesTypes = 'picture' | 'text'

export const CardModalForm = ({
  btnTitle,
  cardData,
  closeModal,
  onSubmit,
  setBlocked,
}: CardModalFormProps) => {
  const { control, handleSubmit, setValue } = useForm<CardFormValues>({
    defaultValues: {
      answer: cardData?.answer || '',
      answerImg: cardData?.answerImg || '',
      question: cardData?.question || '',
      questionImg: cardData?.questionImg || '',
    },
    resolver: zodResolver(modalSchemes.card),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentSelect, setCurrentSelect] = useState<selectValuesTypes>(
    cardData?.answerImg ? 'picture' : 'text'
  )

  const isPictureMode = currentSelect === 'picture'

  const options = [
    { label: 'Text', value: 'text' },
    { label: 'Picture', value: 'picture' },
  ]

  function selectHandler(value: number | string) {
    setCurrentSelect(value as selectValuesTypes)
  }

  function handleQuestionImageChange(file: File) {
    setValue('questionImg', file)
  }

  function deleteQuestionImageHandler() {
    // если отправим на бек null, значит хотим именно удалить существующую каритнку
    setValue('questionImg', null)
  }

  function handleAnswerImageChange(file: File) {
    setValue('answerImg', file)
  }

  function deleteAnswerImageHandler() {
    // если отправим на бек null, значит хотим именно удалить существующую каритнку
    setValue('answerImg', null)
  }

  async function submitHandler({ answer, answerImg, question, questionImg }: CardFormValues) {
    setIsSubmitting(true)
    try {
      // сравним то что пришло с сервера, и что заполнил пользователь
      // если пользователь не поменял свойство, то не будем отправлять его с запросом
      const args = {} as CardFormValues

      if (cardData?.question !== question) {
        args.question = question
      }
      if (cardData?.answer !== answer) {
        args.answer = answer
      }

      if (isPictureMode) {
        if (cardData?.answerImg !== answerImg) {
          args.answerImg = answerImg
        }
        if (cardData?.questionImg !== questionImg) {
          args.questionImg = questionImg
        }
      }

      await onSubmit?.(args)

      closeModal?.()
    } catch (error) {
      setIsSubmitting(false)
    }
  }

  return (
    <form className={s.form} noValidate onSubmit={handleSubmit(submitHandler)}>
      <Select
        currentValue={currentSelect}
        disabled={isSubmitting}
        onValueChange={selectHandler}
        options={options}
        selectTitle={'Question Format'}
      />

      <TextField control={control} label={'Question'} name={'question'} type={'text'} />

      {isPictureMode && (
        <PictureInput
          btnDisable={isSubmitting}
          coverFromServer={cardData?.questionImg || ''}
          deleteImageHandlerCb={deleteQuestionImageHandler}
          handleImageChangeCb={handleQuestionImageChange}
          pictureDefaultCover={cardDefaultCover}
          setBlocked={setBlocked}
        />
      )}

      <TextField control={control} label={'Answer'} name={'answer'} type={'text'} />

      {isPictureMode && (
        <PictureInput
          btnDisable={isSubmitting}
          coverFromServer={cardData?.answerImg || ''}
          deleteImageHandlerCb={deleteAnswerImageHandler}
          handleImageChangeCb={handleAnswerImageChange}
          pictureDefaultCover={cardDefaultCover}
          setBlocked={setBlocked}
        />
      )}

      <div className={s.footerBtnWrapper}>
        <Button onClick={closeModal} type={'button'} variant={'secondary'}>
          Cancel
        </Button>
        <Button disabled={isSubmitting} type={'submit'} variant={'primary'}>
          {btnTitle}
        </Button>
      </div>
    </form>
  )
}
