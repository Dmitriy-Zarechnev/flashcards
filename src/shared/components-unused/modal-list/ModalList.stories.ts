import type { Meta, StoryObj } from '@storybook/react'

import { ModalList } from './ModalList'

const meta = {
  argTypes: {},
  component: ModalList,
  tags: ['autodocs'],
  title: '🟢UI/unused/ModalList',
} satisfies Meta<typeof ModalList>

export default meta
type Story = StoryObj<typeof meta>

export const UnknownModalStory: Story = {
  args: {},
}
