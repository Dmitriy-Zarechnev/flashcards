// import { Typography } from '@/components/ui/typography'
// import { Select } from '@headlessui/react'
//
import s from '@/components/ui/select/Select.module.scss'
// type OptionItems = {
//   id: number
//   text: string
//   value: string
// }
//
// export const NewSelect = () => {
//   const optionItems: OptionItems[] = [
//     { id: 1, text: 'Orange', value: 'orange' },
//     { id: 2, text: 'Apple', value: 'apple' },
//     { id: 3, text: 'Banana', value: 'banana' },
//   ]
//
//   return (
//     <div>
//       <Typography.Body2 className={s.SelectLabel}>Select Label</Typography.Body2>
//       <Select className={s.SelectTrigger} data-focus data-hover>
//         <option className={s.SelectItem} data-hover={'active'} value={'active'}>
//           Active
//         </option>
//         <option className={s.SelectItem} value={'paused'}>
//           Paused
//         </option>
//         <option className={s.SelectItem} value={'delayed'}>
//           Delayed
//         </option>
//         <option className={s.SelectItem} value={'canceled'}>
//           Canceled
//         </option>
//       </Select>
//     </div>
//   )
// }

import { Fragment, useState } from 'react'

import { Listbox, Transition } from '@headlessui/react'

const people = [
  { id: 1, name: 'Active' },
  { id: 2, name: 'Paused' },
  { id: 3, name: 'Delayed' },
  { id: 4, name: 'Canceled' },
]

export const NewSelect = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox onChange={setSelectedPerson} value={selectedPerson}>
      <ListboxButton>{selectedPerson.name}</ListboxButton>
      <ListboxOptions anchor={'bottom'}>
        {people.map(person => (
          <ListboxOption className={'data-[focus]:bg-blue-100'} key={person.id} value={person}>
            {person.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
