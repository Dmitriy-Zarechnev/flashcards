import { useState } from 'react'

import { IconButton, Input } from '@/shared'

import s from './PasswordInput.module.scss'

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false)

  const showPasswordClickHandler = () => {
    setShowPassword(!showPassword)
  }

  const showPasswordCondition = showPassword ? { type: 'text' } : { type: 'password' }

  return (
    <div className={s.passwordInputWrapper}>
      <Input className={s.eyePadding} {...showPasswordCondition} label={'Password'} />
      <IconButton
        className={s.eyeIcon}
        height={'20px'}
        iconId={showPassword ? 'eyeOffOutline' : 'eyeOutline'}
        onClick={showPasswordClickHandler}
        width={'20px'}
      />
    </div>
  )
}
