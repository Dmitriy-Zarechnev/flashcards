import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Icon, IconButton, Input } from '@/shared'
import { clsx } from 'clsx'

import s from './SearchInput.module.scss'

type SearchInputProps = {
  error?: string
  searchTextResetHandler?: () => void
} & ComponentPropsWithoutRef<'input'>

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className,
      disabled = false,
      error,
      onChange,
      placeholder,
      searchTextResetHandler,
      value,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={clsx(s.searchInputWrapper, className)} {...rest} ref={ref}>
        <Icon
          className={clsx(s.searchIcon)}
          height={'20px'}
          iconId={'searchOutline'}
          width={'20px'}
        />
        <Input
          className={s.searchPadding}
          disabled={disabled}
          error={error}
          onChange={onChange}
          placeholder={placeholder}
          type={'text'}
          value={value}
        />
        {value && (
          <IconButton
            className={clsx(s.closeIcon)}
            height={'20px'}
            iconId={'closeOutline'}
            onClick={searchTextResetHandler}
            width={'20px'}
          />
        )}
      </div>
    )
  }
)
