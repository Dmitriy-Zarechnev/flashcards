import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from '@/components/ui/dropdownMenu/DropdownMenu'

const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
