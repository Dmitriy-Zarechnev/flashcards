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
      isPrivate: deckData?.isPrivate || false,
      name: deckData?.name || '',
    },
    resolver: zodResolver(modalSchemes.deck),
  })

  function handleImageChange(file: File) {
    setValue('cover', file)
  }

  function deleteImageHandler() {
    // setValue('cover', '')
    // если отправим на бек null, значит хотим именно удалить существующую каритнку
    setValue('cover', null)
  }

  async function submitHandler({ cover, isPrivate, name }: DeckFormValues) {
    setIsSubmitting(true)
    try {
      // сравним то что пришло с сервера, и что заполнил пользователь
      // если пользователь не поменял свойство, то не будем отправлять его с запросом
      const args = {} as DeckFormValues

      if (deckData?.cover !== cover) {
        args.cover = cover
      }
      if (deckData?.isPrivate !== isPrivate) {
        args.isPrivate = isPrivate
      }
      if (deckData?.name !== name) {
        args.name = name
      }

      await onSubmit(args)
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

      <ControlledCheckbox control={control} name={'isPrivate'}>
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
