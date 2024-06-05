import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { CardFormValues } from '@/entities'
import { PictureInput } from '@/entities/modals/ui/PictureInput'
import { modalSchemes } from '@/entities/validationSchemes'
import { CreateCardArgs } from '@/services'
import { Button, Select, TextField } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CardModalForm.module.scss'

import pictureDefaultCover from './../../../../shared/assets/deck-default-cover.webp'

type CardModalFormProps = {
  btnTitle: string
  cardData?: Omit<CreateCardArgs, 'id'>
  closeModal?: () => void
  onSubmit: (data: CardFormValues) => Promise<any>
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
    setValue('questionImg', '')
  }

  function handleAnswerImageChange(file: File) {
    setValue('answerImg', file)
  }

  function deleteAnswerImageHandler() {
    setValue('answerImg', '')
  }

  async function submitHandler(data: CardFormValues) {
    setIsSubmitting(true)
    try {
      await onSubmit(data)
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
