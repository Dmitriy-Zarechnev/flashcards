import type { Meta, StoryObj } from '@storybook/react'

import { ModalList } from './'

const meta = {
  argTypes: {},
  component: ModalList,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/ModalList',
} satisfies Meta<typeof ModalList>

export default meta
type Story = StoryObj<typeof meta>

export const UnknownModalStory: Story = {
  args: {},
}
