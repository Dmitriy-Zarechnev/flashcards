import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { DeckFormValues, modalSchemes } from '@/entities/validationSchemes'
import { Button, ControlledCheckbox, TextField } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './DeckModalForm.module.scss'

import cardDefaultCover from '../../../../shared/assets/card-default-cover.webp'
import { PictureInput } from '../../ui/picture-input'

type DeckModalFormProps = {
  btnTitle: string
  closeModal?: () => void
  deckData?: DeckFormValues
  onSubmit: (data: DeckFormValues) => Promise<any>
}

export const DeckModalForm = ({ btnTitle, closeModal, deckData, onSubmit }: DeckModalFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { control, handleSubmit, setValue } = useForm<DeckFormValues>({
    defaultValues: {
      cover: '',
      name: deckData?.name || '',
      private: deckData?.private || false,
    },
    resolver: zodResolver(modalSchemes.deck),
  })

  function handleImageChange(file: File) {
    setValue('cover', file)
  }

  function deleteImageHandler() {
    setValue('cover', '')
  }

  async function submitHandler(data: DeckFormValues) {
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
      <PictureInput
        btnDisable={isSubmitting}
        coverFromServer={deckData?.cover}
        deleteImageHandlerCb={deleteImageHandler}
        handleImageChangeCb={handleImageChange}
        pictureDefaultCover={cardDefaultCover}
      />

      <TextField control={control} label={'Name Pack'} name={'name'} type={'text'} />

      <ControlledCheckbox control={control} name={'private'}>
        Private Deck
      </ControlledCheckbox>

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
