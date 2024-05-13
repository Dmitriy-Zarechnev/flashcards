import { useState } from 'react'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './Select.module.scss'

export const SelectComp = () => {
  // Создаем состояние для хранения выбранного значения
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <Select.Root onValueChange={setSelectedValue} value={selectedValue}>
      <Select.Trigger className={s.SelectTrigger}>
        <Select.Value placeholder={'Select-box'} />
        <Select.Icon className={'SelectIcon'}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      {/*<Select.Portal>*/}
      <Select.Content className={'SelectContent'}>
        {/*<Select.ScrollUpButton className={'SelectScrollButton'}>*/}
        {/*  <ChevronUpIcon />*/}
        {/*</Select.ScrollUpButton>*/}
        <Select.Viewport className={'SelectViewport'}>
          <Select.Group>
            {/*<Select.Label>Здесь Label должен быть</Select.Label>*/}
            <Select.Item value={'apple'}>Apple</Select.Item>
            <Select.Item value={'banana'}>Banana</Select.Item>
            <Select.Item value={'blueberry'}>Blueberry</Select.Item>
            <Select.Item value={'grapes'}>Grapes</Select.Item>
            <Select.Item value={'pineapple'}>Pineapple</Select.Item>
          </Select.Group>
        </Select.Viewport>
        {/*<Select.ScrollDownButton className={'SelectScrollButton'}>*/}
        {/*  <ChevronDownIcon />*/}
        {/*</Select.ScrollDownButton>*/}
      </Select.Content>
      {/*</Select.Portal>*/}
    </Select.Root>
  )
}

// const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
//   return (
//     <Select.Item {...props} ref={forwardedRef}>
//       <Select.ItemText>{children}</Select.ItemText>
//       <Select.ItemIndicator className={'SelectItemIndicator'}>
//         <CheckIcon />
//       </Select.ItemIndicator>
//     </Select.Item>
//   )
// })
