import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './index'

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
    label: 'Input',
  },
}
export const DisabledInput: Story = {
  args: {
    disabled: true,
    label: 'Input',
  },
}
export const ErrorInput: Story = {
  args: {
    error: 'error',
    label: 'Input',
  },
}

export const DefaultInputWithEye: Story = {
  args: {
    eyeImg: true,
    label: 'Input',
  },
}
export const DisabledInputWithEye: Story = {
  args: {
    disabled: true,
    eyeImg: true,
    label: 'Input',
  },
}
export const ErrorInputWithEye: Story = {
  args: {
    error: 'error',
    eyeImg: true,
    label: 'Input',
  },
}

export const DefaultInputWithSearch: Story = {
  args: {
    placeholder: 'Default Input With Search',
    searchImg: true,
  },
}
export const DisabledInputWithSearch: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled Input With Search',
    searchImg: true,
  },
}
export const ErrorInputWithSearch: Story = {
  args: {
    error: 'error',
    placeholder: 'Error Input With Search',
    searchImg: true,
  },
}

export const DefaultInputWithSearchActive: Story = {
  args: {
    closeImg: true,
    placeholder: 'Active Default Input With Search',
    searchImg: true,
  },
}
