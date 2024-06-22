import type { Meta, StoryObj } from '@storybook/react'

import { LineLoader } from '@/shared/ui/default/lineLoader/LineLoader'

const meta = {
  component: LineLoader,
  tags: ['autodocs'],
  title: '🟢UI/Default/LineLoader',
} satisfies Meta<typeof LineLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
