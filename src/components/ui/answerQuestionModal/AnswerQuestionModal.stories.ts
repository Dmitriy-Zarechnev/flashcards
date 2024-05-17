import type { Meta, StoryObj } from '@storybook/react'

import { AnswerQuestionModal } from './'

const meta = {
  argTypes: {},
  component: AnswerQuestionModal,
  tags: ['autodocs'],
  title: 'Components/AnswerQuestionModal',
} satisfies Meta<typeof AnswerQuestionModal>

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
