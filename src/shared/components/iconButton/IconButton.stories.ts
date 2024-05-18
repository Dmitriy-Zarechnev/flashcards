import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from './'

const meta = {
  argTypes: {},
  component: IconButton,
  tags: ['autodocs'],
  title: 'Components/IconButton',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const IconButtonsStory: Story = {
  args: {
    iconId: 'eyeOutline',
  },
}
