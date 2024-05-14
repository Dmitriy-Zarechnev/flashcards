import { useState } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './Select.module.scss'

type SelectCompProps = {
  disabled?: boolean
}

export const SelectComp = ({ disabled = false, ...rest }: SelectCompProps) => {
  const [arrow, setArrow] = useState(true)

  const changeArrowHandler = () => {
    setArrow(!arrow)
  }

  return (
    <>
      <div>Select-box</div>
      <Select.Root disabled={disabled} {...rest}>
        <Select.Trigger className={s.SelectTrigger} onClick={changeArrowHandler}>
          <Select.Value placeholder={'select-box'} />
          <Select.Icon>{arrow ? <ChevronDownIcon /> : <ChevronUpIcon />}</Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className={s.SelectContent}>
            <Select.Viewport className={s.SelectViewport}>
              <Select.Group className={s.SelectGroup}>
                <Select.Item className={s.SelectItem} value={'Banana'}>
                  <Select.ItemText className={s.SelectItemText}>Banana</Select.ItemText>
                </Select.Item>

                <Select.Item className={s.SelectItem} value={'Orange'}>
                  <Select.ItemText className={s.SelectItemText}>Orange</Select.ItemText>
                </Select.Item>

                <Select.Item className={s.SelectItem} value={'Apple'}>
                  <Select.ItemText className={s.SelectItemText}>Apple</Select.ItemText>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  )
}
