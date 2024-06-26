import type { Meta, StoryObj } from '@storybook/react'

import { CardDeleteModal } from '@/entities'

const meta = {
  argTypes: {},
  component: CardDeleteModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Entities/modal/CardDeleteModal',
} satisfies Meta<typeof CardDeleteModal>

export default meta
type Story = StoryObj<typeof CardDeleteModal>

//========================================================================================

function onFulfilled() {
  return new Promise(res => {
    setTimeout(() => {
      alert('DELETED')
      res('123')
    }, 1500)
  })
}

function onRejected() {
  return new Promise((_, rej) => {
    setTimeout(() => {
      alert('SOMETHING WRONG')
      rej(new Error('Simulated rejection'))
    }, 1000)
  })
}

export const Fulfilled: Story = {
  args: {
    cardName: 'CardName',
    deleteCb: onFulfilled,
  },
}

export const Rejected: Story = {
  args: {
    cardName: 'CardName',
    deleteCb: onRejected,
  },
}
