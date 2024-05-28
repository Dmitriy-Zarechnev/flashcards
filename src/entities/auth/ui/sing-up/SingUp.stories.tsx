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

export const SingUpStory: Story = {
  args: {
    onSubmit: (data: FieldValues) => console.log(data),
  },
}
