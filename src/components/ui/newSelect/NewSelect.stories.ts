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

export const NewSelectDefault: Story = {
  args: {},
}
