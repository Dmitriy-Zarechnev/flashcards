import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/components/ui/icon/icon'

import s from './input.module.scss'

type InputProps = {
  error?: string
  eyeImg?: boolean
  labelTitle?: string
  searchImg?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  className,
  disabled,
  error,
  eyeImg,
  labelTitle,
  placeholder,
  searchImg,
  ...rest
}: InputProps) => {
  return (
    <div className={s.box}>
      {labelTitle && (
        <label className={`${s.label}`} htmlFor={'inputId'}>
          {labelTitle}
        </label>
      )}
      <div className={s.inputWrapper}>
        {searchImg && (
          <Icon
            className={`${s.searchIcon} ${disabled && s.disabled}`}
            height={'20px'}
            iconId={'searchOutline'}
            width={'20px'}
          />
        )}
        <input
          className={`${s.input} ${eyeImg && s.eyePadding} ${searchImg && s.searchPadding} 
          ${error && s.error} ${disabled && s.disabled} ${className}`}
          disabled={disabled}
          id={'inputId'}
          {...rest}
          placeholder={placeholder || labelTitle}
        />
        {eyeImg && (
          <Icon
            className={`${s.eyeIcon} ${disabled && s.disabled}`}
            height={'20px'}
            iconId={'eyeOutline'}
            width={'20px'}
          />
        )}
      </div>
      <span className={`${s.errorText}`}>{error}</span>
    </div>
  )
}
