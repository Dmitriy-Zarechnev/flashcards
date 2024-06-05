import { useForm } from 'react-hook-form'

import { CardFormValues, DeckFormValues } from '@/entities'
import { modalSchemes } from '@/entities/validationSchemes'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/entities/modals/deck-modal/deck-modal-form/DeckModalForm.module.scss'

type CardModalFormProps = {
  closeModal?: () => void
  onSubmit: (data: CardFormValues) => Promise<any>
}

export const CardModalForm = ({ closeModal, onSubmit }: CardModalFormProps) => {
  const { control, handleSubmit, setValue } = useForm<CardFormValues>({
    defaultValues: {
      answer: '',
      answerImg: '',
      question: '',
      questionImg: '',
    },
    resolver: zodResolver(modalSchemes.card),
  })

  async function submitHandler(data: CardFormValues) {
    console.log(data)
  }

  return (
    <form className={s.form} noValidate onSubmit={handleSubmit(submitHandler)}>
      123
    </form>
  )
}
