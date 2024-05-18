import type { Meta, StoryObj } from '@storybook/react'

import { ModalList } from './'

const meta = {
  argTypes: {},
  component: ModalList,
  tags: ['autodocs'],
  title: 'Entities/Modal/ModalList',
} satisfies Meta<typeof ModalList>

export default meta
type Story = StoryObj<typeof meta>

export const UknownModalStory: Story = {
  args: {},
}
