import { Typography } from '@/shared'
import * as Slider from '@radix-ui/react-slider'

import s from './Slider.module.scss'

type SliderComponentProps = {
  valueChange: (value: number[]) => void
  valueLeft: number
  valueRight: number
}

export const SliderComponent = ({ valueChange, valueLeft, valueRight }: SliderComponentProps) => {
  return (
    <div className={s.SliderWrapper}>
      <Typography.Body1 className={s.SliderText}>{valueLeft}</Typography.Body1>
      <Slider.Root
        className={s.SliderRoot}
        defaultValue={[valueLeft, valueRight]}
        minStepsBetweenThumbs={1}
        onValueChange={valueChange}
        value={[valueLeft, valueRight]}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>

        <Slider.Thumb className={s.SliderThumb} />
        <Slider.Thumb className={s.SliderThumb} />
      </Slider.Root>
      <Typography.Body1 className={s.SliderText}>{valueRight}</Typography.Body1>
    </div>
  )
}
