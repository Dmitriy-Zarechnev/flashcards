import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { DeckFormValues, modalSchemes } from '@/entities/validationSchemes'
import { Button, ControlledCheckbox, Icon, TextField } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './DeckModalForm.module.scss'

import defaultImage from './card-image-default.webp'

type DeckModalFormProps = {
  btnTitle: string
  cardData?: DeckFormValues
  closeModal?: () => void
  onSubmit: (data: DeckFormValues) => Promise<any>
}

export const DeckModalForm = ({ btnTitle, cardData, closeModal, onSubmit }: DeckModalFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { control, handleSubmit } = useForm<DeckFormValues>({
    defaultValues: {
      name: cardData?.name || '',
      picture: cardData?.picture || defaultImage,
      private: cardData?.private || false,
    },
    resolver: zodResolver(modalSchemes.deck),
  })

  async function submitHandler(data: DeckFormValues) {
    setIsSubmitting(true)
    try {
      const res = await onSubmit(data)

      console.log(res)
      closeModal?.()
    } catch (error) {
      setIsSubmitting(false)
    }
  }

  return (
    <form className={s.form} noValidate onSubmit={handleSubmit(submitHandler)}>
      <div className={s.imgWrapper}>
        <img alt={'no photo'} src={cardData?.picture || defaultImage} />

        {/* here btn, with this button load new img and show it in img tag above */}

        <Button disabled={isSubmitting} fullWidth type={'button'} variant={'secondary'}>
          <Icon iconId={'imgOutline'} />
          Change Image
        </Button>
      </div>

      <TextField control={control} label={'Name Pack'} name={'name'} type={'text'} />

      <ControlledCheckbox control={control} name={'private'}>
        Private Deck
      </ControlledCheckbox>

      <div className={s.btnWrapper}>
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
