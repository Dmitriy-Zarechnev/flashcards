import type { Meta, StoryObj } from '@storybook/react'

import { CardsTable } from './'

const meta = {
  argTypes: {},
  component: CardsTable,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/CardsTable',
} satisfies Meta<typeof CardsTable>

export default meta
type Story = StoryObj<typeof CardsTable>
const mockCardsData = [
  {
    answer: 'Столица Франции - Париж.',
    answerImg: '',
    answerVideo: 'https://example.com/answer-video.mp4',
    created: '2024-06-02T12:00:00.000Z',
    deckId: 'deck-456',
    grade: 5,
    id: 'card-123',
    question: 'Морская',
    questionImg: '',
    questionVideo: 'https://example.com/question-video.mp4',
    shots: 3,
    updated: '2024-06-03T15:30:00.000Z',
    userId: 'user-789',
  },
  {
    answer: 'Столица Франции - Париж.',
    answerImg: '',
    answerVideo: 'https://example.com/answer-video.mp4',
    created: '2024-06-02T12:00:00.000Z',
    deckId: 'deck-456',
    grade: 5,
    id: 'card-123',
    question: 'Самая высокая гора в мире - Эверест.',
    questionImg: '',
    questionVideo: 'https://example.com/question-video.mp4',
    shots: 3,
    updated: '2024-06-03T15:30:00.000Z',
    userId: 'user-789',
  },
  {
    answer: 'Самая высокая гора в мире - Эверест.',
    answerImg: '',
    answerVideo: '',
    created: '2024-04-15T09:20:00.000Z',
    deckId: 'deck-789',
    grade: 4,
    id: 'card-456',
    question: 'Какая гора является самой высокой в мире?',
    questionImg: '',
    questionVideo: '',
    shots: 5,
    updated: '2024-04-18T11:35:00.000Z',
    userId: 'user-321',
  },
]

const MyWrapper = () => {
  return (
    <CardsTable cards={mockCardsData} editFunction={() => {}} trashFunction={() => {}} userId />
  )
}

export const DefaultMyCardsTable: Story = {
  render: () => <MyWrapper />,
}

const YourWrapper = () => {
  return (
    <CardsTable
      cards={mockCardsData}
      editFunction={() => {}}
      trashFunction={() => {}}
      userId={false}
    />
  )
}

export const DefaultYourCardsTable: Story = {
  render: () => <YourWrapper />,
}
