import type { Meta, StoryObj } from '@storybook/react'

import { ProviderBrowserDecorator } from '@/services/decorators'

import { DropdownMenu } from './index'

const meta = {
  component: DropdownMenu,
  decorators: [ProviderBrowserDecorator],
  tags: ['autodocs'],
  title: '🟢UI/Assembled/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
