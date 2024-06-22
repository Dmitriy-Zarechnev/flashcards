import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter } from 'react-router-dom'

import { SignUpFormValues } from '@/entities'

import { SingUp } from './SingUp'

const meta = {
  argTypes: {},
  component: SingUp,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
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
    onSubmit: (data: SignUpFormValues) => console.log(data),
  },
}
