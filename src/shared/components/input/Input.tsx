import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/shared/components/icon'
import { Typography } from '@/shared/components/typography'
import { clsx } from 'clsx'

import s from './Input.module.scss'

type InputProps = {
  closeImg?: boolean
  error?: string
  eyeImg?: boolean
  label?: string
  searchImg?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  className,
  closeImg,
  disabled,
  error,
  eyeImg,
  label,
  placeholder,
  searchImg,
  ...rest
}: InputProps) => {
  return (
    <div className={clsx(s.box, className)}>
      {label && (
        <label className={s.label} htmlFor={'inputId'}>
          <Typography.Body2>{label}</Typography.Body2>
        </label>
      )}
      <div className={s.inputWrapper}>
        {searchImg && (
          <Icon
            className={clsx(s.searchIcon, disabled && s.disabled)}
            height={'20px'}
            iconId={'searchOutline'}
            width={'20px'}
          />
        )}
        <input
          className={clsx(
            s.input,
            eyeImg && s.eyePadding,
            searchImg && s.searchPadding,
            error && s.error,
            disabled && s.disabled
          )}
          disabled={disabled}
          id={'inputId'}
          {...rest}
          placeholder={placeholder || label}
        />
        {eyeImg && (
          <Icon
            className={clsx(s.eyeIcon, disabled && s.disabled)}
            height={'20px'}
            iconId={'eyeOutline'}
            width={'20px'}
          />
        )}
        {closeImg && (
          <Icon className={s.eyeIcon} height={'16px'} iconId={'closeOutline'} width={'16px'} />
        )}
      </div>
      <Typography.Caption className={s.errorText}>{error}</Typography.Caption>
    </div>
  )
}
