import type { Meta, StoryObj } from '@storybook/react'

import { SearchInput } from './index'

const meta = {
  argTypes: {},
  component: SearchInput,
  tags: ['autodocs'],
  title: '🟢UI/Default/SearchInput',
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSearchInput: Story = {
  args: {},
}

export const DisabledSearchInput: Story = {
  args: {
    disabled: true,
  },
}

export const ErrorSearchInput: Story = {
  args: {
    disabled: false,
    error: 'Hello Error',
  },
}
