import { useState } from 'react'

import { useGetDeckMinMaxCardsQuery } from '@/services'

export const useSuperSlider = () => {
  const { data: minMaxCardsData = { max: 30, min: 0 } } = useGetDeckMinMaxCardsQuery()

  const [sliderValues, setSliderValues] = useState([0, 25])

  const sliderValueChangeHandler = (value: number[]) => {
    setSliderValues(value)
  }

  return {
    minMaxCardsData,
    setSliderValues,
    sliderValueChangeHandler,
    sliderValues,
  }
}
