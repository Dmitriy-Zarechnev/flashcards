import type { Meta, StoryObj } from '@storybook/react'

import { UnknownModal } from './'

const meta = {
  argTypes: {},
  component: UnknownModal,
  tags: ['autodocs'],
  title: 'Components/UnknownModal',
} satisfies Meta<typeof UnknownModal>

export default meta
type Story = StoryObj<typeof meta>

export const UknownModalStory: Story = {
  args: {},
}
