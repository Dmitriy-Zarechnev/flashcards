import type { Meta, StoryObj } from '@storybook/react'

import { InitLoader } from './InitLoader'

const meta = {
  component: InitLoader,
  tags: ['autodocs'],
  title: '🟤Processes/layout/components/InitLoader',
} satisfies Meta<typeof InitLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
