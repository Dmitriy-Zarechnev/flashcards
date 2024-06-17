import { ChangeEvent, ComponentPropsWithoutRef, useRef, useState } from 'react'

import { Button, Icon } from '@/shared'

import s from './PictureInput.module.scss'

type PictureInputProps = {
  btnDisable: boolean
  coverFromServer: string
  deleteImageHandlerCb: () => void
  handleImageChangeCb: (file: File) => void
  pictureDefaultCover: string
} & ComponentPropsWithoutRef<'div'>

export const PictureInput = ({
  btnDisable,
  coverFromServer,
  deleteImageHandlerCb,
  handleImageChangeCb,
  pictureDefaultCover,
}: PictureInputProps) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(coverFromServer)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleButtonClick() {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click()
    }
  }

  function deleteImageHandler() {
    // Если уже было выбрано изображение, освобождаем его URL
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage)
    }

    setSelectedImage(undefined)
    deleteImageHandlerCb()
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      // Освобождаем предыдущий URL, если он существует
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage)
      }

      const newImageUI = URL.createObjectURL(event.target.files[0])

      setSelectedImage(newImageUI)

      /** метод RHF засетать изображение при его загрузке */
      handleImageChangeCb(event.target.files[0])
    }
  }

  return (
    <div className={s.pictureInput}>
      <img alt={'no photo'} src={selectedImage || pictureDefaultCover} />

      <div className={s.btnWrapper}>
        {selectedImage && (
          <Button
            disabled={btnDisable}
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
          disabled={btnDisable}
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
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
          type={'file'}
        />
      </div>
    </div>
  )
}
