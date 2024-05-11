import { ComponentPropsWithoutRef } from 'react'

import s from './input.module.scss'

type InputProps = {
  className?: string
  error?: string
  labelTitle: string
} & ComponentPropsWithoutRef<'input'>

export const Input = ({ className, error, labelTitle, ...rest }: InputProps) => {
  return (
    <div className={s.box}>
      <label className={`${s.label}`} htmlFor={'inputId'}>
        {labelTitle}
      </label>
      <input
        className={`${s.input} ${error && s.error} ${className}`}
        id={'inputId'}
        {...rest}
        placeholder={labelTitle}
      />
      <span className={`${s.errorText}`}>{error}</span>
    </div>
  )
}
