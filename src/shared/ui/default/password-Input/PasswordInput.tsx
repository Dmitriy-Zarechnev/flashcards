import { useState } from 'react'

import { IconButton, Input } from '@/shared'
import { InputProps } from '@/shared/ui/default/input'
import { clsx } from 'clsx'

import s from './PasswordInput.module.scss'

type PasswordInputProps = {
  className?: string
} & InputProps

export const PasswordInput = ({ className, ...inputProps }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const showPasswordClickHandler = () => {
    setShowPassword(!showPassword)
  }

  const showPasswordCondition = showPassword ? { type: 'text' } : { type: 'password' }

  return (
    <div className={clsx(s.passwordInputWrapper, className)}>
      <Input inputClassName={s.eyePadding} {...showPasswordCondition} {...inputProps} />
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
