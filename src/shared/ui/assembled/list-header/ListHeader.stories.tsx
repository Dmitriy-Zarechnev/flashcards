import type { Meta, StoryObj } from '@storybook/react'

import { ListHeader } from './index'

const meta = {
  argTypes: {},
  component: ListHeader,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/ListHeader',
} satisfies Meta<typeof ListHeader>

export default meta
type Story = StoryObj<typeof ListHeader>

const MyWrapper = () => {
  return <ListHeader buttonTitle={'Add new card'} title={'My Deck'} userId />
}

export const DefaultMyListHeader: Story = {
  render: () => <MyWrapper />,
}

const FriendWrapper = () => {
  return <ListHeader buttonTitle={'Learn to Pack'} title={'Friend’s Deck'} userId={false} />
}

export const DefaultFriendListHeader: Story = {
  render: () => <FriendWrapper />,
}

const DeckWrapper = () => {
  return <ListHeader buttonTitle={'Add new deck'} title={'Decks List'} />
}

export const DefaultDeckListHeader: Story = {
  render: () => <DeckWrapper />,
}
