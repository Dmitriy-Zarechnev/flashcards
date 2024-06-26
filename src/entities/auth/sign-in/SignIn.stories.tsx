import type { Meta, StoryObj } from '@storybook/react'

import { FieldValues } from 'react-hook-form'

import { StorybookDecorator } from '@/services/StorybookDecorator'

import { SignIn } from './SignIn'

const meta = {
  argTypes: {},
  component: SignIn,
  decorators: [StorybookDecorator],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Entities/auth/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof SignIn>

export const SingInStory: Story = {
  args: {
    onSubmit: (data: FieldValues) => console.log(data),
  },
}
