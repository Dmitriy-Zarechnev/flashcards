import type { Meta, StoryObj } from '@storybook/react'

import { NewSelect } from './'

const meta = {
  argTypes: {},
  component: NewSelect,
  tags: ['autodocs'],
  title: 'Components/NewSelect',
} satisfies Meta<typeof NewSelect>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { id: 1, value: 'Active' },
  { id: 2, value: 'Paused' },
  { id: 3, value: 'Delayed' },
  { id: 4, value: 'Canceled' },
]

export const NewSelectDefault: Story = {
  args: {
    options,
    selectTitle: 'Select Title',
  },
}

export const NewSelectFullWidth: Story = {
  args: {
    fullWidth: true,
    options,
    selectTitle: 'Select Title',
  },
}

export const NewSelectDisabled: Story = {
  args: {
    disabled: true,
    options,
    selectTitle: 'Disabled Select Title',
  },
}

export const NewSelectFullWidthDisabled: Story = {
  args: {
    disabled: true,
    fullWidth: true,
    options,
    selectTitle: 'Select Title',
  },
}
