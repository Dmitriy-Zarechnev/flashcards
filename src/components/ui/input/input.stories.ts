import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
  args: {
    labelTitle: 'Input',
  },
}

export const DisabledInput: Story = {
  args: {
    disabled: true,
    labelTitle: 'Input',
  },
}

export const ErrorInput: Story = {
  args: {
    error: 'error',
    labelTitle: 'Input',
  },
}
