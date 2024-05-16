import { Typography } from '@/components/ui/typography'
import * as Radio from '@radix-ui/react-radio-group'

import s from './RadioGroup.module.scss'

type Options = {
  id: string
  label: string
  value: string
}

type RadioGroupProps = {
  disabled?: boolean
}

export const RadioGroup = ({ disabled = false }: RadioGroupProps) => {
  const options: Options[] = [
    { id: '1', label: 'RadioGroup 1', value: 'item 1' },
    { id: '2', label: 'RadioGroup 2', value: 'item 2' },
    { id: '3', label: 'RadioGroup 3', value: 'item 3' },
  ]

  return (
    <Radio.Root className={s.RadioRoot}>
      {options.map(el => {
        return (
          <div className={s.RadioItemWrapper} key={el.id}>
            <Radio.Item className={s.RadioItem} disabled={disabled} id={el.id} value={el.value}>
              <Radio.Indicator className={s.RadioIndicator} />
            </Radio.Item>
            <Typography.Body2 as={'label'} className={s.RadioLabel} htmlFor={el.id}>
              {el.label}
            </Typography.Body2>
          </div>
        )
      })}
    </Radio.Root>
  )
}
