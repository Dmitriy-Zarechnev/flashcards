import type { Meta, StoryObj } from '@storybook/react'

import { CardFormValues, CardModal } from '@/entities'

const meta = {
  argTypes: {},
  component: CardModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🔴Modal/CardModal',
} satisfies Meta<typeof CardModal>

export default meta
type Story = StoryObj<typeof CardModal>

//========================================================================================

function onFulfilled(data: CardFormValues) {
  return new Promise(res => {
    setTimeout(() => {
      alert('Data is submitted')
      res(data)
    }, 1500)
  })
}

function onRejected(data: CardFormValues) {
  return new Promise((_, rej) => {
    setTimeout(() => {
      console.log(data)
      alert('ERROR')
      rej(new Error('Simulated rejection'))
    }, 1000)
  })
}

const dataFromServer = {
  answer: 'Answer',
  question: 'Question',
}

export const AddNewCard: Story = {
  args: {
    onSubmit: onFulfilled,
    variant: 'add',
  },
}

export const EditCard: Story = {
  args: {
    cardData: dataFromServer,
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
