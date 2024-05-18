import type { Meta, StoryObj } from '@storybook/react'

import { TableShort } from './'

const meta = {
  argTypes: {},
  component: TableShort,
  tags: ['autodocs'],
  title: 'Entities/Tables/TableShort',
} satisfies Meta<typeof TableShort>

export default meta
type Story = StoryObj<typeof meta>

export const TablesExampleStory: Story = {
  args: {},
}
