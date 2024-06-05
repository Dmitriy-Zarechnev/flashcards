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
    <div className={s.sliderWrapper}>
      <Typography.Body1 className={s.sliderText}>{valueLeft}</Typography.Body1>
      <Slider.Root
        className={s.sliderRoot}
        defaultValue={[valueLeft, valueRight]}
        minStepsBetweenThumbs={1}
        onValueChange={valueChange}
        value={[valueLeft, valueRight]}
      >
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>

        <Slider.Thumb className={s.sliderThumb} />
        <Slider.Thumb className={s.sliderThumb} />
      </Slider.Root>
      <Typography.Body1 className={s.sliderText}>{valueRight}</Typography.Body1>
    </div>
  )
}
