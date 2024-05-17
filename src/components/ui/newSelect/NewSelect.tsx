import { useState } from 'react'

import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { clsx } from 'clsx'

import s from './NewSelect.module.scss'

type OptionsType = {
  id: number
  value: string
}

type NewSelectProps = {
  disabled?: boolean
  fullWidth?: boolean
  options: OptionsType[]
  selectTitle?: string
}

export const NewSelect = ({
  disabled = false,
  fullWidth,
  options,
  selectTitle,
}: NewSelectProps) => {
  const [selectedPerson, setSelectedPerson] = useState(options[0].value)

  return (
    <>
      <Typography.Body2 className={clsx(s.SelectLabel, { [s.disabled]: disabled })}>
        {selectTitle}
      </Typography.Body2>
      <Listbox disabled={disabled} onChange={setSelectedPerson} value={selectedPerson}>
        {({ open }) => (
          <>
            <ListboxButton className={clsx(s.SelectTrigger, fullWidth && s.fullWidth)}>
              {selectedPerson}
              <Icon
                height={'16px'}
                iconId={open ? 'arrowUpOutline' : 'arrowDownOutline'}
                width={'16px'}
              />
            </ListboxButton>
            <ListboxOptions
              anchor={'bottom'}
              className={clsx(s.SelectGroup, fullWidth && s.fullWidth)}
            >
              {options.map(el => (
                <ListboxOption
                  className={({ focus, selected }) =>
                    clsx(s.SelectItem, {
                      [s.focus]: focus,
                      [s.selected]: selected,
                    })
                  }
                  key={el.id}
                  value={el.value}
                >
                  {el.value}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
    </>
  )
}
