import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: '🟢UI/unused/modal-list/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const QuestionModalStory: Story = {
  args: {
    buttonTitle: 'Cover Me',
    title: 'Question',
  },
}

export const AnswerModalStory: Story = {
  args: {
    buttonTitle: 'Cover Me',
    title: 'Answer',
  },
}
