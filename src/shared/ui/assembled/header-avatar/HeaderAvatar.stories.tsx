import type { Meta, StoryObj } from '@storybook/react'

import { HeaderAvatar } from './'

const meta = {
  argTypes: {},
  component: HeaderAvatar,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/HeaderAvatar',
} satisfies Meta<typeof HeaderAvatar>

export default meta
type Story = StoryObj<typeof HeaderAvatar>

const MyWrapper = () => {
  return <HeaderAvatar />
}

export const DefaultHeaderAvatar: Story = {
  render: () => <MyWrapper />,
}
