import { ChangeEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { DeckFormValues, modalSchemes } from '@/entities/validationSchemes'
import { Button, ControlledCheckbox, Icon, TextField } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './DeckModalForm.module.scss'

import cardDefaultCover from '../../../../shared/assets/card-default-cover.webp'

type DeckModalFormProps = {
  btnTitle: string
  closeModal?: () => void
  deckData?: DeckFormValues
  onSubmit: (data: DeckFormValues) => Promise<any>
}

export const DeckModalForm = ({ btnTitle, closeModal, deckData, onSubmit }: DeckModalFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedImage, setSelectedImage] = useState(deckData?.cover)

  const { control, handleSubmit, setValue } = useForm<DeckFormValues>({
    defaultValues: {
      cover: '',
      name: deckData?.name || '',
      private: deckData?.private || false,
    },
    resolver: zodResolver(modalSchemes.deck),
  })

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      const newImageUI = URL.createObjectURL(event.target.files[0])

      setSelectedImage(newImageUI)

      /** метод RHF засетать изображение при его загрузке */
      setValue('cover', event.target.files[0])
    }
  }

  /** bound image-input to button */
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleButtonClick() {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click()
    }
  }

  function deleteImageHandler() {
    setSelectedImage(undefined)
    setValue('cover', '')

    //** to make able  */
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
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
      <div className={s.imgWrapper}>
        <img alt={'no photo'} src={selectedImage || cardDefaultCover} />

        <div className={s.imageBtnWrapper}>
          {selectedImage && (
            <Button
              disabled={isSubmitting}
              fullWidth
              onClick={deleteImageHandler}
              type={'button'}
              variant={'secondary'}
            >
              <Icon iconId={'trashOutline'} />
              Delete Image
            </Button>
          )}

          <Button
            disabled={isSubmitting}
            fullWidth
            onClick={handleButtonClick}
            type={'button'}
            variant={'secondary'}
          >
            <Icon iconId={'imgOutline'} />
            Change Image
          </Button>
          <input
            accept={'image/*'}
            id={'image-upload'}
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
            type={'file'}
          />
        </div>
      </div>

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
