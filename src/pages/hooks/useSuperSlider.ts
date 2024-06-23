import { useState } from 'react'

import { useGetDeckMinMaxCardsQuery } from '@/services'

export const useSuperSlider = () => {
  // Запрос за данными о max/min количестве кард в колоде
  const { data: minMaxCardsData = { max: 30, min: 0 } } = useGetDeckMinMaxCardsQuery()

  // Дефолтные значения
  const defaultMax = Math.ceil(minMaxCardsData.max / 2)
  const defaultSliderValues = [0, defaultMax]

  // State для отображения на UI при изменении slider values
  const [sliderValues, setSliderValues] = useState<number[]>([
    defaultSliderValues[0],
    defaultSliderValues[1],
  ])

  // State для вызова перерисовки при изменении окончании изменения slider values на UI
  const [sliderFinalValues, setSliderFinalValues] = useState<number[]>([
    defaultSliderValues[0],
    defaultSliderValues[1],
  ])

  // Callback для изменения значений slider values прокидываем из Slider.Root
  const sliderValueChangeHandler = (value: number[]) => {
    setSliderValues(value)
  }

  // Callback для отправки значений slider values на сервер прокидываем из Slider.Root
  const sliderValueCommitHandler = (value: number[]) => {
    setSliderFinalValues(value)
  }

  return {
    defaultSliderValues,
    minMaxCardsData,
    setSliderFinalValues,
    setSliderValues,
    sliderFinalValues,
    sliderValueChangeHandler,
    sliderValueCommitHandler,
    sliderValues,
  }
}
