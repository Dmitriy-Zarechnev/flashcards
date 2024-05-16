import type { Meta, StoryObj } from '@storybook/react'

import { IconButtons } from './'

const meta = {
  argTypes: {},
  component: IconButtons,
  tags: ['autodocs'],
  title: 'Components/IconButtons',
} satisfies Meta<typeof IconButtons>

export default meta
type Story = StoryObj<typeof meta>

export const IconButtonsStory: Story = {}
