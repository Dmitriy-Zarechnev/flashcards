import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './Select.module.scss'

type OptionItems = {
  id: number
  text: string
  value: string
}

type SelectCompProps = {
  disabled?: boolean
}

export const SelectComp = ({ disabled = false, ...rest }: SelectCompProps) => {
  const optionItems: OptionItems[] = [
    { id: 1, text: 'Orange', value: 'orange' },
    { id: 2, text: 'Apple', value: 'apple' },
    { id: 3, text: 'Banana', value: 'banana' },
  ]

  return (
    <>
      <div>Select-box</div>
      <Select.Root disabled={disabled} {...rest}>
        <Select.Trigger className={s.SelectTrigger}>
          <Select.Value placeholder={'default text'} />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className={s.SelectContent}>
            <Select.Viewport className={s.SelectViewport}>
              <Select.Group className={s.SelectGroup}>
                {optionItems.map(el => {
                  return (
                    <Select.Item className={s.SelectItem} key={el.id} value={el.value}>
                      <Select.ItemText className={s.SelectItemText}>{el.text}</Select.ItemText>
                    </Select.Item>
                  )
                })}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  )
}
