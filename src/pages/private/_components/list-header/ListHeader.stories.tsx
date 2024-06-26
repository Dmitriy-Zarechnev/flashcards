import type { Meta, StoryObj } from '@storybook/react'

import { StorybookDecorator } from '@/services/StorybookDecorator'

import { ListHeader } from './index'

const meta = {
  argTypes: {},
  component: ListHeader,
  decorators: [StorybookDecorator],
  tags: ['autodocs'],
  title: '🟣Pages/private/components/ListHeader',
} satisfies Meta<typeof ListHeader>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultMyListHeader: Story = {
  args: {
    // buttonTitle: 'Add new card',
    buttonType: 'Deck',
    title: 'My Deck',
    userId: true,
  },
}

export const DefaultFriendListHeader: Story = {
  args: {
    // buttonTitle: 'Learn to Pack',
    buttonType: 'Deck',
    title: 'Friend’s Deck',
    userId: false,
  },
}
