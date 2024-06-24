import { ChangeEvent, ComponentPropsWithoutRef, useRef, useState } from 'react'

import { Button, Icon } from '@/shared'

import s from './PictureInput.module.scss'

type PictureInputProps = {
  btnDisable: boolean
  coverFromServer: string
  deleteImageHandlerCb: () => void
  handleImageChangeCb: (file: File) => void
  pictureDefaultCover: string
  setBlocked?: (blocked: boolean) => void /* 🔹 Добавляем пропс для блокировки */
} & ComponentPropsWithoutRef<'div'>

export const PictureInput = ({
  btnDisable,
  coverFromServer,
  deleteImageHandlerCb,
  handleImageChangeCb,
  pictureDefaultCover,
  setBlocked,
}: PictureInputProps) => {
  /* Локальное состояние нужно для реактивного отслеживания и отображения URL изображения.
     Ref нужен для управления поведением скрытого <input type="file"> */

  const [selectedImage, setSelectedImage] = useState<string | undefined>(coverFromServer)
  const fileInputRef = useRef<HTMLInputElement>(null)

  /* почему ref а не локлаьное состояние? при работе с input, если мы будем работать через локальное состояние
     то при замене blob-картинки приедтся перерисовывать компоненту, использование ref помогает избежать перерисовки */

  function imageChangeClick() {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click()
    }
  }

  function deleteBlob() {
    // удаляем изображение из памяти по ссылке
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage)
    }
  }

  function deleteImageHandler() {
    deleteBlob()

    // удаляем саму ссылку на изображение из локального стейта
    setSelectedImage(undefined)

    // удалям картинку в форме
    deleteImageHandlerCb()

    // удаляем предыдущее значение в input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    /* 🔹 Блокируем взаимодействие => имеет смысл блокировать именно после этой функции, а не после клика по кнопке,
    так как именно эта функция выполняется после подтверждения выбора картинки */
    if (setBlocked) {
      setBlocked(true)
    }

    /* 🔹 разблокируем через короткое время, чтобы пользователь не сделал мисклик, когда выбирал картинку */
    setTimeout(() => {
      if (setBlocked) {
        setBlocked(false)
      }
    }, 500)

    if (event.target.files && event.target.files[0]) {
      deleteBlob()

      // генерация новой blob-картинки
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
          onClick={imageChangeClick}
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
