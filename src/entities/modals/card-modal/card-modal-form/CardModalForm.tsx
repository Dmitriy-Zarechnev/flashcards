import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { CardFormValues } from '@/entities'
import { modalSchemes } from '@/entities/validationSchemes'
import { CreateCardArgs } from '@/services'
import { Button, Select, TextField } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CardModalForm.module.scss'

import { PictureInput } from '../../ui/picture-input'
import pictureDefaultCover from './../../../../shared/assets/deck-default-cover.webp'

type CardModalFormProps = {
  btnTitle: string
  cardData?: { answerImg?: string; questionImg?: string } & Omit<
    CreateCardArgs,
    'answerImg' | 'id' | 'questionImg'
  >
  closeModal?: () => void
  onSubmit?: (data: CardFormValues) => Promise<any>
}

type selectValuesTypes = 'picture' | 'text'

export const CardModalForm = ({ btnTitle, cardData, closeModal, onSubmit }: CardModalFormProps) => {
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
          pictureDefaultCover={pictureDefaultCover}
        />
      )}

      <TextField control={control} label={'Answer'} name={'answer'} type={'text'} />

      {isPictureMode && (
        <PictureInput
          btnDisable={isSubmitting}
          coverFromServer={cardData?.answerImg || ''}
          deleteImageHandlerCb={deleteAnswerImageHandler}
          handleImageChangeCb={handleAnswerImageChange}
          pictureDefaultCover={pictureDefaultCover}
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
