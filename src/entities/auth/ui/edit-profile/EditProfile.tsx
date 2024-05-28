import { useState } from 'react'
import { FieldValues } from 'react-hook-form'

import { InfoPanel } from '@/entities/auth/ui/edit-profile/Info-panel/InfoPannel'
import { FormPanel } from '@/entities/auth/ui/edit-profile/form-panel/FormPanel'
import { Card, IconButton, Typography } from '@/shared'

import s from './EditProfile.module.scss'

import image from './catAvatar.webp'

export const EditProfile = () => {
  const [isEditName, setIsEditName] = useState(false)
  const [isEditPhoto, setIsEditPhoto] = useState(false)

  const name = 'Ivan'

  function logoutHandler() {
    console.log('logout')
  }

  function submitHandler(data: FieldValues) {
    console.log(data)
    setIsEditName(!isEditName)
  }

  return (
    <Card className={s.editProfile}>
      <Typography.H1>Personal Information</Typography.H1>
      <div className={s.imageContainer}>
        <img alt={'#'} src={image} />
        {!isEditName && <IconButton iconId={'editOutline'} onClick={() => {}} />}
      </div>
      {!isEditName ? (
        <InfoPanel
          editName={() => setIsEditName(!isEditName)}
          email={'j&johnson@gmail.com'}
          logout={logoutHandler}
          name={name}
        />
      ) : (
        <FormPanel name={name} onSubmit={submitHandler} />
      )}
    </Card>
  )
}
