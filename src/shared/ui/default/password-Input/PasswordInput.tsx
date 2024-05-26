import { forwardRef, useState } from 'react'

import { IconButton } from '@/shared'
import { clsx } from 'clsx'

import s from './PasswordInput.module.scss'

import { Input, InputProps } from '../input'

export type PasswordInputProps = {
  className?: string
} & InputProps

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...inputProps }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const showPasswordClickHandler = () => {
      setShowPassword(!showPassword)
    }

    const showPasswordCondition = showPassword ? { type: 'text' } : { type: 'password' }

    return (
      <div className={clsx(s.passwordInputWrapper, className)}>
        <Input inputClassName={s.eyePadding} {...showPasswordCondition} {...inputProps} ref={ref} />
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
)
