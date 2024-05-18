import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Entities/Modal/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const QuestionModalStory: Story = {
  args: {
    title: 'Question',
  },
}

export const AnswerModalStory: Story = {
  args: {
    title: 'Answer',
  },
}
