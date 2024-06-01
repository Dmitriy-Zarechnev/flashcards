import type { Meta, StoryObj } from '@storybook/react'

import { CardsTable } from './'

const meta = {
  argTypes: {},
  component: CardsTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟠Features/TableList',
} satisfies Meta<typeof CardsTable>

export default meta
type Story = StoryObj<typeof meta>

export const CardsTableExampleStory: Story = {}
