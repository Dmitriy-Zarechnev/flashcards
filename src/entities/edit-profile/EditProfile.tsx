import { ChangeEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { useLogoutMutation, useMeQuery, useUpdateUserDataMutation } from '@/services'
import { flashcardsApi } from '@/services/api/flashcards.api'
import { Card, HeaderAvatar, IconButton, LineLoader, Typography } from '@/shared'

import s from './EditProfile.module.scss'

import { EditProfileFormValues } from '../validationSchemes'
import { FormPanel, InfoPanel } from './_components'

export const EditProfile = () => {
  const dispatch = useDispatch()
  const [logout] = useLogoutMutation()

  // ----- Показывать или нет поле редактирования имени -----
  const [isEditName, setIsEditName] = useState(false)

  // ----- Запрос для получения id пользователя -----
  const { data: me, isLoading: isMeLoading, refetch } = useMeQuery()

  // Сохраняем File изображения в состоянии
  const [avatarFile, setAvatarFile] = useState<File | null>(null)

  // Добавили картинку в ref
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Click по кнопке-инпуту аватара
  function handleButtonClick() {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click()
    }
  }

  // ----- Update данных пользователя -----
  const [updateUser, { isLoading: isUpdateUserDataLoading }] = useUpdateUserDataMutation()

  const updateProfile = async (data: EditProfileFormValues) => {
    await updateUser({ ...data, avatar: avatarFile })
    await refetch()
    toast.success("You've successfully changed your profile name")
    setIsEditName(!isEditName)
  }

  // Получили картинку, которую загрузил пользователь
  async function imageChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      setAvatarFile(event.target.files[0])

      await updateUser({ avatar: event.target.files[0], name: me?.name || 'name' })
      await refetch()
      toast.success("You've successfully changed your avatar. Looking good!")

      //** to clean ref to load img with the same name once more  */
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  // logOut логика
  function logoutHandler() {
    logout()
    dispatch(flashcardsApi.util.resetApiState())
  }

  // ----- Показывать Loader -----
  const isShowLineLoader = isMeLoading || isUpdateUserDataLoading

  return (
    <>
      {isShowLineLoader && <LineLoader />}
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
            logout={logoutHandler}
            name={me?.name}
          />
        ) : (
          <FormPanel name={me?.name} onSubmit={updateProfile} />
        )}
      </Card>
    </>
  )
}
