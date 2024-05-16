import { Typography } from '@/components/ui/typography'
import { Select } from '@headlessui/react'

import s from '@/components/ui/select/Select.module.scss'

export const NewSelect = () => {
  return (
    <div>
      <Typography.Body2 className={s.SelectLabel}>Select Label</Typography.Body2>
      <Select className={s.SelectTrigger} data-focus data-hover>
        <option className={s.SelectItem} value={'active'}>
          Active
        </option>
        <option className={s.SelectItem} value={'paused'}>
          Paused
        </option>
        <option className={s.SelectItem} value={'delayed'}>
          Delayed
        </option>
        <option className={s.SelectItem} value={'canceled'}>
          Canceled
        </option>
      </Select>
    </div>
  )
}
