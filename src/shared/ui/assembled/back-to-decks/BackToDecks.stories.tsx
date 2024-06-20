import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter } from 'react-router-dom'

import { BackToDecks } from './'

const meta = {
  argTypes: {},
  component: BackToDecks,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
  title: '🟢UI/Assembled/BackToDecks',
} satisfies Meta<typeof BackToDecks>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultBackToDecks: Story = {
  args: {
    iconId: 'arrowBackOutline',
    title: 'Back to Decks List',
  },
}
