import type { Meta, StoryObj } from '@storybook/react'

import { FieldValues } from 'react-hook-form'

import { SingUp } from './SingUp'

const meta = {
  argTypes: {},
  component: SingUp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Auth/SingUp',
} satisfies Meta<typeof SingUp>

export default meta
type Story = StoryObj<typeof SingUp>

const Wrapper = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return <SingUp onSubmit={onSubmit} />
}

export const SingUpStory: Story = {
  render: () => <Wrapper />,
}
