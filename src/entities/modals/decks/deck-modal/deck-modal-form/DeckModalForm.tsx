import { ChangeEvent, MouseEventHandler, useState } from 'react'
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
  const pictureDefault = cardData?.cover || defaultImage

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedImage, setSelectedImage] = useState(pictureDefault)

  const { control, handleSubmit, setValue } = useForm<DeckFormValues>({
    defaultValues: {
      cover: pictureDefault,
      name: cardData?.name || '',
      private: cardData?.private || false,
    },
    resolver: zodResolver(modalSchemes.deck),
  })

  //** костыль, чтобы кнопка внутри label аботала */
  const onClickHandler: MouseEventHandler<HTMLLabelElement> = e => {
    if (e.target !== e.currentTarget) {
      e.currentTarget.click()
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      const newImageUI = URL.createObjectURL(event.target.files[0])

      setSelectedImage(newImageUI)

      /** метод RHF засетать изображение при его загрузке */
      setValue('cover', event.target.files[0])
    }
  }

  async function submitHandler(data: DeckFormValues) {
    console.log(data)
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
        <img alt={'no photo'} src={selectedImage} />

        <label className={s.imageUploadLabel} htmlFor={'image-upload'} onClick={onClickHandler}>
          <Button disabled={isSubmitting} fullWidth type={'button'} variant={'secondary'}>
            <Icon iconId={'imgOutline'} />
            Change Image
          </Button>
        </label>
        <input
          accept={'image/*'}
          id={'image-upload'}
          onChange={handleImageChange}
          style={{ display: 'none' }}
          type={'file'}
        />
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
