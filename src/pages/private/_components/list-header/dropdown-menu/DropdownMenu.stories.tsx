import type { Meta, StoryObj } from '@storybook/react'

import { StorybookDecorator } from '@/services/StorybookDecorator'

import { DropdownMenu } from './DropdownMenu'

const meta = {
  component: DropdownMenu,
  decorators: [StorybookDecorator],
  tags: ['autodocs'],
  title: '🟣Pages/private/components/list-header/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
