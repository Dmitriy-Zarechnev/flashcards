import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './Input.module.scss'

type InputProps = {
  closeImg?: boolean
  error?: string
  eyeImg?: boolean
  labelTitle?: string
  searchImg?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  className,
  closeImg,
  disabled,
  error,
  eyeImg,
  labelTitle,
  placeholder,
  searchImg,
  ...rest
}: InputProps) => {
  return (
    <div className={clsx(s.box, className)}>
      {labelTitle && (
        <label className={s.label} htmlFor={'inputId'}>
          <Typography.Body2>{labelTitle}</Typography.Body2>
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
          placeholder={placeholder || labelTitle}
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
