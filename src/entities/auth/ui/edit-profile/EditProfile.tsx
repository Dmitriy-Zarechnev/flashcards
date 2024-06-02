import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { FieldValues } from 'react-hook-form'

import { Card, IconButton, Typography } from '@/shared'

import s from './EditProfile.module.scss'

import { InfoPanel } from './Info-panel/InfoPannel'
import image from './catAvatar.webp'
import { FormPanel } from './form-panel/FormPanel'

export const EditProfile = () => {
  const [isEditName, setIsEditName] = useState(false)

  const name = 'Ivan'

  function logoutHandler() {
    console.log('logout')
  }

  function imageChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      const formData = new FormData()

      formData.append('image', event.target.files[0])

      console.log('Sending to server', formData.get('image'))
      console.log('Sending to server', formData)
    }
  }

  function changeNameHandler(data: FieldValues) {
    console.log(data)
    setIsEditName(!isEditName)
  }

  //** костыль, чтобы кнопка внутри label аботала */
  const onClickHandler: MouseEventHandler<HTMLLabelElement> = e => {
    if (e.target !== e.currentTarget) {
      e.currentTarget.click()
    }
  }

  return (
    <Card className={s.editProfile}>
      <Typography.H1>Personal Information</Typography.H1>
      <div className={s.imageContainer}>
        <img alt={'#'} src={image} />
        <label htmlFor={'imageChange'} onClick={onClickHandler}>
          {!isEditName && <IconButton iconId={'editOutline'} type={'submit'} />}
        </label>
        <input
          accept={'image/*'}
          id={'imageChange'}
          onChange={imageChangeHandler}
          style={{ display: 'none' }}
          type={'file'}
        />
      </div>
      {!isEditName ? (
        <InfoPanel
          editName={() => setIsEditName(!isEditName)}
          email={'j&johnson@gmail.com'}
          logout={logoutHandler}
          name={name}
        />
      ) : (
        <FormPanel name={name} onSubmit={changeNameHandler} />
      )}
    </Card>
  )
}
