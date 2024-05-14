import { useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './Slider.module.scss'

export const SliderComponent = () => {
  //const [valueObj, setValueObj] = useState()

  return (
    <Slider.Root className={s.SliderRoot} defaultValue={[25, 75]}>
      <Slider.Track className={s.SliderTrack}>
        <Slider.Range className={s.SliderRange} />
      </Slider.Track>
      <Slider.Thumb className={s.SliderThumb} />
      <Slider.Thumb className={s.SliderThumb} />
    </Slider.Root>
  )
}
