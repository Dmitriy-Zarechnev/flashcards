import { ChangeEvent, useRef, useState } from 'react'

import { EditProfileFormValues } from '@/entities'
import { useMeQuery, useUpdateUserDataMutation } from '@/services'
import { Card, HeaderAvatar, IconButton, Typography } from '@/shared'

import s from './EditProfile.module.scss'

import { InfoPanel } from './Info-panel/InfoPannel'
import { FormPanel } from './form-panel/FormPanel'

export const EditProfile = () => {
  // ----- Показывать или нет поле редактирования имени -----
  const [isEditName, setIsEditName] = useState(false)

  // ----- Запрос для получения id пользователя -----
  const { data: me } = useMeQuery()

  // ----- Update данных пользователя -----
  const [updateUser] = useUpdateUserDataMutation()

  const updateProfile = (data: EditProfileFormValues) => {
    updateUser(data)
    setIsEditName(!isEditName)
  }

  const changeProfilePhoto = (file: File) => {
    console.log(file)
  }
  // logOut логика
  const logOut = () => {}

  //
  const fileInputRef = useRef<HTMLInputElement>(null)

  //
  function handleButtonClick() {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click()
    }
  }
  //
  function imageChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      changeProfilePhoto(event.target.files[0])

      //** to clean ref to load img with the same name once more  */
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  return (
    <Card className={s.editProfile}>
      <Typography.H1>Personal Information</Typography.H1>
      <div className={s.avatarContainer}>
        <HeaderAvatar
          name={me?.name}
          noHover
          photo={me?.avatar}
          photoDescription={`${me?.name}-avatar`}
          style={{ height: '100px', width: '100px' }}
          textStyle={{ fontSize: '70px' }}
        />
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
          email={me?.email}
          logout={logOut}
          name={me?.name}
        />
      ) : (
        <FormPanel name={me?.name} onSubmit={updateProfile} />
      )}
    </Card>
  )
}
