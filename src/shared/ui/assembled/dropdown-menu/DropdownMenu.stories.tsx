import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from './index'

const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
