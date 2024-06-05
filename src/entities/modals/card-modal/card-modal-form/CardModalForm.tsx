import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { CardFormValues } from '@/entities'
import { modalSchemes } from '@/entities/validationSchemes'
import { Button, Select, TextField } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './CardModalForm.module.scss'

type CardModalFormProps = {
  btnTitle: string
  closeModal?: () => void
  onSubmit: (data: CardFormValues) => Promise<any>
}

export const CardModalForm = ({ btnTitle, closeModal, onSubmit }: CardModalFormProps) => {
  const { control, handleSubmit, setValue } = useForm<CardFormValues>({
    defaultValues: {
      answer: '',
      answerImg: '',
      question: '',
      questionImg: '',
    },
    resolver: zodResolver(modalSchemes.card),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentSelect, setCurrentSelect] = useState('text')

  const options = [
    { label: 'Text', value: 'text' },
    { label: 'Picture', value: 'picture' },
  ]

  function selectHandler(value: number | string) {
    setCurrentSelect(value as string)
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
      <TextField control={control} label={'Answer'} name={'answer'} type={'text'} />

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
