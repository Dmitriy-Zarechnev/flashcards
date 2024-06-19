import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/shared'
import * as Slider from '@radix-ui/react-slider'

import s from './Slider.module.scss'

type SliderComponentProps = {} & ComponentPropsWithoutRef<typeof Slider.Root>

export const SliderComponent = ({
  max,
  min,
  onValueChange,
  value,
  ...rest
}: SliderComponentProps) => {
  return (
    <div className={s.sliderWrapper}>
      <Typography.Body1 className={s.sliderText}>{value?.[0]}</Typography.Body1>
      <Slider.Root
        className={s.sliderRoot}
        defaultValue={[0, 25]}
        max={max}
        min={min}
        minStepsBetweenThumbs={1}
        onValueChange={onValueChange}
        value={value}
        {...rest}
      >
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>

        <Slider.Thumb className={s.sliderThumb} />
        <Slider.Thumb className={s.sliderThumb} />
      </Slider.Root>
      <Typography.Body1 className={s.sliderText}>{value?.[1]}</Typography.Body1>
    </div>
  )
}
