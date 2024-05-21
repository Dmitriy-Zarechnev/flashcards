import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useId, useState } from 'react'

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
    const [searchText, setSearchText] = useState('')

    const inputValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.currentTarget.value)
    }

    const searchTextResetHandler = () => {
      setSearchText('')
    }

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
          onChange={inputValueChangeHandler}
          type={'text'}
          value={searchText}
        />
        {searchText && (
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
