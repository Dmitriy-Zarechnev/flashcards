import type { Meta, StoryObj } from '@storybook/react'

import { FieldValues } from 'react-hook-form'

import { SignIn } from './'

const meta = {
  argTypes: {},
  component: SignIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Auth/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof SignIn>

export const SingUpStory: Story = {
  args: {
    onSubmit: (data: FieldValues) => console.log(data),
  },
}
