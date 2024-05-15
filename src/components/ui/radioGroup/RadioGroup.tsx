import { Typography } from '@/components/ui/typography'
import * as Radio from '@radix-ui/react-radio-group'

import s from './RadioGroup.module.scss'

type RadioGroupProps = {
  disabled?: boolean
}

export const RadioGroup = ({ disabled = false }: RadioGroupProps) => {
  return (
    <Radio.Root className={s.RadioRoot}>
      <div className={s.RadioItemWrapper}>
        <Radio.Item className={s.RadioItem} disabled={disabled} id={'item1'} value={'item 1'}>
          <Radio.Indicator className={s.RadioIndicator} />
        </Radio.Item>
        <Typography.Body2 htmlFor={'item1'}>RadioGroup 1</Typography.Body2>
      </div>

      <div className={s.RadioItemWrapper}>
        <Radio.Item className={s.RadioItem} disabled={disabled} id={'item2'} value={'item 2'}>
          <Radio.Indicator className={s.RadioIndicator} />
        </Radio.Item>
        <Typography.Body2 htmlFor={'item2'}>RadioGroup 2</Typography.Body2>
      </div>

      <div className={s.RadioItemWrapper}>
        <Radio.Item className={s.RadioItem} disabled={disabled} id={'item3'} value={'item 3'}>
          <Radio.Indicator className={s.RadioIndicator} />
        </Radio.Item>
        <Typography.Body2 htmlFor={'item3'}>RadioGroup 3</Typography.Body2>
      </div>
    </Radio.Root>
  )
}
