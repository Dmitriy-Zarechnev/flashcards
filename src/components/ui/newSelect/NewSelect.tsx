import { useState } from 'react'

import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

import s from './NewSelect.module.scss'

const people = [
  { id: 1, name: 'Active' },
  { id: 2, name: 'Paused' },
  { id: 3, name: 'Delayed' },
  { id: 4, name: 'Canceled' },
]

export const NewSelect = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <>
      <Typography.Body2 className={s.SelectLabel}>Select Label</Typography.Body2>
      <Listbox onChange={setSelectedPerson} value={selectedPerson}>
        {({ open }) => (
          <>
            <ListboxButton className={s.SelectTrigger}>
              {selectedPerson.name}
              <Icon height={'16px'} iconId={open ? 'eyeOutline' : 'searchOutline'} width={'16px'} />
            </ListboxButton>
            <ListboxOptions anchor={'bottom'} className={s.SelectGroup}>
              {people.map(person => (
                <ListboxOption className={s.SelectItem} key={person.id} value={person}>
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
