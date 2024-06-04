import type { Meta, StoryObj } from '@storybook/react'

import { DecksTable } from './'

const meta = {
  argTypes: {},
  component: DecksTable,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/DecksTable',
} satisfies Meta<typeof DecksTable>

export default meta
type Story = StoryObj<typeof DecksTable>

const decks = [
  {
    author: {
      id: 'author1',
      name: 'John Doe',
    },
    cardsCount: 42,
    cover: '',
    created: '2024-04-01T12:00:00.000Z',
    id: 'deck1',
    isPrivate: false,
    name: 'Example Deck',
    updated: '2024-04-02T12:00:00.000Z',
    userId: 'user1',
  },
  {
    author: {
      id: 'author1',
      name: 'John Doe',
    },
    cardsCount: 42,
    cover: '',
    created: '2024-04-01T12:00:00.000Z',
    id: 'deck1',
    isPrivate: false,
    name: 'Example Deck',
    updated: '2024-04-02T12:00:00.000Z',
    userId: 'user1',
  },
]

const MyWrapper = () => {
  return (
    <DecksTable
      clickDeleteDeck={() => {}}
      clickUpdateDeck={() => {}}
      decks={decks}
      playFunction={() => {}}
      userId
    />
  )
}

export const DefaultMyDecksTable: Story = {
  render: () => <MyWrapper />,
}

const YourWrapper = () => {
  return (
    <DecksTable
      clickDeleteDeck={() => {}}
      clickUpdateDeck={() => {}}
      decks={decks}
      playFunction={() => {}}
      userId={false}
    />
  )
}

export const DefaultYourDecksTable: Story = {
  render: () => <YourWrapper />,
}
