import type { Meta, StoryObj } from '@storybook/react'

import { DeckFormValues, DeckModal } from '@/entities'
import { deckDefaultCover } from '@/shared'

const meta = {
  argTypes: {},
  component: DeckModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🔴Modal/DeckModal',
} satisfies Meta<typeof DeckModal>

export default meta
type Story = StoryObj<typeof DeckModal>

//========================================================================================

function onFulfilled(data: DeckFormValues) {
  return new Promise(res => {
    setTimeout(() => {
      console.log(data)
      alert('Data is submitted')
      res(data)
    }, 1500)
  })
}

function onRejected(data: DeckFormValues) {
  return new Promise((_, rej) => {
    setTimeout(() => {
      console.log(data)
      alert('ERROR')
      rej(new Error('Simulated rejection'))
    }, 1000)
  })
}

const DeckDataFromServer = {
  cover: deckDefaultCover,
  isPrivate: true,
  name: 'Name from server',
}

export const AddNewDeck: Story = {
  args: {
    onSubmit: onFulfilled,
    variant: 'add',
  },
}

export const EditDeck: Story = {
  args: {
    deckData: DeckDataFromServer,
    onSubmit: onFulfilled,
    variant: 'edit',
  },
}

export const Rejected: Story = {
  args: {
    onSubmit: onRejected,
    variant: 'add',
  },
}
