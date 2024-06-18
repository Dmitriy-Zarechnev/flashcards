import type { Meta, StoryObj } from '@storybook/react'

import { ListHeader } from './'

const meta = {
  argTypes: {},
  component: ListHeader,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/ListHeader',
} satisfies Meta<typeof ListHeader>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultMyListHeader: Story = {
  args: {
    buttonTitle: 'Add new card',
    title: 'My Deck',
    userId: true,
  },
}

export const DefaultFriendListHeader: Story = {
  args: {
    buttonTitle: 'Learn to Pack',
    title: 'Friend’s Deck',
    userId: false,
  },
}
