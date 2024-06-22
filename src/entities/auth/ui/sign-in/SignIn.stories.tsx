import type { Meta, StoryObj } from '@storybook/react'

import { FieldValues } from 'react-hook-form'
import { BrowserRouter } from 'react-router-dom'

import { SignIn } from './'

const meta = {
  argTypes: {},
  component: SignIn,
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
  title: '🟡Auth/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof SignIn>

export const SingInStory: Story = {
  args: {
    onSubmit: (data: FieldValues) => console.log(data),
  },
}
