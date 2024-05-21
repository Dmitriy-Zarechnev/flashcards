import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'

import { IconButton, Input } from '@/shared'
import { Icon } from '@/shared/components/icon'
import { clsx } from 'clsx'

import s from './SearchInput.module.scss'

type SearchInputProps = {
  error?: string
} & ComponentPropsWithoutRef<'input'>

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, disabled = false, error, ...rest }, ref) => {
    const inputId = useId()

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
          id={inputId}
          label={'Search Input'}
        />
        <IconButton
          className={clsx(s.closeIcon)}
          height={'20px'}
          iconId={'closeOutline'}
          width={'20px'}
        />
      </div>
    )
  }
)
