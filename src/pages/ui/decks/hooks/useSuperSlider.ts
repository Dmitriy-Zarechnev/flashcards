import { useState } from 'react'

export const useSuperSlider = () => {
  const [sliderValues, setSliderValues] = useState([0, 25])

  const [sliderMinCardsCount, sliderMaxCardsCount] = sliderValues

  const sliderValueChangeHandler = (value: number[]) => {
    setSliderValues(value)
  }

  return { setSliderValues, sliderMaxCardsCount, sliderMinCardsCount, sliderValueChangeHandler }
}
