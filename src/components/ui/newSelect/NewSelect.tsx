import { useState } from 'react'

import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { clsx } from 'clsx'

import s from './NewSelect.module.scss'

const people = [
  { id: 1, name: 'Active' },
  { id: 2, name: 'Paused' },
  { id: 3, name: 'Delayed' },
  { id: 4, name: 'Canceled' },
]

type NewSelectProps = {
  disabled?: boolean
}

export const NewSelect = ({ disabled = false }: NewSelectProps) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <>
      <Typography.Body2 className={clsx(s.SelectLabel, { [s.disabled]: disabled })}>
        Select Label
      </Typography.Body2>
      <Listbox disabled={disabled} onChange={setSelectedPerson} value={selectedPerson}>
        {({ open }) => (
          <>
            <ListboxButton className={s.SelectTrigger}>
              {selectedPerson.name}
              <Icon height={'16px'} iconId={open ? 'eyeOutline' : 'searchOutline'} width={'16px'} />
            </ListboxButton>
            <ListboxOptions anchor={'bottom'} className={s.SelectGroup}>
              {people.map(person => (
                <ListboxOption
                  className={({ active, selected }) =>
                    clsx(s.SelectItem, {
                      [s.focus]: active,
                      [s.selected]: selected,
                    })
                  }
                  key={person.id}
                  value={person}
                >
                  {person.name}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
    </>
  )
}
