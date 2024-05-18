import type { Meta, StoryObj } from '@storybook/react'

import { Rating } from './'

const meta = {
  argTypes: {},
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const RatingStoryDefault: Story = {}

export const RatingStory1: Story = {
  args: {
    rating: 1,
  },
}

export const RatingStory2: Story = {
  args: {
    rating: 2,
  },
}

export const RatingStory3: Story = {
  args: {
    rating: 3,
  },
}

export const RatingStory4: Story = {
  args: {
    rating: 4,
  },
}

export const RatingStory5: Story = {
  args: {
    rating: 5,
  },
}
