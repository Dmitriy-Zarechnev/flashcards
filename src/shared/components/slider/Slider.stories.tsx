import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { SliderComponent } from './'

const meta = {
  argTypes: {},
  component: SliderComponent,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof SliderComponent>

export default meta
type Story = StoryObj<typeof SliderComponent>

const Wrapper = () => {
  const [valueLeft, setValueLeft] = useState(25)
  const [valueRight, setValueRight] = useState(75)

  const valueChangeHandler = (value: number[]) => {
    setValueLeft(value[0])
    setValueRight(value[1])
  }

  return (
    <SliderComponent
      valueChangeHandler={valueChangeHandler}
      valueLeft={valueLeft}
      valueRight={valueRight}
    />
  )
}

export const DefaultSlider: Story = {
  render: () => <Wrapper />,
}
