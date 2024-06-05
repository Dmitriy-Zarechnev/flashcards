import { ChangeEvent, useRef, useState } from 'react'
import { FieldValues } from 'react-hook-form'

import { Card, IconButton, Typography } from '@/shared'

import s from './EditProfile.module.scss'

import { InfoPanel } from './Info-panel/InfoPannel'
import image from './catAvatar.webp'
import { FormPanel } from './form-panel/FormPanel'

type EditProfileProps = {
  changeProfileImg: (file: File) => void
  email: string
  logout: () => void
  name: string
}

export const EditProfile = ({ changeProfileImg, email, logout, name }: EditProfileProps) => {
  const [isEditName, setIsEditName] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleButtonClick() {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click()
    }
  }

  function imageChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      changeProfileImg(event.target.files[0])

      //** to clean ref to load img with the same name once more  */
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  function changeNameHandler(data: FieldValues) {
    console.log(data)
    setIsEditName(!isEditName)
  }

  return (
    <Card className={s.editProfile}>
      <Typography.H1>Personal Information</Typography.H1>
      <div className={s.imageContainer}>
        <img alt={'#'} src={image} />

        {!isEditName && <IconButton iconId={'editOutline'} onClick={handleButtonClick} />}

        <input
          accept={'image/*'}
          onChange={imageChangeHandler}
          ref={fileInputRef}
          style={{ display: 'none' }}
          type={'file'}
        />
      </div>
      {!isEditName ? (
        <InfoPanel
          editName={() => setIsEditName(!isEditName)}
          email={email}
          logout={logout}
          name={name}
        />
      ) : (
        <FormPanel name={name} onSubmit={changeNameHandler} />
      )}
    </Card>
  )
}
