import { useState } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Slider from '@radix-ui/react-slider'

import s from './Slider.module.scss'

export const SliderComponent = () => {
  const [valueLeft, setValueLeft] = useState(25)
  const [valueRight, setValueRight] = useState(75)

  const valueChangeHandler = (value: number[]) => {
    setValueLeft(value[0])
    setValueRight(value[1])
  }

  return (
    <div className={s.SliderWrapper}>
      <Typography.Body1 className={s.SliderText}>{valueLeft}</Typography.Body1>
      <Slider.Root
        className={s.SliderRoot}
        defaultValue={[valueLeft, valueRight]}
        minStepsBetweenThumbs={1}
        onValueChange={valueChangeHandler}
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
