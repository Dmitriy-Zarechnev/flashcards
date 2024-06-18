import type { Meta, StoryObj } from '@storybook/react'

import { RouterDecorator } from '@/shared/utils/RouterDecorator'
import { fn } from '@storybook/test'

import { DecksTable } from './'

const meta = {
  argTypes: {},
  component: DecksTable,
  decorators: [RouterDecorator],
  tags: ['autodocs'],
  title: '🟢UI/Assembled/DecksTable',
} satisfies Meta<typeof DecksTable>

export default meta
type Story = StoryObj<typeof meta>

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

export const DefaultMyDecksTable: Story = {
  args: {
    authorId: 'author1',
    clickDeleteDeck: fn(),
    clickUpdateDeck: fn(),
    decks: decks,
    playFunction: fn(),
    sortTableOnClick: fn(),
    tableSort: '',
  },
}

export const DefaultYourDecksTable: Story = {
  args: {
    authorId: 'false',
    clickDeleteDeck: fn(),
    clickUpdateDeck: fn(),
    decks: decks,
    playFunction: fn(),
    sortTableOnClick: fn(),
    tableSort: '',
  },
}
